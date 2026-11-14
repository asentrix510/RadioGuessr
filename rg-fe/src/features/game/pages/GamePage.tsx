
import { useLocation, useNavigate } from 'react-router-dom'

import AudioPlayer from '../../audio/components/AudioPlayer'
import type { GameConfig } from '../../../types/game'

function GamePage() {
  const location = useLocation()
  const navigate = useNavigate()

  const config = location.state as GameConfig | null

  // Prevent users from opening a game without configuration.
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

  return (
    <main className="min-h-screen bg-midnight text-text-primary">
      {/* Game header */}
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

      {/* Game content */}
      <div className="mx-auto max-w-7xl p-6">
        {/* Round information */}
        <section className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-text-secondary">
              CURRENT ROUND
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              Round 01
              <span className="ml-2 text-text-secondary">
                / {config.totalRounds.toString().padStart(2, '0')}
              </span>
            </h2>
          </div>

          <div className="rounded-xl border border-border-subtle bg-surface px-5 py-3">
            <p className="text-xs text-text-muted">
              TOTAL SCORE
            </p>

            <p className="mt-1 text-xl font-bold text-brand">
              0 pts
            </p>
          </div>
        </section>

        {/* Game area */}
        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Radio player */}
          <AudioPlayer
            stationName="Radio Paradise"
            streamUrl="https://stream.radioparadise.com/mp3-192"
          />

          {/* Map placeholder */}
          <div className="flex min-h-80 items-center justify-center rounded-2xl border border-border-subtle bg-surface p-6">
            <div className="text-center">
              <span className="text-5xl">🌍</span>

              <h3 className="mt-4 text-xl font-semibold">
                World Map
              </h3>

              <p className="mt-2 text-sm text-text-secondary">
                Location guessing map coming next.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default GamePage
