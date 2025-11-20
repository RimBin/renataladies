"use client"
import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  to: number
  duration?: number // ms
  prefix?: string
  suffix?: string
  className?: string
}

export default function CountUp({ to, duration = 1600, prefix = '', suffix = '+', className }: CountUpProps) {
  const [value, setValue] = useState(0)
  const start = useRef<number | null>(null)

  useEffect(() => {
    function step(timestamp: number) {
      if (!start.current) start.current = timestamp
      const progress = Math.min((timestamp - start.current) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setValue(Math.floor(eased * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    const raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])

  return <span className={className}>{prefix}{value}{suffix}</span>
}
