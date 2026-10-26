"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "indigo" | "cyan" | "emerald" | "none";
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = "none",
  hoverEffect = true,
  ...props
}) => {
  const glowStyles = {
    none: "",
    indigo: "hover:shadow-indigo-500/15 hover:border-indigo-500/40",
    cyan: "hover:shadow-cyan-500/15 hover:border-cyan-500/40",
    emerald: "hover:shadow-emerald-500/15 hover:border-emerald-500/40",
  };

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -3, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/[0.08] p-6 shadow-xl transition-all duration-300 relative overflow-hidden",
        glowStyles[glow],
        hoverEffect && "hover:border-white/20",
        className
      )}
      {...props}
    >
      {/* Subtle top border highlight */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
