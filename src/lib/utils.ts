import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function triggerConfetti() {
  if (typeof window === "undefined") return;
  import("canvas-confetti").then((confetti) => {
    confetti.default({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#6366f1", "#06b6d4", "#a855f7", "#3b82f6", "#10b981"],
    });
  }).catch(() => {});
}
