import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            ERROR 404
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.04em] text-text-primary uppercase leading-[1.05]">
            SYSTEM
            <br />
            NOT FOUND.
          </h1>
        </div>

        <p className="text-text-secondary text-base max-w-md mx-auto">
          The requested resource could not be located. It may have been moved or
          is no longer available.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-[13px] font-medium tracking-[0.08em] uppercase border border-text-primary/20 text-text-primary hover:border-text-primary/60 transition-colors duration-300"
        >
          RETURN TO BASE
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <div className="pt-12">
          <p className="font-mono text-[10px] tracking-[0.15em] text-text-tertiary/40 uppercase">
            VELORIX UAV / SYSTEM STATUS / OFFLINE
          </p>
        </div>
      </div>
    </main>
  );
}
