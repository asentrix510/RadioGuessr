import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { Radio, Disc3 } from 'lucide-react'

const sampleStations = [
  { city: 'Tokyo', freq: '81.3 FM', country: 'Japan', lat: 35.6762, lng: 139.6503, color: '#ffe600' },
  { city: 'London', freq: '98.8 FM', country: 'United Kingdom', lat: 51.5072, lng: -0.1276, color: '#00f0ff' },
  { city: 'San Francisco', freq: '104.5 FM', country: 'USA', lat: 37.7749, lng: -122.4194, color: '#ff3366' },
  { city: 'São Paulo', freq: '89.1 FM', country: 'Brazil', lat: -23.5505, lng: -46.6333, color: '#a3e635' },
]

export default function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeStationIndex, setActiveStationIndex] = useState(0)

  // Cycle through active station hints
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStationIndex((prev) => (prev + 1) % sampleStations.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 4.4)

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4)
    scene.add(ambientLight)

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.8)
    sunLight.position.set(5, 3, 5)
    scene.add(sunLight)

    const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.2)
    rimLight.position.set(-5, -2, -3)
    scene.add(rimLight)

    // Earth Sphere
    const radius = 1.6
    const geometry = new THREE.SphereGeometry(radius, 48, 48)

    // Texture
    const textureLoader = new THREE.TextureLoader()
    const material = new THREE.MeshStandardMaterial({
      roughness: 0.5,
      metalness: 0.1,
    })

    textureLoader.load(
      '/textures/earth_atmos_2048.jpg',
      (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace
        material.map = tex
        material.needsUpdate = true
      },
      undefined,
      () => {
        // Fallback color if texture fails
        material.color.set(0x1a2638)
      },
    )

    const earth = new THREE.Mesh(geometry, material)
    globeGroup.add(earth)

    // Radar Graticule lines
    const gridGeometry = new THREE.SphereGeometry(radius * 1.004, 20, 10)
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    })
    const grid = new THREE.Mesh(gridGeometry, gridMaterial)
    globeGroup.add(grid)

    // Add glowing signal nodes for sample stations
    sampleStations.forEach((station) => {
      const phi = (station.lat * Math.PI) / 180
      const theta = (station.lng * Math.PI) / 180
      const x = -radius * Math.cos(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi)
      const z = radius * Math.cos(phi) * Math.sin(theta)

      const pinGeom = new THREE.SphereGeometry(0.06, 12, 12)
      const pinMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(station.color) })
      const pin = new THREE.Mesh(pinGeom, pinMat)
      pin.position.set(x, y, z)
      globeGroup.add(pin)
    })

    // Animation loop with interactive drag
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let rotX = 0.2
    let rotY = 0

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return
      const dx = e.clientX - prevMouseX
      const dy = e.clientY - prevMouseY
      rotY += dx * 0.006
      rotX += dy * 0.006
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onPointerUp = () => {
      isDragging = false
    }

    canvas.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (!isDragging) {
        rotY += 0.001
      }
      globeGroup.rotation.y = rotY
      globeGroup.rotation.x = rotX
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      if (!container || !renderer || !camera) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      geometry.dispose()
      gridGeometry.dispose()
      material.dispose()
      gridMaterial.dispose()
    }
  }, [])

  const currentStation = sampleStations[activeStationIndex]

  return (
    <div
      ref={containerRef}
      className="relative mx-auto aspect-square w-full max-w-[500px] border-[3px] border-black bg-[#161a23] shadow-neo-xl overflow-hidden flex items-center justify-center"
    >
      {/* 3D Earth Globe Canvas */}
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing block" />

      {/* Top Floating Station Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 border-2 border-black bg-[#ffe600] px-3 py-1 text-black shadow-neo-sm">
        <Disc3 className="w-4 h-4 animate-spin text-black" style={{ animationDuration: '3s' }} />
        <span className="font-mono text-xs font-black uppercase">
          LIVE INTERACTIVE GLOBE
        </span>
      </div>

      {/* Dynamic Radio Signal Alert Badge */}
      <div className="absolute bottom-4 left-4 right-4 z-10 border-2 border-black bg-black/90 backdrop-blur-md p-3.5 shadow-neo-sm flex items-center justify-between gap-3 transition-all">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-[#00f0ff] text-black shadow-neo-sm font-black">
            <Radio className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase">
                SIGNAL DETECTED
              </span>
              <span className="h-2 w-2 rounded-full bg-[#a3e635] animate-ping" />
            </div>
            <p className="font-black text-sm text-white truncate">
              {currentStation.city}, {currentStation.country} • {currentStation.freq}
            </p>
          </div>
        </div>

        <div className="hidden sm:block border border-black bg-[#ff3366] px-2.5 py-1 text-[10px] font-mono font-bold text-white uppercase shadow-neo-sm shrink-0">
          DRAG TO ROTATE
        </div>
      </div>
    </div>
  )
}
