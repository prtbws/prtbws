"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, ShieldCheck, CheckCircle2, Cpu, TrendingUp, Sparkles, Layers } from "lucide-react";
import { Project } from "@/types/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl rounded-2xl bg-slate-950 border border-white/15 p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header Close Bar */}
          <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={getStatusVariant(project.status)} size="sm">
                  {project.status || "Project"}
                </Badge>
                <span className="text-xs font-mono text-cyan-400">{project.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Close project modal"
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subtitle / Tagline */}
          <p className="text-base text-slate-300 mb-6 font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* Problem Solved */}
          {project.problemSolved && (
            <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-white/5">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                Problem Statement & Motivation
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.problemSolved}
              </p>
            </div>
          )}

          {/* Detailed Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3">
                Key Technical Architecture & Features
              </h4>
              <ul className="space-y-2.5">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Verified Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="primary"
                  size="md"
                  icon={<Github className="w-4 h-4" />}
                >
                  View GitHub Repository
                </Button>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="secondary"
                  size="md"
                  icon={<ExternalLink className="w-4 h-4 text-cyan-400" />}
                >
                  Live Deployment
                </Button>
              </a>
            )}

            <Button variant="ghost" size="md" onClick={onClose} className="ml-auto">
              Close
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
