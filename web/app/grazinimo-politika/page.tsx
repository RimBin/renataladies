export const metadata = {
  title: 'Grąžinimo politika | Renata Ladies',
  description:
    'Skaitmeninio turinio ir paslaugų grąžinimo, atsisakymo ir pinigų grąžinimo taisyklės pagal ES vartotojų teises.',
  alternates: { canonical: '/grazinimo-politika' },
  openGraph: {
    title: 'Grąžinimo politika | Renata Ladies',
    description:
      'Atsisakymo teisė, kada galima grąžinti, pinigų grąžinimo terminai ir išimtys skaitmeniniam turiniui bei paslaugoms.',
    type: 'article',
    locale: 'lt_LT',
  },
}

export default function ReturnsPage() {
  const lastUpdated = '2025-10-15'
  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Grąžinimo <span className="gradient-text">politika</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">
            Paskutinį kartą atnaujinta: {lastUpdated}
          </p>
        </div>
      </div>
      <div className="prose prose-neutral max-w-none">
        <h2>1. Atsisakymo teisė</h2>
        <p>
          Pagal ES teisę vartotojas gali atsisakyti nuotolinės sutarties per 14 dienų. Ši teisė netaikoma skaitmeniniam turiniui,
          jei jo teikimas pradėtas gavus aiškų sutikimą ir patvirtinimą, kad prarandama teisė atsisakyti. Prieš suteikiant prieigą
          paprašysime Jūsų sutikimo.
        </p>

        <h2>2. Kada galima grąžinti</h2>
        <ul>
          <li>Jeigu prieiga prie skaitmeninio turinio dar nesuteikta ir nebuvo pradėtas jo teikimas.</li>
          <li>Jei paslauga nebuvo suteikta per nurodytą terminą dėl Pardavėjo kaltės.</li>
          <li>Jei taikomos kitos privalomos vartotojų teisių normos.</li>
        </ul>

        <h2>3. Kaip pateikti prašymą</h2>
        <p>
          Parašykite el. paštu <a href="mailto:info@renataladies.com">info@renataladies.com</a>, nurodykite užsakymo numerį, datą ir priežastį.
          Prašymus nagrinėjame per 14 dienų.
        </p>

        <h2>4. Pinigų grąžinimas</h2>
        <p>
          Patvirtinus grąžinimą, pinigai grąžinami ta pačia mokėjimo priemone per 7–14 dienų. Jei naudojotės trečiųjų šalių mokėjimų
          paslaugomis (pvz., PayPal/Paysera), terminas gali priklausyti nuo jų taisyklių.
        </p>

        <h2>5. Išimtys</h2>
        <ul>
          <li>PDF planai, vaizdo įrašai ir kitas skaitmeninis turinys po suteikimo nėra grąžinami, nebent turinys neveikia dėl techninės klaidos.</li>
          <li>Vienkartinės konsultacijos po suteikimo nėra grąžinamos.</li>
          <li>Abonementai nutraukiami nuo kito atsiskaitymo laikotarpio, jei taip numatyta sąlygose.</li>
        </ul>

        <h2>6. Kontaktai ginčams</h2>
        <p>
          Jei nepavyksta išspręsti klausimo, galite kreiptis į VVTAT (<a href="https://www.vvtat.lt" target="_blank" rel="noopener">vvtat.lt</a>)
          arba naudotis EGS platforma: <a href="https://ec.europa.eu/odr" target="_blank" rel="noopener">ec.europa.eu/odr</a>.
        </p>
      </div>
    </div>
  )
}
