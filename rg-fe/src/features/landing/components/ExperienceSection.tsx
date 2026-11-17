import { Globe, Radio, Zap, Sparkles, MapPin, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    title: 'SPHERICAL 3D GLOBE',
    description: 'No flat maps here. Rotate, zoom, and pinpoint coordinates on a realistic 3D Three.js Earth with custom graticules and real-time raycasting.',
    icon: Globe,
    badge: '3D WEBGL',
    accent: 'bg-[#00f0ff] text-black',
  },
  {
    title: '10,000+ LIVE STATIONS',
    description: 'Powered by an open community of radio streams covering big city top 40 stations to remote village folk radio in over 180 nations.',
    icon: Radio,
    badge: 'REAL BROADCASTS',
    accent: 'bg-[#ffe600] text-black',
  },
  {
    title: 'EXPONENTIAL DISTANCE SCORING',
    description: 'The closer your pin lands to the transmitter, the more points you earn—up to 5,000 maximum points per round with geodesic math.',
    icon: Zap,
    badge: 'FAIR SCORING',
    accent: 'bg-[#a3e635] text-black',
  },
  {
    title: 'DETAILED FLIGHT RADAR',
    description: 'Watch the 3D trajectory arc fly between your guess and the true broadcaster location when the mystery station is unveiled.',
    icon: MapPin,
    badge: 'RADAR ARCS',
    accent: 'bg-[#ff3366] text-white',
  },
  {
    title: 'PERFORMANCE ARCHIVES',
    description: 'Track your match history, accuracy rankings, average kilometer error, and personal high scores right from your dashboard.',
    icon: BarChart3,
    badge: 'STAT TRACKER',
    accent: 'bg-[#a855f7] text-white',
  },
  {
    title: 'ARCADE SOUND EFFECTS',
    description: 'Bouncing tactile equalizer visualizers, tuning dials, frequency scanners, and celebratory confetti upon conquering rounds.',
    icon: Sparkles,
    badge: 'IMMERSIVE',
    accent: 'bg-[#ff6b00] text-white',
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-10 border-b-[3px] border-black bg-[#0b0d12]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="border-2 border-black bg-[#a3e635] px-3.5 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-3 inline-block">
              SYSTEM CAPABILITIES
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
              BUILT FOR EXPLORERS & AUDIOPHILES.
            </h2>
            <p className="mt-3 text-base text-gray-400 font-mono max-w-xl">
              Engineered with modern WebGL 3D graphics and neo-brutalist tactile interfaces.
            </p>
          </div>

          <Link
            to="/dashboard"
            className="btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black px-6 py-3.5 text-xs uppercase gap-2 shrink-0 self-start sm:self-auto"
          >
            <span>LAUNCH DASHBOARD</span>
          </Link>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className="border-[3px] border-black bg-[#161a23] p-6 shadow-neo-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-black text-white shadow-neo-sm">
                      <Icon className="w-6 h-6 text-[#ffe600]" />
                    </div>
                    <span className={`border-2 border-black px-2.5 py-1 font-mono text-[10px] font-black uppercase shadow-neo-sm ${feat.accent}`}>
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 font-mono text-xs text-gray-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-gray-800 flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>ACTIVE FEATURE</span>
                  <span className="text-[#a3e635]">100% ONLINE</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
