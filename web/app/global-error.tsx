"use client"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GlobalError({ error: _error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-lg text-center">
            <h1 className="text-3xl font-extrabold bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] bg-clip-text text-transparent">Sistema sustojo</h1>
            <p className="mt-2 text-neutral-600">Bandykite puslapį perkrauti arba grįžti į pradžią.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button onClick={() => reset()} className="rounded-full px-6 py-3 text-white bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] hover:opacity-90">Perkrauti</button>
              <a href="/" className="px-6 py-3 rounded-full border font-semibold">Į pradžią</a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
