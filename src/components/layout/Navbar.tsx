"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Sliders, ExternalLink } from "lucide-react";
import { SectionVisibility } from "@/types/portfolio";

interface NavbarProps {
  sections: SectionVisibility;
  onOpenCustomizer?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ sections, onOpenCustomizer }) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: "about", label: "About", visible: sections.about },
    { id: "skills", label: "Skills", visible: sections.skills },
    { id: "projects", label: "Projects", visible: sections.projects },
    { id: "achievements", label: "Achievements", visible: sections.achievements },
    { id: "journey", label: "Journey", visible: sections.journey },
    { id: "interests", label: "Interests", visible: sections.interests },
    { id: "contact", label: "Contact", visible: sections.contact },
  ].filter((item) => item.visible);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sectionElements = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-slate-950/80 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group text-left cursor-pointer"
            aria-label="Scroll to top"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] shadow-sm shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                PB
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-white tracking-tight text-sm block group-hover:text-cyan-300 transition-colors">
                Partha Biswas
              </span>
              <span className="text-[10px] font-mono text-slate-400 block -mt-0.5">
                IIITDM Kurnool · AI & DS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.06] shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all relative ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 to-cyan-500/30 rounded-full border border-indigo-400/40 shadow-sm"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Actions & Live Config Preview Button */}
          <div className="flex items-center gap-2.5">
            {onOpenCustomizer && (
              <button
                onClick={onOpenCustomizer}
                title="Live Portfolio Customizer & Settings"
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-900/40 hover:text-white transition-colors cursor-pointer"
              >
                <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                <span>Customize</span>
              </button>
            )}

            <a
              href="https://github.com/prtbws"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="md:hidden w-9 h-9 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 p-4 md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-1.5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-mono text-slate-500"># {item.id}</span>
                </button>
              ))}

              {onOpenCustomizer && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCustomizer();
                  }}
                  className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-indigo-950/60 border border-indigo-500/40 text-indigo-300"
                >
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Open Portfolio Customizer</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
