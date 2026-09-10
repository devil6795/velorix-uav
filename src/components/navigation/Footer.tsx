import Link from 'next/link';
import { navItems } from '@/data/navigation';

export function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-24">
          <div className="mb-12 md:mb-0">
            <h2 className="font-semibold text-text-primary text-[15px] tracking-[0.15em] uppercase mb-4">
              VELORIX UAV
            </h2>
            <p className="text-text-secondary tracking-[0.08em] text-[13px] uppercase">
              Built For What Comes Next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
            <div>
              <h3 className="text-text-primary text-[12px] tracking-[0.1em] uppercase mb-6 font-medium">
                Navigation
              </h3>
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className="text-text-secondary hover:text-text-primary text-[13px] tracking-[0.08em] uppercase transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-text-primary text-[12px] tracking-[0.1em] uppercase mb-6 font-medium">
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href="/about" className="text-text-secondary hover:text-text-primary text-[13px] tracking-[0.08em] uppercase transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/rnd" className="text-text-secondary hover:text-text-primary text-[13px] tracking-[0.08em] uppercase transition-colors">
                    R&D
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-text-secondary hover:text-text-primary text-[13px] tracking-[0.08em] uppercase transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-text-primary text-[12px] tracking-[0.1em] uppercase mb-6 font-medium">
                Connect
              </h3>
              <ul className="flex flex-col gap-4">
                {['Instagram', 'LinkedIn', 'YouTube', 'GitHub'].map((social) => (
                  <li key={social}>
                    <Link 
                      href="#"
                      className="text-text-secondary hover:text-text-primary text-[13px] tracking-[0.08em] uppercase transition-colors"
                    >
                      {social}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-border/50">
          <p className="text-text-tertiary text-[12px] tracking-[0.05em]">
            &copy; 2026 VELORIX UAV. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
