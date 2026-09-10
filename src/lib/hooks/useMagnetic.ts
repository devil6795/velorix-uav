"use client";

import { RefObject, useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  strength: number = 0.5
) {
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    
    if (prefersReducedMotion || !element) {
      return;
    }

    const isTouchDevice = 
      ("ontouchstart" in window) || 
      (navigator.maxTouchPoints > 0);
      
    if (isTouchDevice) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      const maxDistanceX = rect.width;
      const maxDistanceY = rect.height;

      if (
        Math.abs(distanceX) < maxDistanceX &&
        Math.abs(distanceY) < maxDistanceY
      ) {
        setIsHovered(true);
        setPosition({
          x: distanceX * strength,
          y: distanceY * strength,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, strength, prefersReducedMotion]);

  if (prefersReducedMotion || (!position.x && !position.y && !isHovered)) {
    return { transform: "translate3d(0px, 0px, 0px)" };
  }

  return {
    transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
    transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
  };
}
