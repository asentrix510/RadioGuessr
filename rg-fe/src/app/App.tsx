
function App() {
  return (
    <main className="min-h-screen bg-[#080b12] text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-5">
        <h1 className="text-2xl font-bold tracking-tight">
          Radio<span className="text-cyan-400">Guessr</span>
        </h1>

        <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
          Tune into the world
        </span>
      </header>

      <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
          Explore the world through sound
        </p>

        <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Hear a place.
          <br />
          <span className="text-cyan-400">Guess where.</span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 md:text-lg">
          Listen to live radio stations from around the globe, discover
          unfamiliar places, and test your geographical instincts.
        </p>

        <button
          type="button"
          className="mt-10 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:bg-cyan-300"
        >
          Get ready to explore
        </button>
      </section>
    </main>
  )
}

export default App
