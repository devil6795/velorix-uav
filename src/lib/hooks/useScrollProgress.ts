"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (windowHeight === documentHeight) {
        setProgress(0);
        return;
      }
      
      const scrollY = window.scrollY;
      const scrollPercentage = scrollY / (documentHeight - windowHeight);
      
      // Clamp between 0 and 1
      setProgress(Math.min(Math.max(scrollPercentage, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
