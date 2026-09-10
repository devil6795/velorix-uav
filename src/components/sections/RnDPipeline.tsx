'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal, StaggerChildren, staggerItem } from '@/components/motion/Reveal';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', label: 'CONCEPT' },
  { num: '02', label: 'ENGINEERING' },
  { num: '03', label: 'PROTOTYPE', active: true },
  { num: '04', label: 'TEST' },
  { num: '05', label: 'DEPLOY' },
];

export function RnDPipeline() {
  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionIndicator number="04" label="R&D" className="mb-12" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading
            subtitle="We approach unmanned systems as integrated machines—not isolated components."
            className="mb-24 whitespace-pre-line"
          >
            {'FROM\nCONCEPT\nTO FLIGHT.'}
          </SectionHeading>
        </Reveal>

        <div className="relative mb-32">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2" />
          
          <StaggerChildren className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-4">
            {steps.map((step, index) => (
              <motion.div 
                key={step.num} 
                variants={staggerItem}
                className="flex md:flex-col items-center md:items-start gap-6 md:gap-4 relative group bg-surface md:bg-transparent pr-4 md:pr-0"
              >
                {/* Mobile connecting line */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-10 left-3 w-px h-full bg-border" />
                )}
                
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center bg-surface transition-colors duration-300 z-10 ${
                  step.active ? 'border-accent' : 'border-border group-hover:border-text-secondary'
                }`}>
                  <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    step.active ? 'bg-accent' : 'bg-transparent group-hover:bg-text-secondary'
                  }`} />
                </div>
                
                <div>
                  <div className={`font-mono text-sm mb-1 transition-colors duration-300 ${
                    step.active ? 'text-accent' : 'text-text-tertiary group-hover:text-text-secondary'
                  }`}>
                    {step.num}
                  </div>
                  <div className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                    step.active ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                  }`}>
                    {step.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>

        {/* Integration Formula */}
        <Reveal delay={0.3}>
          <div className="border border-border p-8 md:p-12 text-center bg-background relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 font-mono text-sm md:text-base text-text-secondary tracking-wider uppercase relative z-10">
              <Reveal delay={0.4} duration={0.5} direction="none"><span className="text-text-primary">AIRFRAME</span></Reveal>
              <Reveal delay={0.5} duration={0.5} direction="none"><span className="text-text-tertiary">+</span></Reveal>
              <Reveal delay={0.6} duration={0.5} direction="none"><span className="text-text-primary">PROPULSION</span></Reveal>
              <Reveal delay={0.7} duration={0.5} direction="none"><span className="text-text-tertiary">+</span></Reveal>
              <Reveal delay={0.8} duration={0.5} direction="none"><span className="text-text-primary">CONTROL</span></Reveal>
              <Reveal delay={0.9} duration={0.5} direction="none"><span className="text-text-tertiary">+</span></Reveal>
              <Reveal delay={1.0} duration={0.5} direction="none"><span className="text-text-primary">SENSORS</span></Reveal>
              <Reveal delay={1.1} duration={0.5} direction="none"><span className="text-text-tertiary">+</span></Reveal>
              <Reveal delay={1.2} duration={0.5} direction="none"><span className="text-text-primary">SOFTWARE</span></Reveal>
              <Reveal delay={1.3} duration={0.5} direction="none"><span className="text-accent mx-2">=</span></Reveal>
              <Reveal delay={1.4} duration={0.5} direction="up"><span className="text-accent font-semibold">MISSION SYSTEM</span></Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
