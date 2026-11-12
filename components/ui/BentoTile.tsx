"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoTileProps {
  children: React.ReactNode;
  className?: string;
  span?: string;
}

export default function BentoTile({ children, className, span = "" }: BentoTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl p-6 sm:p-8 bg-surface/50 dark:bg-slate-900/40 border border-white/10 dark:border-white/[0.08] backdrop-blur-xl shadow-glass-sm hover:border-primary-500/30 transition-all duration-300 group overflow-hidden",
        span,
        className
      )}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-colors pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

