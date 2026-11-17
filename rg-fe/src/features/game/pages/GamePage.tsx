import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import confetti from 'canvas-confetti'
import {
  Radio,
  Trophy,
  ArrowRight,
  RotateCcw,
  Home,
  LogOut,
  Sparkles,
  Award,
} from 'lucide-react'

import AudioPlayer from '../../audio/components/AudioPlayer'
import WorldMap, { type Coordinates } from '../components/WorldMap'
import type { GameConfig } from '../../../types/game'
import {
  getRandomStations,
  VERIFIED_STATIONS,
  type Station,
} from '../../../data/stations'

function calculateDistance(point1: Coordinates, point2: Coordinates): number {
  const earthRadius = 6371
  const toRadians = (degrees: number) => (degrees * Math.PI) / 180

  const latDiff = toRadians(point2.lat - point1.lat)
  const lngDiff = toRadians(point2.lng - point1.lng)

  const a =
    Math.sin(latDiff / 2) ** 2 +
    Math.cos(toRadians(point1.lat)) *
      Math.cos(toRadians(point2.lat)) *
      Math.sin(lngDiff / 2) ** 2

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return earthRadius * c
}

function calculateScore(distanceKm: number): number {
  return Math.round(5000 * Math.exp(-distanceKm / 2000))
}

