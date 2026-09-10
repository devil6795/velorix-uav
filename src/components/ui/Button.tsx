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
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.15;
    const distY = (e.clientY - centerY) * 0.15;
    x.set(distX);
    y.set(distY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = cn(
    'group relative inline-flex items-center gap-2 font-medium tracking-wide uppercase',
    'transition-colors duration-300 ease-out',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:opacity-40 disabled:pointer-events-none',
    {
      // Size
      'px-6 py-3 text-[13px]': size === 'default',
      'px-8 py-4 text-[14px]': size === 'large',
      'px-4 py-2 text-[12px]': size === 'small',
      // Variant
      'border border-text-primary/20 text-text-primary hover:border-text-primary/60 hover:bg-text-primary/[0.04]':
        variant === 'primary',
      'border border-border text-text-secondary hover:border-border-active hover:text-text-primary':
        variant === 'secondary',
      'text-text-secondary hover:text-text-primary': variant === 'ghost',
    },
    className
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowRight
          className={cn(
            'relative z-10 w-4 h-4 transition-transform duration-300 ease-out',
            'group-hover:translate-x-1'
          )}
          strokeWidth={1.5}
        />
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
