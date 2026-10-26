"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Terminal, Mail, Award, Heart } from "lucide-react";
import { SocialLink } from "@/types/portfolio";

interface FooterProps {
  socials: SocialLink[];
}

export const Footer: React.FC<FooterProps> = ({ socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      case "codeforces":
        return <Terminal className="w-4 h-4" />;
      case "codolio":
        return <Award className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-slate-950/70 backdrop-blur-md pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.05]">
          {/* Brand info */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] shadow-sm">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-white">
                PB
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Partha Biswas</h3>
              <p className="text-xs text-slate-400 font-mono">
                B.Tech in Artificial Intelligence & Data Science · IIITDM Kurnool
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-2">
            {socials
              .filter((s) => s.enabled)
              .map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 hover:border-indigo-500/50 hover:bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all"
                >
                  {getIcon(s.platform)}
                </a>
              ))}
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 bg-slate-900 border border-white/10 hover:border-cyan-500/50 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Partha Biswas. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Engineered with Next.js, TypeScript, Tailwind CSS & Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};
