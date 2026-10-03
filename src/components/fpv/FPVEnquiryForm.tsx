'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function FPVEnquiryForm() {
  const [serviceType, setServiceType] = useState('Custom Build');

  return (
    <form 
      action="https://formsubmit.co/velorix.uav@gmail.com" 
      method="POST" 
      encType="multipart/form-data"
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
        <select 
          required 
          name="service_type" 
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent appearance-none"
        >
          <option value="Custom Build">Custom Build</option>
          <option value="Repair">Repair (India)</option>
          <option value="Overseas Repair">Repair (Overseas / International)</option>
          <option value="Business Fleet Maintenance">Business Fleet Maintenance</option>
        </select>
        <span className="font-mono text-[10px] text-text-secondary mt-1">
          * Note: Overseas repair enquiries require business details (company name, website). Acceptance follows review.
        </span>
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

      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs uppercase text-text-tertiary">Number of Drones *</label>
        <input required type="number" min="1" defaultValue="1" name="quantity" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceType !== 'Custom Build' && (
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs uppercase text-text-tertiary">Budget Range (Optional)</label>
            <input type="text" name="budget" placeholder="USD / INR" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
          </div>
        )}
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs uppercase text-text-tertiary">Company Website (For Overseas Biz)</label>
          <input type="url" name="website" placeholder="https://" className="bg-background border border-border p-3 text-white font-mono focus:outline-none focus:border-accent" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs uppercase text-text-tertiary">Attach Photos (Optional)</label>
        <input type="file" name="attachment" accept="image/*" className="bg-background border border-border p-2 text-white font-mono text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-surface file:text-white file:font-mono hover:file:bg-border-active cursor-pointer" />
      </div>

      <div className="flex items-start gap-3 mt-4">
        <input required type="checkbox" id="privacy" name="privacy_consent" className="mt-1 w-4 h-4 bg-background border-border accent-accent" />
        <label htmlFor="privacy" className="font-mono text-xs text-text-secondary leading-relaxed">
          I give permission to VelorixUAV to contact me regarding this enquiry. We respect your privacy. Form submissions are securely processed via <a href="https://formsubmit.co" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">FormSubmit</a>.
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
  );
}
