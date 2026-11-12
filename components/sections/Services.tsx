"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Layers, Rocket, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-primary-400" />,
  Smartphone: <Smartphone className="w-6 h-6 text-accent-cyan" />,
  Layers: <Layers className="w-6 h-6 text-purple-400" />,
  Rocket: <Rocket className="w-6 h-6 text-emerald-400" />,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          eyebrow="Solutions & Offerings"
          title="End-to-End Capabilities from Conception to Deployment"
          gradientWord="End-to-End"
          description="Providing specialized engineering services tailored for high-growth startups, enterprise ventures, and forward-thinking brands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glow="cyan" className="p-6 sm:p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      {iconMap[service.icon]}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-accent-cyan tracking-wider uppercase">
                        Service 0{idx + 1}
                      </span>
                      <h3 className="font-display font-bold text-xl text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="text-xs font-mono text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1"
                  >
                    Discuss this service &rarr;
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

