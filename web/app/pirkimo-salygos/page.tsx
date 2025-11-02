export const metadata = {
  title: 'Pirkimo sąlygos | Renata Ladies',
  description:
    'Renata Ladies elektroninės prekybos taisyklės: pirkimo tvarka, apmokėjimas, prieiga prie skaitmeninio turinio, grąžinimai ir ginčų sprendimas.',
  alternates: { canonical: '/pirkimo-salygos' },
  openGraph: {
    title: 'Pirkimo sąlygos | Renata Ladies',
    description:
      'Elektroninės prekybos taisyklės: užsakymas, mokėjimai, skaitmeninio turinio prieiga, atsisakymas, grąžinimai ir ginčų sprendimas.',
    type: 'article',
    locale: 'lt_LT',
  },
}

export default function TermsPage() {
  const lastUpdated = '2025-10-15'
  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Pirkimo <span className="gradient-text">sąlygos</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">
            Paskutinį kartą atnaujinta: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="prose prose-neutral max-w-none">
        <h2>1. Bendrosios nuostatos</h2>
        <p>
          Šios pirkimo–pardavimo taisyklės (toliau – Sąlygos) nustato Renata Ladies (toliau – Pardavėjas) teikiamų
          skaitmeninių produktų ir paslaugų (mitybos planai, treniruočių programos, vaizdo turinys, konsultacijos ir kt.)
          įsigijimo, apmokėjimo, suteikimo, naudojimo ir grąžinimo tvarką. Pateikdami užsakymą patvirtinate, kad susipažinote
          su Sąlygomis ir sutinkate jų laikytis.
        </p>

        <h2>2. Pardavėjo rekvizitai</h2>
        <p>
          Teisinis pavadinimas: UAB „Renata Ladies" (pakeiskite realiais duomenimis). Įmonės kodas: 123456789, PVM mok. kodas: LT123456789.<br />
          Adresas: Kaunas, Lietuva. El. paštas: <a href="mailto:info@renataladies.com">info@renataladies.com</a>, tel. <a href="tel:+37068466408">+370 684 66408</a>.
        </p>

        <h2>3. Paskyra ir amžiaus riba</h2>
        <ul>
          <li>Užsakymui ir prieigai prie skaitmeninio turinio gali reikėti paskyros. Saugokite prisijungimo duomenis.</li>
          <li>Paslaugomis gali naudotis tik 18 m. sulaukę asmenys arba nepilnamečiai su tėvų (globėjų) sutikimu.</li>
        </ul>

        <h2>4. Sutarties sudarymas</h2>
        <p>
          Sutartis laikoma sudaryta, kai: (a) Pirkėjas pateikia užsakymą, (b) atlieka mokėjimą ir (c) Pardavėjas el. paštu
          patvirtina užsakymo gavimą. Sutartis vykdoma elektroniniu būdu.
        </p>

        <h2>5. Kainos, nuolaidos ir sąskaitos</h2>
        <ul>
          <li>Visos kainos nurodomos eurais su PVM (jei taikoma), nebent nurodyta kitaip.</li>
          <li>Nuolaidos, akcijos ir kuponai taikomi užsakymo metu pagal galiojančias taisykles.</li>
          <li>Po sėkmingo apmokėjimo išrašoma elektroninė sąskaita-faktūra ir siunčiama el. paštu.</li>
        </ul>

        <h2>6. Atsiskaitymo būdai</h2>
        <p>
          Priimami atsiskaitymai per mokėjimo partnerius (pvz., banko kortelės, PayPal, Paysera). Detalesnę informaciją rasite
          skiltyje „Mokėjimo būdai“. Kortelių duomenų Pardavėjas negauna ir nesaugo – mokėjimus apdoroja trečiosios šalys.
        </p>

        <h2>7. Skaitmeninio turinio ir paslaugų suteikimas</h2>
        <ul>
          <li>Prieiga prie skaitmeninio turinio suteikiama per pagrįstą terminą po apmokėjimo patvirtinimo.</li>
          <li>Prieigai reikalingas interneto ryšys ir suderinamas įrenginys. Turinio prieinamumas gali kisti dėl techninės priežiūros.</li>
          <li>Paslaugų (pvz., konsultacijų) suteikimo laikas suderinamas iš anksto. Nepasirodžius sutartu laiku, paslauga gali būti laikoma suteikta.</li>
        </ul>

        <h2>8. Licencija ir naudojimo ribojimai</h2>
        <p>
          Įsigiję skaitmeninį turinį gaunate neišimtinę, neperleidžiamą licenciją asmeniniam naudojimui. Draudžiama kopijuoti,
          platinti, viešai skelbti, perparduoti, dalintis ar kitaip perduoti turinį tretiesiems asmenims be raštiško sutikimo.
        </p>

        <h2>9. Teisė atsisakyti sutarties</h2>
        <p>
          Vartotojui taikoma 14 dienų atsisakymo teisė, tačiau ji netaikoma, kai skaitmeninio turinio teikimas pradėtas gavus aiškų
          Pirkėjo sutikimą ir patvirtinimą, kad prarandama atsisakymo teisė. Prieš suteikdami prieigą paprašysime Jūsų sutikimo.
          Dėl grąžinimo tvarkos žr. „Grąžinimo politika“.
        </p>

        <h2>10. Abonementai ir automatinis pratęsimas</h2>
        <ul>
          <li>Jei pasirenkate periodinį planą, mokėjimai gali būti vykdomi automatiškai pagal pasirinktą periodą.</li>
          <li>Galite nutraukti abonementą prieš naujo atsiskaitymo laikotarpio pradžią paskyros nustatymuose arba susiekę su mumis.</li>
        </ul>

        <h2>11. Kokybė, garantijos ir atsakomybės ribojimas</h2>
        <ul>
          <li>Pardavėjas deda maksimalias pastangas užtikrinti turinio kokybę ir pasiekiamumą.</li>
          <li>Rezultatai (svorio pokytis, fizinis pasirengimas ir pan.) priklauso nuo individualių aplinkybių – garantuoti konkretaus rezultato negalime.</li>
          <li>Pardavėjas neatsako už sutrikimus, kilusius dėl trečiųjų šalių tiekėjų ar force majeure aplinkybių.</li>
        </ul>

        <h2>12. Techniniai reikalavimai ir priežiūra</h2>
        <p>
          Turinio peržiūrai rekomenduojamos naujausios naršyklių versijos. Gali būti atliekami planiniai atnaujinimai, dėl kurių
          laikinai ribojama prieiga.
        </p>

        <h2>13. Asmens duomenys</h2>
        <p>
          Asmens duomenys tvarkomi laikantis BDAR. Plačiau – <a href="/privatumo-politika">Privatumo politikoje</a>.
        </p>

        <h2>14. Skundai ir ginčų sprendimas</h2>
        <p>
          Pirmiausia kviečiame kreiptis el. paštu <a href="mailto:info@renataladies.com">info@renataladies.com</a>. Nepavykus susitarti,
          galite kreiptis į VVTAT (<a href="https://www.vvtat.lt" rel="noopener" target="_blank">www.vvtat.lt</a>) arba naudotis
          EGS platforma: <a href="https://ec.europa.eu/odr" rel="noopener" target="_blank">ec.europa.eu/odr</a>.
        </p>

        <h2>15. Pakeitimai</h2>
        <p>
          Pardavėjas gali atnaujinti Sąlygas. Taikoma redakcija, galiojanti užsakymo pateikimo metu. Apie esminius pakeitimus
          informuosime svetainėje.
        </p>
      </div>
    </div>
  )
}
