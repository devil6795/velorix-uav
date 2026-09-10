import { Metadata } from 'next';
import { timeline } from '@/data/timeline';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'R&D — VELORIX UAV',
  description: 'From concept to flight. Our development roadmap.',
};

export default function RndPage() {
  return (
    <main className="pt-32 pb-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-24">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 whitespace-pre-line">
              RESEARCH &{'\n'}DEVELOPMENT
            </h1>
            <p className="text-text-secondary text-xl md:text-2xl font-light tracking-wide max-w-2xl">
              From concept to flight. Our development roadmap.
            </p>
          </div>
        </Reveal>

        <div className="relative max-w-4xl mx-auto mt-24">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 md:translate-x-0" />
          
          <div className="space-y-24">
            {timeline.map((phase, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-center w-full">
                  <Reveal className="w-full flex md:contents">
                    <div className={`hidden md:block w-1/2 ${isEven ? 'pr-16 text-right' : 'order-2 pl-16 text-left'}`}>
                      {isEven && (
                        <div>
                          <div className="font-mono text-accent tracking-widest mb-2">{phase.period}</div>
                          <h3 className="text-2xl font-medium mb-4">{phase.title}</h3>
                          <p className="text-text-secondary leading-relaxed">{phase.description}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_10px_rgba(96,165,250,0.2)] z-10" />
                    
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'order-1 md:order-none' : 'md:pl-16'}`}>
                      {(!isEven || true) && (
                        <div className={isEven ? 'md:hidden' : ''}>
                          <div className="font-mono text-accent tracking-widest mb-2">{phase.period}</div>
                          <h3 className="text-2xl font-medium mb-4">{phase.title}</h3>
                          <p className="text-text-secondary leading-relaxed">{phase.description}</p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-48 max-w-3xl mx-auto text-center border border-border bg-surface p-12 md:p-16">
            <h2 className="text-sm font-mono tracking-widest text-text-secondary mb-8 uppercase">R&D Philosophy</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-12">
              We operate at the intersection of aeronautics and autonomy. 
              Our rapid iteration cycles and vertically integrated testing 
              allow us to push the boundaries of what is possible in uncrewed flight.
            </p>
            <div className="inline-block px-4 py-2 border border-border-active bg-background text-xs font-mono tracking-widest text-text-tertiary">
              ENGINEER. TEST. LEARN. REBUILD. FLY.
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
