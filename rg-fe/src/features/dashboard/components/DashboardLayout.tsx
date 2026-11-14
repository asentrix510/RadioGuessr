
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface DashboardLayoutProps {
  children: ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-midnight text-text-primary">

      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 flex w-64 flex-col border-r border-border-subtle bg-surface p-6">

        {/* Brand */}
        <NavLink to="/" className="text-2xl font-bold tracking-tight">
          Radio<span className="text-brand">Guessr</span>
        </NavLink>

        <p className="mt-2 text-xs tracking-widest text-text-muted">
          YOUR SOUND JOURNEY
        </p>

        {/* Navigation */}
        <nav className="mt-12 flex flex-col gap-2">

          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? 'bg-brand/10 text-brand'
                  : 'text-text-secondary hover:bg-white/5 hover:text-white'
              }`
            }
          >
            Overview
          </NavLink>

          <a
            href="#new-game"
            className="rounded-lg px-4 py-3 text-sm text-text-secondary transition hover:bg-white/5 hover:text-white"
          >
            New Game
          </a>

        </nav>

        {/* Bottom section */}
        <div className="mt-auto border-t border-border-subtle pt-5">
          <p className="text-sm font-medium">Guest Player</p>
          <p className="mt-1 text-xs text-text-muted">
            Authentication coming later
          </p>
        </div>

      </aside>

      {/* Main content */}
      <main className="ml-64 min-h-screen">

        {/* Top bar */}
        <header className="flex items-center justify-between border-b border-border-subtle px-8 py-5">
          <p className="text-sm text-text-secondary">
            Dashboard / Overview
          </p>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">
              G
            </div>
            <span className="text-sm">Guest</span>
          </div>
        </header>

        {/* Page content */}
        <section className="p-8">
          {children}
        </section>

      </main>
    </div>
  )
  
}

export default DashboardLayout
