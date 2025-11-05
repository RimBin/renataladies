import { GradientButton } from '@/components/ui/GradientButton'
import Link from 'next/link'

export default function StovyklosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Sportinės <span className="gradient-text">stovyklos</span> su Renata
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Prisijunk prie Renata Ladies bendruomenės intensyviose sportinėse stovyklose. Treniruotės, sveika mityba ir įkvepiantys žmonės vienoje vietoje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Camp - 2025 */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-16">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-[#AB57F4] font-semibold text-sm mb-4">
            Įvykusi stovykla 2025
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28262C] mb-4">
            Renata Ladies Camp 2025
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl">
            Pirmoji Renata Ladies sportinė stovykla įvyko 2025 metais. Per 5 dienas dalyvės patyrė intensyvias treniruotes, 
            išmoko naujų pratimų, maitinosi sveikai ir užmezgė draugystes su bendramintėmis moterimis.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F28ACD] mb-2">5</div>
            <div className="text-sm text-neutral-600">Dienos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#AB57F4] mb-2">20+</div>
            <div className="text-sm text-neutral-600">Dalyvių</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F28ACD] mb-2">15</div>
            <div className="text-sm text-neutral-600">Treniruočių</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#AB57F4] mb-2">100%</div>
            <div className="text-sm text-neutral-600">Pasitenkinimas</div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <div className="aspect-square rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/stovyklos/stovykla.jpg" 
              alt="Renata Ladies stovykla 2025" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/stovyklos/stovykla.jpg" 
              alt="Renata Ladies stovykla 2025" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/stovyklos/stovykla.jpg" 
              alt="Renata Ladies stovykla 2025" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-center mb-8">Dalyvių atsiliepimai</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4 italic">
                "Nuostabi patirtis! Treniruotės buvo intensyvios, bet Renata viską aiškiai parodė ir motyvavo. 
                Grįžau namo pilna energijos ir naujų draugių."
              </p>
              <p className="font-semibold text-[#28262C]">— Laura, 32 m.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4 italic">
                "Viskas buvo organizuota puikiai - nuo maisto iki apgyvendinimo. 
                Išmokau daug naujų pratimų, kuriuos dabar naudoju namuose!"
              </p>
              <p className="font-semibold text-[#28262C]">— Ieva, 28 m.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4 italic">
                "Bendruomenė - tai kas labiausiai įsiminė. Sutikau nuostabių moterų, 
                su kuriomis dabar kartu treniruojamės ir Vilniuje!"
              </p>
              <p className="font-semibold text-[#28262C]">— Greta, 35 m.</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-neutral-700 mb-4 italic">
                "Geriausia investicija į save šiais metais. 5 dienos, kurios pakeitė mano požiūrį į treniruotes ir mitybą."
              </p>
              <p className="font-semibold text-[#28262C]">— Monika, 41 m.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Kas laukia stovykloje?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#AB57F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#28262C] mb-2">Intensyvios treniruotės</h3>
              <p className="text-neutral-600">Kasdienės treniruotės su Renata - jėgos, kardio ir lankstumo derinys.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-pink-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F28ACD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#28262C] mb-2">Sveika mityba</h3>
              <p className="text-neutral-600">Visi patiekalai pagal mitybos planus - nesirūpink maistu!</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#AB57F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#28262C] mb-2">Įkvepianti bendruomenė</h3>
              <p className="text-neutral-600">Susipažink su motyvuotomis moterimis iš visos Lietuvos.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-pink-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F28ACD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#28262C] mb-2">Komfortiškas apgyvendinimas</h3>
              <p className="text-neutral-600">Modernus SPA viešbutis su baseinu ir sauna.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#AB57F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#28262C] mb-2">Asmeninis dėmesys</h3>
              <p className="text-neutral-600">Individuali pagalba ir patarimai kiekvienai dalyvei.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 mb-4 rounded-full bg-pink-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#F28ACD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#28262C] mb-2">Atsipalaidavimas</h3>
              <p className="text-neutral-600">Vakarinės yoga, tempimo sesijos ir pramogos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Camp CTA */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-16">
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#28262C] mb-4">
              Nauja stovykla <span className="gradient-text">2026 metais</span>
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Ruošiame kitą Renata Ladies stovyklą 2026 metų vasarą. Registracija prasidės pavasarį. 
              Palik savo kontaktus ir būk pirma sužinojusi apie naujienas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton
                as="a"
                href="/kontaktai"
                withArrow
                icon="et-circle-cutout"
                iconHover="slide-right"
                className="text-lg px-8 py-4"
              >
                Noriu dalyvauti
              </GradientButton>
              <a
                href="#duk"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 border-2 border-[#F28ACD] text-[#F28ACD] hover:bg-pink-50 font-semibold transition text-lg"
              >
                Dažniausi klausimai
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="duk" className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 scroll-mt-20">
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
              Dažniausi <span className="gradient-text">klausimai</span>
            </h2>
          </div>
          <div>
            <p className="text-lg text-neutral-600">
              Atsakymai į dažniausiai užduodamus klausimus apie Renata Ladies stovyklas
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <details className="group bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-rlText hover:bg-neutral-50 transition">
              Kada vyks kita stovykla?
              <svg className="w-5 h-5 text-[#AB57F4] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-neutral-600">
              <p>Kitą Renata Ladies stovyklą planuojame 2026 metų vasarą. Tikslias datas paskelbsime pavasarį, kai tik bus patvirtintas viešbutis ir programa. Registracija prasidės apie kovo mėnesį.</p>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-rlText hover:bg-neutral-50 transition">
              Kiek kainuoja stovykla?
              <svg className="w-5 h-5 text-[#AB57F4] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-neutral-600">
              <p className="mb-3">Kaina priklauso nuo apgyvendinimo tipo ir ankstyvos registracijos nuolaidų. Paprastai stovyklos kaina apima:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Apgyvendinimą visam laikotarpiui (4-5 dienos)</li>
                <li>Visą maitinimą pagal mitybos planą</li>
                <li>Visas treniruotes su Renata</li>
                <li>Prieigą prie SPA ir baseino</li>
                <li>Grupines veiklas ir pramogų programą</li>
              </ul>
              <p className="mt-3">Tikslias kainas paskelbsime kartu su registracijos atidarymu.</p>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-rlText hover:bg-neutral-50 transition">
              Kokio lygio dalyvės gali atvykti?
              <svg className="w-5 h-5 text-[#AB57F4] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-neutral-600">
              <p>Stovykla pritaikyta VISOMS moterims – ir pradedančioms, ir pažengusioms sportininkėms. Kiekviena treniruotė turi kelis intensyvumo lygius, todėl galėsi pasirinkti sau tinkamą krūvį. Svarbiausia – noras sportuoti ir gerėti!</p>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-rlText hover:bg-neutral-50 transition">
              Ką reikia atsivežti?
              <svg className="w-5 h-5 text-[#AB57F4] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-neutral-600">
              <p className="mb-3">Rekomenduojame atsivežti:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Sportinę aprangą treniruotėms (3-4 komplektai)</li>
                <li>Sportinius batus (treniruotėms ir bėgimui)</li>
                <li>Maudymosi kostiumėlį baseino lankymui</li>
                <li>Asmeninės higienos priemones</li>
                <li>Vandens buteliuką (min. 1L)</li>
                <li>Gerą nuotaiką ir norą bendrauti! 😊</li>
              </ul>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-rlText hover:bg-neutral-50 transition">
              Ar galiu atvykti viena?
              <svg className="w-5 h-5 text-[#AB57F4] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-neutral-600">
              <p>Žinoma! Dauguma dalyvių atvyksta vienos ir stovyklos metu susiranda puikių draugių. Mūsų bendruomenė labai draugiška ir palanki – niekas nelieka nuošalyje. Per kelias dienas užmezgsi ryšius su motyvuotomis moterimis iš visos Lietuvos!</p>
            </div>
          </details>

          <details className="group bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-rlText hover:bg-neutral-50 transition">
              Kaip vyksta maitinimas stovykloje?
              <svg className="w-5 h-5 text-[#AB57F4] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-6 pb-6 text-neutral-600">
              <p>Visas maitinimas organizuojamas pagal specialų mitybos planą – sveiki, subalansuoti ir SKANŪS patiekalai 4-5 kartus per dieną. Jokio „dietos" jausmo – valgyk sotinančiai ir pasieksi rezultatų. Jei turi alergijų ar mitybos apribojimų, praneški registracijos metu.</p>
            </div>
          </details>
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-4">Neradai atsakymo į savo klausimą?</p>
          <GradientButton
            as="a"
            href="/kontaktai"
            withArrow
            icon="et-circle-cutout"
            iconHover="slide-right"
          >
            Susisiek su mumis
          </GradientButton>
        </div>
      </section>
    </>
  )
}
