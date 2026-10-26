"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, LineChart, Cpu, Wrench, Check, Sparkles } from "lucide-react";
import { SkillCategoryConfig, SkillItem } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";

interface SkillsSectionProps {
  categories: SkillCategoryConfig[];
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories, skills }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-4 h-4" />;
      case "LineChart":
        return <LineChart className="w-4 h-4" />;
      case "Cpu":
        return <Cpu className="w-4 h-4" />;
      case "Wrench":
        return <Wrench className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const filteredSkills = skills.filter((skill) => {
    if (!skill.enabled) return false;
    if (selectedCategory === "all") return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="// 02"
          title="Technical Competencies"
          subtitle="A structured taxonomy of verified languages, computational libraries, and engineering tools applied across projects and algorithmic problem solving."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === "all"
                ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30 border border-indigo-400/40"
                : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
            }`}
          >
            All Disciplines ({skills.filter((s) => s.enabled).length})
          </button>

          {categories.map((cat) => {
            const count = skills.filter((s) => s.enabled && s.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-600/30 border border-indigo-400/40"
                    : "bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
                }`}
              >
                <span>{getCategoryIcon(cat.icon)}</span>
                <span>{cat.title}</span>
                <span className="opacity-60 text-[10px]">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className={`p-4 rounded-xl border backdrop-blur-md transition-all duration-300 group hover:-translate-y-1 ${
                    skill.highlight
                      ? "bg-slate-900/80 border-indigo-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-indigo-500/10"
                      : "bg-slate-950/50 border-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    {skill.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee] shrink-0 mt-1" />
                    )}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="capitalize">{skill.category.replace("_", " & ")}</span>
                    {skill.proficiency && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                        {skill.proficiency}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