function formatDistance(distanceKm: number): string {
  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`
  }
  return `${Math.round(distanceKm).toLocaleString()} km`
}

function getRatingBadge(distanceKm: number) {
  if (distanceKm <= 50) return { label: 'BULLSEYE 🎯', color: 'bg-[#a3e635] text-black' }
  if (distanceKm <= 350) return { label: 'EXCELLENT ⚡', color: 'bg-[#ffe600] text-black' }
  if (distanceKm <= 1200) return { label: 'SHARP EARS 👂', color: 'bg-[#00f0ff] text-black' }
  if (distanceKm <= 3000) return { label: 'SAME REGION 🌍', color: 'bg-[#a855f7] text-white' }
  return { label: 'WAY OFF 📡', color: 'bg-[#ff3366] text-white' }
}

export default function GamePage() {
  const location = useLocation()
  const navigate = useNavigate()

  const config = (location.state as GameConfig | null) || {
    mode: 'classic',
    totalRounds: 5,
  }

  const [roundIndex, setRoundIndex] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [roundScores, setRoundScores] = useState<number[]>([])
  const [submittedGuess, setSubmittedGuess] = useState<Coordinates | null>(null)
  const [gameFinished, setGameFinished] = useState(false)

  const totalRounds = Math.min(
    Math.max(config.totalRounds || 5, 1),
    20,
  )

  // Dynamically roll random stations from the 419+ station pool
  const [matchStations, setMatchStations] = useState<Station[]>(() =>
    getRandomStations(totalRounds, config.region),
  )

  const currentStation = matchStations[roundIndex] || matchStations[0] || VERIFIED_STATIONS[0]

  const roundResult =
    submittedGuess !== null
      ? {
          distance: calculateDistance(submittedGuess, currentStation.coordinates),
          score: calculateScore(
            calculateDistance(submittedGuess, currentStation.coordinates),
          ),
        }
      : null

  // Trigger celebration confetti upon game finish
  useEffect(() => {
    if (gameFinished) {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ffe600', '#00f0ff', '#ff3366', '#a3e635'],
      })
    }
  }, [gameFinished])

  function handleNextRound() {
    if (!roundResult) return
    setTotalScore((prev) => prev + roundResult.score)
    setRoundScores((prev) => [...prev, roundResult.score])
    setSubmittedGuess(null)
    setRoundIndex((prev) => prev + 1)
  }

  function handleFinishGame() {
    if (!roundResult) return
    setTotalScore((prev) => prev + roundResult.score)
    setRoundScores((prev) => [...prev, roundResult.score])
    setGameFinished(true)
  }

  function restartGame() {
    setMatchStations(getRandomStations(totalRounds, config.region))
    setRoundIndex(0)
    setTotalScore(0)
    setRoundScores([])
    setSubmittedGuess(null)
    setGameFinished(false)
  }

  // ==========================================
  // FINAL RESULTS SCREEN (NEO-BRUTALIST)
  // ==========================================
  if (gameFinished) {
    const finalScore = totalScore
    const maxPossible = totalRounds * 5000
    const percentage = Math.round((finalScore / maxPossible) * 100)

    let rank = 'RANK B - RADIO HOBBYIST'
    let rankColor = 'bg-[#00f0ff] text-black'
    if (percentage >= 85) {
      rank = 'RANK S - AIRWAVE GRANDMASTER'
      rankColor = 'bg-[#ffe600] text-black'
    } else if (percentage >= 65) {
      rank = 'RANK A - SHORTWAVE SCOUT'
      rankColor = 'bg-[#a3e635] text-black'
    }

    return (
      <main className="min-h-screen bg-[#0b0d12] bg-neo-dots p-6 flex items-center justify-center text-white">
        <section className="w-full max-w-2xl border-[3px] border-black bg-[#161a23] p-8 shadow-neo-xl relative overflow-hidden">
          <div className="text-center mt-2">
            <div className="inline-flex h-20 w-20 items-center justify-center border-[3px] border-black bg-[#ffe600] text-black shadow-neo mb-4">
              <Trophy className="w-10 h-10" />
            </div>

            <div className="inline-block border-2 border-black bg-[#ff3366] px-4 py-1 font-mono text-xs font-black uppercase text-white shadow-neo-sm mb-3">
              MISSION EVALUATION • ALL {totalRounds} ROUNDS COMPLETED
            </div>

            <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight">
              Mission Report
            </h1>
            <p className="mt-2 text-sm text-gray-400 font-mono">
              Final signal analysis complete. Here is your global performance.
            </p>
          </div>

          {/* Main Score Banner */}
          <div className="mt-8 border-[3px] border-black bg-black p-6 text-center shadow-neo relative">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-gray-400">
              FINAL CUMULATIVE SCORE
            </p>

            <div className="mt-2 text-6xl sm:text-7xl font-black text-[#ffe600] tracking-tight">
              {finalScore.toLocaleString()}
            </div>

            <p className="mt-1 font-mono text-xs text-gray-400">
              out of {maxPossible.toLocaleString()} points ({percentage}% accuracy)
            </p>

            <div className="mt-5 inline-block">
              <span className={`inline-flex items-center gap-2 border-2 border-black px-4 py-1.5 font-black text-sm uppercase shadow-neo-sm ${rankColor}`}>
                <Award className="w-4 h-4" />
                {rank}
              </span>
            </div>
          </div>

          {/* Round Breakdown */}
          <div className="mt-6 border-2 border-black bg-[#10131a] p-4 shadow-neo-sm">
            <p className="font-mono text-xs font-bold uppercase text-gray-400 mb-3 border-b border-gray-800 pb-2">
              ROUND-BY-ROUND BREAKDOWN
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {Array.from({ length: totalRounds }).map((_, i) => (
                <div key={i} className="border-2 border-black bg-black p-2 text-center shadow-neo-sm">
                  <div className="font-mono text-[10px] text-gray-400">R{i + 1}</div>
                  <div className="font-mono font-black text-sm text-[#00f0ff]">
                    {roundScores[i] !== undefined ? `${roundScores[i]} pts` : '-'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Navigation */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={restartGame}
              className="btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black px-6 py-3.5 text-sm uppercase gap-2 flex-1"
            >
              <RotateCcw className="w-4 h-4" />
              PLAY AGAIN
            </button>

            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="btn-neo bg-[#00f0ff] hover:bg-[#3de8f5] text-black px-6 py-3.5 text-sm uppercase gap-2 flex-1"
            >
              <Radio className="w-4 h-4" />
              DASHBOARD
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-neo bg-white hover:bg-gray-100 text-black px-6 py-3.5 text-sm uppercase gap-2 flex-1"
            >
              <Home className="w-4 h-4" />
              HOME
            </button>
          </div>
        </section>
      </main>
    )
  }

  // ==========================================
  // ACTIVE GAMEPLAY SCREEN (NEO-BRUTALIST)
  // ==========================================
  return (
    <main className="min-h-screen bg-[#0b0d12] bg-neo-dots text-white pb-12">
      {/* Top Bar Header */}
      <header className="border-b-[3px] border-black bg-[#161a23] sticky top-0 z-30 shadow-neo">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm">
              <Radio className="w-6 h-6" />
            </div>

            <div>
              <h1 className="text-xl font-black uppercase tracking-wider">
                RADIO<span className="text-[#ffe600]">GUESSR</span>
              </h1>
              <p className="text-[11px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <span>{config.mode === 'classic' ? 'GLOBAL FREQUENCY MODE' : 'COUNTRY CHALLENGE'}</span>
                <span className="text-gray-600">•</span>
                <span className="text-[#00f0ff] font-bold">
                  {config.region && config.region !== 'world' ? config.region.toUpperCase() : 'WORLD'} ({VERIFIED_STATIONS.length} STATIONS)
                </span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="btn-neo bg-white hover:bg-[#ff3366] hover:text-white text-black px-4 py-2 text-xs uppercase gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>EXIT TO BASE</span>
          </button>
        </div>
      </header>

      {/* Main Game Interface Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
        {/* Round Progress & Score Header Card */}
        <section className="border-[3px] border-black bg-[#161a23] p-5 shadow-neo mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="border-2 border-black bg-[#ffe600] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm uppercase">
                ACTIVE ROUND
              </span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-mono">
                {(roundIndex + 1).toString().padStart(2, '0')}{' '}
                <span className="text-gray-500">/ {totalRounds.toString().padStart(2, '0')}</span>
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <div className="border-2 border-black bg-black px-5 py-2 text-right shadow-neo-sm">
                <p className="text-[10px] font-mono font-bold uppercase text-gray-400">
                  CURRENT SCORE
                </p>
                <p className="text-xl font-mono font-black text-[#ffe600]">
                  {(totalScore + (roundResult?.score ?? 0)).toLocaleString()} PTS
                </p>
              </div>
            </div>
          </div>

          {/* Segmented Round Tracker */}
          <div className="mt-4 flex gap-2">
            {Array.from({ length: totalRounds }).map((_, idx) => (
              <div
                key={idx}
                className={`h-3 flex-1 border-2 border-black transition-all ${
                  idx < roundIndex
                    ? 'bg-[#a3e635]'
                    : idx === roundIndex
                      ? 'bg-[#ffe600] animate-pulse'
                      : 'bg-black/60'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Core Layout: Audio Player (Left) + 3D Globe Radar (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Audio Receiver Unit */}
          <AudioPlayer
            key={`audio-${roundIndex}`}
            stationName={currentStation.name}
            streamUrl={currentStation.streamUrl}
          />

          {/* 3D Interactive World Globe Unit */}
          <WorldMap
            key={`map-${roundIndex}`}
            onGuessSubmit={(coords) => {
              setSubmittedGuess(coords)
            }}
            actualLocation={roundResult ? currentStation.coordinates : null}
            isRevealed={Boolean(roundResult)}
          />
        </div>

        {/* Round Result Neo-Brutalist Drawer / Card */}
        {roundResult && (
          <section className="mt-8 border-[3px] border-black bg-[#161a23] p-6 sm:p-8 shadow-neo-xl animate-in fade-in slide-in-from-bottom-6 duration-300">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-black pb-5">
              <div>
                <span className="border-2 border-black bg-[#ffe600] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm uppercase">
                  TRANSMISSION SOURCE UNLOCKED
                </span>
                <h3 className="mt-3 text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  {currentStation.city}, {currentStation.country}
                </h3>
                <p className="mt-1 font-mono text-xs text-gray-400">
                  Broadcast originating station: <span className="text-[#00f0ff] font-bold">{currentStation.name}</span>
                </p>
              </div>

              {/* Performance Stamp */}
              <div>
                {(() => {
                  const stamp = getRatingBadge(roundResult.distance)
                  return (
                    <div className={`border-2 border-black px-4 py-2 font-black text-sm uppercase shadow-neo tracking-wider ${stamp.color}`}>
                      {stamp.label}
                    </div>
                  )
                })()}
              </div>
            </div>

            {/* Score & Distance Metrics */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-black bg-black p-5 shadow-neo-sm text-center">
                <p className="font-mono text-xs font-bold text-gray-400 uppercase">
                  CALCULATED DISTANCE ERROR
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-mono font-black text-white">
                  {formatDistance(roundResult.distance)}
                </p>
              </div>

              <div className="border-2 border-black bg-black p-5 shadow-neo-sm text-center">
                <p className="font-mono text-xs font-bold text-gray-400 uppercase">
                  POINTS EARNED THIS ROUND
                </p>
                <p className="mt-2 text-3xl sm:text-4xl font-mono font-black text-[#a3e635]">
                  +{roundResult.score.toLocaleString()} PTS
                </p>
              </div>
            </div>

            {/* Next Round Action */}
            <div className="mt-8 flex justify-center">
              {roundIndex + 1 < totalRounds ? (
                <button
                  type="button"
                  onClick={handleNextRound}
                  className="btn-neo bg-[#a3e635] hover:bg-[#bbf455] text-black px-10 py-4 text-base uppercase tracking-wider gap-3 shadow-neo-lg"
                >
                  <span>PROCEED TO NEXT FREQUENCY</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinishGame}
                  className="btn-neo bg-[#ffe600] hover:bg-[#fff04d] text-black px-10 py-4 text-base uppercase tracking-wider gap-3 shadow-neo-lg"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>VIEW FINAL MISSION EVALUATION</span>
                </button>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
