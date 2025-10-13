"use client"
import { useSession, signIn } from 'next-auth/react'

export default function VideosPage() {
  const { status } = useSession()
  const isMember = status === 'authenticated'
  if (!isMember) {
    return (
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-20 text-center">
  <h1 className="h2 font-extrabold">Turinys tik <span className="rl-grad-word">narėms</span></h1>
  <p className="mt-2 text-neutral-600 text-responsive">Užsisakyk programą, kad gautum prieigą prie visų treniruočių video.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/plans" className="inline-block bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white px-6 py-3 rounded-full font-semibold">Rinktis planą</a>
          <button onClick={() => signIn()} className="px-6 py-3 rounded-full border font-semibold">Prisijungti</button>
        </div>
      </section>
    )
  }
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
  <h1 className="h2 font-extrabold">Treniruočių <span className="rl-grad-word">biblioteka</span></h1>
      {/* čia – filtrai ir video grid su Vimeo iframe */}
    </section>
  )
}
