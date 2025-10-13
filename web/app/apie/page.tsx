import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apie mane — Renataladies',
  description: 'Sužinokite daugiau apie mane ir mano misiją.'
}

export default function ApiePage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="h1 font-extrabold mb-6 text-center">
          Apie <span className="rl-grad-word">mane</span>
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="h3 font-bold mb-4">Sveika!</h2>
            <p className="text-rlText mb-4">
              Aš esu Renata – mitybos specialistė, sporto entuziastė ir moterų įgalinimo ambasadorė.
            </p>
            <p className="text-rlText mb-4">
              Mano misija – padėti moterims atrasti stiprybę, sveikatą ir pasitikėjimą savimi per subalansuotą mitybą ir aktyvų gyvenimo būdą.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="h3 font-bold mb-4">Mano kelias</h2>
            <p className="text-rlText mb-4">
              Pastaruosius kelerius metus studijavau mitybą ir jos poveikį moters kūnui bei sveikatai. 
              Per šį laiką padėjau šimtams moterų pasiekti savo tikslus – nuo svorio reguliavimo iki energijos ir vitalumo didinimo.
            </p>
            <p className="text-rlText mb-4">
              Tikiu, kad kiekviena moteris yra unikali ir nusipelno individualaus požiūrio. Todėl kuriu 
              personalizuotus mitybos planus, pritaikytus kiekvienos poreikiams ir gyvenimo būdui.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mb-8">
            <h2 className="h3 font-bold mb-4">Mano filosofija</h2>
            <ul className="space-y-3 text-rlText">
              <li className="flex items-start gap-3">
                <span className="text-2xl">💪</span>
                <span><strong>Jėga</strong> – ne tik fizinė, bet ir emocinė bei psichologinė.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <span><strong>Balansas</strong> – tarp sveikos mitybos ir gyvenimo malonumų.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <span><strong>Individualumas</strong> – kiekviena moteris yra unikali.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💖</span>
                <span><strong>Savimyла</strong> – priimk save tokią, kokia esi, ir tobulėk dėl savęs.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="h3 font-bold mb-4">Prisijunk prie bendruomenės</h2>
            <p className="text-rlText mb-6">
              Renata Ladies – tai ne tik mitybos planai ar treniruotės. Tai bendruomenė moterų, 
              kurios palaiko, įkvepia ir motyvuoja viena kitą kelionėje link sveikesnio ir laimingesnio gyvenimo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/plans"
                className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                Peržiūrėti planus
              </a>
              <a
                href="/kontaktai"
                className="inline-flex items-center gap-2 border-2 border-rlText text-rlText px-6 py-3 rounded-full font-semibold hover:bg-rlText hover:text-white transition"
              >
                Susisiekti
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
