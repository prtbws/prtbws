"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Terminal,
  Code2,
  Sparkles,
  Globe,
  SlidersHorizontal,
} from "lucide-react";
import { Project } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectDetailModal } from "@/components/modal/ProjectDetailModal";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "all",
    ...Array.from(new Set(projects.filter((p) => p.enabled).map((p) => p.category))),
  ];

  const filteredProjects = projects.filter((p) => {
    if (!p.enabled) return false;
    if (activeCategory === "all") return true;
    return p.category === activeCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Fintech & Quant":
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case "IoT & Embedded":
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case "Systems & C++":
        return <Terminal className="w-4 h-4 text-cyan-400" />;
      case "AI & ML":
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
      case "Web Applications":
        return <Globe className="w-4 h-4 text-purple-400" />;
      default:
        return <Code2 className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusVariant = (status?: string) => {
    switch (status) {
      case "Completed":
        return "emerald";
      case "In Development":
        return "amber";
      case "Prototype":
        return "cyan";
      default:
        return "default";
    }
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="// 03"
          title="Featured Projects"
          subtitle="Engineered systems spanning algorithmic equity screening, triple-redundant IoT firmware, and low-level C memory architecture."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30 border border-indigo-400/40"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
              }`}
            >
              <span className="capitalize">
                {cat === "all" ? `All Work (${projects.filter((p) => p.enabled).length})` : cat}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="h-full rounded-2xl bg-slate-950/70 border border-white/[0.08] hover:border-indigo-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group relative overflow-hidden">
                  {/* Subtle top edge gradient line */}
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent group-hover:via-cyan-400/60 transition-all duration-500" />

                  {/* Header Meta */}
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(project.category)}
                        <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <Badge variant={getStatusVariant(project.status)} size="sm">
                        {project.status || "Active"}
                      </Badge>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-indigo-300/90 mb-4 leading-relaxed">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Key highlights pills */}
                    {project.highlights && project.highlights.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-300"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bottom section: tech stack and action buttons */}
                  <div className="pt-6 border-t border-white/[0.06] mt-auto">
                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-950/50 text-indigo-300 border border-indigo-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group/btn"
                      >
                        <span>Architecture & Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repo for ${project.title}`}
                            className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-400 hover:text-white text-slate-400 transition-all shadow-sm"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            className="p-2 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 text-slate-400 transition-all shadow-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
