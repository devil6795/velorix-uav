import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  number?: string;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export function SectionHeading({
  children,
  subtitle,
  number,
  align = 'left',
  className,
  as: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-4',
        { 'text-center': align === 'center' },
        className
      )}
    >
      {number && (
        <span className="inline-block font-mono text-[11px] tracking-[0.15em] text-text-tertiary uppercase">
          [{number}]
        </span>
      )}
      <Tag
        className={cn(
          'font-semibold tracking-tight text-text-primary leading-[1.05]',
          {
            'text-[clamp(2.5rem,5vw,4rem)]': Tag === 'h2',
            'text-[clamp(2rem,4vw,3rem)]': Tag === 'h3',
            'text-[clamp(3rem,6vw,5.5rem)]': Tag === 'h1',
          }
        )}
      >
        {children}
      </Tag>
      {subtitle && (
        <p className="max-w-xl text-text-secondary text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
