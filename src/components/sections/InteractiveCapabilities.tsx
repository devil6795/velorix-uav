'use client';

import { useState } from 'react';
import { capabilities } from '@/data/capabilities';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const capabilityImages: Record<string, string> = {
  'uav-platforms': '/media/uav/system-01.jpg',
  'propulsion': '/media/technology/propulsion.jpg',
  'flight-systems': '/media/technology/circuit.jpg',
  'autonomy': '/media/rnd/engineering.jpg',
  'payload-integration': '/media/company/carbon.jpg',
  'mission-systems': '/media/uav/system-01.jpg'
};

export function InteractiveCapabilities() {
  const [activeId, setActiveId] = useState(capabilities[0].id);

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6">
        <Reveal>
          <SectionIndicator number="02" label="CAPABILITIES" className="mb-12" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* List Side */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <SectionHeading className="mb-16 whitespace-pre-line">
                {'CORE\nCOMPETENCIES.'}
              </SectionHeading>
            </Reveal>

            <div className="flex flex-col border-t border-border">
              {capabilities.map((cap) => {
                const isActive = activeId === cap.id;
                
                return (
                  <div 
                    key={cap.id}
                    className="group relative border-b border-border"
                    onMouseEnter={() => setActiveId(cap.id)}
                    onClick={() => setActiveId(cap.id)}
                  >
                    <div className="cursor-pointer py-6 flex flex-col gap-4">
                      <div className="flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-6">
                          <span className={cn(
                            "font-mono text-sm transition-colors duration-300",
                            isActive ? 'text-accent' : 'text-text-tertiary group-hover:text-text-secondary'
                          )}>
                            {cap.number}
                          </span>
                          <h4 className={cn(
                            "text-xl md:text-2xl tracking-tight transition-colors duration-300",
                            isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                          )}>
                            {cap.title}
                          </h4>
                        </div>
                        <motion.div
                          animate={{ rotate: isActive ? 45 : 0, opacity: isActive ? 1 : 0 }}
                          className="text-accent"
                        >
                          <ArrowUpRight className="w-6 h-6" />
                        </motion.div>
                      </div>
                      
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-4 pl-11 pr-8">
                              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                                {cap.description}
                              </p>
                              <Link 
                                href={`/capabilities#${cap.id}`}
                                className="inline-flex items-center gap-2 font-mono text-xs text-text-primary uppercase tracking-wider hover:text-accent transition-colors"
                              >
                                EXPLORE SYSTEM <ArrowUpRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-7 relative h-[60vh] lg:h-auto min-h-[500px]">
            <div className="absolute inset-0 bg-background border border-border overflow-hidden">
              <AnimatePresence mode="wait">
                {capabilities.map((cap) => {
                  if (cap.id !== activeId) return null;
                  return (
                    <motion.div
                      key={cap.id}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={capabilityImages[cap.id]}
                        alt={cap.title}
                        fill
                        className="object-cover opacity-80"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                      {/* Technical overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent mix-blend-multiply" />
                      <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px]" />
                      
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                        <div className="font-mono text-[10px] text-accent tracking-widest uppercase">
                          SYS.{cap.number} // ACTIVE
                        </div>
                        <div className="font-mono text-[10px] text-text-tertiary tracking-widest text-right">
                          LAT: 47.6062<br/>
                          LNG: -122.3321
                        </div>
                      </div>
                      
                      {/* Grid Lines */}
                      <div className="absolute inset-0 border-white/5 pointer-events-none" style={{
                        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                        backgroundSize: '100px 100px',
                        backgroundPosition: 'center center'
                      }} />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
