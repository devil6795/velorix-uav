'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 50 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { innerWidth, innerHeight } = window;
      // Calculate position relative to center, normalize between -1 and 1
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      
      mouseX.set(x * -10); // Max 10px shift, inverted for parallax
      mouseY.set(y * -10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-background pointer-events-none"
    >
      <motion.div
        className="absolute inset-0 w-full h-full scale-[1.05]"
        style={{
          x: springX,
          y: springY,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        {/* Deep background */}
        <div className="absolute inset-0 bg-[#06080A]" />
        
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,28,42,0.4)_0%,rgba(0,0,0,0)_70%)]" />

        {/* CSS Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '4rem 4rem'
          }}
        />
        
        {/* Secondary finer grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: '1rem 1rem'
          }}
        />

        {/* Ambient light glow */}
        <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen" />
        
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/95" />
      </motion.div>
    </div>
  );
}
