"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, ExternalLink, Terminal, Sparkles, ChevronRight, Mail } from "lucide-react";
import { PersonalInfo, SocialLink } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface HeroSectionProps {
  personal: PersonalInfo;
  socials: SocialLink[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal, socials }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const githubLink = socials.find((s) => s.platform.toLowerCase() === "github")?.url || "https://github.com/prtbws";
  const linkedinLink = socials.find((s) => s.platform.toLowerCase() === "linkedin")?.url || "https://www.linkedin.com/in/prtbws/";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Status Badge */}
          {personal.statusBadge && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs font-mono shadow-sm shadow-indigo-950/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>{personal.statusBadge}</span>
              </div>
            </motion.div>
          )}

          {/* Subtitle / Intro Greeting */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-3 text-cyan-400 font-mono text-sm sm:text-base tracking-wide"
          >
            <span className="w-8 h-[2px] bg-cyan-400/80 inline-block" />
            <span>HELLO WORLD, I&apos;M</span>
          </motion.div>

          {/* Main Name Heading with Staggered Visual Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-none"
          >
            {personal.name}
          </motion.h1>

          {/* Strong Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gradient-accent mb-6 leading-snug max-w-2xl"
          >
            {personal.headline}
          </motion.h2>

          {/* Concise Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl"
          >
            {personal.shortBio}
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2.5 mb-8"
          >
            <Badge variant="cyan" size="sm" icon={<Terminal className="w-3.5 h-3.5 text-cyan-400" />}>
              Codeforces 1402 (Pupil)
            </Badge>
            <Badge variant="amber" size="sm" icon={<Sparkles className="w-3.5 h-3.5 text-amber-400" />}>
              LeetCode 1750+ Peak
            </Badge>
            <Badge variant="emerald" size="sm">
              700+ Problems Solved
            </Badge>
            <Badge variant="outline" size="sm">
              IIITDM Kurnool AI & DS
            </Badge>
          </motion.div>

          {/* Action Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ChevronRight className="w-4 h-4" />}
              onClick={() => scrollTo("projects")}
            >
              Explore My Work
            </Button>

            <Button
              variant="secondary"
              size="lg"
              icon={<Mail className="w-4 h-4 text-cyan-400" />}
              onClick={() => scrollTo("contact")}
            >
              Connect With Me
            </Button>

            {/* Quick social links */}
            <div className="flex items-center gap-2 pl-2">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedinLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Hero Portrait with Animated Frame & Depth Effect */}
        <div className="lg:col-span-5 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] group"
          >
            {/* Ambient Background Glow Behind Portrait */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Outer Interactive Framing Border */}
            <div className="relative w-full h-full rounded-2xl p-[2px] bg-gradient-to-b from-indigo-500/60 via-white/10 to-cyan-500/40 shadow-2xl overflow-hidden">
              <div className="relative w-full h-full bg-slate-950 rounded-[14px] overflow-hidden">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 pointer-events-none" />

                {/* Bottom Card Identity Plate */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-slate-950/80 backdrop-blur-md border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-base tracking-tight">{personal.name}</p>
                      <p className="text-xs font-mono text-cyan-400">@{personal.preferredName || "prtbws"}</p>
                    </div>
                    <div className="px-2.5 py-1 rounded-md bg-indigo-950/80 border border-indigo-500/40 text-[10px] font-mono text-indigo-300">
                      IIITDM &apos;29
                    </div>
                  </div>
                </div>

                {/* Corner Tech Accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400/80 pointer-events-none" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400/80 pointer-events-none" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[11px] font-mono text-slate-500 tracking-widest uppercase group-hover:text-cyan-400 transition-colors">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
