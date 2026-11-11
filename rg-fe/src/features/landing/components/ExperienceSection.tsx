
const features = [
  {
    title: 'Real radio stations',
    description:
      'Discover broadcasts from real radio stations across different countries and cultures.',
    icon: '♫',
  },
  {
    title: 'Explore the globe',
    description:
      'Use geographical clues and your instincts to identify where a broadcast originates.',
    icon: '◎',
  },
  {
    title: 'Challenge yourself',
    description:
      'Play multiple rounds, improve your guesses, and see how well you know the world.',
    icon: '✦',
  },
]

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/10"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
          The experience
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
          More than just a guessing game.
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title}>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-brand/20 bg-brand/10 text-2xl text-brand">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-text-secondary">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
