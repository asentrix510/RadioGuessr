import { Radio, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'

export default function Navbar() {
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-[#161a23]/95 backdrop-blur-md shadow-neo">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
            <Radio className="w-6 h-6" />
          </div>
          <span className="text-xl font-black uppercase tracking-wider text-white">
            RADIO<span className="text-[#ffe600]">GUESSR</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#how-it-works"
            className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-[#ffe600] transition-colors"
          >
            RULES
          </a>
          <a
            href="#experience"
            className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-[#00f0ff] transition-colors"
          >
            FEATURES
          </a>
          <Link
            to="/dashboard"
            className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-[#a3e635] transition-colors"
          >
            DASHBOARD
          </Link>
          <Link
            to="/leaderboard"
            className="font-mono text-xs font-bold text-gray-300 uppercase tracking-wider hover:text-[#ffe600] transition-colors"
          >
            LEADERBOARD
          </Link>
        </div>

        {/* Auth / CTA Button */}
        <div className="flex items-center gap-3">
          {user.isGuest ? (
            <Link
              to="/login"
              className="hidden sm:inline-flex border-2 border-black bg-white hover:bg-[#ffe600] text-black px-4 py-2 font-mono text-xs font-black uppercase shadow-neo-sm transition-all"
            >
              LOG IN
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="hidden sm:inline-flex border-2 border-black bg-[#00f0ff] text-black px-3.5 py-1.5 font-mono text-xs font-black uppercase shadow-neo-sm"
            >
              {user.username}
            </Link>
          )}

          <Link
            to="/game"
            className="btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black px-5 py-2.5 text-xs uppercase gap-2 font-black"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>PLAY NOW</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
