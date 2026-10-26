"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Github, Linkedin, Terminal, Award, ArrowUpRight, Sparkles } from "lucide-react";
import { PersonalInfo, SocialLink } from "@/types/portfolio";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { triggerConfetti } from "@/lib/utils";

interface ContactSectionProps {
  personal: PersonalInfo;
  socials: SocialLink[];
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal, socials }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const email = personal.email || "prtbws@zohomail.in";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      triggerConfetti();
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "codeforces":
        return <Terminal className="w-5 h-5" />;
      case "codolio":
        return <Award className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-indigo-500/25 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl text-center overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-white/10 text-cyan-400 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT & COLLABORATE</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Have an interesting idea? <br className="hidden sm:inline" />
            <span className="text-gradient-accent">Let&apos;s build it.</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I am always open to discussing new engineering projects, machine learning research, algorithmic trading models, and software internship opportunities.
          </p>

          {/* Primary Verified Email Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={`mailto:${email}`} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                icon={<Mail className="w-5 h-5 text-white" />}
                className="w-full sm:w-auto"
              >
                Send Email ({email})
              </Button>
            </a>

            <Button
              variant="secondary"
              size="lg"
              icon={copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-cyan-400" />}
              onClick={handleCopyEmail}
              className="w-full sm:w-auto font-mono text-sm"
            >
              {copied ? "Copied to Clipboard!" : "Copy Email"}
            </Button>
          </div>

          {/* Social Presence Hub */}
          <div className="pt-8 border-t border-white/[0.08]">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
              Verified Developer & Contest Profiles
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {socials
                .filter((s) => s.enabled && s.platform.toLowerCase() !== "email")
                .map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 hover:bg-slate-800/80 text-slate-300 hover:text-white transition-all text-xs font-mono shadow-sm group"
                  >
                    <span>{getPlatformIcon(social.platform)}</span>
                    <span className="font-medium">{social.platform}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
