
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import AudioPlayer from '../../audio/components/AudioPlayer'
import WorldMap from '../components/WorldMap'

import type { GameConfig } from '../../../types/game'

interface Coordinates {
  lat: number
  lng: number
}

interface Station {
  name: string
  city: string
  country: string
  streamUrl: string
  coordinates: Coordinates
}

// Temporary mock station data.
// These locations will eventually come from the backend.
const mockStations: Station[] = [
  {
    name: 'Radio Paradise',
    city: 'Paradise',
    country: 'United States',
    streamUrl: 'https://stream.radioparadise.com/mp3-192',
    coordinates: { lat: 39.7392, lng: -104.9903 },
  },
  {
    name: 'SomaFM Groove Salad',
    city: 'San Francisco',
    country: 'United States',
    streamUrl: 'https://ice.somafm.com/groovesalad',
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    name: 'SomaFM Drone Zone',
    city: 'San Francisco',
    country: 'United States',
    streamUrl: 'https://ice.somafm.com/dronezone',
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    name: 'BBC Radio 1',
    city: 'London',
    country: 'United Kingdom',
    streamUrl: 'https://stream.live.vc.bbcmedia.co.uk/bbc_radio_one',
    coordinates: { lat: 51.5072, lng: -0.1276 },
  },
  {
    name: 'SomaFM Secret Agent',
    city: 'San Francisco',
    country: 'United States',
    streamUrl: 'https://ice.somafm.com/secretagent',
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    name: 'Radio Swiss Jazz',
    city: 'Basel',
    country: 'Switzerland',
    streamUrl: 'https://stream.srg-ssr.ch/m/rsj/mp3_128',
    coordinates: { lat: 47.5596, lng: 7.5886 },
  },
  {
    name: 'SomaFM DEF CON',
    city: 'San Francisco',
    country: 'United States',
    streamUrl: 'https://ice.somafm.com/defcon',
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    name: 'Radio Paradise Mellow Mix',
    city: 'Paradise',
    country: 'United States',
    streamUrl: 'https://stream.radioparadise.com/mellow-192',
    coordinates: { lat: 39.7392, lng: -104.9903 },
  },
  {
    name: 'SomaFM Indie Pop Rocks',
    city: 'San Francisco',
    country: 'United States',
    streamUrl: 'https://ice.somafm.com/indiepop',
    coordinates: { lat: 37.7749, lng: -122.4194 },
  },
  {
    name: 'Radio Paradise Rock Mix',
    city: 'Paradise',
    country: 'United States',
    streamUrl: 'https://stream.radioparadise.com/rock-192',
    coordinates: { lat: 39.7392, lng: -104.9903 },
  },
]

