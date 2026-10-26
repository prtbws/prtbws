"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setProgress(scroll * 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2.5px] bg-white/5 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.7)] transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
