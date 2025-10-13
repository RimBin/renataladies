"use client"
import { useEffect } from 'react'

export default function FixLinksWhenEmbedded() {
  useEffect(() => {
    const isIframe = (() => {
      try {
        return typeof window !== 'undefined' && window.top !== window.self
      } catch {
        return true
      }
    })()
    const byParam = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('embed') === '1'
    if (!isIframe && !byParam) return

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null
      if (!target) return
      const anchor = target.closest('a') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href') || ''
      if (!href || href.startsWith('#') || anchor.target === '_blank') return
      // Same-origin relative or absolute links only
      const url = href.startsWith('http') ? new URL(href) : new URL(href, window.location.origin)
      if (url.origin !== window.location.origin) return
      e.preventDefault()
      // Make sure embed param persists when needed
      if (byParam && !url.searchParams.get('embed')) {
        url.searchParams.set('embed', '1')
      }
      try {
        window.top?.location.assign(url.toString())
      } catch {
        window.location.assign(url.toString())
      }
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
