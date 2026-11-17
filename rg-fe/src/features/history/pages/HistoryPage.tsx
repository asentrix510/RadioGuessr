import { useState } from 'react'
import DashboardLayout from '../../dashboard/components/DashboardLayout'
import { Radio, Calendar, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'

interface CompletedGame {
  id: number
  mode: string
  totalScore: number
  roundsCount: number
  avgDistanceKm: number
  rank: string
  rankColor: string
  date: string
}

const mockHistory: CompletedGame[] = [
  {
    id: 104,
    mode: 'GLOBAL EXPEDITION',
    totalScore: 23450,
    roundsCount: 5,
    avgDistanceKm: 142,
    rank: 'RANK S',
    rankColor: 'bg-[#ffe600] text-black',
    date: 'Today at 14:22',
  },
  {
    id: 103,
    mode: 'COUNTRY CHALLENGE',
    totalScore: 19820,
    roundsCount: 5,
    avgDistanceKm: 420,
    rank: 'RANK A',
    rankColor: 'bg-[#00f0ff] text-black',
    date: 'Yesterday at 19:40',
  },
  {
    id: 102,
    mode: 'GLOBAL EXPEDITION',
    totalScore: 21650,
    roundsCount: 5,
    avgDistanceKm: 285,
    rank: 'RANK A',
    rankColor: 'bg-[#00f0ff] text-black',
    date: 'Nov 15, 2026',
  },
  {
    id: 101,
    mode: 'GLOBAL EXPEDITION',
    totalScore: 17200,
    roundsCount: 5,
    avgDistanceKm: 890,
    rank: 'RANK B',
    rankColor: 'bg-[#a3e635] text-black',
    date: 'Nov 12, 2026',
  },
]

export default function HistoryPage() {
  const [filterMode, setFilterMode] = useState<string>('ALL')

  const filteredGames = filterMode === 'ALL'
    ? mockHistory
    : mockHistory.filter((g) => g.mode.includes(filterMode))

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <section className="border-[3px] border-black bg-[#161a23] p-6 shadow-neo-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 border-2 border-black bg-[#00f0ff] px-3 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>TRANSMISSION ARCHIVES</span>
            </div>
            <h1 className="text-3xl font-black uppercase text-white tracking-tight">
              MISSION FLIGHT LOGS
            </h1>
            <p className="mt-1 text-xs text-gray-400 font-mono">
              Complete records of all intercepted radio broadcasts and guess telemetry.
            </p>
          </div>

          <Link
            to="/game"
            className="btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black px-6 py-3 text-xs uppercase gap-2 font-black self-start sm:self-auto shrink-0"
          >
            <Radio className="w-4 h-4" />
            <span>START NEW RUN</span>
          </Link>
        </section>

        {/* Filter Bar */}
        <div className="flex gap-2">
          {['ALL', 'GLOBAL', 'COUNTRY'].map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setFilterMode(filter)}
              className={`border-2 border-black px-4 py-2 font-mono text-xs font-black uppercase tracking-wider transition-all ${
                filterMode === filter
                  ? 'bg-[#ffe600] text-black shadow-neo'
                  : 'bg-[#10131a] text-gray-400 hover:text-white shadow-neo-sm'
              }`}
            >
              {filter} MISSIONS
            </button>
          ))}
        </div>

        {/* History Cards */}
        <div className="grid grid-cols-1 gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="border-[3px] border-black bg-[#161a23] p-5 shadow-neo-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm">
                  <Radio className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-lg text-white uppercase tracking-tight">
                      {game.mode}
                    </h3>
                    <span className={`border border-black px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-neo-sm ${game.rankColor}`}>
                      {game.rank}
                    </span>
                  </div>

                  <p className="mt-1 font-mono text-xs text-gray-400 flex items-center gap-3">
                    <span>{game.roundsCount} ROUNDS</span>
                    <span>•</span>
                    <span>AVG ERROR: {game.avgDistanceKm} KM</span>
                    <span>•</span>
                    <span>{game.date}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-gray-800">
                <div className="text-left md:text-right">
                  <p className="font-mono text-[10px] text-gray-500 uppercase font-bold">
                    CUMULATIVE SCORE
                  </p>
                  <p className="font-mono text-2xl font-black text-[#ffe600]">
                    {game.totalScore.toLocaleString()} PTS
                  </p>
                </div>

                <Link
                  to="/game"
                  className="btn-neo bg-white hover:bg-[#ffe600] text-black px-4 py-2.5 text-xs uppercase gap-1.5 font-black shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>REPLAY</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
