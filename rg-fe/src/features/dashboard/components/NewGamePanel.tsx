import { useState } from 'react'
import type { GameMode, GameConfig } from '../../../types/game'
import { useNavigate } from 'react-router-dom'
import { Globe, Target, Play, Sparkles, Radio } from 'lucide-react'
import { VERIFIED_STATIONS } from '../../../data/stations'

const REGIONS = [
  { id: 'world', label: 'GLOBAL', count: VERIFIED_STATIONS.length, color: 'bg-[#ffe600] text-black' },
  { id: 'Africa', label: 'AFRICA', count: VERIFIED_STATIONS.filter(s => s.continent === 'Africa').length, color: 'bg-[#ff3366] text-white' },
  { id: 'Asia', label: 'ASIA', count: VERIFIED_STATIONS.filter(s => s.continent === 'Asia').length, color: 'bg-[#00f0ff] text-black' },
  { id: 'Europe', label: 'EUROPE', count: VERIFIED_STATIONS.filter(s => s.continent === 'Europe').length, color: 'bg-[#a3e635] text-black' },
  { id: 'Americas', label: 'AMERICAS', count: VERIFIED_STATIONS.filter(s => s.continent === 'North America' || s.continent === 'South America').length, color: 'bg-[#a855f7] text-white' },
  { id: 'Oceania', label: 'OCEANIA', count: VERIFIED_STATIONS.filter(s => s.continent === 'Oceania').length, color: 'bg-white text-black' },
]

