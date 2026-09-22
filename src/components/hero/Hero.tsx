'use client';

import { HeroMedia } from './HeroMedia';
import { HeroHeadline } from './HeroHeadline';
import { HeroMeta } from './HeroMeta';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen md:min-h-[800px] flex flex-col pt-[96px] overflow-hidden">
      {/* Media Background Layer (z-0) */}
      <HeroMedia />

      {/* Content Layer (z-10) */}
      <div className="relative z-10 flex flex-col justify-between flex-1 w-full px-6 md:px-12 lg:px-20 pb-8 md:pb-12">
        
        {/* Centered Headline Container */}
        <div className="flex-1 flex flex-col justify-center w-full py-8 min-h-[450px]">
          <HeroHeadline />
        </div>

        {/* Meta Elements (z-10) */}
        <div className="flex-shrink-0">
          <HeroMeta />
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
