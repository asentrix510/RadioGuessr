import { useState } from 'react'
import DashboardLayout from '../../dashboard/components/DashboardLayout'
import { Trophy, Medal, Crown } from 'lucide-react'

interface LeaderboardEntry {
  rank: number
  callsign: string
  totalScore: number
  gamesPlayed: number
  avgAccuracy: number
  bestStreak: number
  badge: string
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, callsign: 'SHORTWAVE_TITAN', totalScore: 118450, gamesPlayed: 26, avgAccuracy: 4820, bestStreak: 12, badge: 'GRANDMASTER' },
  { rank: 2, callsign: 'AIRWAVE_VALKYRIE', totalScore: 112300, gamesPlayed: 24, avgAccuracy: 4760, bestStreak: 9, badge: 'MASTER' },
  { rank: 3, callsign: 'ANTENNA_VOYAGER', totalScore: 98750, gamesPlayed: 22, avgAccuracy: 4510, bestStreak: 7, badge: 'VETERAN' },
  { rank: 4, callsign: 'GUEST_OPERATOR', totalScore: 72450, gamesPlayed: 18, avgAccuracy: 4025, bestStreak: 5, badge: 'ROOKIE' },
  { rank: 5, callsign: 'FREQUENCY_SCOUT', totalScore: 68900, gamesPlayed: 17, avgAccuracy: 3950, bestStreak: 4, badge: 'SCOUT' },
  { rank: 6, callsign: 'BEACON_HUNTER', totalScore: 61200, gamesPlayed: 16, avgAccuracy: 3820, bestStreak: 4, badge: 'SCOUT' },
  { rank: 7, callsign: 'RADAR_REBEL', totalScore: 54300, gamesPlayed: 15, avgAccuracy: 3620, bestStreak: 3, badge: 'RECRUIT' },
]

