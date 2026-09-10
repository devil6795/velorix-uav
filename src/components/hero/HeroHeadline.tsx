'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function HeroHeadline() {
  const lines = ['BUILT FOR', 'WHAT COMES', 'NEXT.'];

  return (
    <div className="relative z-10 flex flex-col items-start justify-end pb-8 h-full w-full pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-start">
        {/* Top Label */}
        <motion.div 
          className="mb-8 font-mono text-[10px] tracking-[0.1em] text-text-secondary uppercase flex items-center gap-4"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="w-12 h-[1px] bg-text-tertiary block" />
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            VELORIX UAV // DEFENSE & AEROSPACE
          </span>
        </motion.div>

        {/* Primary Headline */}
        <h1 className="flex flex-col m-0 p-0 text-[clamp(3.5rem,10vw,7.5rem)] font-bold tracking-[-0.04em] leading-[0.95] text-text-primary uppercase">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-3">
              <motion.span
                className="block"
                initial={{ y: '110%', opacity: 0, rotateZ: 2 }}
                animate={{ y: '0%', opacity: 1, rotateZ: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.1 * i + 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          className="mt-8 text-text-secondary text-sm md:text-base lg:text-lg max-w-lg font-mono tracking-tight leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Engineering intelligent autonomous systems for strategic superiority. 
          Advanced airframes, tactical avionics, and next-generation payload integration.
        </motion.p>

        {/* CTA Area */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button variant="primary" arrow={true} size="large">
            EXPLORE PLATFORMS
          </Button>
          <Button variant="secondary" arrow={false} size="large">
            SYSTEM SPECS
          </Button>
        </motion.div>
      </div>

      {/* Technical Micro-labels / Visual Anchors */}
      <div className="absolute hidden lg:flex flex-col right-0 top-1/4 pointer-events-none">
        <motion.div 
          className="flex flex-col items-end gap-1 opacity-70"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.7, x: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono text-[9px] text-accent tracking-[0.1em] uppercase">Telemetry // Simulated</div>
          <div className="flex items-center gap-2">
            <div className="w-16 h-[1px] bg-border-active" />
            <div className="font-mono text-[9px] text-text-tertiary">SYS.OK</div>
          </div>
          <div className="font-mono text-[9px] text-text-secondary mt-2">MODE: DEVELOPMENT</div>
          <div className="font-mono text-[9px] text-text-secondary">STATUS: PRE-FLIGHT</div>
          <div className="font-mono text-[9px] text-text-secondary">BUILD: 2026.09</div>
        </motion.div>
      </div>
      
      <div className="absolute hidden lg:block bottom-1/4 right-1/4 pointer-events-none">
        <motion.div 
          className="flex items-center gap-3 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="w-2 h-2 border border-accent/50 rounded-full flex items-center justify-center">
            <div className="w-0.5 h-0.5 bg-accent rounded-full" />
          </div>
          <div className="font-mono text-[8px] text-text-tertiary uppercase tracking-widest">
            Payload Bay 01
          </div>
        </motion.div>
      </div>
    </div>
  );
}
