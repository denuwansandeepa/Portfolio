"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, FileDown, Terminal } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import GradientBadge from "@/components/ui/GradientBadge";
import { profile } from "@/data/profile";

// Lazy load the Three.js 3D canvas with ssr: false
const SceneContainer = dynamic(
  () => import("@/components/3d/SceneContainer"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-primary-600/10 blur-3xl animate-pulse" />
      </div>
    ),
  }
);

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16">
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 opacity-70 dark:opacity-85 pointer-events-auto">
        <SceneContainer />
      </div>

      {/* Ambient Radial Gradient Overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-600/15 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none z-[1]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Profile Avatar Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-5 relative"
        >
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-primary-500 via-accent-cyan to-purple-600 shadow-glow-violet group cursor-pointer">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-950">
              <Image
                src={profile.avatarUrl}
                alt={profile.displayName}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>
            {/* Live Indicator Dot */}
            <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-slate-950 flex items-center justify-center p-0.5">
              <span className="w-full h-full rounded-full bg-emerald-500 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              </span>
            </span>
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 dark:border-white/[0.08] bg-surface/50 dark:bg-slate-900/60 backdrop-blur-xl shadow-glass-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-slate-300">
              Associate Software Engineer @ Bright Solutions
            </span>
            <span className="text-white/20">|</span>
            <span className="text-xs font-mono text-accent-cyan flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        {/* Kinetic Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-2 mb-6"
        >
          <p className="font-mono text-sm tracking-widest text-primary-400 uppercase">
            Hi there, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tight text-foreground leading-[1.05]">
            Denuwan{" "}
            <span className="text-gradient-primary">Sandeepa</span>
          </h1>
        </motion.div>

        {/* Rotating Roles Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 dark:bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <Terminal className="w-4 h-4 text-primary-400" />
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-sm sm:text-base font-mono font-medium text-slate-200"
            >
              {profile.titles[roleIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Bio Excerpt */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl text-base sm:text-lg text-slate-300 dark:text-slate-400 font-sans leading-relaxed mb-10"
        >
          Engineering resilient enterprise core platforms, high-performance mobile apps with Flutter, and immersive Next.js digital experiences with Awwwards-level polish.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary-600 via-purple-600 to-accent-cyan text-white font-medium text-sm shadow-glow-violet hover:opacity-95 transition-all"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 dark:border-white/10 bg-surface/50 dark:bg-slate-900/60 hover:bg-white/10 text-foreground font-medium text-sm backdrop-blur-xl transition-all"
          >
            <span>Let&apos;s Connect</span>
          </MagneticButton>

          <MagneticButton
            href={profile.cvUrl}
            download="CV-Denuwan-Sandeepa.pdf"
            className="flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 dark:border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium text-sm transition-all"
          >
            <FileDown className="w-4 h-4 text-primary-400" />
            <span>CV</span>
          </MagneticButton>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[11px] tracking-widest text-slate-500 uppercase">
            Scroll to discover
          </span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

