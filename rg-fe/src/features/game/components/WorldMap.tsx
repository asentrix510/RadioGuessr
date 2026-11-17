import { useState } from 'react'
import Globe3D, { type Coordinates } from './Globe3D'
import { MapPin, CheckCircle2, Navigation, AlertCircle } from 'lucide-react'
import { identifyLocation } from '../../../lib/geoData'

export type { Coordinates }

export interface WorldMapProps {
  onGuessChange?: (coordinates: Coordinates | null) => void
  onGuessSubmit?: (coordinates: Coordinates) => void
  actualLocation?: Coordinates | null
  isRevealed?: boolean
}

export default function WorldMap({
  onGuessChange,
  onGuessSubmit,
  actualLocation,
  isRevealed = false,
}: WorldMapProps) {
  const [guess, setGuess] = useState<Coordinates | null>(null)
  const [locationName, setLocationName] = useState<string>('')
  const [submitted, setSubmitted] = useState(false)

  function handleLocationSelect(coordinates: Coordinates) {
    if (submitted || isRevealed) return

    setGuess(coordinates)
    const info = identifyLocation(coordinates.lat, coordinates.lng)
    setLocationName(info.label)
    onGuessChange?.(coordinates)
  }

  function handleSubmitGuess() {
    if (!guess || submitted || isRevealed) return

    setSubmitted(true)
    onGuessSubmit?.(guess)
  }

  return (
    <section className="border-[3px] border-black bg-[#161a23] shadow-neo-lg overflow-hidden flex flex-col">
      {/* Clean Header Bar */}
      <div className="flex flex-wrap items-center justify-between border-b-[3px] border-black bg-[#1e2330] px-5 py-3 gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center border-2 border-black bg-[#00f0ff] font-black text-black shadow-neo-sm">
            <Navigation className="w-5 h-5 -rotate-45" />
          </div>
          <div>
            <h3 className="font-black text-sm uppercase tracking-wider text-white">
              3D Globe Radar
            </h3>
            <p className="text-xs text-gray-400 font-mono">
              Hover to preview countries & cities • Click to place guess pin
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 border-2 border-black bg-[#ffe600] px-3 py-1 font-mono text-xs font-black text-black shadow-neo-sm uppercase">
          3D INTERACTIVE
        </span>
      </div>

      {/* 3D WebGL Globe */}
      <div className="relative w-full">
        <Globe3D
          onLocationSelect={handleLocationSelect}
          selectedLocation={guess}
          actualLocation={actualLocation}
          isRevealed={isRevealed || submitted}
          disabled={submitted || isRevealed}
        />
      </div>

      {/* Bottom Action Footer with Clean Selected Location Readout */}
      <div className="border-t-[3px] border-black bg-[#13161f] p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Selected Coordinates & Country/City */}
        <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-black bg-[#ffe600] text-black shadow-neo-sm">
            <MapPin className="w-5 h-5" />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">
              Selected Guess Location
            </p>
            {guess ? (
              <div>
                <p className="font-mono text-sm font-black text-[#00f0ff] truncate">
                  {locationName || 'Pin Dropped'}
                </p>
                <p className="font-mono text-[11px] text-gray-400">
                  {guess.lat >= 0 ? `${guess.lat.toFixed(2)}° N` : `${Math.abs(guess.lat).toFixed(2)}° S`}
                  {', '}
                  {guess.lng >= 0 ? `${guess.lng.toFixed(2)}° E` : `${Math.abs(guess.lng).toFixed(2)}° W`}
                </p>
              </div>
            ) : (
              <p className="font-mono text-xs text-gray-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-[#ffe600]" />
                Click anywhere on the globe to drop your pin
              </p>
            )}
          </div>
        </div>

        {/* Submit Guess Button */}
        <button
          type="button"
          disabled={!guess || submitted || isRevealed}
          onClick={handleSubmitGuess}
          className={`w-full sm:w-auto px-7 py-3.5 border-2 border-black font-black text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
            submitted || isRevealed
              ? 'bg-[#a3e635] text-black shadow-neo cursor-default'
              : !guess
                ? 'bg-gray-800 text-gray-500 opacity-60 cursor-not-allowed shadow-none'
                : 'bg-[#a3e635] hover:bg-[#bbf455] text-black shadow-neo hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-lg active:translate-x-0.5 active:translate-y-0.5'
          }`}
        >
          {submitted || isRevealed ? (
            <>
              <CheckCircle2 className="w-5 h-5 text-black" />
              <span>GUESS SUBMITTED ✓</span>
            </>
          ) : (
            <>
              <Navigation className="w-5 h-5 text-black" />
              <span>CONFIRM LOCATION</span>
            </>
          )}
        </button>
      </div>
    </section>
  )
}
