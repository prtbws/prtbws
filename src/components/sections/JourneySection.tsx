"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Trophy,
  Cpu,
  Terminal,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { TimelineItem } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

interface JourneySectionProps {
  timeline: TimelineItem[];
}

export const JourneySection: React.FC<JourneySectionProps> = ({ timeline }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="w-4 h-4 text-indigo-400" />;
      case "hackathon":
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case "experience":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "leadership":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      default:
        return <GraduationCap className="w-4 h-4 text-slate-400" />;
    }
  };

  const getTypeVariant = (type: string) => {
    switch (type) {
      case "education":
        return "accent";
      case "hackathon":
        return "amber";
      case "experience":
        return "cyan";
      case "leadership":
        return "emerald";
      default:
        return "default";
    }
  };

  const enabledTimeline = timeline.filter((item) => item.enabled);

  return (
    <section id="journey" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="// 05"
          title="Education & Engineering Journey"
          subtitle="A chronicle of undergraduate coursework, hackathon sprints, embedded systems engineering, and algorithmic discipline."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-white/10 ml-2 sm:ml-4 space-y-12">
          {enabledTimeline.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-7 h-7 rounded-full bg-slate-950 border border-indigo-500/50 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)] group-hover:border-cyan-400 transition-colors">
                <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-indigo-400 to-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-slate-950/70 border border-white/[0.08] p-6 sm:p-7 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={getTypeVariant(item.type)} size="sm">
                      <span className="flex items-center gap-1.5">
                        {getTypeIcon(item.type)}
                        <span className="capitalize">{item.type}</span>
                      </span>
                    </Badge>
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                  </div>

                  {item.location && (
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
                  {item.title}
                </h3>

                <h4 className="text-sm font-semibold text-indigo-300 mb-4">
                  {item.organization}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 mb-4 text-xs sm:text-sm text-slate-400">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">›</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                      >
                        <span>Details</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
