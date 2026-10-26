"use client";

import React, { useState } from "react";
import { initialPortfolioData } from "@/data/portfolio";
import { PortfolioData } from "@/types/portfolio";
import { BackgroundFX } from "@/components/layout/BackgroundFX";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { InterestsSection } from "@/components/sections/InterestsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LiveConfigEditor } from "@/components/modal/LiveConfigEditor";

export default function Home() {
  const [data, setData] = useState<PortfolioData>(initialPortfolioData);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#07070a] text-slate-100 selection:bg-indigo-500/30 selection:text-white antialiased">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Atmospheric Background Particles & Gradients */}
      <BackgroundFX
        enableParticles={data.theme.enableBackgroundParticles}
        enableGridGlow={data.theme.enableGridGlow}
      />

      {/* Sticky Frosted Header */}
      <Navbar
        sections={data.sections}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Single Page Content */}
      <main className="relative z-10 flex flex-col">
        {/* Fullscreen Hero */}
        <HeroSection personal={data.personal} socials={data.socials} />

        {/* About Me */}
        {data.sections.about && <AboutSection personal={data.personal} />}

        {/* Technical Skills Matrix */}
        {data.sections.skills && (
          <SkillsSection
            categories={data.skillCategories}
            skills={data.skills}
          />
        )}

        {/* Featured Projects Showcase */}
        {data.sections.projects && (
          <ProjectsSection projects={data.projects} />
        )}

        {/* Competitive Programming & Achievements */}
        {data.sections.achievements && (
          <AchievementsSection metrics={data.competitiveMetrics} />
        )}

        {/* Vertical Timeline Journey & Education */}
        {data.sections.journey && (
          <JourneySection timeline={data.timeline} />
        )}

        {/* Future Interests & Exploration */}
        {data.sections.interests && (
          <InterestsSection interests={data.interests} />
        )}

        {/* Contact & Closing Call to Action */}
        {data.sections.contact && (
          <ContactSection personal={data.personal} socials={data.socials} />
        )}
      </main>

      {/* Footer */}
      <Footer socials={data.socials} />

      {/* Interactive Visual Customizer Modal */}
      <LiveConfigEditor
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onUpdateData={(newData) => setData(newData)}
      />
    </div>
  );
}
