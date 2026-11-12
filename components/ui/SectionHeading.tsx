"use client";

import { motion } from "framer-motion";
import GradientBadge from "./GradientBadge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  gradientWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3"
      >
        <GradientBadge variant="violet">{eyebrow}</GradientBadge>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground leading-[1.15]"
      >
        {gradientWord ? (
          <>
            {title.replace(gradientWord, "")}
            <span className="text-gradient-primary">{gradientWord}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-sans"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

