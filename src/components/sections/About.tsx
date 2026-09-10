'use client';

import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal, StaggerChildren, staggerItem } from '@/components/motion/Reveal';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionIndicator number="06" label="ABOUT" className="mb-24" />
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32">
          <div className="w-full lg:w-1/2">
            <Reveal>
              <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-bold tracking-tighter text-text-primary leading-[1.0] uppercase">
                We Build The<br />
                System Behind<br />
                The Aircraft.
              </h2>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pt-4">
            <StaggerChildren staggerDelay={0.15} className="space-y-8">
              <motion.div variants={staggerItem} className="h-px w-16 bg-accent mb-8" />
              <motion.p variants={staggerItem} className="font-mono text-sm md:text-base text-text-secondary leading-relaxed uppercase tracking-wide">
                Velorix UAV operates on a singular premise: <span className="text-text-primary">True capability requires full-stack integration.</span>
              </motion.p>
              <motion.p variants={staggerItem} className="text-text-tertiary text-sm md:text-base leading-relaxed max-w-lg">
                We engineer the complete architecture—from carbon-fiber airframes and high-density propulsion to flight control electronics, sensor suites, and mission-level autonomy logic. 
              </motion.p>
              <motion.p variants={staggerItem} className="text-text-tertiary text-sm md:text-base leading-relaxed max-w-lg">
                The aircraft is not an assembly of disparate parts. It is a unified, highly optimized machine designed for complex environments.
              </motion.p>
            </StaggerChildren>
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-t border-border pt-12 md:divide-x divide-border">
            {[
              { title: 'FULL-STACK', desc: 'Integrated engineering approach.' },
              { title: 'MISSION-FIRST', desc: 'Designed for operational success.' },
              { title: 'INDIGENOUS R&D', desc: 'Proprietary systems and logic.' }
            ].map((point, i) => (
              <div key={i} className="md:px-12 first:md:pl-0 last:md:pr-0">
                <span className="block font-mono text-[14px] font-bold tracking-[0.1em] text-text-primary uppercase mb-2">
                  {point.title}
                </span>
                <span className="block font-mono text-[11px] tracking-wider text-text-tertiary uppercase">
                  {point.desc}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
