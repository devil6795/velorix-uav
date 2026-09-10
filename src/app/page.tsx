import { Hero } from '@/components/hero/Hero';
import { WhatWeBuild } from '@/components/sections/WhatWeBuild';
import { InteractiveCapabilities } from '@/components/sections/InteractiveCapabilities';
import { FeaturedSystems } from '@/components/sections/FeaturedSystems';
import { RnDPipeline } from '@/components/sections/RnDPipeline';
import { SystemArchitecture } from '@/components/sections/SystemArchitecture';
import { Philosophy } from '@/components/sections/Philosophy';
import { About } from '@/components/sections/About';
import { ContactCTA } from '@/components/sections/ContactCTA';

export default function HomePage() {
  return (
    <>
      {/* HERO — The first 5 seconds */}
      <Hero />

      {/* 01 — What We Build */}
      <WhatWeBuild />

      {/* 02 — Interactive Capabilities */}
      <InteractiveCapabilities />

      {/* 03 — Featured Systems */}
      <FeaturedSystems />

      {/* 04 — R&D Pipeline */}
      <RnDPipeline />

      {/* 05 — System Architecture */}
      <SystemArchitecture />

      {/* 06 — Philosophy */}
      <Philosophy />

      {/* 07 — About */}
      <About />

      {/* 08 — Contact CTA */}
      <ContactCTA />
    </>
  );
}
