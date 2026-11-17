import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import {
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Compass,
  MapPin,
  Crosshair,
} from 'lucide-react'
import { identifyLocation, MAJOR_CITIES, type GeoCity } from '../../../lib/geoData'

export interface Coordinates {
  lat: number
  lng: number
}

export interface Globe3DProps {
  onLocationSelect?: (coordinates: Coordinates, locationName?: string) => void
  selectedLocation?: Coordinates | null
  actualLocation?: Coordinates | null
  isRevealed?: boolean
  disabled?: boolean
  className?: string
}

// Convert latitude & longitude to exact 3D Cartesian coordinates on sphere matching Three.js Equirectangular UV texture mapping
function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (lat * Math.PI) / 180
  const theta = (lng * Math.PI) / 180

  // Matching Three.js SphereGeometry equirectangular UV alignment
  const x = radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = -radius * Math.cos(phi) * Math.sin(theta)

  return new THREE.Vector3(x, y, z)
}

// Convert 3D local point on sphere back to latitude & longitude
function vector3ToLatLng(point: THREE.Vector3, radius: number): Coordinates {
  const clampedY = Math.max(-radius, Math.min(radius, point.y))
  const lat = Math.asin(clampedY / radius) * (180 / Math.PI)
  let lng = Math.atan2(-point.z, point.x) * (180 / Math.PI)

  if (lng > 180) lng -= 360
  if (lng < -180) lng += 360

  return { lat, lng }
}

