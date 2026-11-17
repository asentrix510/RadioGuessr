import { Headphones, Search, Globe, Trophy } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'TUNE IN LIVE',
    description: 'Listen to a real mystery radio station broadcasting live from somewhere on Earth.',
    icon: Headphones,
    color: 'bg-[#ffe600] text-black',
  },
  {
    step: '02',
    title: 'DECODE AUDIO',
    description: 'Pick up on languages, music genres, dialect accents, news bulletins, and local ads.',
    icon: Search,
    color: 'bg-[#00f0ff] text-black',
  },
  {
    step: '03',
    title: '3D GLOBE PIN',
    description: 'Rotate our 3D interactive Earth globe, zoom into regions, and drop your target pin.',
    icon: Globe,
    color: 'bg-[#ff3366] text-white',
  },
  {
    step: '04',
    title: 'CLAIM SCORE',
    description: 'See the true broadcasting antenna location, calculate distance error, and climb the leaderboard.',
    icon: Trophy,
    color: 'bg-[#a3e635] text-black',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 lg:px-10 border-b-[3px] border-black bg-[#0d1017]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="border-2 border-black bg-[#00f0ff] px-3.5 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-3">
            GAME RULES
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            FOUR SIMPLE STEPS. ONE PLANET.
          </h2>
          <p className="mt-3 text-base text-gray-400 font-mono max-w-xl">
            No convoluted mechanics. Just raw auditory observation and spatial geography instinct.
          </p>
        </div>

        {/* 4 Neo-Brutalist Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="border-[3px] border-black bg-[#161a23] p-6 shadow-neo-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-neo-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`inline-block border-2 border-black px-3 py-1 font-mono text-sm font-black shadow-neo-sm ${item.color}`}>
                      STEP {item.step}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center border-2 border-black bg-black text-white shadow-neo-sm">
                      <Icon className="w-5 h-5 text-[#ffe600]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-black uppercase text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-mono text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-800 font-mono text-[11px] text-gray-500 uppercase">
                  PROTOCOL #{item.step}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
