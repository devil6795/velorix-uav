'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';

export function WhatWeBuild() {
  return (
    <section className="py-32 md:py-48 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
          <div className="w-full lg:w-1/3">
            <Reveal>
              <SectionIndicator number="01" label="OVERVIEW" className="mb-12" />
              <SectionHeading className="mb-8 whitespace-pre-line text-text-primary">
                {'WE BUILD\nTHE SYSTEM\nBEHIND THE\nAIRCRAFT.'}
              </SectionHeading>
              <div className="w-16 h-px bg-accent mb-8" />
              <p className="font-mono text-xs text-text-tertiary tracking-[0.2em] uppercase">
                VERTICAL ENGINEERING
              </p>
            </Reveal>
          </div>

          <div className="w-full lg:w-2/3 mt-0 lg:mt-24 space-y-12">
            <Reveal delay={0.2}>
              <p className="text-2xl md:text-3xl font-light text-text-secondary leading-tight max-w-3xl">
                The future of unmanned flight belongs to companies that understand the <span className="text-text-primary font-medium">entire system</span>. We develop capability across the full stack of aerial technology.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-lg md:text-xl text-text-tertiary leading-relaxed max-w-2xl">
                From structural integrity in carbon airframes and high-efficiency propulsion, to low-latency flight controllers and autonomous mission logic. Our approach is vertical. The aircraft, the electronics, the intelligence, the mission—engineered as one integrated solution.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-border">
                {[
                  { value: '01', label: 'AIRFRAMES' },
                  { value: '02', label: 'AVIONICS' },
                  { value: '03', label: 'PROPULSION' },
                  { value: '04', label: 'AUTONOMY' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="font-mono text-sm text-accent tracking-widest">{stat.value}</span>
                    <span className="text-xs text-text-tertiary tracking-widest uppercase">{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
