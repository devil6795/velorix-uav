export function HeroMeta() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:flex justify-between items-end px-6 md:px-12 lg:px-20 pb-8 pointer-events-none">
      
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
