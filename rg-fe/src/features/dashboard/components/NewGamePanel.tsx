import { useState } from 'react'
import type { GameMode, GameConfig } from '../../../types/game'

function NewGamePanel() {
  const [gameMode, setGameMode] = useState<GameMode>('classic')
  const [rounds, setRounds] = useState(5)

  function handleStartGame() {
    const config: GameConfig = {
      mode: gameMode,
      totalRounds: rounds,
    }

    console.log('Starting game:', config)
  }
  return (
    <section
      id="new-game"
      className="mt-10 rounded-2xl border border-border-subtle bg-surface p-6"
    >
      <div>
        <p className="text-sm font-medium text-brand">
          READY TO EXPLORE?
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          Start a New Game
        </h2>

        <p className="mt-2 text-sm text-text-secondary">
          Listen to a live radio station and guess where it's broadcasting from.
        </p>
      </div>

      {/* Game mode selection */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold">
          Choose your game mode
        </h3>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => setGameMode('classic')}
            className={`rounded-xl border p-5 text-left transition ${
              gameMode === 'classic'
                ? 'border-brand bg-brand/10'
                : 'border-border-subtle bg-surface-elevated hover:border-white/20'
            }`}
          >
            <span className="text-2xl">🌍</span>

            <h4 className="mt-3 font-semibold">
              Classic
            </h4>

            <p className="mt-2 text-sm text-text-secondary">
              Discover random radio stations from around the world.
            </p>

            {gameMode === 'classic' && (
              <p className="mt-4 text-xs font-semibold text-brand">
                SELECTED
              </p>
            )}
          </button>

          <button
            type="button"
            onClick={() => setGameMode('country')}
            className={`rounded-xl border p-5 text-left transition ${
              gameMode === 'country'
                ? 'border-brand bg-brand/10'
                : 'border-border-subtle bg-surface-elevated hover:border-white/20'
            }`}
          >
            <span className="text-2xl">🎯</span>

            <h4 className="mt-3 font-semibold">
              Country Challenge
            </h4>

            <p className="mt-2 text-sm text-text-secondary">
              Test your knowledge of stations from a specific country.
            </p>

            {gameMode === 'country' && (
              <p className="mt-4 text-xs font-semibold text-brand">
                SELECTED
              </p>
            )}
          </button>
        </div>
      </div>

      {/* Round selection */}
      <div className="mt-8">
        <h3 className="text-sm font-semibold">
          Number of rounds
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          {[3, 5, 10].map((count) => (
            <button
              key={count}
              type="button"
              onClick={() => setRounds(count)}
              className={`rounded-lg border px-6 py-3 text-sm font-medium transition ${
                rounds === count
                  ? 'border-brand bg-brand/10 text-brand'
                  : 'border-border-subtle bg-surface-elevated text-text-secondary hover:text-white'
              }`}
            >
              {count} Rounds
            </button>
          ))}
        </div>
      </div>

      {/* Start button */}
      <div className="mt-8 border-t border-border-subtle pt-6">
        <button
          type="button"
          onClick={handleStartGame}
          className="rounded-lg bg-brand px-7 py-3 font-semibold text-midnight transition hover:bg-brand-hover"
        >
          Start Game →
        </button>
      </div>
    </section>
  )
}

export default NewGamePanel
