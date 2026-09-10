import { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact — VELORIX UAV',
  description: "Tell us about your mission. We'll start with the system.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-24">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">CONTACT</h1>
            <p className="text-text-secondary text-xl md:text-2xl font-light tracking-wide max-w-2xl">
              Tell us about your mission. We'll start with the system.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          
          <div className="lg:col-span-4">
            <Reveal delay={0.4}>
              <div className="space-y-16">
                <div>
                  <h3 className="text-sm font-mono tracking-widest text-text-secondary uppercase mb-6 border-b border-border pb-4">
                    Headquarters
                  </h3>
                  <div className="space-y-2 text-text-primary font-light">
                    <p>VELORIX UAV Systems</p>
                    <p className="text-text-secondary">Operations Facility</p>
                    <p className="text-text-secondary">India</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono tracking-widest text-text-secondary uppercase mb-6 border-b border-border pb-4">
                    Communications
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="block text-xs font-mono text-text-tertiary mb-1">GENERAL INQUIRIES</span>
                      <a href="mailto:info@velorix.com" className="text-text-primary hover:text-accent transition-colors">
                        info@velorix.com
                      </a>
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-text-tertiary mb-1">ENGINEERING</span>
                      <a href="mailto:engineering@velorix.com" className="text-text-primary hover:text-accent transition-colors">
                        engineering@velorix.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.6}>
          <div className="mt-32 pt-16 border-t border-border flex justify-center">
            <div className="inline-flex items-center space-x-4 opacity-50">
              <div className="w-12 h-px bg-border"></div>
              <span className="text-xs font-mono tracking-widest uppercase">Engineered in India</span>
              <div className="w-12 h-px bg-border"></div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
