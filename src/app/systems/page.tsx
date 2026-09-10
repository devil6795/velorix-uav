import { Metadata } from 'next';
import Link from 'next/link';
import { systems } from '@/data/systems';
import { Reveal } from '@/components/motion/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TechnicalLabel } from '@/components/ui/TechnicalLabel';

export const metadata: Metadata = {
  title: 'Systems — VELORIX UAV',
  description: 'Mission-focused unmanned aerial platforms.',
};

export default function SystemsPage() {
  return (
    <main className="pt-32 pb-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading as="h1">SYSTEMS</SectionHeading>
          <p className="text-text-secondary text-xl md:text-2xl mt-8 max-w-2xl font-light tracking-wide">
            Mission-focused unmanned aerial platforms.
          </p>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          {systems.map((system, idx) => (
            <Reveal key={system.id} delay={idx * 0.1}>
              <div className="group flex flex-col border border-border bg-surface hover:border-border-active transition-colors duration-500">
                <div className="aspect-[4/3] w-full bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center border-b border-border">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(#1f1f1f 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }} />
                  <span className="text-text-tertiary font-mono text-sm tracking-widest z-10 uppercase">
                    {system.slug.replace('-', ' ')} // VISUALIZATION PENDING
                  </span>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-medium tracking-tight mb-2">{system.name}</h2>
                      <p className="text-text-secondary font-mono text-sm tracking-widest">{system.type}</p>
                    </div>
                    <TechnicalLabel>{system.status}</TechnicalLabel>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-12">
                    {system.description}
                  </p>
                  
                  <div className="mt-auto pt-8 border-t border-border">
                    <Link href={`/systems`} className="inline-flex items-center text-sm font-mono tracking-widest text-text-primary hover:text-accent transition-colors">
                      VIEW SYSTEM <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
