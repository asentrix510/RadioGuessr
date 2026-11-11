
function HeroVisual() {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <div className="absolute h-64 w-64 rounded-full bg-brand/10 blur-[90px]" />

      {/* Outer rings */}
      <div className="absolute h-[95%] w-[95%] rounded-full border border-brand/10" />
      <div className="absolute h-[75%] w-[75%] rounded-full border border-brand/15" />
      <div className="absolute h-[55%] w-[55%] rounded-full border border-brand/20" />

      {/* Orbital signal */}
      <div className="absolute h-[95%] w-[95%] animate-[spin_35s_linear_infinite] rounded-full border border-dashed border-white/10" />

      {/* Central orb */}
      <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-brand/30 bg-gradient-to-br from-brand/20 via-[#101827] to-blue-950 shadow-[0_0_80px_rgba(92,225,230,0.15)] sm:h-56 sm:w-56">
        <div className="absolute inset-3 rounded-full border border-brand/10" />

        <div className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-brand/30 bg-brand/10">
            <span className="text-3xl text-brand">♫</span>
          </div>

          <p className="text-xs font-semibold tracking-[0.3em] text-brand">
            ON AIR
          </p>

          <p className="mt-2 text-[10px] tracking-widest text-text-muted">
            WORLDWIDE SIGNAL
          </p>
        </div>
      </div>

      {/* Signal points */}
      <div className="absolute left-[14%] top-[25%] h-3 w-3 rounded-full bg-brand shadow-[0_0_20px_5px_rgba(92,225,230,0.4)]" />
      <div className="absolute right-[16%] top-[35%] h-2 w-2 rounded-full bg-signal shadow-[0_0_18px_4px_rgba(163,230,53,0.4)]" />
      <div className="absolute bottom-[20%] left-[28%] h-2 w-2 rounded-full bg-brand shadow-[0_0_18px_4px_rgba(92,225,230,0.4)]" />

      {/* Floating station labels */}
      <div className="absolute left-0 top-[18%] rounded-xl border border-white/10 bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-lg">
        <p className="text-[10px] uppercase tracking-widest text-text-muted">
          Signal detected
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          <span className="mr-2 text-signal">●</span>
          Station online
        </p>
      </div>

      <div className="absolute bottom-[15%] right-0 rounded-xl border border-white/10 bg-surface/90 px-4 py-3 shadow-xl backdrop-blur-lg">
        <p className="text-[10px] uppercase tracking-widest text-text-muted">
          Your next clue
        </p>
        <p className="mt-1 text-sm font-semibold text-white">
          <span className="mr-2 text-brand">◉</span>
          Somewhere on Earth
        </p>
      </div>
    </div>
  )
}

export default HeroVisual
