
import { useState } from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'

// Custom marker icon to avoid Leaflet's default icon path issues in Vite.
const guessIcon = L.divIcon({
  className: '',
  html: `
    <div style="
      width: 22px;
      height: 22px;
      background: #5ce1e6;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 12px rgba(0,0,0,0.5);
    "></div>
  `,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
})

interface Coordinates {
  lat: number
  lng: number
}

interface MapClickHandlerProps {
  onLocationSelect: (coordinates: Coordinates) => void
  disabled: boolean
}

function MapClickHandler({
  onLocationSelect,
  disabled,
}: MapClickHandlerProps) {
  useMapEvents({
    click(event) {
      if (disabled) return

      onLocationSelect({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      })
    },
  })

  return null
}

interface WorldMapProps {
  onGuessChange?: (coordinates: Coordinates | null) => void
  onGuessSubmit?: (coordinates: Coordinates) => void
}

function WorldMap({
  onGuessChange,
  onGuessSubmit,
}: WorldMapProps) {
  const [guess, setGuess] = useState<Coordinates | null>(null)
  const [submitted, setSubmitted] = useState(false)

  function handleLocationSelect(coordinates: Coordinates) {
    if (submitted) return

    setGuess(coordinates)
    onGuessChange?.(coordinates)
  }

  function handleSubmitGuess() {
    if (!guess || submitted) return

    setSubmitted(true)
    onGuessSubmit?.(guess)
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-border-subtle bg-surface">
      {/* Map header */}
      <div className="flex items-center justify-between border-b border-border-subtle px-5 py-4">
        <div>
          <h3 className="font-semibold">Make Your Guess</h3>

          <p className="mt-1 text-sm text-text-secondary">
            {submitted
              ? 'Your location has been submitted.'
              : 'Click anywhere on the map to place your guess.'}
          </p>
        </div>

        <span className="rounded-lg bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          WORLD MAP
        </span>
      </div>

      {/* Interactive map */}
      <div className="h-[450px] w-full">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          maxZoom={18}
          scrollWheelZoom={!submitted}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapClickHandler
            onLocationSelect={handleLocationSelect}
            disabled={submitted}
          />

          {guess && (
            <Marker
              position={[guess.lat, guess.lng]}
              icon={guessIcon}
            />
          )}
        </MapContainer>
      </div>

      {/* Selected coordinates and confirmation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border-subtle px-5 py-4">
        <div>
          <p className="text-xs text-text-muted">
            YOUR SELECTED LOCATION
          </p>

          {guess ? (
            <p className="mt-1 font-mono text-sm text-text-primary">
              {guess.lat.toFixed(4)}, {guess.lng.toFixed(4)}
            </p>
          ) : (
            <p className="mt-1 text-sm text-text-secondary">
              No location selected
            </p>
          )}
        </div>

        <button
          type="button"
          disabled={!guess || submitted}
          onClick={handleSubmitGuess}
          className="rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-midnight transition hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitted ? 'Guess Submitted ✓' : 'Confirm Location'}
        </button>
      </div>
    </section>
  )
}

export default WorldMap
