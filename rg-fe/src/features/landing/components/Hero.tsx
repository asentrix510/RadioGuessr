
import HeroVisual from './HeroVisual'

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-6 py-20 lg:px-10 lg:py-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Left: Hero content */}
        <div className="max-w-2xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-signal" />
            <span className="text-xs font-medium tracking-wide text-text-secondary sm:text-sm">
              THE WORLD IS ON AIR
            </span>
          </div>

          <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            The world is
            <br />
            <span className="text-brand">playing.</span>
            <br />
            Can you guess
            <br />
            where?
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-text-secondary sm:text-lg">
            Tune into live radio stations from anywhere on Earth.
            Listen closely, trust your instincts, and pinpoint where
            the sound is coming from.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#experience"
              className="rounded-xl bg-brand px-7 py-4 font-semibold text-midnight transition hover:-translate-y-1 hover:bg-brand-hover"
            >
              Explore the experience
              <span aria-hidden="true" className="ml-3">↗</span>
            </a>

            <a
              href="#how-it-works"
              className="rounded-xl border border-white/15 px-7 py-4 font-medium text-white transition hover:border-brand/50 hover:bg-white/5"
            >
              How to play
            </a>
          </div>

          <p className="mt-8 text-xs tracking-wide text-text-muted">
            NO MAP KNOWLEDGE REQUIRED. JUST YOUR EARS.
          </p>
        </div>

        {/* Right: Decorative radio visual */}
        <div className="hidden lg:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}

export default Hero
