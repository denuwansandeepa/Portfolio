"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: "violet" | "cyan" | "none";
}

export default function GlassCard({
  children,
  className,
  tilt = false,
  glow = "none",
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
  };

  const glowStyles = {
    violet: "group-hover:border-primary-500/50 hover:shadow-glow-violet",
    cyan: "group-hover:border-accent-cyan/50 hover:shadow-glow-cyan",
    none: "hover:border-white/20",
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative rounded-2xl border border-white/10 dark:border-white/[0.08] bg-surface/60 dark:bg-slate-900/50 backdrop-blur-xl transition-all duration-300 overflow-hidden interactive-card",
        glowStyles[glow],
        className
      )}
    >
      {/* Subtle radial spotlight follow cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

