import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "cyan" | "emerald" | "amber" | "outline";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  icon,
}) => {
  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60",
    accent: "bg-indigo-950/50 text-indigo-300 border-indigo-700/40 shadow-sm shadow-indigo-900/20",
    cyan: "bg-cyan-950/50 text-cyan-300 border-cyan-700/40 shadow-sm shadow-cyan-900/20",
    emerald: "bg-emerald-950/50 text-emerald-300 border-emerald-700/40 shadow-sm shadow-emerald-900/20",
    amber: "bg-amber-950/50 text-amber-300 border-amber-700/40 shadow-sm shadow-amber-900/20",
    outline: "bg-transparent text-slate-400 border-white/10 hover:border-white/20",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs font-mono",
    md: "px-3 py-1 text-xs sm:text-sm font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border transition-colors duration-200",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {icon && <span className="inline-block shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
