import { useRef, useState, useEffect } from 'react'
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Radio,
  Wifi,
  Disc3,
  AlertTriangle,
  RotateCcw,
} from 'lucide-react'

interface AudioPlayerProps {
  streamUrl: string
  stationName: string
}

export default function AudioPlayer({ streamUrl, stationName }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [volume, setVolume] = useState(0.85)
  const [isMuted, setIsMuted] = useState(false)
  const [tuningFrequency] = useState(() => (92.0 + Math.random() * 14).toFixed(1))

  // Reset audio element when stream URL changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.load()
    }
  }, [streamUrl])

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  async function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return

    if (!audio.paused) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    try {
      setError('')
      setIsLoading(true)
      if (audio.readyState === 0) {
        audio.load()
      }
      await audio.play()
      setIsPlaying(true)
      setIsLoading(false)
    } catch {
      setError('Live stream connection timed out. Click Retry to reconnect.')
      setIsLoading(false)
      setIsPlaying(false)
    }
  }

  function handleRetry() {
    const audio = audioRef.current
    if (!audio) return
    setError('')
    setIsLoading(true)
    audio.load()
    audio.play().then(() => {
      setIsPlaying(true)
      setIsLoading(false)
    }).catch(() => {
      setError('Station is currently buffering. Please try again.')
      setIsLoading(false)
      setIsPlaying(false)
    })
  }

  function toggleMute() {
    setIsMuted(!isMuted)
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newVol = parseFloat(e.target.value)
    setVolume(newVol)
    if (newVol > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <section className="border-[3px] border-black bg-[#161a23] shadow-neo-lg overflow-hidden flex flex-col justify-between">
      {/* HTML Audio element */}
      <audio
        ref={audioRef}
        src={streamUrl}
        preload="auto"
        onPlaying={() => {
          setIsPlaying(true)
          setIsLoading(false)
          setError('')
        }}
        onPause={() => {
          setIsPlaying(false)
          setIsLoading(false)
        }}
        onWaiting={() => setIsLoading(true)}
        onCanPlay={() => setIsLoading(false)}
        onError={() => {
          setError('Live stream connection stalled. Click Retry to reconnect.')
          setIsPlaying(false)
          setIsLoading(false)
        }}
      />

      {/* Retro Radio Header */}
      <div className="flex flex-wrap items-center justify-between border-b-[3px] border-black bg-[#1e2330] px-5 py-3 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#ffe600] text-black font-black shadow-neo-sm">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider text-white">
              Radio Frequency Receiver
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              ANALOG TUNER • MODEL RG-99
            </p>
          </div>
        </div>

        {/* ON AIR flashing badge */}
        <div className="flex items-center gap-2">
          <div
            className={`border-2 border-black px-3 py-1 font-mono text-xs font-black shadow-neo-sm flex items-center gap-1.5 ${
              isPlaying
                ? 'bg-[#ff3366] text-white animate-pulse'
                : 'bg-black text-gray-400'
            }`}
          >
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isPlaying ? 'bg-white' : 'bg-gray-600'
              }`}
            />
            {isPlaying ? 'ON AIR' : 'STANDBY'}
          </div>

          <div className="border-2 border-black bg-[#00f0ff] px-2.5 py-1 font-mono text-xs font-black text-black shadow-neo-sm hidden sm:block">
            {tuningFrequency} MHz
          </div>
        </div>
      </div>

      {/* Main Receiver Display & Analog Dial */}
      <div className="p-6 flex flex-col gap-5">
        {/* Analog Tuning Scale with Moving Needle */}
        <div className="border-2 border-black bg-black p-4 relative shadow-neo-sm">
          <div className="flex justify-between text-[11px] font-mono text-gray-400 uppercase tracking-widest pb-2 border-b border-gray-800">
            <span>FM 88</span>
            <span>92</span>
            <span>96</span>
            <span className="text-[#ffe600] font-bold">100</span>
            <span>104</span>
            <span>108 MHz</span>
          </div>

          {/* Tick marks */}
          <div className="h-6 flex justify-between items-end pt-1 relative">
            {Array.from({ length: 33 }).map((_, i) => (
              <div
                key={i}
                className={`w-[2px] ${
                  i % 4 === 0 ? 'h-5 bg-white' : 'h-2.5 bg-gray-600'
                }`}
              />
            ))}

            {/* Glowing Tuning Needle */}
            <div
              className="absolute top-0 bottom-0 w-[3px] bg-[#ff3366] shadow-[0_0_8px_#ff3366] transition-all duration-700"
              style={{
                left: `${Math.min(94, Math.max(6, ((parseFloat(tuningFrequency) - 88) / 20) * 100))}%`,
              }}
            >
              <div className="w-2.5 h-2.5 -ml-1 bg-[#ff3366] border border-black rounded-full" />
            </div>
          </div>
        </div>

        {/* Station Mystery Info Box */}
        <div className="border-2 border-black bg-[#10131a] p-4 flex items-center justify-between gap-4 shadow-neo-sm">
          <div className="flex items-center gap-4 min-w-0">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center border-2 border-black ${
                isPlaying ? 'bg-[#00f0ff] text-black' : 'bg-gray-800 text-gray-400'
              } shadow-neo-sm`}
            >
              <Disc3
                className={`w-8 h-8 ${isPlaying ? 'animate-spin' : ''}`}
                style={{ animationDuration: '4s' }}
              />
            </div>

            <div className="min-w-0">
              <span className="inline-block border border-black bg-[#ffe600] text-black px-1.5 py-0.5 text-[10px] font-mono font-black uppercase shadow-neo-sm mb-1">
                LIVE BROADCAST
              </span>
              <h4 className="text-lg font-black text-white truncate tracking-tight">
                {stationName}
              </h4>
              <p className="text-xs font-mono text-gray-400">
                Listen for language, music & background cues
              </p>
            </div>
          </div>

          {/* Dancing Audio Equalizer Bars */}
          <div className="flex items-end gap-1.5 h-9 shrink-0 px-2 py-1 bg-black border border-black">
            <div
              className={`w-1.5 bg-[#a3e635] ${
                isPlaying ? 'animate-eq-1' : 'h-1.5'
              }`}
            />
            <div
              className={`w-1.5 bg-[#ffe600] ${
                isPlaying ? 'animate-eq-2' : 'h-2'
              }`}
            />
            <div
              className={`w-1.5 bg-[#00f0ff] ${
                isPlaying ? 'animate-eq-3' : 'h-1'
              }`}
            />
            <div
              className={`w-1.5 bg-[#ff3366] ${
                isPlaying ? 'animate-eq-4' : 'h-2.5'
              }`}
            />
            <div
              className={`w-1.5 bg-[#a3e635] ${
                isPlaying ? 'animate-eq-5' : 'h-1.5'
              }`}
            />
          </div>
        </div>

        {/* Error message notice with retry */}
        {error && (
          <div className="border-2 border-black bg-[#ff3366] text-white p-3 font-mono text-xs font-bold flex items-center justify-between gap-2 shadow-neo-sm">
            <div className="flex items-center gap-2 min-w-0">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span className="truncate">{error}</span>
            </div>
            <button
              type="button"
              onClick={handleRetry}
              className="bg-black hover:bg-white hover:text-black text-white px-2.5 py-1 border border-white font-mono text-[11px] uppercase flex items-center gap-1 shrink-0 transition-colors"
            >
              <RotateCcw className="w-3 h-3" /> Retry
            </button>
          </div>
        )}

        {/* Large Tactile Play / Pause Action Button */}
        <button
          type="button"
          onClick={togglePlayback}
          disabled={isLoading}
          className={`w-full py-4 border-2 border-black font-black text-base uppercase tracking-wider flex items-center justify-center gap-3 transition-all ${
            isLoading
              ? 'bg-[#ffe600] text-black opacity-80 cursor-wait'
              : isPlaying
                ? 'bg-[#ff3366] hover:bg-[#ff4d7d] text-white shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5'
                : 'bg-[#ffe600] hover:bg-[#fff04d] text-black shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5'
          }`}
        >
          {isLoading ? (
            <>
              <Wifi className="w-6 h-6 animate-pulse" />
              <span>TUNING IN...</span>
            </>
          ) : isPlaying ? (
            <>
              <Pause className="w-6 h-6 fill-current" />
              <span>PAUSE AUDIO TRANSMISSION</span>
            </>
          ) : (
            <>
              <Play className="w-6 h-6 fill-current" />
              <span>PLAY LIVE BROADCAST</span>
            </>
          )}
        </button>

        {/* Volume & Signal Status Footbar */}
        <div className="border-t-2 border-black pt-4 flex flex-wrap items-center justify-between gap-4">
          {/* Volume Control */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleMute}
              className="p-1.5 border-2 border-black bg-white hover:bg-[#ffe600] text-black shadow-neo-sm transition-all"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-600" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="w-28 sm:w-36 h-2 bg-black border border-black rounded-none accent-[#ffe600] cursor-pointer"
            />

            <span className="font-mono text-xs font-bold text-gray-300 w-10">
              {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
            </span>
          </div>

          {/* Signal Indicator */}
          <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
            <span>SIGNAL:</span>
            <div className="flex items-end gap-0.5 h-3">
              <div className="w-1 h-1.5 bg-[#a3e635]" />
              <div className="w-1 h-2 bg-[#a3e635]" />
              <div className="w-1 h-2.5 bg-[#a3e635]" />
              <div className="w-1 h-3 bg-[#a3e635]" />
            </div>
            <span className="text-[#a3e635] font-black">LOCKED</span>
          </div>
        </div>
      </div>
    </section>
  )
}
