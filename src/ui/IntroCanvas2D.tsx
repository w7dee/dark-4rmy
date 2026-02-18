import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

type RadarBlip = {
  x: number
  y: number
  ttl: number
  maxTtl: number
  size: number
}

function makeParticles(width: number, height: number, count: number): Particle[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: -0.16 + Math.random() * 0.32,
    vy: -0.18 - Math.random() * 0.34,
    radius: 0.6 + Math.random() * 1.8,
    alpha: 0.14 + Math.random() * 0.42,
  }))
}

export default function IntroCanvas2D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext("2d", { alpha: false })
    if (!context) return

    let raf = 0
    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let blips: RadarBlip[] = []
    let blipLimit = 14
    let lastTimestamp = 0

    const makeBlip = (scanY: number): RadarBlip => {
      const maxTtl = 0.7 + Math.random() * 0.9
      const yJitter = (Math.random() - 0.5) * 160
      const y = Math.min(height - 20, Math.max(20, scanY + yJitter))

      return {
        x: 20 + Math.random() * Math.max(0, width - 40),
        y,
        ttl: maxTtl,
        maxTtl,
        size: 1.4 + Math.random() * 2.2,
      }
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.max(1, Math.floor(width * dpr))
      canvas.height = Math.max(1, Math.floor(height * dpr))
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      context.setTransform(dpr, 0, 0, dpr, 0, 0)

      const particleCount = Math.max(70, Math.floor((width * height) / 24000))
      particles = makeParticles(width, height, particleCount)
      blipLimit = Math.max(10, Math.floor((width * height) / 90000))
      blips = []
      lastTimestamp = 0
    }

    const drawBackground = (time: number) => {
      const gradient = context.createLinearGradient(0, 0, 0, height)
      gradient.addColorStop(0, "#030304")
      gradient.addColorStop(0.45, "#09090b")
      gradient.addColorStop(1, "#020203")
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      const centerX = width * 0.5 + Math.sin(time * 0.2) * 18
      const centerY = height * 0.35 + Math.cos(time * 0.17) * 14
      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, width * 0.55)
      glow.addColorStop(0, "rgba(255, 45, 45, 0.2)")
      glow.addColorStop(0.45, "rgba(200, 20, 20, 0.08)")
      glow.addColorStop(1, "rgba(0, 0, 0, 0)")
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)
    }

    const drawHudGrid = (time: number) => {
      const cell = 38
      const offsetX = (time * 16) % cell
      const offsetY = (time * 11) % cell

      context.lineWidth = 1
      context.strokeStyle = "rgba(255, 48, 48, 0.12)"
      context.beginPath()

      for (let x = -cell + offsetX; x <= width + cell; x += cell) {
        context.moveTo(x, 0)
        context.lineTo(x, height)
      }

      for (let y = -cell + offsetY; y <= height + cell; y += cell) {
        context.moveTo(0, y)
        context.lineTo(width, y)
      }

      context.stroke()
    }

    const drawParticles = () => {
      for (const particle of particles) {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < -6) particle.x = width + 6
        if (particle.x > width + 6) particle.x = -6
        if (particle.y < -8) particle.y = height + 8
        if (particle.y > height + 8) particle.y = -8

        context.fillStyle = `rgba(255, 72, 72, ${particle.alpha})`
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fill()
      }
    }

    const drawRadarBlips = (scanY: number, delta: number) => {
      if (blips.length < blipLimit && Math.random() < delta * 4.6) {
        blips.push(makeBlip(scanY))
      }

      for (let i = blips.length - 1; i >= 0; i--) {
        const blip = blips[i]
        blip.ttl -= delta

        if (blip.ttl <= 0) {
          blips.splice(i, 1)
          continue
        }

        const life = blip.ttl / blip.maxTtl
        const progress = 1 - life
        const pulseRadius = blip.size + progress * 16

        context.fillStyle = `rgba(255, 82, 82, ${0.95 * life})`
        context.beginPath()
        context.arc(blip.x, blip.y, blip.size, 0, Math.PI * 2)
        context.fill()

        context.strokeStyle = `rgba(255, 72, 72, ${0.42 * life})`
        context.lineWidth = 1
        context.beginPath()
        context.arc(blip.x, blip.y, pulseRadius, 0, Math.PI * 2)
        context.stroke()

        context.strokeStyle = `rgba(255, 62, 62, ${0.2 * life})`
        context.beginPath()
        context.arc(blip.x, blip.y, pulseRadius * 1.5, 0, Math.PI * 2)
        context.stroke()
      }
    }

    const drawGlitchLines = () => {
      if (Math.random() > 0.22) return

      const count = 1 + Math.floor(Math.random() * 4)
      for (let i = 0; i < count; i++) {
        const y = Math.random() * height
        const h = 1 + Math.random() * 3
        const x = Math.random() * width * 0.2
        const w = width * (0.35 + Math.random() * 0.65)
        const alpha = 0.1 + Math.random() * 0.28
        context.fillStyle = `rgba(255, 80, 80, ${alpha})`
        context.fillRect(x, y, w, h)
      }
    }

    const drawScanline = (scanY: number) => {
      const scanGradient = context.createLinearGradient(0, scanY - 24, 0, scanY + 24)
      scanGradient.addColorStop(0, "rgba(255, 64, 64, 0)")
      scanGradient.addColorStop(0.5, "rgba(255, 64, 64, 0.24)")
      scanGradient.addColorStop(1, "rgba(255, 64, 64, 0)")
      context.fillStyle = scanGradient
      context.fillRect(0, scanY - 24, width, 48)

      context.fillStyle = "rgba(255, 255, 255, 0.03)"
      for (let y = 0; y < height; y += 3) {
        context.fillRect(0, y, width, 1)
      }
    }

    const frame = (timestamp: number) => {
      const time = timestamp * 0.001
      const delta = Math.min(0.05, lastTimestamp ? (timestamp - lastTimestamp) * 0.001 : 0.016)
      lastTimestamp = timestamp
      const scanY = (time * 120) % (height + 100) - 50

      drawBackground(time)
      drawHudGrid(time)
      drawParticles()
      drawRadarBlips(scanY, delta)
      drawGlitchLines()
      drawScanline(scanY)

      raf = window.requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener("resize", resize)
    raf = window.requestAnimationFrame(frame)

    return () => {
      window.removeEventListener("resize", resize)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
}
