
function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-8 sm:flex-row sm:items-center lg:px-10">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Radio<span className="text-brand">Guessr</span>
        </a>

        <p className="text-sm text-text-muted">
          Discover the world, one broadcast at a time.
        </p>

        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} RadioGuessr
        </p>
      </div>
    </footer>
  )
}

export default Footer
