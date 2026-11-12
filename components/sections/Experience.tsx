"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Building2, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientBadge from "@/components/ui/GradientBadge";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden bg-slate-950/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Career Trajectory"
          title="Proven Experience Across Enterprise & Client Engineering"
          gradientWord="Enterprise & Client"
          description="From intern to core banking contributor, and now architecting modern digital systems at Bright Solutions."
        />

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker Node */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex items-center justify-center">
                {item.isCurrent ? (
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-[#06080d] items-center justify-center text-[10px] text-white font-bold" />
                  </span>
                ) : (
                  <div className="w-4 h-4 rounded-full bg-slate-800 border-2 border-primary-500/50" />
                )}
              </div>

              {/* Card Content */}
              <GlassCard glow={item.isCurrent ? "violet" : "none"} className="p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {item.isCurrent && (
                        <GradientBadge variant="emerald" pulsing>
                          Current Role
                        </GradientBadge>
                      )}
                      <span className="text-xs font-mono text-slate-400">
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 text-primary-300 font-medium">
                        {item.type === "Education" ? (
                          <GraduationCap className="w-3.5 h-3.5" />
                        ) : (
                          <Building2 className="w-3.5 h-3.5" />
                        )}
                        {item.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1 text-accent-cyan">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {item.summary}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Contributions & Impact:
                  </h4>
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-mono text-slate-500 mr-2">Technologies:</span>
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

