"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Lock, ShieldCheck, X, Check, Sparkles, FolderArchive, Layers } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectArchiveCard from "@/components/ui/ProjectArchiveCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects, ProjectItem, ProjectCategory } from "@/data/projects";

type FilterOption = "All" | ProjectCategory;

const filterTabs: FilterOption[] = [
  "All",
  "Web",
  "Mobile",
  "Full-Stack",
  "Client Work",
  "Academic",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const archiveProjects = projects.filter((p) => !p.featured);

  const filteredArchive =
    activeFilter === "All"
      ? archiveProjects
      : archiveProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Portfolio Case Studies"
          title="Featured Systems & Enterprise Deliverables"
          gradientWord="Enterprise Deliverables"
          description="High-scale core banking architectures, cross-platform mobile apps with Flutter, and venture capital digital platforms."
        />

        {/* 1. FEATURED CASE STUDIES GRID (Large Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} onSelect={setSelectedProject} />
            </motion.div>
          ))}
        </div>

        {/* 2. MORE PROJECTS ARCHIVE GRID */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent-cyan mb-2">
                <FolderArchive className="w-4 h-4" />
                Engineering Archive
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                More Selected Projects & Coursework
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-sans">
                Explore specialized client websites, public repositories, and academic software implementations.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {filterTabs.map((tab) => {
                const isSelected = activeFilter === tab;
                const count =
                  tab === "All"
                    ? archiveProjects.length
                    : archiveProjects.filter((p) => p.category === tab).length;

                return (
                  <button
                    key={tab}
                    onClick={() => setActiveFilter(tab)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                      isSelected
                        ? "bg-gradient-to-r from-primary-600 to-accent-cyan text-white shadow-glow-violet font-semibold"
                        : "bg-surface/50 text-slate-400 hover:text-white border border-white/5 hover:border-white/15"
                    }`}
                  >
                    <span>{tab}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Archive Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            <AnimatePresence mode="popLayout">
              {filteredArchive.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectArchiveCard
                    project={project}
                    onSelect={setSelectedProject}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Case Study Detail Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/15 rounded-2xl p-6 sm:p-8 z-10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto pr-2 space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedProject.year}
                    </span>
                    <span className="text-xs font-mono text-accent-cyan">
                      {selectedProject.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Banner / Visual */}
                <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  {selectedProject.visibility === "confidential" ? (
                    <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
                      <Lock className="w-8 h-8 text-amber-400 mb-2" />
                      <p className="font-display font-semibold text-white text-base">
                        Confidential Enterprise Platform
                      </p>
                      <p className="text-xs text-slate-400 max-w-sm mt-1">
                        Architecture details and internal specifications are protected under strict client non-disclosure agreements.
                      </p>
                    </div>
                  ) : selectedProject.visibility === "private" ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-4">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-accent-cyan" />
                        <span>Private Client Repository • Contributor / Owner</span>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans whitespace-pre-line">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Highlights if available */}
                {selectedProject.highlights && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                      Architectural Highlights
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Tech Stack & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links adhering strictly to privacy rules */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {selectedProject.liveUrl && (
                    <MagneticButton
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-cyan text-white text-xs font-semibold shadow-glow-violet"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </MagneticButton>
                  )}

                  {selectedProject.visibility === "public" &&
                    selectedProject.role === "Owner" &&
                    selectedProject.repoUrl && (
                      <MagneticButton
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-medium border border-white/10"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>View Public Repository</span>
                      </MagneticButton>
                    )}

                  {(selectedProject.visibility === "private" ||
                    selectedProject.visibility === "confidential" ||
                    selectedProject.role === "Contributor") && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary-400" />
                      <span>Private / Client Work (Source Confidential)</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
