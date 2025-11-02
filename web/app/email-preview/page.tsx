"use client"

const templates = [
  {
    id: 'order-confirmation',
    name: 'Užsakymo patvirtinimas',
    description: 'Siunčiamas po sėkmingo užsakymo su produktų sąrašu, kaina ir pristatymo info',
    icon: '📦',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'password-reset',
    name: 'Slaptažodžio atstatymas',
    description: 'Siunčiamas kai vartotojas pamiršta slaptažodį su reset nuoroda',
    icon: '🔒',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'welcome',
    name: 'Pasisveikinimas',
    description: 'Siunčiamas naujiems vartotojams po registracijos su WELCOME15 nuolaida',
    icon: '🎉',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'order-shipped',
    name: 'Užsakymas išsiųstas',
    description: 'Siunčiamas kai užsakymas išsiunčiamas su tracking numeriu',
    icon: '🚚',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'subscription-confirmation',
    name: 'Prenumeratos patvirtinimas',
    description: 'Siunčiamas po prenumeratos aktyvavimo su plano info',
    icon: '⭐',
    color: 'from-yellow-500 to-orange-500'
  }
]

export default function EmailPreviewPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-rlText mb-4">
            Email <span className="gradient-text">Šablonai</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Peržiūrėkite visus el. pašto šablonus. Spauskite ant kortelės, kad pamatytumėte pilną preview.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {templates.map((template) => (
            <a
              key={template.id}
              href={`/api/emails/preview/${template.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#F28ACD]"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${template.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {template.icon}
              </div>
              <h3 className="text-xl font-bold text-rlText mb-2 group-hover:text-[#F28ACD] transition">
                {template.name}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {template.description}
              </p>
              <div className="flex items-center text-[#F28ACD] font-semibold text-sm">
                Peržiūrėti →
              </div>
            </a>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-rlText mb-4">
            📋 Kaip naudoti
          </h2>
          <div className="space-y-4 text-neutral-700">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1️⃣</span>
              <div>
                <p className="font-semibold mb-1">Preview šablonai</p>
                <p className="text-sm text-neutral-600">
                  Spauskite ant kortelių viršuje, kad pamatytumėte pilną email preview naujame lange
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2️⃣</span>
              <div>
                <p className="font-semibold mb-1">API endpoints</p>
                <p className="text-sm text-neutral-600">
                  Visi šablonai prieinami per <code className="bg-neutral-100 px-2 py-1 rounded">/api/emails/preview/[template]</code>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3️⃣</span>
              <div>
                <p className="font-semibold mb-1">Integracija</p>
                <p className="text-sm text-neutral-600">
                  Žiūrėkite <code className="bg-neutral-100 px-2 py-1 rounded">web/emails/README.md</code> dėl integracijos pavyzdžių
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Info */}
        <div className="mt-8 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-[#F28ACD]">
          <h3 className="text-lg font-bold text-rlText mb-3">🛠️ Techninė info</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-neutral-800 mb-1">Failai:</p>
              <ul className="text-neutral-600 space-y-1">
                <li>• <code>web/emails/*.tsx</code> - Šablonai</li>
                <li>• <code>web/lib/email.ts</code> - Siuntimas</li>
                <li>• <code>web/emails/README.md</code> - Docs</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-neutral-800 mb-1">Features:</p>
              <ul className="text-neutral-600 space-y-1">
                <li>• ✅ Responsive dizainas</li>
                <li>• ✅ Brand spalvos & šriftai</li>
                <li>• ✅ TypeScript support</li>
                <li>• ✅ Nodemailer integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#F28ACD] hover:underline font-semibold"
          >
            ← Grįžti į pagrindinį
          </a>
        </div>
      </div>
    </div>
  )
}
