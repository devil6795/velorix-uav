'use client';

import { capabilities } from '@/data/capabilities';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function InteractiveCapabilities() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border" id="capabilities">
      <div className="max-w-[1440px] mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
            <div>
              <SectionIndicator number="02" label="CAPABILITIES" className="mb-8" />
              <SectionHeading>
                CORE<br/>COMPETENCIES.
              </SectionHeading>
            </div>
            <p className="text-text-secondary max-w-md font-mono text-sm uppercase tracking-wider leading-relaxed">
              Fully integrated engineering stack from airframe structures to autonomous mission logic.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {capabilities.map((cap, index) => {
            // Create a varied grid layout
            const colSpan = [
              'md:col-span-12 lg:col-span-7', // 1
              'md:col-span-12 lg:col-span-5', // 2
              'md:col-span-12 lg:col-span-5', // 3
              'md:col-span-12 lg:col-span-7', // 4
              'md:col-span-12 lg:col-span-6', // 5
              'md:col-span-12 lg:col-span-6', // 6
            ][index];

            return (
              <Reveal key={cap.id} delay={index * 0.1} className={colSpan}>
                <div 
                  className={cn(
                    "group relative flex flex-col justify-end bg-surface border border-border overflow-hidden cursor-pointer",
                    "min-h-[450px] md:min-h-[500px] h-full"
                  )}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-[#0a0a0a]">
                    <Image
                      src={cap.image}
                      alt={cap.title}
                      fill
                      className="object-cover opacity-30 grayscale mix-blend-luminosity group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.02] group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Technical Overlay Elements */}
                  <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-text-tertiary group-hover:text-accent transition-colors duration-500">
                        {cap.number}
                      </span>
                      <div className="w-12 h-px bg-border-active group-hover:bg-accent/50 transition-colors duration-500" />
                    </div>
                    
                    <div className="flex flex-col items-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest mt-1">
                        SYS.ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 p-6 md:p-10 mt-auto flex flex-col items-start w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-text-secondary group-hover:text-white transition-colors duration-500">
                      {cap.title}
                    </h3>
                    
                    <p className="text-text-secondary max-w-lg mb-8 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                      {cap.description}
                    </p>
                    
                    {/* CTA Container */}
                    <div className="mt-auto w-full flex justify-start">
                      <Button 
                        variant="secondary" 
                        arrow 
                        className="bg-background/80 backdrop-blur-sm group-hover:bg-white group-hover:text-background group-hover:border-white transition-all duration-300"
                      >
                        EXPLORE SYSTEM
                      </Button>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 transition-colors duration-500 pointer-events-none z-20" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
