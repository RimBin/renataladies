export const metadata = {
  title: 'Mokėjimo būdai | Renata Ladies',
  description:
    'Priimami atsiskaitymo būdai, saugumas (kortelių duomenys neapdorojami mūsų serveryje) ir sąskaitų išrašymas Renata Ladies parduotuvėje.',
  alternates: { canonical: '/mokejimo-budai' },
  openGraph: {
    title: 'Mokėjimo būdai | Renata Ladies',
    description:
      'Atsiskaitymai kortelėmis, PayPal ir Paysera; saugus apdorojimas per partnerius ir sąskaitų išrašymas.',
    type: 'article',
    locale: 'lt_LT',
  },
}

export default function PaymentMethodsPage() {
  const lastUpdated = '2025-10-15'
  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Mokėjimo <span className="gradient-text">būdai</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">
            Paskutinį kartą atnaujinta: {lastUpdated}
          </p>
        </div>
      </div>
      <div className="prose prose-neutral max-w-none">
        <h2>Priimami atsiskaitymai</h2>
        <ul>
          <li>Banko kortelės: Visa, Mastercard.</li>
          <li>PayPal.</li>
          <li>Paysera.</li>
        </ul>

        <h2>Saugumas</h2>
        <p>
          Atsiskaitymai apdorojami per sertifikuotus mokėjimų tiekėjus (PCI DSS atitiktis, 3-D Secure 2). Kortelių duomenų mes negauname
          ir nesaugome – jie perduodami šifruotu ryšiu tiesiogiai mokėjimų partneriui. Jei pastebėjote įtartiną operaciją – nedelsdami
          susisiekite su mumis ir savo banku.
        </p>

        <h2>Sąskaitos</h2>
        <p>
          Po sėkmingo apmokėjimo elektroninė sąskaita-faktūra išsiunčiama el. paštu. Jei reikia koreguotos sąskaitos su įmonės rekvizitais –
          parašykite mums: info@renataladies.com.
        </p>

        <h2>DUK apie mokėjimus</h2>
        <ul>
          <li><strong>Nepavyko atsiskaityti kortele?</strong> Patikrinkite kortelės duomenis, lėšų likutį, 3DS patvirtinimą ir bandykite dar kartą.</li>
          <li><strong>Ar galiu gauti sąskaitą įmonei?</strong> Taip, parašykite mums rekvizitus – išrašysime koreguotą sąskaitą.</li>
          <li><strong>Ar taikomi papildomi mokesčiai?</strong> Ne, nebent tai numatyta mokėjimų teikėjo taisyklėse (valiutos konvertavimas ir pan.).</li>
        </ul>
      </div>
    </div>
  )
}