export default function LeaderboardPage() {
  const [timeframe, setTimeframe] = useState<'ALL_TIME' | 'WEEKLY'>('ALL_TIME')

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Header */}
        <section className="border-[3px] border-black bg-[#161a23] p-6 shadow-neo-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 border-2 border-black bg-[#ffe600] px-3 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>GLOBAL RECOGNITION</span>
            </div>
            <h1 className="text-3xl font-black uppercase text-white tracking-tight">
              WORLD AIRWAVE LEADERBOARD
            </h1>
            <p className="mt-1 text-xs text-gray-400 font-mono">
              Top global radio intelligence operators ranked by cumulative accuracy.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTimeframe('ALL_TIME')}
              className={`border-2 border-black px-4 py-2 font-mono text-xs font-black uppercase transition-all ${
                timeframe === 'ALL_TIME'
                  ? 'bg-[#ffe600] text-black shadow-neo'
                  : 'bg-[#10131a] text-gray-400 hover:text-white shadow-neo-sm'
              }`}
            >
              ALL-TIME
            </button>
            <button
              type="button"
              onClick={() => setTimeframe('WEEKLY')}
              className={`border-2 border-black px-4 py-2 font-mono text-xs font-black uppercase transition-all ${
                timeframe === 'WEEKLY'
                  ? 'bg-[#ffe600] text-black shadow-neo'
                  : 'bg-[#10131a] text-gray-400 hover:text-white shadow-neo-sm'
              }`}
            >
              THIS WEEK
            </button>
          </div>
        </section>

        {/* Podium for Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Rank 2 */}
          <div className="border-[3px] border-black bg-[#161a23] p-5 shadow-neo-md text-center flex flex-col items-center justify-between order-2 md:order-1">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#00f0ff] text-black font-black shadow-neo-sm mb-3">
              <Medal className="w-6 h-6" />
            </div>
            <span className="border border-black bg-black text-[#00f0ff] px-2 py-0.5 font-mono text-[10px] font-black uppercase mb-1">
              RANK #2 • SILVER
            </span>
            <h3 className="text-xl font-black text-white uppercase">{mockLeaderboard[1].callsign}</h3>
            <p className="mt-2 font-mono text-2xl font-black text-[#ffe600]">
              {mockLeaderboard[1].totalScore.toLocaleString()} PTS
            </p>
            <p className="mt-1 font-mono text-xs text-gray-400">
              {mockLeaderboard[1].gamesPlayed} Games • {mockLeaderboard[1].avgAccuracy} Avg
            </p>
          </div>

          {/* Rank 1 (Gold) */}
          <div className="border-[3px] border-black bg-[#161a23] p-6 shadow-neo-lg text-center flex flex-col items-center justify-between order-1 md:order-2 border-t-8 border-t-[#ffe600]">
            <div className="flex h-14 w-14 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo mb-3">
              <Crown className="w-8 h-8" />
            </div>
            <span className="border border-black bg-[#ffe600] text-black px-3 py-0.5 font-mono text-xs font-black uppercase mb-1">
              RANK #1 • WORLD CHAMPION
            </span>
            <h3 className="text-2xl font-black text-white uppercase">{mockLeaderboard[0].callsign}</h3>
            <p className="mt-2 font-mono text-3xl font-black text-[#ffe600]">
              {mockLeaderboard[0].totalScore.toLocaleString()} PTS
            </p>
            <p className="mt-1 font-mono text-xs text-gray-400">
              {mockLeaderboard[0].gamesPlayed} Games • {mockLeaderboard[0].avgAccuracy} Avg • {mockLeaderboard[0].bestStreak} Streak
            </p>
          </div>

          {/* Rank 3 */}
          <div className="border-[3px] border-black bg-[#161a23] p-5 shadow-neo-md text-center flex flex-col items-center justify-between order-3">
            <div className="flex h-12 w-12 items-center justify-center border-2 border-black bg-[#a3e635] text-black font-black shadow-neo-sm mb-3">
              <Medal className="w-6 h-6" />
            </div>
            <span className="border border-black bg-black text-[#a3e635] px-2 py-0.5 font-mono text-[10px] font-black uppercase mb-1">
              RANK #3 • BRONZE
            </span>
            <h3 className="text-xl font-black text-white uppercase">{mockLeaderboard[2].callsign}</h3>
            <p className="mt-2 font-mono text-2xl font-black text-[#ffe600]">
              {mockLeaderboard[2].totalScore.toLocaleString()} PTS
            </p>
            <p className="mt-1 font-mono text-xs text-gray-400">
              {mockLeaderboard[2].gamesPlayed} Games • {mockLeaderboard[2].avgAccuracy} Avg
            </p>
          </div>
        </div>

        {/* Full Rankings Table */}
        <div className="border-[3px] border-black bg-[#161a23] shadow-neo-lg overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-black bg-[#1e2330] font-mono text-xs font-black uppercase text-gray-300">
                <th className="p-4">RANK</th>
                <th className="p-4">OPERATOR</th>
                <th className="p-4">TIER</th>
                <th className="p-4 text-right">GAMES</th>
                <th className="p-4 text-right">AVG PTS</th>
                <th className="p-4 text-right">TOTAL SCORE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 font-mono text-sm">
              {mockLeaderboard.map((entry) => (
                <tr
                  key={entry.rank}
                  className={`hover:bg-[#1a1f2c] transition-colors ${
                    entry.callsign === 'GUEST_OPERATOR' ? 'bg-[#ffe600]/10 font-bold' : ''
                  }`}
                >
                  <td className="p-4 font-black">
                    <span className="inline-block w-8 text-center border border-black bg-black px-1.5 py-0.5 text-xs text-white">
                      #{entry.rank}
                    </span>
                  </td>
                  <td className="p-4 font-black text-white flex items-center gap-2">
                    <span>{entry.callsign}</span>
                    {entry.callsign === 'GUEST_OPERATOR' && (
                      <span className="border border-black bg-[#ffe600] text-black px-1.5 py-0.5 text-[9px] font-black uppercase">
                        YOU
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-xs">
                    <span className="border border-gray-700 bg-black/60 px-2 py-0.5 text-gray-300">
                      {entry.badge}
                    </span>
                  </td>
                  <td className="p-4 text-right text-gray-400">{entry.gamesPlayed}</td>
                  <td className="p-4 text-right text-[#a3e635]">{entry.avgAccuracy}</td>
                  <td className="p-4 text-right font-black text-[#ffe600] text-base">
                    {entry.totalScore.toLocaleString()} PTS
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
