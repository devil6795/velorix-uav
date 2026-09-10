'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';

const architectureNodes = [
  { id: 'AIRFRAME', desc: 'Structural integrity, aerodynamics, and thermal management.' },
  { id: 'PROPULSION', desc: 'Power delivery, energy storage, and thrust generation.' },
  { id: 'FLIGHT CONTROL', desc: 'Stabilization, navigation logic, and control surfaces.' },
  { id: 'NAVIGATION', desc: 'Positioning, orientation, and spatial awareness.' },
  { id: 'AUTONOMY', desc: 'Path planning, obstacle avoidance, and decision logic.' },
  { id: 'PAYLOAD', desc: 'Sensor integration, data acquisition, and mission hardware.' },
  { id: 'MISSION', desc: 'Strategic execution, communication, and fleet coordination.' }
];

export function SystemArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionIndicator number="05" label="ARCHITECTURE" className="mb-24 justify-center md:justify-start" />
        
        <div ref={containerRef} className="max-w-3xl mx-auto relative flex flex-col md:flex-row gap-12 md:gap-24">
          
          {/* Diagram Column */}
          <div className="flex-1 flex flex-col items-center relative">
            {architectureNodes.map((node, index) => {
              // Calculate individual progress ranges for each connecting line
              const start = index * (1 / architectureNodes.length);
              const end = start + (1 / architectureNodes.length);
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const lineProgress = useTransform(scrollYProgress, [start, end], [0, 1]);

              return (
                <div key={node.id} className="w-full flex flex-col items-center">
                  <motion.div 
                    className={`w-full max-w-[280px] border px-6 py-4 flex items-center justify-center z-10 cursor-pointer transition-colors duration-300 ${
                      activeNode === node.id 
                        ? 'border-accent text-accent bg-surface' 
                        : 'border-border bg-background text-text-secondary hover:border-text-primary hover:text-text-primary'
                    }`}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="font-mono text-[13px] tracking-[0.1em] uppercase">{node.id}</span>
                  </motion.div>
                  
                  {index < architectureNodes.length - 1 && (
                    <div className="h-16 w-px relative my-2">
                      <div className="absolute top-0 left-0 w-full h-full bg-border" />
                      <motion.div
                        className="absolute top-0 left-0 w-full bg-accent origin-top z-0"
                        style={{ scaleY: lineProgress, height: '100%' }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Context/Explanation Column */}
          <div className="flex-1 sticky top-1/2 -translate-y-1/2 h-[200px] flex items-center hidden md:flex">
            <AnimatePresence mode="wait">
              {activeNode ? (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="border-l border-accent pl-6 py-2"
                >
                  <h4 className="font-mono text-sm tracking-widest text-accent mb-2 uppercase">
                    {activeNode}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {architectureNodes.find(n => n.id === activeNode)?.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-text-tertiary font-mono text-[11px] uppercase tracking-widest"
                >
                  [ Select node for details ]
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Mobile Explanation (Inline) */}
          <div className="md:hidden h-24 mt-8 flex justify-center text-center">
             <AnimatePresence mode="wait">
              {activeNode && (
                <motion.div
                  key={activeNode}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="font-mono text-sm tracking-widest text-accent mb-2 uppercase">
                    {activeNode}
                  </h4>
                  <p className="text-text-secondary text-sm px-6">
                    {architectureNodes.find(n => n.id === activeNode)?.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
