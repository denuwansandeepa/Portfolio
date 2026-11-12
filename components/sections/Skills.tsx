"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Smartphone, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientBadge from "@/components/ui/GradientBadge";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Code2 className="w-5 h-5 text-primary-400" />,
  Server: <Server className="w-5 h-5 text-accent-cyan" />,
  Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
  Wrench: <Wrench className="w-5 h-5 text-fuchsia-400" />,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950/30">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Technical Repertoire"
          title="Engineered with Precision & Modern Tools"
          gradientWord="Precision"
          description="A specialized stack honed across enterprise core banking systems, client-facing venture portals, and production mobile applications."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                  isSelected
                    ? "bg-primary-600 text-white shadow-glow-violet border border-primary-400/50"
                    : "bg-surface/50 text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Categories Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => (
              <motion.div
                key={category.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <GlassCard glow="violet" className="p-6 sm:p-8 h-full flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                          {iconMap[category.icon] || <Sparkles className="w-5 h-5 text-primary-400" />}
                        </div>
                        <h3 className="font-display font-bold text-lg text-white">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 mb-6 font-sans">
                      {category.description}
                    </p>

                    {/* Skill items */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all group/item"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-display font-semibold text-sm text-slate-200 group-hover/item:text-primary-300 transition-colors">
                                {skill.name}
                              </span>
                              {skill.highlight && (
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-primary-500/20 text-primary-300 border border-primary-500/30">
                                  Core
                                </span>
                              )}
                            </div>
                            <span className="text-xs font-mono text-slate-400">
                              {skill.experience}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-400 font-sans mb-2">
                            {skill.description}
                          </p>

                          {/* Progress bar */}
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-primary-500 to-accent-cyan rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

