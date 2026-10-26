export interface SocialLink {
  platform: string;
  url: string;
  username?: string;
  icon?: string;
  enabled?: boolean;
}

export interface PersonalInfo {
  name: string;
  preferredName?: string;
  roleTitle: string;
  headline: string;
  shortBio: string;
  fullBio?: string[];
  avatarUrl: string;
  location?: string;
  email?: string;
  phone?: string;
  resumeUrl?: string;
  hireable?: boolean;
  statusBadge?: string;
}

export interface SkillItem {
  name: string;
  category: "languages" | "data_ml" | "systems_cs" | "tools_dev";
  icon?: string;
  proficiency?: "Familiar" | "Proficient" | "Advanced" | "Core";
  highlight?: boolean;
  enabled?: boolean;
}

export interface SkillCategoryConfig {
  id: "languages" | "data_ml" | "systems_cs" | "tools_dev";
  title: string;
  description: string;
  icon: string;
}

export type ProjectStatus = "Completed" | "In Development" | "Production" | "Prototype" | "Research";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problemSolved?: string;
  features?: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  fallbackIcon?: string;
  status?: ProjectStatus;
  category: "Fintech & Quant" | "IoT & Embedded" | "Systems & C++" | "AI & ML" | "Web Applications";
  featured?: boolean;
  highlights?: string[];
  enabled?: boolean;
}

export interface CompetitiveMetric {
  id: string;
  platform: string;
  metricLabel: string;
  value: number | string;
  numericTarget?: number;
  suffix?: string;
  detail: string;
  rank?: string;
  rating?: number | string;
  maxRating?: number | string;
  profileUrl: string;
  iconName: string;
  accentColor?: string;
  verified: boolean;
  enabled?: boolean;
}

export type TimelineType = "education" | "experience" | "hackathon" | "leadership";

export interface TimelineItem {
  id: string;
  type: TimelineType;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  link?: string;
  enabled?: boolean;
}

export interface InterestItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags?: string[];
  status?: string;
  enabled?: boolean;
}

export interface SectionVisibility {
  about: boolean;
  skills: boolean;
  projects: boolean;
  achievements: boolean;
  journey: boolean;
  interests: boolean;
  contact: boolean;
}

export interface ThemeConfig {
  accentColor: string; // e.g., '#6366f1'
  highlightColor: string; // e.g., '#06b6d4'
  borderRadius: string; // e.g., '1rem'
  enableCustomCursor: boolean;
  enableBackgroundParticles: boolean;
  enableGridGlow: boolean;
  animationIntensity: "gentle" | "normal" | "energetic";
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLink[];
  sections: SectionVisibility;
  skillCategories: SkillCategoryConfig[];
  skills: SkillItem[];
  projects: Project[];
  competitiveMetrics: CompetitiveMetric[];
  timeline: TimelineItem[];
  interests: InterestItem[];
  theme: ThemeConfig;
}
