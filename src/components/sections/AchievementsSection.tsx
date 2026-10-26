"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Award,
  CheckCircle2,
  ExternalLink,
  Flame,
  TrendingUp,
} from "lucide-react";
import { CompetitiveMetric } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface AchievementsSectionProps {
  metrics: CompetitiveMetric[];
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ metrics }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Terminal":
        return <Terminal className="w-5 h-5 text-indigo-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case "Award":
        return <Award className="w-5 h-5 text-pink-400" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-emerald-400" />;
      default:
        return <Flame className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="// 04"
          title="Competitive Programming & Metrics"
          subtitle="Quantifiable milestones and verified contest performance tracked across global algorithmic ecosystems."
        />

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics
            .filter((m) => m.enabled)
            .map((metric, idx) => (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="h-full rounded-2xl bg-slate-950/70 border border-white/[0.08] p-6 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group relative overflow-hidden">
                  {/* Subtle top edge glow */}
                  <div
                    className="absolute inset-x-0 top-0 h-[2px] transition-opacity duration-300"
                    style={{ backgroundColor: metric.accentColor || "#6366f1" }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center">
                        {getIcon(metric.iconName)}
                      </div>
                      {metric.verified && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">
                          VERIFIED
                        </span>
                      )}
                    </div>

                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                      {metric.platform}
                    </p>

                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {metric.numericTarget ? (
                        <AnimatedCounter
                          value={metric.numericTarget}
                          suffix={metric.suffix}
                        />
                      ) : (
                        metric.value
                      )}
                    </div>

                    <p className="text-xs font-medium text-indigo-300 mb-3">
                      {metric.metricLabel}
                    </p>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {metric.detail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-500">
                      {metric.rank || "Official Track"}
                    </span>

                    <a
                      href={metric.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Unified Profile Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl p-6 bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-cyan-950/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white mb-1">
                Unified Competitive Programming Profile
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                All contest handles, problem-solving history, and dynamic rating certificates are consolidated at Codolio.
              </p>
            </div>
          </div>

          <a
            href="https://codolio.com/profile/prtbws"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-md shadow-indigo-600/30 inline-flex items-center gap-2 transition-all"
          >
            <span>View codolio.com/profile/prtbws</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