export default function NewGamePanel() {
  const [gameMode, setGameMode] = useState<GameMode>('classic')
  const [selectedRegion, setSelectedRegion] = useState('world')
  const [rounds, setRounds] = useState(5)
  const navigate = useNavigate()

  function handleStartGame() {
    const config: GameConfig = {
      mode: gameMode,
      totalRounds: rounds,
      region: selectedRegion,
    }

    navigate('/game', {
      state: config,
    })
  }

  return (
    <section
      id="new-game"
      className="border-[3px] border-black bg-[#161a23] p-6 sm:p-8 shadow-neo-lg"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-5">
        <div>
          <div className="inline-flex items-center gap-1.5 border-2 border-black bg-[#ffe600] px-3 py-1 font-mono text-xs font-black uppercase text-black shadow-neo-sm mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MISSION CONFIGURATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
            START NEW FREQUENCY RUN
          </h2>
          <p className="mt-1 text-xs text-gray-400 font-mono">
            Listen to live transmissions, identify geographical origins, drop pins on the 3D globe.
          </p>
        </div>

        <div className="hidden sm:block border-2 border-black bg-black px-4 py-2 font-mono text-xs text-[#a3e635] shadow-neo-sm">
          READY TO TRANSMIT
        </div>
      </div>

      {/* Game Mode Selection */}
      <div className="mt-6">
        <h3 className="font-mono text-xs font-black uppercase text-gray-300 tracking-wider flex items-center gap-2">
          <span>01. CHOOSE GAME MODE</span>
        </h3>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Classic Mode */}
          <button
            type="button"
            onClick={() => setGameMode('classic')}
            className={`p-5 border-[3px] border-black text-left transition-all ${
              gameMode === 'classic'
                ? 'bg-[#00f0ff] text-black shadow-neo -translate-x-0.5 -translate-y-0.5'
                : 'bg-[#10131a] text-white hover:bg-[#1a1f2c] shadow-neo-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-black text-[#00f0ff] shadow-neo-sm">
                <Globe className="w-6 h-6" />
              </div>
              {gameMode === 'classic' && (
                <span className="border-2 border-black bg-black text-[#ffe600] px-2.5 py-0.5 font-mono text-[10px] font-black uppercase shadow-neo-sm">
                  ACTIVE MODE
                </span>
              )}
            </div>

            <h4 className="mt-4 font-black text-lg uppercase tracking-tight">
              GLOBAL EXPEDITION (CLASSIC)
            </h4>
            <p className={`mt-1.5 text-xs font-mono leading-relaxed ${gameMode === 'classic' ? 'text-black' : 'text-gray-400'}`}>
              Random mystery broadcasts from anywhere on planet Earth. Pure auditory detective work.
            </p>
          </button>

          {/* Regional Challenge */}
          <button
            type="button"
            onClick={() => setGameMode('country')}
            className={`p-5 border-[3px] border-black text-left transition-all ${
              gameMode === 'country'
                ? 'bg-[#ff3366] text-white shadow-neo -translate-x-0.5 -translate-y-0.5'
                : 'bg-[#10131a] text-white hover:bg-[#1a1f2c] shadow-neo-sm'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-black text-[#ff3366] shadow-neo-sm">
                <Target className="w-6 h-6" />
              </div>
              {gameMode === 'country' && (
                <span className="border-2 border-black bg-black text-white px-2.5 py-0.5 font-mono text-[10px] font-black uppercase shadow-neo-sm">
                  ACTIVE MODE
                </span>
              )}
            </div>

            <h4 className="mt-4 font-black text-lg uppercase tracking-tight">
              COUNTRY CHALLENGE
            </h4>
            <p className={`mt-1.5 text-xs font-mono leading-relaxed ${gameMode === 'country' ? 'text-white' : 'text-gray-400'}`}>
              Focused geographical zones with higher dialect density. Ideal for specialized players.
            </p>
          </button>
        </div>
      </div>

      {/* Region / Continent Pool Selection */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="font-mono text-xs font-black uppercase text-gray-300 tracking-wider flex items-center gap-2">
            <span>02. SELECT FREQUENCY REGION</span>
          </h3>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#00f0ff] font-bold">
            <Radio className="w-3.5 h-3.5" />
            <span>{VERIFIED_STATIONS.length} LIVE STATIONS READY</span>
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {REGIONS.map((r) => {
            const isSelected = selectedRegion === r.id
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => setSelectedRegion(r.id)}
                className={`p-3 border-2 border-black text-left font-mono transition-all ${
                  isSelected
                    ? `${r.color} shadow-neo -translate-x-0.5 -translate-y-0.5`
                    : 'bg-[#10131a] text-gray-300 hover:bg-[#1a1f2c] shadow-neo-sm'
                }`}
              >
                <div className="font-black text-xs uppercase">{r.label}</div>
                <div className="text-[10px] opacity-75 font-bold mt-0.5">
                  {r.count} STATIONS
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Rounds Selector */}
      <div className="mt-6">
        <h3 className="font-mono text-xs font-black uppercase text-gray-300 tracking-wider flex items-center gap-2">
          <span>03. SELECT ROUND COUNT</span>
        </h3>

        <div className="mt-3 flex flex-wrap gap-3">
          {[3, 5, 10].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setRounds(count)}
              className={`border-2 border-black px-6 py-3 font-mono text-xs font-black uppercase tracking-wider transition-all ${
                rounds === count
                  ? 'bg-[#ffe600] text-black shadow-neo -translate-x-0.5 -translate-y-0.5'
                  : 'bg-[#10131a] text-gray-300 hover:bg-black hover:text-white shadow-neo-sm'
              }`}
            >
              <span className="text-sm mr-1.5">{count}</span>
              ROUNDS
            </button>
          ))}
        </div>
      </div>

      {/* Start Game Action */}
      <div className="mt-8 pt-6 border-t-2 border-black flex flex-wrap items-center justify-between gap-4">
        <div className="font-mono text-xs text-gray-400">
          ESTIMATED DURATION: <span className="text-white font-bold">{rounds * 2} MINUTES</span>
        </div>

        <button
          type="button"
          onClick={handleStartGame}
          className="btn-neo bg-[#a3e635] hover:bg-[#bbf455] text-black px-8 py-4 text-sm uppercase tracking-wider gap-3 shadow-neo-lg w-full sm:w-auto"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>LAUNCH MISSION ({rounds} ROUNDS)</span>
        </button>
      </div>
    </section>
  )
}
