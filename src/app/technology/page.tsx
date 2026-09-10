import { Metadata } from 'next';
import { capabilities } from '@/data/capabilities';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Technology — VELORIX UAV',
  description: 'The engineering behind the flight.',
};

export default function TechnologyPage() {
  return (
    <main className="pt-32 pb-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-24">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">TECHNOLOGY</h1>
            <p className="text-text-secondary text-xl md:text-2xl font-light tracking-wide max-w-2xl">
              The engineering behind the flight.
            </p>
          </div>
        </Reveal>

        <div className="space-y-32 md:space-y-48">
          {capabilities.map((cap, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={cap.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
                <div className="flex-1 w-full">
                  <Reveal direction={isEven ? 'right' : 'left'}>
                    <div className="font-mono text-text-tertiary text-xl mb-4 tracking-widest">{cap.number}</div>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">{cap.title}</h2>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
                      {cap.description}
                    </p>
                  </Reveal>
                </div>
                
                <div className="flex-1 w-full">
                  <Reveal delay={0.2} direction={isEven ? 'left' : 'right'}>
                    <div className="aspect-square lg:aspect-[4/3] bg-surface border border-border relative overflow-hidden flex items-center justify-center p-8">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        opacity: 0.5
                      }} />
                      <div className="z-10 text-center border border-border-active bg-[#0d0d0d]/80 backdrop-blur-sm p-6 w-full max-w-xs">
                        <div className="w-12 h-12 border border-border-active mx-auto mb-4 rounded-full flex items-center justify-center">
                          <span className="text-accent">+</span>
                        </div>
                        <span className="text-text-secondary font-mono text-xs tracking-widest uppercase block">
                          SCHEMATIC VIEW
                        </span>
                        <span className="text-text-tertiary font-mono text-[10px] tracking-widest uppercase block mt-2">
                          {cap.id}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
