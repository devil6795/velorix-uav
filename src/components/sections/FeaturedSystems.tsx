'use client';

import { systems } from '@/data/systems';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function FeaturedSystems() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6">
        <Reveal>
          <SectionIndicator number="03" label="SYSTEMS" className="mb-12" />
        </Reveal>

        <Reveal delay={0.1}>
          <SectionHeading className="mb-24 whitespace-pre-line">
            {'SYSTEMS DESIGNED\nAROUND THE MISSION.'}
          </SectionHeading>
        </Reveal>

        <div className="space-y-4">
          {systems.map((system, index) => {
            return (
              <Reveal key={system.id} delay={0.2} duration={0.8}>
                <Link href={`/systems/${system.slug}`} className="block group">
                  <div className="relative h-[60vh] md:h-[75vh] w-full bg-surface border border-border overflow-hidden">
                    {/* Background Image */}
                    <motion.div 
                      className="absolute inset-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Image
                        src={'/media/uav/system-01.jpg'} 
                        alt={system.name}
                        fill
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                        sizes="100vw"
                      />
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between pointer-events-none">
                      {/* Top Bar */}
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-2">
                          <span className="font-mono text-xs text-text-tertiary tracking-widest uppercase">
                            {system.type}
                          </span>
                          <span className="inline-block px-2 py-1 border border-border text-text-secondary text-[10px] font-mono tracking-wide rounded-sm uppercase bg-surface/50 backdrop-blur-sm w-fit">
                            STATUS: {system.status}
                          </span>
                        </div>
                        
                        <div className="w-12 h-12 rounded-full border border-border bg-surface/50 backdrop-blur-sm flex items-center justify-center text-text-primary group-hover:bg-accent group-hover:border-accent group-hover:text-background transition-colors duration-300">
                          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Bottom Content */}
                      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-24">
                        <div className="space-y-4 max-w-2xl">
                          <h3 className="text-4xl md:text-6xl font-semibold text-text-primary tracking-tight">
                            {system.name}
                          </h3>
                          <div className="overflow-hidden">
                            <motion.p 
                              className="text-text-secondary text-base leading-relaxed max-w-lg hidden md:block"
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                            >
                              {system.description}
                            </motion.p>
                          </div>
                        </div>
                        
                        <div className="font-mono text-[10px] text-text-tertiary tracking-widest uppercase text-right shrink-0">
                          ID: {system.id.toUpperCase()}<br/>
                          CLASS: EXPERIMENTAL
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
