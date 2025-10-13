"use client"
import React from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  React.useEffect(() => {
    // Optional: log to your error reporting service
    // console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-extrabold bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] bg-clip-text text-transparent">
          Įvyko klaida
        </h1>
        <p className="mt-2 text-neutral-600">Atsiprašome, kažkas nepavyko. Bandykite dar kartą.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-white hover:opacity-90 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)]"
          >
            Perkrauti puslapį
          </button>
          <a href="/" className="px-6 py-3 rounded-full border font-semibold">Grįžti į pradžią</a>
        </div>
      </div>
    </div>
  )
}
