"use client";

import Image from "next/image";
import { ExternalLink, Github, Lock, Sparkles, ChevronRight, ShieldCheck, Users } from "lucide-react";
import GlassCard from "./GlassCard";
import MagneticButton from "./MagneticButton";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isConfidential = project.visibility === "confidential";
  const isPrivate = project.visibility === "private";
  const isContributor = project.role === "Contributor";
  const canShowRepo = project.visibility === "public" && project.role === "Owner" && !!project.repoUrl;

  return (
    <GlassCard glow="violet" className="h-full flex flex-col justify-between p-6 sm:p-7 group interactive-card">
      <div>
        {/* Visual Banner */}
        <div
          onClick={() => onSelect(project)}
          className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden mb-5 border border-white/10 bg-slate-950 cursor-pointer"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-105 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30 backdrop-blur-md">
              {project.category}
            </span>

            {isConfidential ? (
              <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                <Lock className="w-2.5 h-2.5" />
                Confidential Enterprise
              </span>
            ) : isPrivate ? (
              <span className="flex items-center gap-1 text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-white/15 backdrop-blur-md">
                <ShieldCheck className="w-2.5 h-2.5 text-accent-cyan" />
                Private / Client Work
              </span>
            ) : (
              <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
                Public Repo
              </span>
            )}
          </div>

          {/* Bottom Inset Role Badge */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            {isContributor && (
              <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-900/60 text-purple-200 border border-purple-500/30 backdrop-blur-md">
                <Users className="w-2.5 h-2.5" />
                Contributor
              </span>
            )}
          </div>
        </div>

        {/* Header Details */}
        <div onClick={() => onSelect(project)} className="cursor-pointer">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
            <span>{project.year}</span>
            <span className="text-accent-cyan">{project.status}</span>
          </div>

          <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-primary-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-primary-400 group-hover:translate-x-1 transition-all shrink-0" />
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mt-2.5 mb-5 whitespace-pre-line line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-mono text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1 font-medium"
        >
          View Case Study &rarr;
        </button>

        <div className="flex items-center gap-2">
          {canShowRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-primary-600 to-accent-cyan text-white hover:opacity-90 transition-opacity shadow-glow-violet"
              aria-label={`Visit ${project.title} live website`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
}

