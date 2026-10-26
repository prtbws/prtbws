export interface ThemeConfig {
  accent: {
    primary: string; // Electric indigo
    hover: string;
    glow: string;
    name: string;
  };
  highlight: {
    primary: string; // Cyan
    glow: string;
    name: string;
  };
  background: {
    base: string;
    secondary: string;
    tertiary: string;
  };
  animation: {
    durationMultiplier: number;
    enableParticles: boolean;
    enableGlow: boolean;
    enableTilt: boolean;
  };
}

export const defaultTheme: ThemeConfig = {
  accent: {
    primary: "#6366f1", // Indigo / Electric Violet
    hover: "#4f46e5",
    glow: "rgba(99, 102, 241, 0.4)",
    name: "Electric Indigo",
  },
  highlight: {
    primary: "#06b6d4", // Electric Cyan
    glow: "rgba(6, 182, 212, 0.35)",
    name: "Cyber Cyan",
  },
  background: {
    base: "#07070a",
    secondary: "#0d0e15",
    tertiary: "#13141f",
  },
  animation: {
    durationMultiplier: 1.0,
    enableParticles: true,
    enableGlow: true,
    enableTilt: true,
  },
};
