"use client";

import React from "react";
import { motion } from "framer-motion";
import { LineChart, Brain, Binary, Layers, Compass } from "lucide-react";
import { InterestItem } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";

interface InterestsSectionProps {
  interests: InterestItem[];
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case "LineChart":
        return <LineChart className="w-6 h-6 text-emerald-400" />;
      case "Brain":
        return <Brain className="w-6 h-6 text-indigo-400" />;
      case "Binary":
        return <Binary className="w-6 h-6 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-6 h-6 text-amber-400" />;
      default:
        return <Compass className="w-6 h-6 text-slate-400" />;
    }
  };

  const enabledInterests = interests.filter((i) => i.enabled);

  return (
    <section id="interests" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="// 06"
          title="Interests & Active Directions"
          subtitle="Areas of passionate exploration, mathematical interest, and emerging engineering craft."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enabledInterests.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard glow="indigo" className="p-7 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                      {getInterestIcon(item.icon)}
                    </div>
                    {item.status && (
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-500/30">
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
