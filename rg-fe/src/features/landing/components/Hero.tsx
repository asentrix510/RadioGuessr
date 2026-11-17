import { Play, Compass, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-16 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
        {/* Left Column: Big Neo-Brutalist Pitch */}
        <div className="flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 border-2 border-black bg-[#ffe600] px-4 py-1.5 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600 animate-ping" />
            <span>GLOBAL BROADCASTS ACTIVE</span>
          </div>

          {/* Giant Title */}
          <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black uppercase tracking-tight text-white leading-[1.05]">
            LISTEN TO THE <span className="bg-[#ffe600] text-black px-2 inline-block border-2 border-black shadow-neo-sm">WORLD.</span>
            <br />
            GUESS THE <span className="text-[#00f0ff] underline decoration-4 underline-offset-8">SOURCE.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-gray-300 font-mono leading-relaxed max-w-xl">
            Tune into live radio streams broadcasting across seven continents. 
            Analyze music, languages, accents, and local ads—then drop your pin on our interactive 3D globe.
          </p>

          {/* Feature Badges */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="border-2 border-black bg-[#161a23] text-white px-3 py-1 font-mono text-xs font-bold shadow-neo-sm">
              🎧 100% SOUND BASED
            </span>
            <span className="border-2 border-black bg-[#161a23] text-[#00f0ff] px-3 py-1 font-mono text-xs font-bold shadow-neo-sm">
              🌍 3D SPHERICAL GLOBE
            </span>
            <span className="border-2 border-black bg-[#161a23] text-[#a3e635] px-3 py-1 font-mono text-xs font-bold shadow-neo-sm">
              ⚡ INSTANT DISTANCE SCORING
            </span>
          </div>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <Link
              to="/dashboard"
              className="btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black px-8 py-4 text-base uppercase gap-3 shadow-neo-lg w-full sm:w-auto justify-center"
            >
              <Play className="w-5 h-5 fill-current" />
              <span>START PLAYING FREE</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="#how-it-works"
              className="btn-neo bg-white hover:bg-gray-100 text-black px-6 py-4 text-base uppercase gap-2 w-full sm:w-auto justify-center"
            >
              <Compass className="w-5 h-5" />
              <span>HOW TO PLAY</span>
            </a>
          </div>

          <p className="mt-6 text-xs font-mono text-gray-400">
            ★ NO SIGNUP REQUIRED • FREE FOREVER • 10,000+ WORLDWIDE STATIONS
          </p>
        </div>

        {/* Right Column: 3D Interactive Hero Globe */}
        <div className="w-full">
          <HeroVisual />
        </div>
      </div>

      {/* Marquee Ticker Tape across the page */}
      <div className="mt-14 -mx-6 lg:-mx-10 border-y-[3px] border-black bg-[#ffe600] py-3 overflow-hidden shadow-neo">
        <div className="animate-marquee font-black font-mono text-sm sm:text-base text-black uppercase tracking-widest flex items-center gap-8">
          <span>📻 TOKYO 81.3 FM ★ J-POP HITS</span>
          <span>●</span>
          <span>PARIS 105.5 FM ★ FRENCH CHANSON</span>
          <span>●</span>
          <span>NEW YORK 92.3 FM ★ HIP HOP & RNB</span>
          <span>●</span>
          <span>RIO DE JANEIRO 98.1 FM ★ SAMBA CLASSICS</span>
          <span>●</span>
          <span>BERLIN 88.8 FM ★ ELECTRONIC UNDERGROUND</span>
          <span>●</span>
          <span>SYDNEY 105.7 FM ★ INDIE VIBES</span>
          <span>●</span>
          <span>NAIROBI 96.0 FM ★ AFROBEATS</span>
          <span>●</span>
          <span>📻 TOKYO 81.3 FM ★ J-POP HITS</span>
          <span>●</span>
          <span>PARIS 105.5 FM ★ FRENCH CHANSON</span>
          <span>●</span>
          <span>NEW YORK 92.3 FM ★ HIP HOP & RNB</span>
          <span>●</span>
          <span>RIO DE JANEIRO 98.1 FM ★ SAMBA CLASSICS</span>
        </div>
      </div>
    </section>
  )
}
