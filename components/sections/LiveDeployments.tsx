"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Lock,
  Smartphone,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { liveDeployments } from "@/data/liveDeployments";

export default function LiveDeployments() {
  const webDeployments = liveDeployments.filter((d) => d.type === "web");
  const playStoreDeployment = liveDeployments.find(
    (d) => d.type === "playstore"
  );

  return (
    <div id="live-links" className="mb-24">
      {/* Header Banner */}
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-10 overflow-hidden shadow-2xl">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent-cyan/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Top Bar */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>LIVE IN PRODUCTION • 5 VERIFIED PUBLIC LINKS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
              Live Production Domains &{" "}
              <span className="bg-gradient-to-r from-primary-400 via-accent-cyan to-emerald-400 bg-clip-text text-transparent">
                Play Store Releases
              </span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl font-sans">
              Click any card below to directly visit the live corporate websites
              and official Google Play Store mobile application deployed in
              production.
            </p>
          </div>

          {/* Quick Pill Directory */}
          <div className="flex flex-wrap items-center gap-2">
            {liveDeployments.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-white/5 hover:bg-primary-500/20 text-slate-200 hover:text-white border border-white/10 hover:border-primary-400/50 transition-all duration-300"
              >
                {item.type === "playstore" ? (
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Globe className="w-3.5 h-3.5 text-accent-cyan" />
                )}
                <span>
                  {item.type === "playstore" ? "Google Play App" : item.domain}
                </span>
                <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* 4 Live Domain Browser Cards */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {webDeployments.map((site, index) => (
            <motion.a
              key={site.id}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 hover:border-accent-cyan/50 bg-slate-950/80 overflow-hidden transition-all duration-300 shadow-lg hover:shadow-glow-cyan"
            >
              {/* Subtle Gradient Backdrop */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${site.accentColor} opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Interactive Browser Top Bar */}
              <div className="relative z-10 flex items-center justify-between gap-3 px-4 py-3 bg-slate-900/90 border-b border-white/10">
                {/* Traffic Lights */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>

                {/* URL Address Pill */}
                <div className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/90 border border-white/10 group-hover:border-accent-cyan/40 text-xs font-mono text-slate-200 truncate transition-colors">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-400 hidden sm:inline">
                    https://
                  </span>
                  <span className="text-white font-semibold truncate">
                    {site.domain}
                  </span>
                </div>

                {/* Live Status */}
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-300 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-accent-cyan">
                      {site.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Domain
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-accent-cyan transition-colors">
                    {site.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                    {site.subtitle}
                  </p>
                </div>

                {/* Tech Stack + Visit CTA */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {site.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-cyan text-white text-xs font-semibold shadow-md group-hover:shadow-glow-violet transition-all">
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Featured Google Play Store Release Card */}
        {playStoreDeployment && (
          <motion.a
            href={playStoreDeployment.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -3 }}
            className="group relative z-10 block rounded-2xl border border-emerald-500/30 hover:border-emerald-400/70 bg-slate-950/90 p-6 sm:p-8 overflow-hidden transition-all duration-300 shadow-xl"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${playStoreDeployment.accentColor} opacity-50 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none`}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                {/* Google Play Styled Icon Box */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-primary-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 shadow-lg">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-emerald-400 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-semibold">
                      <Sparkles className="w-3 h-3" />
                      GOOGLE PLAY STORE OFFICIAL RELEASE
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      id: com.dearodigital.dearo_frontend
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {playStoreDeployment.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 max-w-2xl font-sans leading-relaxed">
                    {playStoreDeployment.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mt-3">
                    {playStoreDeployment.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right CTA Button */}
              <div className="flex items-center lg:justify-end shrink-0">
                <div className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-accent-cyan text-slate-950 font-display font-bold text-xs sm:text-sm shadow-lg group-hover:scale-105 transition-transform">
                  <span>View on Google Play Store</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>
        )}
      </div>
    </div>
  );
}

