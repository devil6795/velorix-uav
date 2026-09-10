'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { ChevronDown } from 'lucide-react';

export function ContactCTA() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    // TODO: Connect to backend API or email service
    setIsSubmitted(true);
  };

  return (
    <section className="py-32 md:py-40 relative bg-surface/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <Reveal>
              <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-semibold tracking-tight text-text-primary leading-[1.05] whitespace-pre-line mb-6">
                {'HAVE A MISSION?\nLET\'S BUILD THE AIRCRAFT.'}
              </h2>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Tell us what you need to achieve. We'll start with the system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="large" arrow>START A PROJECT</Button>
                <Button variant="secondary" size="large" arrow>EXPLORE SYSTEMS</Button>
              </div>
            </Reveal>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal delay={0.2} direction="left">
              <div className="bg-surface border border-border p-8 md:p-10 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="cta-name" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-secondary">Name</label>
                          <input required type="text" id="cta-name" name="name" placeholder="YOUR NAME" className="w-full bg-background border border-border text-text-primary placeholder:text-text-tertiary px-4 py-3 rounded-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="cta-company" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-secondary">Company <span className="text-text-tertiary">(Optional)</span></label>
                          <input type="text" id="cta-company" name="company" placeholder="COMPANY NAME" className="w-full bg-background border border-border text-text-primary placeholder:text-text-tertiary px-4 py-3 rounded-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="cta-email" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-secondary">Email</label>
                        <input required type="email" id="cta-email" name="email" placeholder="EMAIL ADDRESS" className="w-full bg-background border border-border text-text-primary placeholder:text-text-tertiary px-4 py-3 rounded-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="cta-project" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-secondary">Project Type</label>
                        <div className="relative">
                          <select required id="cta-project" name="project" defaultValue="" className="w-full bg-background border border-border text-text-primary placeholder:text-text-tertiary px-4 py-3 rounded-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all appearance-none cursor-pointer pr-10">
                            <option value="" disabled className="text-text-tertiary">SELECT AN AREA...</option>
                            <option value="UAV Platform">UAV Platform</option>
                            <option value="Custom UAV">Custom UAV</option>
                            <option value="Propulsion">Propulsion</option>
                            <option value="Payload Integration">Payload Integration</option>
                            <option value="Autonomy">Autonomy</option>
                            <option value="R&D">R&D</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Other">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-text-secondary" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="cta-message" className="block font-mono text-[11px] tracking-[0.12em] uppercase text-text-secondary">Message</label>
                        <textarea required id="cta-message" name="message" placeholder="HOW CAN WE HELP YOU?" rows={4} className="w-full bg-background border border-border text-text-primary placeholder:text-text-tertiary px-4 py-3 rounded-none focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-y"></textarea>
                      </div>

                      <div className="pt-2">
                        <Button type="submit" className="w-full justify-center" arrow>
                          SEND MESSAGE
                        </Button>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4"
                    >
                      <div className="w-12 h-12 rounded-full border border-accent text-accent flex items-center justify-center mb-4">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-mono text-sm tracking-[0.15em] text-accent uppercase">Message Sent</h3>
                      <p className="text-text-secondary">We'll be in touch shortly to discuss your mission.</p>
                      
                      <Button variant="ghost" onClick={() => setIsSubmitted(false)} className="mt-8 text-xs">
                        SEND ANOTHER MESSAGE
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
