"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Cpu, TrendingUp, FileText, CheckCircle, MapPin, Sparkles } from "lucide-react";
import { PersonalInfo } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

interface AboutSectionProps {
  personal: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  const highlights = [
    {
      icon: <GraduationCap className="w-5 h-5 text-indigo-400" />,
      title: "IIITDM Kurnool",
      desc: "B.Tech in Artificial Intelligence & Data Science (2025–2029)",
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: "Competitive Programmer",
      desc: "700+ solved problems across Codeforces, LeetCode, CSES & CodeChef",
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      title: "Quant & Fintech Focus",
      desc: "Algorithmic momentum screening engines, technical indicators & backtesting",
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: "Systems & Firmware",
      desc: "High-performance C/C++, pointer memory discipline & ESP32 IoT systems",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          number="// 01"
          title="About Me"
          subtitle="Engineering practical technology products through mathematical rigor and computational depth."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Editorial Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg"
          >
            {personal.fullBio && personal.fullBio.length > 0 ? (
              personal.fullBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300/90 font-light">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-slate-300/90 font-light">{personal.shortBio}</p>
            )}

            {/* Resume & Details Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              {personal.resumeUrl && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="outline"
                    size="md"
                    icon={<FileText className="w-4 h-4 text-cyan-400" />}
                  >
                    View Official Resume (PDF)
                  </Button>
                </a>
              )}

              {personal.location && (
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-3.5 py-2 rounded-xl bg-slate-900/60 border border-white/5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{personal.location}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Column: Structured Key Highlights Matrix */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard glow="indigo" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
