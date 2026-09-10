'use client';

import { systems } from '@/data/systems';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';

export function FeaturedSystems() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionIndicator number="03" label="SYSTEMS" className="mb-12" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading className="mb-24 whitespace-pre-line">
            {'SYSTEMS DESIGNED\nAROUND THE MISSION.'}
          </SectionHeading>
        </Reveal>

        <div className="space-y-32">
          {systems.map((system, index) => {
            const isEven = index % 2 === 0;
            return (
              <Reveal key={system.id} delay={0.2} duration={1}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                  
                  {/* Image Placeholder */}
                  <div className="w-full lg:w-3/5 aspect-video md:aspect-[4/3] bg-surface border border-border relative overflow-hidden group">
                    {/* Grid Pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.03]" 
                      style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-text-tertiary/30 tracking-widest text-sm">
                        SYSTEM VISUAL
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-2/5 space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-xs text-text-secondary tracking-widest uppercase">
                        {system.type}
                      </span>
                      <span className="inline-block px-2 py-1 border border-accent/30 text-accent text-[10px] font-mono tracking-wide rounded-full uppercase bg-accent/5">
                        {system.status}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-text-primary tracking-tight">
                      {system.name}
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      {system.description}
                    </p>
                    <div className="pt-6">
                      <Button href={`/systems/${system.slug}`} variant="secondary" arrow>
                        VIEW SYSTEM
                      </Button>
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
