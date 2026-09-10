'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function HeroHeadline() {
  const lines = ['BUILT FOR', 'WHAT COMES', 'NEXT.'];

  return (
    <div className="relative z-10 flex flex-col items-start justify-center pt-20">
      {/* Top Label */}
      <motion.div 
        className="mb-8 font-mono text-[11px] tracking-wide text-text-tertiary uppercase flex items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="w-8 h-[1px] bg-border-active block" />
        VELORIX UAV / UNMANNED SYSTEMS
      </motion.div>

      {/* Primary Headline */}
      <h1 className="flex flex-col m-0 p-0 text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.04em] leading-[1.05] text-text-primary uppercase">
        {lines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-2">
            <motion.span
              className="block"
              initial={{ y: '110%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.15 * i + 0.3,
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
        className="mt-8 text-text-secondary text-base md:text-lg max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        Engineering intelligent unmanned systems for the missions ahead.
      </motion.p>

      {/* CTA Area */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Button variant="primary" arrow={true} size="large">
          EXPLORE SYSTEMS
        </Button>
        <Button variant="secondary" arrow={true} size="large">
          START A PROJECT
        </Button>
      </motion.div>
    </div>
  );
}