function calculateDistance(
  point1: Coordinates,
  point2: Coordinates,
): number {
  const earthRadius = 6371

  const toRadians = (degrees: number) => (degrees * Math.PI) / 180

  const latDifference = toRadians(point2.lat - point1.lat)
  const lngDifference = toRadians(point2.lng - point1.lng)

  const a =
    Math.sin(latDifference / 2) ** 2 +
    Math.cos(toRadians(point1.lat)) *
      Math.cos(toRadians(point2.lat)) *
      Math.sin(lngDifference / 2) ** 2

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

function GamePage() {
  const location = useLocation()
  const navigate = useNavigate()

  const config = location.state as GameConfig | null

  const [roundIndex, setRoundIndex] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [submittedGuess, setSubmittedGuess] =
    useState<Coordinates | null>(null)
  const [gameFinished, setGameFinished] = useState(false)

  if (!config) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-midnight p-6 text-text-primary">
        <div className="text-center">
          <div className="text-5xl">📻</div>

          <h1 className="mt-4 text-2xl font-bold">
            No active game found
          </h1>

          <p className="mt-2 text-text-secondary">
            Start a new game from your dashboard.
          </p>

          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="mt-6 rounded-xl bg-brand px-6 py-3 font-semibold text-midnight transition hover:bg-brand-hover"
          >
            Back to Dashboard
          </button>
        </div>
      </main>
    )
  }

  const totalRounds = Math.min(
    Math.max(config.totalRounds, 1),
    mockStations.length,
  )

  const currentStation = mockStations[roundIndex]

  const roundResult =
    submittedGuess !== null
      ? {
          distance: calculateDistance(
            submittedGuess,
            currentStation.coordinates,
          ),
          score: calculateScore(
            calculateDistance(
              submittedGuess,
              currentStation.coordinates,
            ),
          ),
        }
      : null

  function handleNextRound() {
    if (!roundResult) return

    setTotalScore((previousScore) => previousScore + roundResult.score)
    setSubmittedGuess(null)
    setRoundIndex((previousRound) => previousRound + 1)
  }

  function handleFinishGame() {
    if (!roundResult) return

    setTotalScore((previousScore) => previousScore + roundResult.score)
    setGameFinished(true)
  }

  // Final game summary
  if (gameFinished) {
    const finalScore = totalScore

    return (
      <main className="flex min-h-screen items-center justify-center bg-midnight p-6 text-text-primary">
        <section className="w-full max-w-2xl rounded-3xl border border-border-subtle bg-surface p-8 text-center">
          <div className="text-6xl">🏆</div>

          <p className="mt-6 text-sm font-semibold tracking-widest text-brand">
            GAME COMPLETED
          </p>

          <h1 className="mt-3 text-3xl font-bold">
            Excellent Journey!
          </h1>

          <p className="mt-3 text-text-secondary">
            You completed all {totalRounds} rounds.
          </p>

          <div className="mt-8 rounded-2xl bg-surface-elevated p-8">
            <p className="text-sm text-text-secondary">
              YOUR FINAL SCORE
            </p>

            <p className="mt-3 text-5xl font-bold text-brand">
              {finalScore.toLocaleString()}
            </p>

            <p className="mt-2 text-sm text-text-muted">
              out of {(totalRounds * 5000).toLocaleString()} points
            </p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="rounded-xl bg-brand px-6 py-3 font-semibold text-midnight transition hover:bg-brand-hover"
            >
              Back to Dashboard
            </button>

            <button
              type="button"
              onClick={() => navigate('/')}
              className="rounded-xl border border-border-subtle px-6 py-3 font-semibold transition hover:bg-surface-elevated"
            >
              Home
            </button>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-midnight text-text-primary">
      {/* Game Header */}
      <header className="border-b border-border-subtle bg-surface px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-wide">
              RADIO<span className="text-brand">GUESSR</span>
            </h1>

            <p className="mt-1 text-sm text-text-secondary">
              {config.mode === 'classic'
                ? 'Classic Mode'
                : 'Country Challenge'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/dashboard')}
            className="rounded-xl border border-border-subtle px-4 py-2 text-sm font-medium transition hover:bg-surface-elevated"
          >
            Exit Game
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl p-6">
        {/* Round Information */}
        <section className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-text-secondary">
              CURRENT ROUND
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Round {(roundIndex + 1).toString().padStart(2, '0')}

              <span className="ml-2 text-text-secondary">
                / {totalRounds.toString().padStart(2, '0')}
              </span>
            </h2>
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface px-5 py-3">
            <p className="text-xs text-text-muted">
              TOTAL SCORE
            </p>

            <p className="mt-1 text-xl font-bold text-brand">
              {(totalScore + (roundResult?.score ?? 0)).toLocaleString()} pts
            </p>
          </div>
        </section>

        {/* Round Progress */}
        <section className="mt-5">
          <div className="flex gap-2">
            {Array.from({ length: totalRounds }).map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full ${
                  index <= roundIndex
                    ? 'bg-brand'
                    : 'bg-surface-elevated'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Audio and Map */}
        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AudioPlayer
            key={roundIndex}
            stationName={currentStation.name}
            streamUrl={currentStation.streamUrl}
          />

          <WorldMap
            key={roundIndex}
            onGuessSubmit={(coordinates) => {
              setSubmittedGuess(coordinates)
            }}
          />
        </section>

        {/* Round Result */}
        {roundResult && (
          <section className="mt-8 rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest text-brand">
                ROUND RESULT
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                {currentStation.city}, {currentStation.country}
              </h2>

              <p className="mt-2 text-text-secondary">
                The station was broadcasting from this location.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-surface-elevated p-5 text-center">
                <p className="text-sm text-text-secondary">
                  DISTANCE
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {formatDistance(roundResult.distance)}
                </p>
              </div>

              <div className="rounded-xl bg-surface-elevated p-5 text-center">
                <p className="text-sm text-text-secondary">
                  ROUND SCORE
                </p>

                <p className="mt-2 text-2xl font-bold text-brand">
                  {roundResult.score.toLocaleString()} pts
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              {roundIndex + 1 < totalRounds ? (
                <button
                  type="button"
                  onClick={handleNextRound}
                  className="rounded-xl bg-brand px-8 py-3 font-semibold text-midnight transition hover:bg-brand-hover"
                >
                  Next Round →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleFinishGame}
                  className="rounded-xl bg-brand px-8 py-3 font-semibold text-midnight transition hover:bg-brand-hover"
                >
                  View Final Results →
                </button>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default GamePage
