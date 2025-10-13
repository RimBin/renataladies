"use client"
import { useEffect, useState } from 'react'

export default function HideWhenEmbedded({ children }: { children: React.ReactNode }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const byParam = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('embed') === '1'
    setHide(Boolean(byParam))
  }, [])

  if (hide) return null
  return <>{children}</>
}
