import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SectionIndicator } from '@/components/ui/TechnicalLabel';
import { Reveal } from '@/components/motion/Reveal';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Custom FPV Builds & Expert Repairs | VELORIX UAV',
  description: 'Expert FPV drone building, repairing, and tuning services. Custom Betaflight builds, component troubleshooting, and global business solutions.',
};

export default function FPVServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-background to-background pointer-events-none" />
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-start">
          <SectionIndicator number="FPV" label="SERVICE DIVISION" className="mb-6 md:mb-8" />
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight leading-[1.1] uppercase mb-6 max-w-4xl">
            Custom FPV Builds <br className="hidden md:block"/>& Expert Repairs
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl font-mono leading-relaxed mb-10 md:mb-12">
            Professional assembly, soldering, Betaflight configuration, and component-level diagnostics for cinematic, freestyle, and commercial FPV systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button variant="primary" href="#enquiry-form">
              REQUEST A BUILD
            </Button>
            <Button variant="secondary" href="#enquiry-form">
              REQUEST A REPAIR
            </Button>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-20 md:py-32 bg-surface px-6 border-b border-border">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6 text-accent">
              Custom Builds
            </h2>
            <p className="text-text-secondary font-mono leading-relaxed mb-6">
              Precision assembly built to your exact specifications. From parts selection and layout planning to flawless soldering and complete Betaflight setup. Every build undergoes rigorous ground checks and hover testing before dispatch.
            </p>
            <ul className="space-y-3 font-mono text-sm text-text-primary mb-8">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">■</span> Professional soldering & wire routing
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">■</span> Betaflight configuration & baseline tuning
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">■</span> Comprehensive bench testing
              </li>
            </ul>
            <div className="bg-background border border-border p-4 font-mono text-xs text-text-secondary">
              <span className="text-white">AVAILABILITY:</span> Individuals and businesses worldwide (subject to shipping feasibility).
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-6 text-accent">
              Expert Repairs
            </h2>
            <p className="text-text-secondary font-mono leading-relaxed mb-6">
              Comprehensive fault diagnosis and restoration. Whether it's a burnt ESC, torn motor wires, or configuration issues—we isolate the problem, replace the damaged components, and restore your system to airworthy status.
            </p>
            <ul className="space-y-3 font-mono text-sm text-text-primary mb-8">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">■</span> Fault diagnosis & troubleshooting
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">■</span> Damaged component replacement
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">■</span> Re-configuration & firmware rescue
              </li>
            </ul>
            <div className="bg-background border border-border p-4 font-mono text-xs text-text-secondary flex flex-col gap-2">
              <div><span className="text-white">INDIA:</span> Available to individuals and businesses.</div>
              <div><span className="text-white">INTERNATIONAL:</span> Large business/fleet enquiries only (assessed individually).</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. YOUR WORK GALLERY */}
      <section className="py-20 md:py-32 bg-background px-6 border-b border-border">
        <div className="max-w-[1440px] mx-auto">
          <SectionIndicator number="03" label="PORTFOLIO" className="mb-12" />
          <SectionHeading className="mb-16">RECENT WORK.</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <Reveal className="group flex flex-col">
              <div className="relative aspect-square w-full bg-surface border border-border overflow-hidden mb-6">
                <Image 
                  src="/media/fpv/fpv-build-1.jpg" 
                  alt="5-inch Freestyle FPV Build" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="font-bold uppercase tracking-tight mb-2">5" Freestyle Custom Build</h3>
              <p className="text-text-secondary font-mono text-sm">Full assembly, conformal coating, and Betaflight 4.4 configuration with custom RPM filtering.</p>
            </Reveal>
            
            {/* Project 2 */}
            <Reveal delay={0.1} className="group flex flex-col">
              <div className="relative aspect-square w-full bg-surface border border-border overflow-hidden mb-6">
                <Image 
                  src="/media/fpv/fpv-repair-1.jpg" 
                  alt="Flight Controller Repair" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="font-bold uppercase tracking-tight mb-2">Cinewhoop Esc Rescue</h3>
              <p className="text-text-secondary font-mono text-sm">Diagnosed desync issue, replaced damaged 4-in-1 ESC, and re-soldered high-current XT60 leads.</p>
            </Reveal>
            
            {/* Project 3 */}
            <Reveal delay={0.2} className="group flex flex-col">
              <div className="relative aspect-square w-full bg-surface border border-border overflow-hidden mb-6">
                <Image 
                  src="/media/fpv/fpv-build-2.jpg" 
                  alt="Cinematic FPV Drone" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <h3 className="font-bold uppercase tracking-tight mb-2">Long-Range 7" Cruiser</h3>
              <p className="text-text-secondary font-mono text-sm">Built for efficiency. Integrated GPS rescue, Crossfire diversity, and custom low-noise wiring harness.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-20 md:py-32 bg-surface px-6 border-b border-border">
        <div className="max-w-[1440px] mx-auto">
          <SectionIndicator number="04" label="PROCESS" className="mb-12" />
          <SectionHeading className="mb-16">HOW IT WORKS.</SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['Submit Requirements', 'Discuss Scope & Price', 'Confirm Parts & Shipping', 'Build or Repair', 'Testing & Delivery'].map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1} className="flex flex-col bg-background border border-border p-6 relative overflow-hidden group">
                <div className="font-mono text-4xl text-border-active group-hover:text-accent/30 transition-colors duration-500 mb-6">0{idx + 1}</div>
                <h4 className="font-bold uppercase tracking-tight">{step}</h4>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BUSINESS & FAQ */}
      <section className="py-20 md:py-32 bg-background px-6 border-b border-border">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Business */}
          <Reveal>
            <h2 className="text-2xl font-bold tracking-tight uppercase mb-6 text-white border-b border-border pb-4">
              Business & Fleet Enquiries
            </h2>
            <p className="text-text-secondary font-mono leading-relaxed mb-6">
              We provide scalable solutions for commercial drone operators, production companies, and defense contractors. If you require multiple identical builds, fleet maintenance contracts, or recurring technical support, please detail your requirements in the form below.
            </p>
            <div className="bg-surface border border-border p-6">
              <span className="font-mono text-xs text-accent uppercase tracking-widest block mb-2">Priority Support</span>
              <p className="text-sm font-mono text-text-primary">Commercial fleet repairs outside of India are assessed on a case-by-case basis. Contact us to establish a maintenance pipeline.</p>
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal delay={0.2}>
            <h2 className="text-2xl font-bold tracking-tight uppercase mb-6 text-white border-b border-border pb-4">
              Service FAQ
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight mb-2">Parts Policy</h4>
                <p className="text-text-secondary font-mono text-sm">Customer-supplied parts are accepted, or we can source them directly depending on availability. To be discussed during quotation.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight mb-2">Supported Systems</h4>
                <p className="text-text-secondary font-mono text-sm">Betaflight FPV systems are fully supported. INAV, ArduPilot, and specific digital video systems (DJI, Walksnail, HDZero) are handled based on project scope.</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-tight mb-2">Shipping & Turnaround</h4>
                <p className="text-text-secondary font-mono text-sm">Shipping responsibility and turnaround times are quoted per project. An initial assessment charge may apply for complex diagnostics.</p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* 6. ENQUIRY FORM */}
      <section id="enquiry-form" className="py-20 md:py-32 bg-surface px-6">
        <div className="max-w-3xl mx-auto">
          <SectionIndicator number="06" label="INITIATE" className="mb-6 text-center mx-auto flex justify-center" />
          <SectionHeading className="mb-4 text-center">PROJECT ENQUIRY.</SectionHeading>
          <p className="text-text-secondary font-mono text-center mb-12">
            Submit your requirements below. VelorixUAV will review your request and contact you directly to discuss scope and pricing.
          </p>

          <form 
            action="https://formsubmit.co/velorix.uav@gmail.com" 
            method="POST" 
            className="flex flex-col gap-6"
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New FPV Build/Repair Enquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Name *</label>
                <input required type="text" name="name" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Email *</label>
                <input required type="email" name="email" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Country *</label>
                <input required type="text" name="country" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">City *</label>
                <input required type="text" name="city" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Client Type *</label>
                <select required name="client_type" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent appearance-none">
                  <option value="Individual">Individual</option>
                  <option value="Business">Business</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Company Name (If applicable)</label>
                <input type="text" name="company" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase text-text-tertiary">Service Required *</label>
              <select required name="service_type" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent appearance-none">
                <option value="Custom Build">Custom Build</option>
                <option value="Repair">Repair</option>
                <option value="Business Fleet Maintenance">Business Fleet Maintenance</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase text-text-tertiary">Project Details *</label>
              <textarea 
                required 
                name="details" 
                rows={5} 
                placeholder="For builds: Intended use, preferred components, do you own parts?&#10;For repairs: Drone specs, fault description, what happened before the fault?"
                className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent resize-none placeholder:text-text-tertiary/50" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Number of Drones *</label>
                <input required type="number" min="1" defaultValue="1" name="quantity" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase text-text-tertiary">Budget Range (Optional)</label>
                <input type="text" name="budget" placeholder="USD / INR" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs uppercase text-text-tertiary">Company Website (For Overseas Biz)</label>
              <input type="url" name="website" placeholder="https://" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input required type="checkbox" id="privacy" name="privacy_consent" className="mt-1 w-4 h-4 bg-background border-border accent-accent" />
              <label htmlFor="privacy" className="font-mono text-xs text-text-secondary leading-relaxed">
                I give permission to VelorixUAV to contact me regarding this enquiry. We respect your privacy and will only use this information to discuss your project.
              </label>
            </div>

            <div className="mt-6 flex flex-col items-center">
              <Button variant="primary" size="large" type="submit" arrow className="w-full md:w-auto px-12">
                SUBMIT ENQUIRY
              </Button>
              <p className="text-text-tertiary font-mono text-[10px] mt-4 uppercase tracking-widest">
                No public price list. We assess each job individually.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
