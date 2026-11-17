import DashboardLayout from '../components/DashboardLayout'
import NewGamePanel from '../components/NewGamePanel'
import RecentGames from '../components/RecentGames'
import { Trophy, Gamepad2, Target, Flame, Radio } from 'lucide-react'

export default function DashboardPage() {
  const stats = [
    {
      label: 'TRANSMISSIONS PLAYED',
      value: '18',
      description: 'Completed game sessions',
      icon: Gamepad2,
      color: 'bg-[#ffe600] text-black',
      valColor: 'text-[#ffe600]',
    },
    {
      label: 'TOTAL POINTS EARNED',
      value: '72,450',
      description: 'Cumulative worldwide score',
      icon: Trophy,
      color: 'bg-[#00f0ff] text-black',
      valColor: 'text-[#00f0ff]',
    },
    {
      label: 'AVERAGE ACCURACY',
      value: '4,025',
      description: 'Points per round average',
      icon: Target,
      color: 'bg-[#a3e635] text-black',
      valColor: 'text-[#a3e635]',
    },
    {
      label: 'PERSONAL HIGH SCORE',
      value: '4,980',
      description: 'Closest pin pinpointed',
      icon: Flame,
      color: 'bg-[#ff3366] text-white',
      valColor: 'text-[#ff3366]',
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8 max-w-7xl mx-auto">
        {/* Welcome Banner */}
        <section className="border-[3px] border-black bg-[#161a23] p-6 sm:p-8 shadow-neo-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 border-2 border-black bg-[#ffe600] px-3 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-3">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>COMMAND CENTER</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                WELCOME BACK, OPERATOR!
              </h1>
              <p className="mt-2 text-sm text-gray-300 font-mono max-w-xl">
                Ready to intercept mystery radio signals? Configure your match parameters below or jump straight into the global frequency hunt.
              </p>
            </div>

            <a
              href="#new-game"
              className="btn-neo bg-[#a3e635] hover:bg-[#bbf455] text-black px-6 py-3.5 text-xs uppercase gap-2 self-start sm:self-auto shrink-0"
            >
              <span>CONFIGURE NEW SESSION ↓</span>
            </a>
          </div>
        </section>

        {/* 4 Neo-Brutalist Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="border-[3px] border-black bg-[#161a23] p-5 shadow-neo-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-black uppercase text-gray-400 tracking-wider">
                    {stat.label}
                  </span>
                  <div className={`flex h-9 w-9 items-center justify-center border-2 border-black shadow-neo-sm ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <div className={`text-4xl font-black font-mono tracking-tight ${stat.valColor}`}>
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs font-mono text-gray-500">
                    {stat.description}
                  </p>
                </div>
              </div>
            )
          })}
        </section>

        {/* New Game Setup Panel */}
        <NewGamePanel />

        {/* Recent Games Transmission Log */}
        <RecentGames />
      </div>
    </DashboardLayout>
  )
}
