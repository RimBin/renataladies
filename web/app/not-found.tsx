export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl font-extrabold bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] bg-clip-text text-transparent">Puslapis nerastas</h1>
        <p className="mt-2 text-neutral-600">Patikrinkite nuorodą arba grįžkite į pradžią.</p>
        <a href="/" className="inline-block mt-6 rounded-full px-6 py-3 border font-semibold">Į pradžią</a>
      </div>
    </div>
  )
}
