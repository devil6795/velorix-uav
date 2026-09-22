import { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'About — VELORIX UAV',
  description: 'Full-stack UAV engineering and development.',
};

export default function AboutPage() {
  const values = [
    'FULL-STACK UAV ENGINEERING',
    'MISSION-FIRST DESIGN',
    'INDIGENOUS DEVELOPMENT',
    'VERTICAL INTEGRATION'
  ];

  return (
    <main className="pt-32 pb-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-24">
            <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 whitespace-pre-line">
              ABOUT{'\n'}VELORIX UAV
            </h1>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="sticky top-32 flex flex-col gap-6 items-start">
                <div className="aspect-[4/5] w-full bg-surface border border-border relative overflow-hidden">
                  <img 
                    src="/founder.jpg" 
                    alt="Shantanu - Founder of Velorix UAV" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 border border-white/10 pointer-events-none" />
                </div>
                
                <a 
                  href="https://shantanu-portfolio-eight.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full justify-center inline-flex items-center gap-3 px-8 py-4 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-xl text-sm font-mono text-orange-200 hover:scale-105 hover:border-orange-500 hover:text-white hover:bg-orange-500/20 transition-all shadow-[0_0_20px_rgba(255,128,0,0.15)] group"
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                  View Founder's Portfolio
                  <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 space-y-16 mt-8 lg:mt-0">
            <Reveal delay={0.2}>
              <div className="space-y-8">
                <h2 className="text-sm font-mono tracking-widest text-text-secondary uppercase">Vision</h2>
                <p className="text-xl md:text-2xl font-light leading-relaxed">
                  To engineer the next generation of autonomous flight systems, 
                  pushing the boundaries of aerospace engineering to create 
                  platforms that perform reliably in the most demanding conditions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="space-y-8">
                <h2 className="text-sm font-mono tracking-widest text-text-secondary uppercase">Mission</h2>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We are building a robust foundation of indigenous technology. 
                  Our focus is on deep engineering, vertical integration, and uncompromised quality. 
                  By controlling the entire stack—from airframe to flight control—we ensure 
                  that our platforms exceed standard performance metrics and provide unmatched reliability.
                </p>
                <p className="text-text-secondary text-lg leading-relaxed">
                  We do not rely on off-the-shelf compromises. Every component, line of code, 
                  and aerodynamic surface is designed with a singular focus on mission success.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="space-y-8 pt-8 border-t border-border">
                <h2 className="text-sm font-mono tracking-widest text-text-secondary uppercase">Core Tenets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value, i) => (
                    <div key={i} className="border border-border bg-surface p-6 flex items-center">
                      <span className="text-xs font-mono tracking-widest text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="pt-16">
                <div className="inline-block px-6 py-4 border border-border-active bg-[#0d0d0d] text-sm font-mono tracking-widest text-text-primary shadow-lg shadow-black/50">
                  ENGINEER. TEST. LEARN. REBUILD. FLY.
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </main>
  );
}
