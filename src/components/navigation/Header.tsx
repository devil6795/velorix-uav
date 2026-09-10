'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    
    handleScroll(); // Check initial state
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Trap focus & disable body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isScrolled 
            ? 'h-[72px] bg-background/80 backdrop-blur-xl border-b border-border' 
            : 'h-[96px] bg-transparent border-b border-transparent'
        )}
      >
        <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link 
            href="/"
            className="font-semibold text-text-primary text-[15px] tracking-[0.15em] uppercase z-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            VELORIX UAV
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative text-[13px] tracking-[0.08em] uppercase transition-colors py-2',
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="header-active-underline"
                      className="absolute left-0 right-0 bottom-0 h-px bg-accent"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute left-0 right-0 bottom-0 h-px bg-text-primary/50 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button variant="primary" size="small" arrow href="/contact">
              START A PROJECT
            </Button>
          </div>

          <button
            className="lg:hidden text-text-primary p-2 -mr-2 z-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-32 px-6 pb-12 lg:hidden"
          >
            <nav className="flex flex-col gap-6 flex-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="text-4xl sm:text-5xl font-light tracking-wide uppercase text-text-primary block hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              <Button variant="primary" size="large" arrow href="/contact" className="w-full justify-center">
                START A PROJECT
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
