'use client';

import { capabilities } from '@/data/capabilities';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
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
            const colSpan = [
              'md:col-span-12 lg:col-span-7',
              'md:col-span-12 lg:col-span-5',
              'md:col-span-12 lg:col-span-5',
              'md:col-span-12 lg:col-span-7',
              'md:col-span-12 lg:col-span-6',
              'md:col-span-12 lg:col-span-6',
            ][index];

            return (
              <Reveal key={cap.id} delay={index * 0.1} className={colSpan}>
                <Link 
                  href={`/systems`}
                  className={cn(
                    "group relative flex flex-col justify-end bg-surface border border-border overflow-hidden cursor-pointer block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent",
                    "min-h-[450px] md:min-h-[500px] h-full"
                  )}
                  aria-label={`Explore ${cap.title} capabilities`}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 bg-[#0a0a0a]">
                    <Image
                      src={cap.image}
                      alt={`${cap.title} engineering visualization`}
                      fill
                      className="object-cover opacity-50 md:opacity-30 md:grayscale mix-blend-luminosity md:group-hover:opacity-80 md:group-focus-visible:opacity-80 md:group-hover:grayscale-0 md:group-focus-visible:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.02] md:group-hover:scale-105 md:group-focus-visible:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Gradient Overlays for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:via-background/60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent md:from-background/80 md:via-transparent opacity-90 md:opacity-80" />
                  </div>

                  {/* Technical Overlay Elements */}
                  <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10 pointer-events-none">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-sm text-text-tertiary group-hover:text-accent group-focus-visible:text-accent transition-colors duration-500">
                        {cap.number}
                      </span>
                      <div className="w-12 h-px bg-border-active group-hover:bg-accent/50 group-focus-visible:bg-accent/50 transition-colors duration-500" />
                    </div>
                    
                    <div className="flex flex-col items-end gap-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                      <span className="font-mono text-[9px] text-text-secondary uppercase tracking-widest mt-1">
                        SYS.ONLINE
                      </span>
                    </div>
                  </div>

                  {/* Content Layer */}
                  <div className="relative z-10 p-6 md:p-10 mt-auto flex flex-col items-start w-full transform md:translate-y-4 md:group-hover:translate-y-0 md:group-focus-visible:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-text-primary md:text-text-secondary md:group-hover:text-white md:group-focus-visible:text-white transition-colors duration-500">
                      {cap.title}
                    </h3>
                    
                    <p className="text-text-secondary max-w-lg mb-8 leading-relaxed font-light opacity-100 md:opacity-80 md:group-hover:opacity-100 md:group-focus-visible:opacity-100 transition-opacity duration-500">
                      {cap.description}
                    </p>
                    
                    {/* CTA Container */}
                    <div className="mt-auto w-full flex justify-start">
                      <div className="inline-flex items-center justify-center gap-3 font-mono font-medium tracking-[0.08em] uppercase px-6 py-3 text-[11px] border border-border-active bg-surface text-text-primary group-hover:border-text-primary group-hover:bg-white group-hover:text-background group-focus-visible:border-text-primary group-focus-visible:bg-white group-focus-visible:text-background transition-all duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                          EXPLORE SYSTEM
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </span>
                        <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100 z-10" />
                        <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50 group-hover:opacity-100 group-focus-visible:opacity-100 z-10" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/30 group-focus-visible:border-accent/30 transition-colors duration-500 pointer-events-none z-20" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
