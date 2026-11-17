import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Radio,
  LayoutDashboard,
  PlusCircle,
  History,
  Trophy,
  Home,
  LogOut,
  ShieldCheck,
  User,
} from 'lucide-react'
import { useAuth } from '../../auth/hooks/useAuth'

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-[#0b0d12] bg-neo-dots text-white flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-b-[3px] md:border-b-0 md:border-r-[3px] border-black bg-[#161a23] p-6 flex flex-col justify-between shrink-0 shadow-neo">
        <div>
          {/* Brand */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black uppercase tracking-wider text-white">
                RADIO<span className="text-[#ffe600]">GUESSR</span>
              </span>
              <p className="text-[10px] font-mono text-gray-400">COMMAND BASE</p>
            </div>
          </NavLink>

          {/* Navigation Links */}
          <nav className="mt-8 flex flex-row md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                `border-2 border-black px-3.5 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#ffe600] text-black shadow-neo'
                    : 'bg-black/40 text-gray-300 hover:bg-black hover:text-white shadow-neo-sm'
                }`
              }
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>OVERVIEW</span>
            </NavLink>

            <NavLink
              to="/game"
              className={({ isActive }) =>
                `border-2 border-black px-3.5 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#ffe600] text-black shadow-neo'
                    : 'bg-black/40 text-gray-300 hover:bg-[#00f0ff] hover:text-black shadow-neo-sm'
                }`
              }
            >
              <PlusCircle className="w-4 h-4" />
              <span>START GAME</span>
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                `border-2 border-black px-3.5 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#ffe600] text-black shadow-neo'
                    : 'bg-black/40 text-gray-300 hover:bg-[#a3e635] hover:text-black shadow-neo-sm'
                }`
              }
            >
              <History className="w-4 h-4" />
              <span>HISTORY</span>
            </NavLink>

            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                `border-2 border-black px-3.5 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2.5 transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#ffe600] text-black shadow-neo'
                    : 'bg-black/40 text-gray-300 hover:bg-[#ff3366] hover:text-white shadow-neo-sm'
                }`
              }
            >
              <Trophy className="w-4 h-4" />
              <span>LEADERBOARD</span>
            </NavLink>

            <NavLink
              to="/"
              className="border-2 border-black bg-black/40 text-gray-300 hover:bg-white hover:text-black px-3.5 py-2.5 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2.5 shadow-neo-sm transition-all shrink-0"
            >
              <Home className="w-4 h-4" />
              <span>HOME</span>
            </NavLink>
          </nav>
        </div>

        {/* Operator Profile and Logout */}
        <div className="mt-8 pt-6 border-t-2 border-black">
          <div className="border-2 border-black bg-black p-3.5 shadow-neo-sm">
            <div className="flex items-center justify-between text-[10px] font-mono font-bold text-gray-400 uppercase mb-1">
              <span>CALLSIGN</span>
              <span className="text-[#a3e635] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> ACTIVE
              </span>
            </div>
            <p className="font-mono text-sm font-black text-[#ffe600] truncate">
              {user.username}
            </p>
            <p className="text-[10px] font-mono text-gray-400 truncate">
              {user.isGuest ? 'GUEST RECRUIT' : user.email}
            </p>

            <div className="mt-3 pt-2.5 border-t border-gray-800 flex items-center justify-between">
              {user.isGuest ? (
                <NavLink
                  to="/login"
                  className="text-[11px] font-mono text-[#00f0ff] font-bold hover:underline flex items-center gap-1"
                >
                  <User className="w-3 h-3" /> Sign In
                </NavLink>
              ) : (
                <button
                  type="button"
                  onClick={logout}
                  className="text-[11px] font-mono text-[#ff3366] font-bold hover:underline flex items-center gap-1"
                >
                  <LogOut className="w-3 h-3" /> Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Header */}
        <header className="border-b-[3px] border-black bg-[#161a23] px-6 py-4 flex items-center justify-between shadow-neo">
          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <span>TERMINAL</span>
            <span>/</span>
            <span className="text-[#00f0ff] font-bold">OPERATIONS CONTROL</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="border-2 border-black bg-[#a3e635] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm hidden sm:inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-black animate-ping" />
              <span>10,000+ STATIONS ONLINE</span>
            </span>

            {user.isGuest && (
              <NavLink
                to="/login"
                className="btn-neo bg-white hover:bg-[#ffe600] text-black px-3 py-1 text-xs uppercase font-black"
              >
                LOG IN
              </NavLink>
            )}
          </div>
        </header>

        {/* Page Inner Content */}
        <main className="p-6 lg:p-8 flex-1">
          {children}
        </main>
      </div>
    </div>
  )
}
