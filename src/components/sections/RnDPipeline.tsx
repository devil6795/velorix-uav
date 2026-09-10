'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { useState } from 'react';

const steps = [
  { num: '01', label: 'CONCEPT', desc: 'Requirements analysis, mission profiling, and initial architecture definition.' },
  { num: '02', label: 'ENGINEERING', desc: 'Structural design, aerodynamic simulation, and avionics layout.' },
  { num: '03', label: 'PROTOTYPE', desc: 'Rapid manufacturing, component integration, and ground static testing.' },
  { num: '04', label: 'TEST', desc: 'Envelope expansion, autonomy validation, and stress analysis.' },
  { num: '05', label: 'DEPLOY', desc: 'Operational readiness, fleet integration, and continuous monitoring.' }
];

function StageContent({ step, isActive }: { step: typeof steps[number]; isActive: boolean }) {
  return (
    <motion.div
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        y: isActive ? 0 : 30,
        filter: isActive ? 'blur(0px)' : 'blur(4px)',
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute top-0 left-0 w-full pointer-events-none"
      aria-hidden={!isActive}
    >
      <div className="flex gap-8 md:gap-12 items-start">
        <div className="font-mono text-5xl md:text-8xl font-light text-text-tertiary/30 tracking-tighter select-none" aria-hidden="true">
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
}

export function RnDPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Derive active index from scroll progress — single source of truth
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const segmentSize = 1 / steps.length;
    const newIndex = Math.min(
      steps.length - 1,
      Math.floor(latest / segmentSize)
    );
    setActiveIndex(newIndex);
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Layer with Cross-Fade Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <motion.div 
            className="w-full h-full bg-[url('/media/rnd/engineering.jpg')] bg-cover bg-center bg-no-repeat"
            style={{ 
              opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.12, 0.12, 0]),
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

          {/* Stage Content — only one active at a time */}
          <div className="relative min-h-[280px] md:min-h-[220px] max-w-4xl">
            {steps.map((step, index) => (
              <StageContent
                key={step.num}
                step={step}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          {/* Stage Progress Dots */}
          <div className="flex items-center gap-3 mt-16">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="flex items-center gap-2"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    index === activeIndex
                      ? 'bg-accent scale-125'
                      : index < activeIndex
                        ? 'bg-text-tertiary'
                        : 'bg-border'
                  }`}
                />
                <span className={`font-mono text-[9px] tracking-widest uppercase transition-colors duration-500 ${
                  index === activeIndex ? 'text-accent' : 'text-text-tertiary/40'
                }`}>
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-4 h-px transition-colors duration-500 ${
                    index < activeIndex ? 'bg-text-tertiary' : 'bg-border'
                  }`} />
                )}
              </div>
            ))}
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
