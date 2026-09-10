'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';

export function HeroMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 30, stiffness: 40 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      
      mouseX.set(x * -15);
      mouseY.set(y * -15);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden bg-[#020202] pointer-events-none"
    >
      <motion.div
        className="absolute inset-0 w-full h-full scale-[1.05]"
        style={{
          x: springX,
          y: springY,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1.05, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        {/* Main image */}
        <div className="absolute inset-0">
          <Image
            src="/media/hero/hero-uav.jpg"
            alt="Velorix UAV System"
            fill
            priority
            className="object-cover object-center opacity-[0.85] mix-blend-luminosity grayscale-[30%]"
            quality={100}
          />
        </div>

        {/* Sophisticated lighting overlays */}
        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_120%)]" />
        
        {/* Deep shadows at top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        {/* Ambient technical glow */}
        <div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px] mix-blend-screen" />
        
        {/* Crosshairs/Technical Overlay pattern */}
        <div className="absolute inset-0 pointer-events-none">
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-20">
             <div className="absolute left-0 top-1/2 w-4 h-[1px] bg-white" />
             <div className="absolute right-0 top-1/2 w-4 h-[1px] bg-white" />
             <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-white" />
             <div className="absolute bottom-0 left-1/2 w-[1px] h-4 bg-white" />
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-accent/60" />
           </div>
        </div>
      </motion.div>
    </div>
  );
}
