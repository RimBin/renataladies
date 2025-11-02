"use client"
import { useEffect, useRef } from 'react'

/**
 * Posts the current document height to the parent window when embedded (iframe or ?embed=1),
 * so the host can resize the iframe and avoid cutting off the footer.
 * Message shape: { type: 'RL_EMBED_HEIGHT', height: number, href: string }
 */
export default function EmbedAutoResize() {
  const rafId = useRef<number | null>(null)
  const lastSent = useRef<number>(0)

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

    const post = (immediate = false) => {
      // Throttle to avoid spamming the parent on rapid changes
      const now = Date.now()
      if (!immediate && now - lastSent.current < 80) return
      lastSent.current = now
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        document.documentElement.offsetHeight,
        document.body.offsetHeight
      )
      try {
        window.parent?.postMessage({ type: 'RL_EMBED_HEIGHT', height, href: window.location.href }, '*')
      } catch {
        // ignore
      }
    }

    const schedule = () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => post())
    }

    // Observe size changes
    const ro = new ResizeObserver(() => schedule())
    ro.observe(document.documentElement)
    if (document.body) ro.observe(document.body)

    // Initial sends
    post(true)
    const onLoad = () => post(true)
    window.addEventListener('load', onLoad)
    window.addEventListener('resize', schedule)

    // Observe mutations that may shift layout
    const mo = new MutationObserver(() => schedule())
    mo.observe(document.documentElement, { attributes: true, childList: true, subtree: true, characterData: true })

    // Periodic keep-alive in case parent missed a message
    const interval = window.setInterval(() => post(), 1000)

    return () => {
      if (rafId.current != null) cancelAnimationFrame(rafId.current)
      window.removeEventListener('load', onLoad)
      window.removeEventListener('resize', schedule)
      ro.disconnect()
      mo.disconnect()
      window.clearInterval(interval)
    }
  }, [])

  return null
}
