"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Award, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientBadge from "@/components/ui/GradientBadge";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Engineering Odyssey"
          title="Bridging Architectural Rigor with Creative Expression"
          gradientWord="Creative Expression"
          description="Crafting high-scale fintech systems, mobile ecosystems, and web experiences that delight users and drive real business outcomes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Profile & Status Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <GlassCard glow="violet" className="p-3 sm:p-4">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10 group">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.displayName}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Floating Inset Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-display font-bold text-white">
                        {profile.displayName}
                      </h4>
                      <p className="text-xs text-primary-300 font-mono">
                        Associate Software Engineer
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Quick Context Chips */}
            <div className="grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-surface/50 border border-white/5 flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-accent-cyan shrink-0" />
                <span className="text-slate-300 truncate">{profile.location.label}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface/50 border border-white/5 flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-primary-400 shrink-0" />
                <span className="text-slate-300 truncate">SLIATE HNDIT</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Bento Metric Tiles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Story Paragraphs */}
            <div className="space-y-4 text-slate-300 dark:text-slate-400 text-base leading-relaxed font-sans">
              <p>
                I am a software engineer and undergraduate based in <strong className="text-white font-medium">Bandarawela, Sri Lanka</strong>, pursuing my Software Engineering qualification (HNDIT / NVQ Level 6) at SLIATE.
              </p>
              <p>
                Over the past <strong className="text-white font-medium">1 year and 9 months</strong>, I have worked across mission-critical domains: from contributing to an enterprise-grade <strong className="text-primary-300 font-medium">core banking platform</strong> at Dearo IT Solutions for 15 months, to architecting modern web portals and mobile apps as an <strong className="text-accent-cyan font-medium">Associate Software Engineer at Bright Solutions</strong>.
              </p>
              <p>
                My work balances stringent architectural resilience (ACID compliance, clean data modeling, secure REST APIs) with modern frontend artistry (Next.js 14, Flutter, fluid Three.js shaders, and Framer Motion micro-interactions).
              </p>
            </div>

            {/* Highlighted Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.stats.map((stat, idx) => (
                <GlassCard key={idx} glow="cyan" className="p-4 sm:p-5 text-center">
                  <div className="font-display font-bold text-2xl sm:text-3xl text-gradient-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-mono text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Core Values / What Sets Me Apart */}
            <div className="p-5 rounded-2xl bg-surface/40 border border-white/5 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary-400 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Pillars
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Production-tested Full-Stack architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>60fps smooth cross-platform Flutter apps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Enterprise fintech & core banking rigor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Awwwards-inspired creative UI/UX design</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

