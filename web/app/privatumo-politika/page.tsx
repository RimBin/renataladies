export const metadata = {
  title: 'Privatumo politika | Renata Ladies',
  description:
    'Kaip Renata Ladies renka, naudoja ir saugo asmens duomenis pagal BDAR: duomenų kategorijos, teisiniai pagrindai, saugojimo terminai ir jūsų teisės.',
  alternates: { canonical: '/privatumo-politika' },
  openGraph: {
    title: 'Privatumo politika | Renata Ladies',
    description:
      'BDAR atitinkanti privatumo politika: duomenų kategorijos, teisiniai pagrindai, saugojimo terminai, gavėjai ir jūsų teisės.',
    type: 'article',
    locale: 'lt_LT',
  },
}

export default function PrivacyPage() {
  const lastUpdated = '2025-10-15'
  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Privatumo <span className="gradient-text">politika</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">
            Paskutinį kartą atnaujinta: {lastUpdated}
          </p>
        </div>
      </div>
      <div className="prose prose-neutral max-w-none">
        <h2>1. Duomenų valdytojas</h2>
        <p>
          UAB „Renata Ladies" (pakeiskite realiais rekvizitais), el. paštas: <a href="mailto:info@renataladies.com">info@renataladies.com</a>,
          adresas: Kaunas, Lietuva. Valdytojas atsako už jūsų asmens duomenų tvarkymą šioje svetainėje.
        </p>

        <h2>2. Tvarkomi duomenys</h2>
        <ul>
          <li>Tapatybės ir kontaktiniai duomenys (vardas, el. paštas, tel. nr.).</li>
          <li>Paskyros ir prisijungimo duomenys (jei registruojatės).</li>
          <li>Pirkimų ir mokėjimų informacija (užsakymo istorija, sumos, statusas; mokėjimus apdoroja trečiosios šalys).</li>
          <li>Komunikacijos istorija (užklausos, el. laiškai).</li>
          <li>Techniniai duomenys (IP adresas, naršyklė, slapukai, analitika).</li>
        </ul>

        <h2>3. Tvarkymo tikslai ir teisiniai pagrindai</h2>
        <ul>
          <li>Sutarties vykdymas: užsakymo apdorojimas, prieigos prie turinio suteikimas.</li>
          <li>Teisinė prievolė: sąskaitų išrašymas, apskaita, mokesčių teisės aktų laikymasis.</li>
          <li>Teisėtas interesas: paslaugų tobulinimas, apsauga nuo sukčiavimo, svetainės veikimas.</li>
          <li>Sutikimas: naujienlaiškiai, marketingo komunikacija (galite bet kada atšaukti).</li>
        </ul>

        <h2>4. Duomenų saugojimas</h2>
        <p>
          Duomenis saugome ne ilgiau, nei reikia tikslams pasiekti: apskaitos dokumentai – 10 metų (LR teisės aktai), paskyros duomenys –
          iki paskyros ištrynimo, sutikimu pagrįstas marketingas – iki sutikimo atšaukimo.
        </p>

        <h2>5. Duomenų gavėjai ir perdavimas</h2>
        <p>
          Duomenys gali būti perduodami paslaugų teikėjams: hostingo, el. pašto, analitikos, mokėjimų apdorotojams (pvz., Stripe/PayPal/Paysera).
          Perduodame tik tiek, kiek būtina. Jei duomenys perduodami už EEE ribų, taikomos atitinkamos apsaugos priemonės (SPS, DPA, SCC).
        </p>

        <h2>6. Jūsų teisės</h2>
        <ul>
          <li>Teisė susipažinti su savo duomenimis ir gauti jų kopiją.</li>
          <li>Teisė reikalauti ištaisyti netikslius duomenis.</li>
          <li>Teisė reikalauti ištrinti duomenis (teisės „būti pamirštam“ pagrindu).</li>
          <li>Teisė apriboti tvarkymą ar nesutikti su tvarkymu.</li>
          <li>Teisė į duomenų perkeliamumą.</li>
          <li>Teisė bet kada atšaukti sutikimą marketingui.</li>
        </ul>
        <p>
          Teises galite įgyvendinti susisiekę el. paštu <a href="mailto:info@renataladies.com">info@renataladies.com</a>. Teikdami prašymą,
          patvirtinkite tapatybę, kad galėtume apsaugoti jūsų informaciją.
        </p>

        <h2>7. Slapukai ir analitika</h2>
        <p>
          Naudojame būtinus slapukus svetainės funkcionalumui ir, su sutikimu, analitikos/marketingo slapukus. Daugiau – Slapukų politikoje.
          Naršyklėje galite valdyti slapukų nustatymus. Sutikimą dėl neprivalomų slapukų galite bet kada atšaukti.
        </p>

        <h2>8. Skundai</h2>
        <p>
          Jei manote, kad pažeidžiamos jūsų teisės, pirmiausia kreipkitės į mus. Taip pat galite pateikti skundą Valstybinei duomenų apsaugos
          inspekcijai (<a href="https://vdai.lrv.lt" target="_blank" rel="noopener">vdai.lrv.lt</a>).
        </p>

        <h2>9. Politikos pakeitimai</h2>
        <p>
          Ši politika gali būti atnaujinta. Esminius pakeitimus paskelbsime svetainėje.
        </p>
      </div>
    </div>
  )
}
