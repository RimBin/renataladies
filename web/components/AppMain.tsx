"use client"
import { useEffect, useState } from 'react'

export default function AppMain({ children }: { children: React.ReactNode }) {
  const [embedded, setEmbedded] = useState(false)

  useEffect(() => {
    const byParam = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('embed') === '1'
    setEmbedded(Boolean(byParam))
  }, [])

  return (
    <main className="flex-1">{children}</main>
  )
}
