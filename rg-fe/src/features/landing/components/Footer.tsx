import { Radio } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-[#161a23] py-12 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-black uppercase tracking-wider text-white">
              RADIO<span className="text-[#ffe600]">GUESSR</span>
            </span>
            <p className="text-[11px] font-mono text-gray-400">
              EXPLORE THE GLOBE VIA SOUND • 3D WEBGL ENGINE
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold text-gray-300 uppercase">
          <a href="#home" className="hover:text-[#ffe600] transition-colors">
            TOP
          </a>
          <a href="#how-it-works" className="hover:text-[#00f0ff] transition-colors">
            RULES
          </a>
          <a href="#experience" className="hover:text-[#a3e635] transition-colors">
            FEATURES
          </a>
          <Link to="/dashboard" className="hover:text-[#ff3366] transition-colors">
            DASHBOARD
          </Link>
        </div>

        {/* Copyright */}
        <div className="font-mono text-xs text-gray-400 flex items-center gap-1.5">
          <span>© {new Date().getFullYear()} RADIOGUESSR</span>
          <span>•</span>
          <span className="text-[#ffe600]">NEO-BRUTALISM EDITION</span>
        </div>
      </div>
    </footer>
  )
}
