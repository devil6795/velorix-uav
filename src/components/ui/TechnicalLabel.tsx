import { cn } from '@/lib/utils';

interface TechnicalLabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted';
  className?: string;
}

export function TechnicalLabel({
  children,
  variant = 'default',
  className,
}: TechnicalLabelProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[11px] tracking-[0.12em] uppercase leading-none',
        {
          'text-text-tertiary': variant === 'default',
          'text-accent': variant === 'accent',
          'text-text-tertiary/50': variant === 'muted',
        },
        className
      )}
    >
      {children}
    </span>
  );
}

interface SectionIndicatorProps {
  number: string;
  label: string;
  className?: string;
}

export function SectionIndicator({
  number,
  label,
  className,
}: SectionIndicatorProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="font-mono text-[11px] tracking-[0.15em] text-accent">
        {number}
      </span>
      <span className="w-8 h-px bg-border-active" />
      <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-text-tertiary">
        {label}
      </span>
    </div>
  );
}
