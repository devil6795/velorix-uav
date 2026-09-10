'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';

const steps = [
  { num: '01', label: 'CONCEPT', desc: 'Requirements analysis, mission profiling, and initial architecture definition.' },
  { num: '02', label: 'ENGINEERING', desc: 'Structural design, aerodynamic simulation, and avionics layout.' },
  { num: '03', label: 'PROTOTYPE', desc: 'Rapid manufacturing, component integration, and ground static testing.' },
  { num: '04', label: 'TEST', desc: 'Envelope expansion, autonomy validation, and stress analysis.' },
  { num: '05', label: 'DEPLOY', desc: 'Operational readiness, fleet integration, and continuous monitoring.' }
];

export function RnDPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Layer with Cross-Fade Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            className="w-full h-full bg-[url('/media/rnd/engineering.jpg')] bg-cover bg-center bg-no-repeat opacity-30"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.15, 0.15, 0]),
              scale: useTransform(scrollYProgress, [0, 1], [1.05, 1])
            }}
          />
          <div className="absolute inset-0 bg-background/80" />
          
          {/* Subtle Technical Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-border-active/30" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-border-active/30" />
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-border-active/30" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
          <SectionIndicator number="04" label="R&D PIPELINE" className="mb-12" />
          
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold tracking-tight text-text-primary leading-[1.0] mb-24 whitespace-pre-line uppercase">
            {'FROM\nCONCEPT\nTO FLIGHT.'}
          </h2>

          <div className="relative h-64 md:h-48 max-w-4xl">
            {steps.map((step, index) => {
              const start = index * 0.2;
              const end = (index + 1) * 0.2;
              
              // Each step fades in and out, but the last stays visible at the end
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const opacity = useTransform(
                scrollYProgress,
                [Math.max(0, start - 0.05), start, end - 0.05, end],
                [0, 1, 1, index === steps.length - 1 ? 1 : 0]
              );

              // eslint-disable-next-line react-hooks/rules-of-hooks
              const y = useTransform(
                scrollYProgress,
                [Math.max(0, start - 0.05), start, end - 0.05, end],
                [20, 0, 0, index === steps.length - 1 ? 0 : -20]
              );

              return (
                <motion.div
                  key={step.num}
                  className="absolute top-0 left-0 w-full"
                  style={{ opacity, y }}
                >
                  <div className="flex gap-8 md:gap-12 items-start">
                    <div className="font-mono text-5xl md:text-8xl font-light text-text-tertiary tracking-tighter">
                      {step.num}
                    </div>
                    <div className="pt-2 md:pt-4">
                      <h3 className="font-mono text-2xl md:text-4xl text-text-primary tracking-widest uppercase mb-4">
                        {step.label}
                      </h3>
                      <div className="h-px w-16 md:w-24 bg-accent mb-6" />
                      <p className="text-text-secondary text-base md:text-xl max-w-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Progress Indicator */}
          <div className="absolute bottom-12 right-6 md:right-12 w-px h-32 bg-border">
            <motion.div 
              className="w-full bg-accent origin-top h-full"
              style={{ scaleY: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
