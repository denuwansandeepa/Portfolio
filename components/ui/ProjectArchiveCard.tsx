"use client";

import { ExternalLink, Github, Lock, ShieldCheck, Users } from "lucide-react";
import GlassCard from "./GlassCard";
import { ProjectItem } from "@/data/projects";

interface ProjectArchiveCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export default function ProjectArchiveCard({ project, onSelect }: ProjectArchiveCardProps) {
  const isConfidential = project.visibility === "confidential";
  const isPrivate = project.visibility === "private";
  const isContributor = project.role === "Contributor";
  const canShowRepo = project.visibility === "public" && project.role === "Owner" && !!project.repoUrl;

  return (
    <GlassCard glow="cyan" className="p-5 flex flex-col justify-between h-full group interactive-card">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/5">
            {project.category}
          </span>

          <div className="flex items-center gap-1.5">
            {isContributor && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-500/20">
                Contributor
              </span>
            )}

            {isConfidential ? (
              <span className="flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <Lock className="w-2.5 h-2.5" />
                Confidential
              </span>
            ) : isPrivate ? (
              <span className="flex items-center gap-1 text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-white/10">
                <ShieldCheck className="w-2.5 h-2.5 text-accent-cyan" />
                Client Work
              </span>
            ) : (
              <span className="text-[10px] font-mono text-emerald-400">
                Public
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h4
          onClick={() => onSelect(project)}
          className="font-display font-bold text-base text-white group-hover:text-primary-300 transition-colors cursor-pointer mb-1.5"
        >
          {project.title}
        </h4>

        {/* Description (2 lines) */}
        <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2 mb-4 whitespace-pre-line">
          {project.description}
        </p>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Footer Info & Actions */}
      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-500 text-[11px]">{project.year}</span>

        <div className="flex items-center gap-2">
          {canShowRepo && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full bg-primary-600/30 hover:bg-primary-600/50 text-primary-300 hover:text-white transition-colors"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={() => onSelect(project)}
            className="text-[11px] text-slate-400 hover:text-white transition-colors ml-1"
          >
            Details &rarr;
          </button>
        </div>
      </div>
    </GlassCard>
  );
}

