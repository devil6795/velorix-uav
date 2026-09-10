'use client';

import { WordByWordReveal } from '@/components/motion/TextReveal';
import { Reveal } from '@/components/motion/Reveal';

const words = ['ENGINEER.', 'TEST.', 'LEARN.', 'REBUILD.', 'FLY.'];

export function Philosophy() {
  return (
    <section className="py-32 min-h-[70vh] flex flex-col items-center justify-center bg-background relative">
      <div className="max-w-7xl mx-auto px-6 text-center w-full flex flex-col items-center">
        <WordByWordReveal 
          words={words} 
          className="flex flex-wrap justify-center gap-x-2 md:gap-x-4 text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.03em] text-text-primary uppercase leading-tight" 
          wordClassName="!mr-0"
          delay={0.2}
          stagger={0.2}
        />
        
        <Reveal delay={1.4} direction="up" className="mt-12 flex flex-col items-center gap-6 w-full">
          <div className="w-16 h-px bg-border-active" />
          <span className="font-mono text-[13px] tracking-[0.15em] text-text-tertiary uppercase">
            PRECISION OVER NOISE.
          </span>
        </Reveal>
      </div>
    </section>
  );
}
