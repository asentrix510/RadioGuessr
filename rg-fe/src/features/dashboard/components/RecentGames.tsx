
function RecentGames() {
  const games = [
    {
      id: 1,
      mode: 'Classic',
      score: 4250,
      rounds: 5,
      date: '2 hours ago',
      result: 'Completed',
    },
    {
      id: 2,
      mode: 'Country Challenge',
      score: 3820,
      rounds: 5,
      date: 'Yesterday',
      result: 'Completed',
    },
    {
      id: 3,
      mode: 'Classic',
      score: 4650,
      rounds: 5,
      date: '3 days ago',
      result: 'Completed',
    },
  ]

  return (
    <section className="mt-10">
      {/* Section heading */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-brand">
            YOUR ACTIVITY
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Recent Games
          </h2>

          <p className="mt-2 text-sm text-text-secondary">
            Your latest adventures around the world.
          </p>
        </div>

        <span className="text-sm text-text-muted">
          Last 3 games
        </span>
      </div>

      {/* Games list */}
      <div className="mt-6 flex flex-col gap-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border-subtle bg-surface p-5 transition hover:border-white/20"
          >
            {/* Game information */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-xl">
                🌍
              </div>

              <div>
                <h3 className="font-semibold">
                  {game.mode}
                </h3>

                <p className="mt-1 text-xs text-text-muted">
                  {game.rounds} rounds · {game.date}
                </p>
              </div>
            </div>

            {/* Score and status */}
            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-text-muted">
                  FINAL SCORE
                </p>

                <p className="mt-1 text-lg font-bold text-brand">
                  {game.score.toLocaleString()}
                </p>
              </div>

              <span className="rounded-full bg-signal/10 px-3 py-1 text-xs font-medium text-signal">
                {game.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RecentGames