export default function Globe3D({
  onLocationSelect,
  selectedLocation,
  actualLocation,
  isRevealed = false,
  disabled = false,
  className = '',
}: Globe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Auto-rotate is strictly FALSE by default so the earth does NOT spin during gameplay
  const [autoRotate, setAutoRotate] = useState(false)
  const [hoverInfo, setHoverInfo] = useState<{
    lat: number
    lng: number
    label: string
  } | null>(null)

  // Three.js instances stored in refs
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const globeGroupRef = useRef<THREE.Group | null>(null)
  const earthMeshRef = useRef<THREE.Mesh | null>(null)
  const pinsGroupRef = useRef<THREE.Group | null>(null)
  const arcGroupRef = useRef<THREE.Group | null>(null)
  const cityDotsGroupRef = useRef<THREE.Group | null>(null)

  // Interaction & rotation physics
  const isDraggingRef = useRef(false)
  const isHoveringCanvasRef = useRef(false)
  const dragStartPosRef = useRef({ x: 0, y: 0 })
  const lastMousePosRef = useRef({ x: 0, y: 0 })
  const rotationVelocityRef = useRef({ x: 0, y: 0 })
  // Initial orientation: Facing Greenwich / Europe & Africa
  const globeRotationRef = useRef({ x: 0.15, y: -Math.PI / 2 })
  const targetCameraDistanceRef = useRef(4.6)
  const currentCameraDistanceRef = useRef(4.6)

  const GLOBE_RADIUS = 2.0

  // Fallback canvas texture if texture file is loading
  const createFallbackTexture = () => {
    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 512
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#0f172a'
      ctx.fillRect(0, 0, 1024, 512)
      ctx.strokeStyle = '#334155'
      ctx.lineWidth = 1
      for (let i = 0; i <= 1024; i += 64) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, 512)
        ctx.stroke()
      }
      for (let j = 0; j <= 512; j += 64) {
        ctx.beginPath()
        ctx.moveTo(0, j)
        ctx.lineTo(1024, j)
        ctx.stroke()
      }
    }
    return new THREE.CanvasTexture(canvas)
  }

  // Create clean 3D Pin Mesh
  const createPinMesh = (headColor: number, ringColor: number) => {
    const pinGroup = new THREE.Group()

    // Stem
    const needleGeom = new THREE.CylinderGeometry(0.012, 0.004, 0.28, 12)
    needleGeom.translate(0, 0.14, 0)
    const needleMat = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.2,
      metalness: 0.8,
    })
    const needle = new THREE.Mesh(needleGeom, needleMat)
    pinGroup.add(needle)

    // Spherical Pin Head
    const headGeom = new THREE.SphereGeometry(0.075, 16, 16)
    headGeom.translate(0, 0.28, 0)
    const headMat = new THREE.MeshStandardMaterial({
      color: headColor,
      roughness: 0.2,
      emissive: headColor,
      emissiveIntensity: 0.45,
    })
    const head = new THREE.Mesh(headGeom, headMat)
    pinGroup.add(head)

    // Base Pulsing Ring on globe surface
    const ringGeom = new THREE.RingGeometry(0.035, 0.075, 24)
    ringGeom.rotateX(-Math.PI / 2)
    const ringMat = new THREE.MeshBasicMaterial({
      color: ringColor,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
    })
    const ring = new THREE.Mesh(ringGeom, ringMat)
    pinGroup.add(ring)

    return pinGroup
  }

  // Draw 3D curved flight arc line
  const createArcLine = (startVec: THREE.Vector3, endVec: THREE.Vector3) => {
    const distance = startVec.distanceTo(endVec)
    const midPoint = new THREE.Vector3().addVectors(startVec, endVec).multiplyScalar(0.5)

    const elevation = GLOBE_RADIUS + Math.min(1.2, Math.max(0.25, distance * 0.4))
    midPoint.normalize().multiplyScalar(elevation)

    const curve = new THREE.QuadraticBezierCurve3(startVec, midPoint, endVec)
    const points = curve.getPoints(50)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    const material = new THREE.LineDashedMaterial({
      color: 0xffe600,
      linewidth: 3,
      scale: 1,
      dashSize: 0.12,
      gapSize: 0.06,
    })

    const line = new THREE.Line(geometry, material)
    line.computeLineDistances()
    return line
  }

  // Initialize Three.js
  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, currentCameraDistanceRef.current)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    rendererRef.current = renderer

    const globeGroup = new THREE.Group()
    scene.add(globeGroup)
    globeGroupRef.current = globeGroup

    const cityDotsGroup = new THREE.Group()
    globeGroup.add(cityDotsGroup)
    cityDotsGroupRef.current = cityDotsGroup

    const pinsGroup = new THREE.Group()
    globeGroup.add(pinsGroup)
    pinsGroupRef.current = pinsGroup

    const arcGroup = new THREE.Group()
    globeGroup.add(arcGroup)
    arcGroupRef.current = arcGroup

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
    scene.add(ambientLight)

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0)
    sunLight.position.set(5, 4, 6)
    scene.add(sunLight)

    const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.1)
    rimLight.position.set(-6, -3, -4)
    scene.add(rimLight)

    // Earth Sphere
    const earthGeometry = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64)
    const textureLoader = new THREE.TextureLoader()
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: createFallbackTexture(),
      roughness: 0.6,
      metalness: 0.1,
    })
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial)
    globeGroup.add(earthMesh)
    earthMeshRef.current = earthMesh

    // Load High-res texture
    textureLoader.load(
      '/textures/earth_atmos_2048.jpg',
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace
        earthMaterial.map = texture
        earthMaterial.needsUpdate = true
      },
      undefined,
      (err) => console.warn('Texture load notice:', err),
    )

    // Subtle Graticules (Latitude & Longitude grid lines for clear navigation)
    const gridGeometry = new THREE.SphereGeometry(GLOBE_RADIUS * 1.003, 36, 18)
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    })
    const gridMesh = new THREE.Mesh(gridGeometry, gridMaterial)
    globeGroup.add(gridMesh)

    // Add Major World Cities Anchor Dots onto globe surface
    const cityDotGeom = new THREE.SphereGeometry(0.02, 8, 8)
    const capitalDotGeom = new THREE.SphereGeometry(0.028, 8, 8)
    const cityMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.75 })
    const capitalMat = new THREE.MeshBasicMaterial({ color: 0xffe600, transparent: true, opacity: 0.95 })

    MAJOR_CITIES.forEach((city: GeoCity) => {
      const pos = latLngToVector3(city.lat, city.lng, GLOBE_RADIUS * 1.004)
      const mesh = new THREE.Mesh(city.isCapital ? capitalDotGeom : cityDotGeom, city.isCapital ? capitalMat : cityMat)
      mesh.position.copy(pos)
      cityDotsGroup.add(mesh)
    })

    // Animation Loop
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth camera zoom
      const distanceDiff = targetCameraDistanceRef.current - currentCameraDistanceRef.current
      if (Math.abs(distanceDiff) > 0.005) {
        currentCameraDistanceRef.current += distanceDiff * 0.15
        camera.position.z = currentCameraDistanceRef.current
      }

      // Rotate ONLY if user explicitly enabled auto-rotate AND is not touching/hovering
      if (autoRotate && !isDraggingRef.current && !isHoveringCanvasRef.current) {
        globeRotationRef.current.y += 0.0012
      } else if (!isDraggingRef.current) {
        // Smoothly decay drag momentum
        rotationVelocityRef.current.x *= 0.88
        rotationVelocityRef.current.y *= 0.88
        globeRotationRef.current.x += rotationVelocityRef.current.x
        globeRotationRef.current.y += rotationVelocityRef.current.y
      }

      // Clamp X rotation to prevent flipping
      globeRotationRef.current.x = Math.max(
        -Math.PI / 2.3,
        Math.min(Math.PI / 2.3, globeRotationRef.current.x),
      )

      globeGroup.rotation.x = globeRotationRef.current.x
      globeGroup.rotation.y = globeRotationRef.current.y

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!container || !renderer || !camera) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(animationFrameId)
      resizeObserver.disconnect()
      renderer.dispose()
      earthGeometry.dispose()
      gridGeometry.dispose()
      cityDotGeom.dispose()
      capitalDotGeom.dispose()
      earthMaterial.dispose()
      gridMaterial.dispose()
      cityMat.dispose()
      capitalMat.dispose()
    }
  }, [autoRotate])

  // Update Pins and Arcs
  useEffect(() => {
    const pinsGroup = pinsGroupRef.current
    const arcGroup = arcGroupRef.current
    if (!pinsGroup || !arcGroup) return

    while (pinsGroup.children.length > 0) {
      pinsGroup.remove(pinsGroup.children[0])
    }
    while (arcGroup.children.length > 0) {
      arcGroup.remove(arcGroup.children[0])
    }

    let guessVec: THREE.Vector3 | null = null

    if (selectedLocation) {
      guessVec = latLngToVector3(selectedLocation.lat, selectedLocation.lng, GLOBE_RADIUS)
      const pin = createPinMesh(0xffe600, 0x00f0ff)
      pin.position.copy(guessVec)

      const normal = guessVec.clone().normalize()
      pin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal)
      pinsGroup.add(pin)
    }

    if (isRevealed && actualLocation) {
      const actualVec = latLngToVector3(actualLocation.lat, actualLocation.lng, GLOBE_RADIUS)
      const stationPin = createPinMesh(0xff3366, 0xff3366)
      stationPin.position.copy(actualVec)

      const normal = actualVec.clone().normalize()
      stationPin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal)
      pinsGroup.add(stationPin)

      if (guessVec) {
        const arc = createArcLine(guessVec, actualVec)
        arcGroup.add(arc)

        // Smoothly orient globe to center both pins facing the camera
        const midPoint = new THREE.Vector3().addVectors(guessVec, actualVec).multiplyScalar(0.5)
        const midCoords = vector3ToLatLng(midPoint.normalize().multiplyScalar(GLOBE_RADIUS), GLOBE_RADIUS)

        globeRotationRef.current.y = -(midCoords.lng * Math.PI) / 180 - Math.PI / 2
        globeRotationRef.current.x = (midCoords.lat * Math.PI) / 180
        rotationVelocityRef.current = { x: 0, y: 0 }
      }
    }
  }, [selectedLocation, actualLocation, isRevealed])

  // Extract accurate latitude and longitude from Three.js raycast intersection
  const getCoordinatesFromIntersect = (hit: THREE.Intersection): Coordinates => {
    // 1. If Three.js provides UV, it directly corresponds to the equirectangular map texture
    if (hit.uv) {
      const lat = (hit.uv.y - 0.5) * 180
      let lng = (hit.uv.x - 0.5) * 360
      if (lng > 180) lng -= 360
      if (lng < -180) lng += 360
      return {
        lat: Math.max(-90, Math.min(90, lat)),
        lng,
      }
    }

    // 2. Fallback using worldToLocal and Cartesian inverse
    const earthMesh = earthMeshRef.current
    if (earthMesh && hit.point) {
      const localPoint = earthMesh.worldToLocal(hit.point.clone())
      return vector3ToLatLng(localPoint, GLOBE_RADIUS)
    }

    return { lat: 0, lng: 0 }
  }

  // Pointer interactions
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true
    dragStartPosRef.current = { x: e.clientX, y: e.clientY }
    lastMousePosRef.current = { x: e.clientX, y: e.clientY }
    rotationVelocityRef.current = { x: 0, y: 0 }
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    const canvas = canvasRef.current
    const camera = cameraRef.current
    const earthMesh = earthMeshRef.current
    if (!canvas || !camera || !earthMesh) return

    if (isDraggingRef.current) {
      const deltaX = e.clientX - lastMousePosRef.current.x
      const deltaY = e.clientY - lastMousePosRef.current.y

      const rotSpeed = 0.0055
      rotationVelocityRef.current = {
        x: deltaY * rotSpeed,
        y: deltaX * rotSpeed,
      }

      globeRotationRef.current.x += deltaY * rotSpeed
      globeRotationRef.current.y += deltaX * rotSpeed

      lastMousePosRef.current = { x: e.clientX, y: e.clientY }
      return
    }

    // Hover detection for country & city names
    const rect = canvas.getBoundingClientRect()
    const mouse = new THREE.Vector2(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1,
    )

    const raycaster = new THREE.Raycaster()
    raycaster.setFromCamera(mouse, camera)

    const intersects = raycaster.intersectObject(earthMesh)
    if (intersects.length > 0) {
      const coords = getCoordinatesFromIntersect(intersects[0])
      const locationInfo = identifyLocation(coords.lat, coords.lng)

      setHoverInfo({
        lat: coords.lat,
        lng: coords.lng,
        label: locationInfo.label,
      })
    } else {
      setHoverInfo(null)
    }
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    const wasDragging = isDraggingRef.current
    isDraggingRef.current = false

    if (!wasDragging || disabled || isRevealed) return

    const moveDist = Math.hypot(
      e.clientX - dragStartPosRef.current.x,
      e.clientY - dragStartPosRef.current.y,
    )

    // User clicked cleanly (< 6px movement)
    if (moveDist < 6) {
      const canvas = canvasRef.current
      const camera = cameraRef.current
      const earthMesh = earthMeshRef.current
      if (!canvas || !camera || !earthMesh) return

      const rect = canvas.getBoundingClientRect()
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -((e.clientY - rect.top) / rect.height) * 2 + 1,
      )

      const raycaster = new THREE.Raycaster()
      raycaster.setFromCamera(mouse, camera)

      const intersects = raycaster.intersectObject(earthMesh)
      if (intersects.length > 0) {
        const coords = getCoordinatesFromIntersect(intersects[0])
        const locationInfo = identifyLocation(coords.lat, coords.lng)

        onLocationSelect?.(coords, locationInfo.label)
      }
    }
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const zoomDelta = e.deltaY * 0.003
    targetCameraDistanceRef.current = Math.max(
      3.2,
      Math.min(7.2, targetCameraDistanceRef.current + zoomDelta),
    )
  }

  const zoomIn = () => {
    targetCameraDistanceRef.current = Math.max(3.2, targetCameraDistanceRef.current - 0.7)
  }

  const zoomOut = () => {
    targetCameraDistanceRef.current = Math.min(7.2, targetCameraDistanceRef.current + 0.7)
  }

  const resetNorth = () => {
    globeRotationRef.current = { x: 0.15, y: -Math.PI / 2 }
    rotationVelocityRef.current = { x: 0, y: 0 }
    targetCameraDistanceRef.current = 4.6
  }

  // Selected location resolved name
  const selectedLocationName = selectedLocation
    ? identifyLocation(selectedLocation.lat, selectedLocation.lng).label
    : null

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[520px] lg:h-[590px] bg-[#0c1017] border-[3px] border-black shadow-neo-lg select-none overflow-hidden ${className}`}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerEnter={() => {
        isHoveringCanvasRef.current = true
      }}
      onPointerLeave={() => {
        isDraggingRef.current = false
        isHoveringCanvasRef.current = false
        setHoverInfo(null)
      }}
    >
      {/* 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-crosshair block" />

      {/* Top Header HUD: Country/City Name Banner & Coordinates */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none max-w-[80%]">
        {/* Country and City Name Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ffe600] text-black border-2 border-black px-3.5 py-1.5 font-black text-xs uppercase tracking-wider shadow-neo-sm">
          <MapPin className="w-4 h-4 text-black shrink-0" />
          <span className="truncate">
            {hoverInfo ? (
              hoverInfo.label
            ) : selectedLocationName ? (
              <>PIN: {selectedLocationName}</>
            ) : (
              'HOVER OVER GLOBE TO IDENTIFY REGION'
            )}
          </span>
        </div>

        {/* Live Coordinates Readout */}
        <div className="inline-flex items-center gap-2 bg-black/90 text-white border-2 border-black px-3 py-1 font-mono text-xs shadow-neo-sm backdrop-blur-md">
          <Crosshair className="w-3.5 h-3.5 text-[#00f0ff]" />
          <span>
            {hoverInfo ? (
              <>
                {hoverInfo.lat >= 0 ? `${hoverInfo.lat.toFixed(2)}°N` : `${Math.abs(hoverInfo.lat).toFixed(2)}°S`}
                {', '}
                {hoverInfo.lng >= 0 ? `${hoverInfo.lng.toFixed(2)}°E` : `${Math.abs(hoverInfo.lng).toFixed(2)}°W`}
              </>
            ) : selectedLocation ? (
              <>
                <span className="text-[#ffe600]">LOCKED: </span>
                {selectedLocation.lat >= 0 ? `${selectedLocation.lat.toFixed(2)}°N` : `${Math.abs(selectedLocation.lat).toFixed(2)}°S`}
                {', '}
                {selectedLocation.lng >= 0 ? `${selectedLocation.lng.toFixed(2)}°E` : `${Math.abs(selectedLocation.lng).toFixed(2)}°W`}
              </>
            ) : (
              <span className="text-gray-400">DRAG TO ROTATE • CLICK TO PLACE PIN</span>
            )}
          </span>
        </div>
      </div>

      {/* Top-Right Control Dock */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          type="button"
          onClick={zoomIn}
          title="Zoom In (+)"
          className="w-9 h-9 bg-white hover:bg-[#ffe600] text-black border-2 border-black flex items-center justify-center font-black shadow-neo-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={zoomOut}
          title="Zoom Out (-)"
          className="w-9 h-9 bg-white hover:bg-[#ffe600] text-black border-2 border-black flex items-center justify-center font-black shadow-neo-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
        >
          <ZoomOut className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={resetNorth}
          title="Reset View to North (🧭)"
          className="w-9 h-9 bg-white hover:bg-[#ff3366] hover:text-white text-black border-2 border-black flex items-center justify-center font-black shadow-neo-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
        >
          <Compass className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => setAutoRotate(!autoRotate)}
          title={autoRotate ? 'Pause Rotation' : 'Enable Auto-Spin'}
          className={`w-9 h-9 border-2 border-black flex items-center justify-center font-black shadow-neo-sm transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 ${
            autoRotate ? 'bg-[#00f0ff] text-black' : 'bg-white text-gray-500'
          }`}
        >
          <RotateCcw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
        </button>
      </div>

      {/* Bottom Hint Bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="bg-black/90 text-white border-2 border-black px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider shadow-neo-sm flex items-center gap-2 backdrop-blur-md">
          {disabled ? (
            <span className="text-[#a3e635]">ROUND SUBMITTED</span>
          ) : selectedLocationName ? (
            <>
              <MapPin className="w-3.5 h-3.5 text-[#ffe600]" />
              <span className="text-[#ffe600]">{selectedLocationName}</span>
            </>
          ) : (
            <>
              <Crosshair className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>CLICK TO PIN • SCROLL TO ZOOM</span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
