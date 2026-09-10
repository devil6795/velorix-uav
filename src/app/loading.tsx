export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-[18px] font-semibold tracking-[0.2em] text-text-primary uppercase">
          VELORIX
        </h1>
        <div className="w-24 h-px bg-border relative overflow-hidden mx-auto">
          <div
            className="absolute inset-y-0 left-0 bg-accent w-full origin-left"
            style={{
              animation: 'velorix-loading 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </div>
  );
}
