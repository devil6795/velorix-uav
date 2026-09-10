'use client';

import { HeroMedia } from './HeroMedia';
import { HeroHeadline } from './HeroHeadline';
import { HeroMeta } from './HeroMeta';

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] md:min-h-[800px] flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Media Background Layer (z-0) */}
      <HeroMedia />

      {/* Content Layer (z-10) */}
      <HeroHeadline />

      {/* Meta Elements (z-10) */}
      <HeroMeta />

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
