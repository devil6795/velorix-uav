'use client';

import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal, StaggerChildren, staggerItem } from '@/components/motion/Reveal';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionIndicator number="06" label="ABOUT" className="mb-16" />
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
          <div className="w-full lg:w-[60%]">
            <Reveal>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-semibold tracking-tight text-text-primary leading-[1.05] whitespace-pre-line">
                {'THE AIRCRAFT IS ONLY\nTHE BEGINNING.'}
              </h2>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-[40%]">
            <StaggerChildren staggerDelay={0.15} className="space-y-6">
              <motion.p variants={staggerItem} className="text-text-secondary text-base md:text-lg leading-relaxed">
                VELORIX UAV is being built around a simple idea: The future of unmanned flight will belong to companies that understand the entire system.
              </motion.p>
              <motion.p variants={staggerItem} className="text-text-secondary text-base md:text-lg leading-relaxed">
                We are developing capability across the full stack of unmanned aerial technology—from airframe structures and propulsion to flight electronics, sensor integration, autonomy software and mission-level systems design.
              </motion.p>
              <motion.p variants={staggerItem} className="text-text-secondary text-base md:text-lg leading-relaxed">
                Our approach is vertical. The aircraft, the electronics, the intelligence, the mission—engineered as one system.
              </motion.p>
            </StaggerChildren>
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 border-y border-border divide-y md:divide-y-0 md:divide-x divide-border">
            {['FULL-STACK UAV ENGINEERING', 'MISSION-FIRST DESIGN', 'INDIGENOUS DEVELOPMENT'].map((point, i) => (
              <div key={i} className="py-8 md:px-8 first:md:pl-0 last:md:pr-0 flex items-center justify-center md:justify-start">
                <span className="font-mono text-[13px] tracking-[0.1em] text-text-secondary uppercase text-center md:text-left">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
