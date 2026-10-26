"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sliders, Copy, Check, Eye, Palette, Sparkles, Code } from "lucide-react";
import { PortfolioData, SectionVisibility } from "@/types/portfolio";
import { Button } from "@/components/ui/Button";

interface LiveConfigEditorProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onUpdateData: (newData: PortfolioData) => void;
}

export const LiveConfigEditor: React.FC<LiveConfigEditorProps> = ({
  isOpen,
  onClose,
  data,
  onUpdateData,
}) => {
  const [activeTab, setActiveTab] = useState<"sections" | "personal" | "theme" | "code">("sections");
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSectionToggle = (key: keyof SectionVisibility) => {
    onUpdateData({
      ...data,
      sections: {
        ...data.sections,
        [key]: !data.sections[key],
      },
    });
  };

  const handlePersonalChange = (key: string, val: string) => {
    onUpdateData({
      ...data,
      personal: {
        ...data.personal,
        [key]: val,
      },
    });
  };

  const handleCopyCode = async () => {
    const code = `import { PortfolioData } from "@/types/portfolio";\n\nexport const initialPortfolioData: PortfolioData = ${JSON.stringify(
      data,
      null,
      2
    )};\n`;
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl rounded-2xl bg-slate-950 border border-indigo-500/30 p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-950 border border-indigo-500/40 text-cyan-400">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Live Portfolio Customizer</h3>
                <p className="text-xs text-slate-400 font-mono">
                  Test live visual updates & export configuration
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-3">
            {[
              { id: "sections", label: "Sections", icon: <Eye className="w-3.5 h-3.5" /> },
              { id: "personal", label: "Personal Info", icon: <Sparkles className="w-3.5 h-3.5" /> },
              { id: "theme", label: "Effects & Theme", icon: <Palette className="w-3.5 h-3.5" /> },
              { id: "code", label: "Export Config", icon: <Code className="w-3.5 h-3.5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === tab.id
                    ? "bg-indigo-600 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white bg-slate-900/60"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content (Scrollable) */}
          <div className="overflow-y-auto pr-1 space-y-4 flex-1">
            {activeTab === "sections" && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  Toggle sections on or off to test your layout. When disabled, the section disappears and the navbar automatically updates!
                </p>

                {(Object.keys(data.sections) as (keyof SectionVisibility)[]).map((key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5"
                  >
                    <div>
                      <span className="text-sm font-semibold capitalize text-white">{key}</span>
                      <p className="text-[11px] font-mono text-slate-400">Section ID: #{key}</p>
                    </div>

                    <button
                      onClick={() => handleSectionToggle(key)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                        data.sections[key]
                          ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                          : "bg-rose-950/40 text-rose-300 border border-rose-500/40"
                      }`}
                    >
                      {data.sections[key] ? "Enabled" : "Hidden"}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "personal" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={data.personal.name}
                    onChange={(e) => handlePersonalChange("name", e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Headline</label>
                  <input
                    type="text"
                    value={data.personal.headline}
                    onChange={(e) => handlePersonalChange("headline", e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Short Bio</label>
                  <textarea
                    rows={3}
                    value={data.personal.shortBio}
                    onChange={(e) => handlePersonalChange("shortBio", e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Verified Email</label>
                  <input
                    type="email"
                    value={data.personal.email || ""}
                    onChange={(e) => handlePersonalChange("email", e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-sm focus:border-indigo-500 outline-none font-mono"
                  />
                </div>
              </div>
            )}

            {activeTab === "theme" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div>
                    <span className="text-sm font-semibold text-white">Background Particles</span>
                    <p className="text-[11px] text-slate-400">Subtle floating ambient stars</p>
                  </div>
                  <button
                    onClick={() =>
                      onUpdateData({
                        ...data,
                        theme: {
                          ...data.theme,
                          enableBackgroundParticles: !data.theme.enableBackgroundParticles,
                        },
                      })
                    }
                    className={`px-3 py-1 rounded-lg text-xs font-mono ${
                      data.theme.enableBackgroundParticles
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {data.theme.enableBackgroundParticles ? "Active" : "Off"}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                  <div>
                    <span className="text-sm font-semibold text-white">Ambient Glow Orbs</span>
                    <p className="text-[11px] text-slate-400">Radial indigo and cyan background halos</p>
                  </div>
                  <button
                    onClick={() =>
                      onUpdateData({
                        ...data,
                        theme: {
                          ...data.theme,
                          enableGridGlow: !data.theme.enableGridGlow,
                        },
                      })
                    }
                    className={`px-3 py-1 rounded-lg text-xs font-mono ${
                      data.theme.enableGridGlow
                        ? "bg-indigo-600 text-white"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {data.theme.enableGridGlow ? "Active" : "Off"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "code" && (
              <div className="space-y-3">
                <p className="text-xs text-slate-400">
                  Click the button below to copy the complete TypeScript configuration. You can paste it directly into <code className="text-cyan-400">src/data/portfolio.ts</code> to persist your edits!
                </p>

                <div className="relative">
                  <pre className="p-4 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-slate-300 max-h-56 overflow-auto">
                    {`// Paste this into src/data/portfolio.ts\nexport const initialPortfolioData = ${JSON.stringify(
                      data,
                      null,
                      2
                    )};`}
                  </pre>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  icon={copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  onClick={handleCopyCode}
                  className="w-full"
                >
                  {copied ? "Copied Configuration to Clipboard!" : "Copy Configuration Code"}
                </Button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-500">
              Changes apply live in the browser session.
            </span>
            <Button variant="ghost" size="sm" onClick={onClose}>
              Done
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
