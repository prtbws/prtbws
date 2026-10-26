"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary:
        "bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-indigo-400 border border-indigo-400/30",
      secondary:
        "bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-medium border border-white/10 hover:border-indigo-500/40 shadow-sm",
      outline:
        "bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-cyan-500/50",
      ghost:
        "bg-transparent hover:bg-white/[0.05] text-slate-400 hover:text-white border-transparent",
    };

    const sizeStyles = {
      sm: "px-3.5 py-1.5 text-xs rounded-lg gap-1.5",
      md: "px-5 py-2.5 text-sm rounded-xl gap-2",
      lg: "px-7 py-3.5 text-base rounded-2xl gap-2.5 font-medium",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {/* Subtle shine highlight */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

        {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="shrink-0 group-hover:translate-x-0.5 transition-transform duration-200">{icon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
