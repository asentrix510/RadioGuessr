
function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        {/* Brand */}
        <a href="#home" className="text-2xl font-bold tracking-tight">
          Radio<span className="text-brand">Guessr</span>
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-9 md:flex">
          <a
            href="#home"
            className="text-sm text-text-secondary transition hover:text-white"
          >
            Discover
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-text-secondary transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#experience"
            className="text-sm text-text-secondary transition hover:text-white"
          >
            Experience
          </a>
        </div>

        {/* CTA */}
        <a
          href="#experience"
          className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-midnight transition hover:bg-brand-hover"
        >
          Explore now
        </a>
      </nav>
    </header>
  )
}

export default Navbar
