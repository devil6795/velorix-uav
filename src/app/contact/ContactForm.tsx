'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/motion/Reveal';
import { ChevronDown } from 'lucide-react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate basic validation and submission
    setTimeout(() => {
      console.log('Form submitted:', Object.fromEntries(new FormData(e.currentTarget)));
      setIsSubmitting(false);
      e.currentTarget.reset();
      alert('Message sent. We will contact you shortly.');
    }, 1000);
  };

  return (
    <Reveal delay={0.2}>
      <form onSubmit={handleSubmit} className="space-y-8 bg-surface border border-border p-8 md:p-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-mono tracking-widest text-text-secondary uppercase block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="YOUR NAME"
              required
              className="w-full bg-[#0a0a0a] border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 text-text-primary placeholder:text-text-tertiary font-light transition-all rounded-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-xs font-mono tracking-widest text-text-secondary uppercase block">
              Company / Organization <span className="text-text-tertiary">(Optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="COMPANY NAME"
              className="w-full bg-[#0a0a0a] border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 text-text-primary placeholder:text-text-tertiary font-light transition-all rounded-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-mono tracking-widest text-text-secondary uppercase block">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              className="w-full bg-[#0a0a0a] border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 text-text-primary placeholder:text-text-tertiary font-light transition-all rounded-none"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="project" className="text-xs font-mono tracking-widest text-text-secondary uppercase block">
              Project Type
            </label>
            <div className="relative">
              <select
                id="project"
                name="project"
                required
                className="w-full bg-[#0a0a0a] border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 text-text-primary placeholder:text-text-tertiary font-light transition-all rounded-none appearance-none cursor-pointer pr-10"
                defaultValue=""
              >
                <option value="" disabled className="text-text-tertiary">SELECT AN OPTION</option>
                <option value="system-inquiry">System Inquiry</option>
                <option value="custom-engineering">Custom Engineering</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-text-secondary" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-mono tracking-widest text-text-secondary uppercase block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="HOW CAN WE HELP YOU?"
            required
            rows={5}
            className="w-full bg-[#0a0a0a] border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none px-4 py-3 text-text-primary placeholder:text-text-tertiary font-light transition-all rounded-none resize-y"
          ></textarea>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          disabled={isSubmitting}
          className="w-full md:w-auto mt-4"
        >
          {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE'}
        </Button>
      </form>
    </Reveal>
  );
}
