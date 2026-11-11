
const steps = [
  {
    number: '01',
    title: 'Tune in',
    description:
      'Listen to a live radio station streaming from somewhere in the world.',
    icon: '♫',
  },
  {
    number: '02',
    title: 'Explore the sound',
    description:
      'Pay attention to language, music, accents, and other clues that reveal the location.',
    icon: '◎',
  },
  {
    number: '03',
    title: 'Make your guess',
    description:
      'Pinpoint the station on the world map and submit your location.',
    icon: '⌖',
  },
  {
    number: '04',
    title: 'Discover your score',
    description:
      'See how close you were, earn points, and move on to the next mystery station.',
    icon: '✦',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            The gameplay
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Four steps. One world.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-text-secondary">
            No complicated rules. Just listen, think, guess, and
            discover.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-brand/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-brand">
                  {step.number}
                </span>

                <span className="text-2xl text-text-secondary transition group-hover:text-brand">
                  {step.icon}
                </span>
              </div>

              <h3 className="mt-10 text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
