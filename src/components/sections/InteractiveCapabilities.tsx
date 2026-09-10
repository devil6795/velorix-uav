'use client';

import { useState } from 'react';
import { capabilities } from '@/data/capabilities';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function InteractiveCapabilities() {
  const [activeId, setActiveId] = useState(capabilities[0].id);

  const activeCapability = capabilities.find(c => c.id === activeId) || capabilities[0];

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionIndicator number="02" label="CAPABILITIES" className="mb-12" />
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-[40%]">
            <Reveal>
              <SectionHeading className="mb-12 whitespace-pre-line">
                {'WHAT WE\nENGINEER.'}
              </SectionHeading>
            </Reveal>

            <div className="hidden lg:block">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-semibold tracking-wide text-text-primary uppercase">
                    {activeCapability.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {activeCapability.description}
                  </p>
                  <Link 
                    href={`/capabilities#${activeCapability.id}`}
                    className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover transition-colors mt-4 uppercase tracking-wider"
                  >
                    LEARN MORE <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="w-full lg:w-[60%] flex flex-col border-t border-border">
            {capabilities.map((cap) => {
              const isActive = activeId === cap.id;
              
              return (
                <div 
                  key={cap.id}
                  className="group relative border-b border-border overflow-hidden"
                  onMouseEnter={() => setActiveId(cap.id)}
                  onClick={() => setActiveId(cap.id)}
                >
                  <div className="cursor-pointer py-6 flex items-center justify-between transition-colors">
                    <div className="flex items-center gap-6">
                      <span className={`font-mono text-sm transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text-tertiary group-hover:text-text-secondary'}`}>
                        {cap.number}
                      </span>
                      <h4 className={`text-lg uppercase tracking-wide transition-colors duration-300 ${isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                        {cap.title}
                      </h4>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      className={`transition-colors duration-300 ${isActive ? 'text-accent' : 'text-text-tertiary group-hover:text-text-secondary'}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                  
                  {/* Mobile expansion */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="pb-6 pl-11 space-y-4">
                          <p className="text-text-secondary text-sm leading-relaxed">
                            {cap.description}
                          </p>
                          <Link 
                            href={`/capabilities#${cap.id}`}
                            className="inline-flex items-center gap-2 font-mono text-xs text-accent uppercase tracking-wider"
                          >
                            LEARN MORE <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
