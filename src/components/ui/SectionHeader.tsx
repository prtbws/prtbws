"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = "left",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"}`}
    >
      <div className={`flex items-center gap-2 mb-3 text-xs md:text-sm font-mono tracking-widest uppercase text-indigo-400 ${align === "center" ? "justify-center" : ""}`}>
        <span className="text-cyan-400 font-bold">{number}</span>
        <span className="w-8 h-[1px] bg-indigo-500/40 inline-block" />
        <span>EXPLORE</span>
      </div>
      
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
