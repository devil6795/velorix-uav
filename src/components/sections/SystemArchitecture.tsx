'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';

const architectureNodes = [
  'AIRFRAME',
  'PROPULSION',
  'FLIGHT CONTROL',
  'NAVIGATION',
  'AUTONOMY',
  'PAYLOAD',
  'MISSION'
];

export function SystemArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIndicator number="05" label="ARCHITECTURE" className="mb-16 justify-center md:justify-start" />
        
        <div ref={containerRef} className="max-w-md mx-auto relative flex flex-col items-center">
          {architectureNodes.map((node, index) => (
            <div key={node} className="w-full flex flex-col items-center">
              <motion.div 
                className="w-full border border-border bg-surface px-6 py-4 flex items-center justify-center z-10 hover:border-accent hover:text-accent transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <span className="font-mono text-[13px] tracking-[0.1em] text-text-secondary uppercase">{node}</span>
              </motion.div>
              
              {index < architectureNodes.length - 1 && (
                <div className="h-12 w-px relative my-2">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-border-active origin-top"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + 0.3, ease: 'easeInOut' }}
                    style={{ height: '100%' }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border-b border-r border-border-active rotate-45"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.2, delay: (index * 0.2) + 0.6 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
