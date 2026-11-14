
import DashboardLayout from '../components/DashboardLayout'
import NewGamePanel from '../components/NewGamePanel'
import RecentGames from '../components/RecentGames'
function DashboardPage() {
  const stats = [
    {
      label: 'Games Played',
      value: '12',
      description: 'Total games completed',
      icon: '🎮',
    },
    {
      label: 'Total Score',
      value: '8,450',
      description: 'Across all games',
      icon: '🏆',
    },
    {
      label: 'Average Score',
      value: '704',
      description: 'Per game',
      icon: '📊',
    },
    {
      label: 'Best Score',
      value: '920',
      description: 'Your highest score',
      icon: '🔥',
    },
  ]

  return (
    <DashboardLayout>
      <div>
        {/* Welcome section */}
        <div>
          <p className="text-sm font-medium text-brand">
            YOUR DASHBOARD
          </p>

          <h1 className="mt-2 text-3xl font-bold">
            Welcome back, Guest!
          </h1>

          <p className="mt-2 text-text-secondary">
            Tune in, explore the world, and test your geography skills.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border-subtle bg-surface p-5"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-text-secondary">
                  {stat.label}
                </p>

                <span className="text-xl">{stat.icon}</span>
              </div>

              <h2 className="mt-4 text-3xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-2 text-xs text-text-muted">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* New Game panel */}
        <NewGamePanel />
        <RecentGames />
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage
