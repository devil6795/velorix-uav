'use client';

import { capabilities } from '@/data/capabilities';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal, StaggerChildren, staggerItem } from '@/components/motion/Reveal';
import { motion } from 'framer-motion';

export function WhatWeBuild() {
  return (
    <section className="py-32 md:py-40 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionIndicator number="01" label="OVERVIEW" className="mb-12" />
        </Reveal>
        
        <Reveal delay={0.1}>
          <SectionHeading
            subtitle="VELORIX UAV develops unmanned aerial systems across airframes, propulsion, flight electronics, autonomy, payload integration and mission-specific platforms."
            className="mb-24 whitespace-pre-line"
          >
            {'WE BUILD THE\nSYSTEM BEHIND\nTHE AIRCRAFT.'}
          </SectionHeading>
        </Reveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => {
            let spanClass = 'col-span-1';
            let isHorizontal = false;
            
            if (index === 0) spanClass = 'md:col-span-2 lg:col-span-2';
            if (index === 1) spanClass = 'col-span-1';
            if (index === 2) spanClass = 'col-span-1';
            if (index === 3) spanClass = 'md:col-span-2 lg:col-span-2';
            if (index === 4 || index === 5) {
              spanClass = 'md:col-span-2 lg:col-span-3';
              isHorizontal = true;
            }

            return (
              <motion.div
                key={cap.id}
                variants={staggerItem}
                className={`group relative p-6 md:p-8 bg-surface/30 border-t border-border hover:border-accent transition-all duration-300 hover:-translate-y-1 ${spanClass} ${
                  isHorizontal ? 'flex flex-col md:flex-row gap-6 md:items-start lg:items-center' : ''
                }`}
              >
                <div className={`font-mono text-text-tertiary group-hover:text-accent transition-colors duration-300 text-sm ${isHorizontal ? 'md:mb-0 md:w-16 shrink-0' : 'mb-8'}`}>
                  [{cap.number}]
                </div>
                <div className={isHorizontal ? 'flex-1' : ''}>
                  <h3 className="font-semibold text-lg md:text-xl text-text-primary mb-3 uppercase tracking-wide">
                    {cap.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-2xl">
                    {isHorizontal ? cap.description : cap.shortDescription}
                  </p>
                </div>
                {/* Visual accent corner */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-transparent group-hover:border-accent transition-colors duration-300" />
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
