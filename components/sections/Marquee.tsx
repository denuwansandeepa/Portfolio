"use client";

import { allSkillsList } from "@/data/skills";
import { Sparkles } from "lucide-react";

export default function Marquee() {
  const marqueeItems = [
    ...allSkillsList,
    "Full-Stack Architecture",
    "Flutter Mobile",
    "Three.js 3D",
    "Core Banking Systems",
    "Next.js 14",
    "TypeScript",
  ];

  return (
    <div className="relative w-full py-6 overflow-hidden border-y border-white/5 bg-surface/30 backdrop-blur-md">
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-8 items-center">
        {marqueeItems.concat(marqueeItems).map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 text-sm font-mono text-slate-400 font-medium px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 whitespace-nowrap hover:text-white hover:border-primary-500/40 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

