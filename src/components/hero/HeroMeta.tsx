export function HeroMeta() {
  return (
    <div className="w-full hidden md:flex flex-shrink-0 justify-between items-end pointer-events-none pt-8">
      
      {/* Bottom Left Meta */}
      <div className="flex items-center gap-4 font-mono text-[10px] tracking-[0.15em] text-text-tertiary/40 uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
          SYSTEM STATUS
        </span>
        <span className="w-px h-3 bg-border-active" />
        <span>FLIGHT DEVELOPMENT</span>
      </div>

      {/* Bottom Right Meta */}
      <div className="flex flex-col items-end gap-2 font-mono text-[10px] tracking-[0.15em] text-text-tertiary/40 uppercase text-right">
        <span>01 / 06</span>
        <span>VELORIX / 2026</span>
      </div>
      
    </div>
  );
}
