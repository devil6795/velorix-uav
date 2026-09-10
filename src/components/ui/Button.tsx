'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'large' | 'small';
  href?: string;
  arrow?: boolean;
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  arrow = false,
  magnetic = true,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.1;
    const distY = (e.clientY - centerY) * 0.1;
    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = cn(
    'group relative inline-flex items-center justify-center gap-3 font-mono font-medium tracking-[0.08em] uppercase',
    'transition-all duration-300 ease-out overflow-hidden',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:opacity-40 disabled:pointer-events-none rounded-none',
    {
      // Size
      'px-6 py-3 text-[11px]': size === 'default',
      'px-8 py-4 text-[12px]': size === 'large',
      'px-4 py-2 text-[10px]': size === 'small',
      // Variant
      'bg-text-primary text-background hover:bg-white border border-transparent': variant === 'primary',
      'border border-border bg-background text-text-secondary hover:border-text-primary hover:text-text-primary':
        variant === 'secondary',
      'text-text-secondary hover:text-text-primary': variant === 'ghost',
    },
    className
  );

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 block bg-[rgba(255,255,255,0.1)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {arrow && (
          <ArrowRight
            className={cn(
              'w-4 h-4 transition-transform duration-300 ease-out',
              'group-hover:translate-x-1'
            )}
            strokeWidth={1.5}
          />
        )}
      </span>
      {/* Corner indicators for engineered look */}
      {(variant === 'primary' || variant === 'secondary') && (
        <>
          <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-current opacity-50 transition-opacity group-hover:opacity-100 z-10" />
          <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-current opacity-50 transition-opacity group-hover:opacity-100 z-10" />
        </>
      )}
    </>
  );

  const motionProps = {
    style: magnetic ? { x: springX, y: springY } : undefined,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    whileTap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseStyles}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseStyles}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
