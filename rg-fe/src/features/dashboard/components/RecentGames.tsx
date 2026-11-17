import { Radio, CheckCircle2 } from 'lucide-react'

export default function RecentGames() {
  const games = [
    {
      id: 1,
      mode: 'GLOBAL EXPEDITION',
      score: 23450,
      rounds: 5,
      date: '2 HOURS AGO',
      rank: 'RANK S',
      rankColor: 'bg-[#ffe600] text-black',
    },
    {
      id: 2,
      mode: 'COUNTRY CHALLENGE',
      score: 19820,
      rounds: 5,
      date: 'YESTERDAY',
      rank: 'RANK A',
      rankColor: 'bg-[#00f0ff] text-black',
    },
    {
      id: 3,
      mode: 'GLOBAL EXPEDITION',
      score: 21650,
      rounds: 5,
      date: '3 DAYS AGO',
      rank: 'RANK A',
      rankColor: 'bg-[#a3e635] text-black',
    },
  ]

  return (
    <section className="border-[3px] border-black bg-[#161a23] p-6 sm:p-8 shadow-neo-lg">
      {/* Section Heading */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 border-2 border-black bg-[#00f0ff] px-3 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-2">
            <Radio className="w-3.5 h-3.5" />
            <span>TRANSMISSION ARCHIVES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            RECENT MISSION LOGS
          </h2>
          <p className="mt-1 text-xs text-gray-400 font-mono">
            Historical flight telemetry and accuracy ratings from past radio intercepts.
          </p>
        </div>

        <span className="font-mono text-xs text-gray-400 border border-gray-700 bg-black px-3 py-1.5">
          LOG ENTRIES: {games.length}
        </span>
      </div>

      {/* Games List */}
      <div className="mt-6 flex flex-col gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="border-2 border-black bg-[#10131a] p-4 sm:p-5 shadow-neo-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            {/* Left: Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm">
                <Radio className="w-6 h-6" />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-base text-white tracking-tight uppercase">
                    {game.mode}
                  </h3>
                  <span className={`border border-black px-2 py-0.5 font-mono text-[10px] font-black uppercase shadow-neo-sm ${game.rankColor}`}>
                    {game.rank}
                  </span>
                </div>

                <p className="mt-1 font-mono text-xs text-gray-400 flex items-center gap-2">
                  <span>{game.rounds} ROUNDS</span>
                  <span>•</span>
                  <span>{game.date}</span>
                </p>
              </div>
            </div>

            {/* Right: Score & Status */}
            <div className="flex items-center justify-between sm:justify-end gap-6 border-t sm:border-t-0 border-gray-800 pt-3 sm:pt-0">
              <div className="text-left sm:text-right">
                <p className="font-mono text-[10px] text-gray-500 uppercase font-bold">
                  TOTAL MISSION SCORE
                </p>
                <p className="font-mono text-xl font-black text-[#ffe600]">
                  {game.score.toLocaleString()} PTS
                </p>
              </div>

              <div className="border-2 border-black bg-[#a3e635] text-black px-3 py-1 font-mono text-xs font-black uppercase shadow-neo-sm flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>COMPLETED</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
