
import { useRef, useState } from 'react'

interface AudioPlayerProps {
  streamUrl: string
  stationName: string
}

function AudioPlayer({ streamUrl, stationName }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function togglePlayback() {
    const audio = audioRef.current

    if (!audio) return

    // Pause if audio is already playing.
    if (!audio.paused) {
      audio.pause()
      return
    }

    try {
      setError('')
      setIsLoading(true)

      await audio.play()
    } catch {
      setError('Unable to play this station. Please try again.')
      setIsLoading(false)
      setIsPlaying(false)
    }
  }

  return (
    <section className="rounded-2xl border border-border-subtle bg-surface p-6">
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        onPlaying={() => {
          setIsPlaying(true)
          setIsLoading(false)
        }}
        onPause={() => {
          setIsPlaying(false)
          setIsLoading(false)
        }}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => {
          setError('Stream unavailable. Please try another station.')
          setIsPlaying(false)
          setIsLoading(false)
        }}
      />

      <p className="text-sm font-medium text-brand">
        LIVE RADIO
      </p>

      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-3xl">
          📻
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold">
            {stationName}
          </h3>

          <p className="mt-1 text-sm text-text-secondary">
            {isLoading
              ? 'Connecting to station...'
              : isPlaying
                ? 'Now playing'
                : 'Ready to listen'}
          </p>
        </div>

        <span
          className={`h-2.5 w-2.5 shrink-0 rounded-full ${
            isPlaying ? 'bg-signal' : 'bg-text-muted'
          }`}
        />
      </div>

      <button
        type="button"
        onClick={togglePlayback}
        disabled={!streamUrl || isLoading}
        className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-5 py-4 font-semibold text-midnight transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading
          ? 'Connecting...'
          : isPlaying
            ? '⏸ Pause Stream'
            : '▶ Play Stream'}
      </button>

      {error && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </section>
  )
}

export default AudioPlayer
