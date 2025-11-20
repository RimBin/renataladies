import Link from 'next/link'

export default function PathsGrid() {
  return (
    <section id="paths" className="bg-white">
      <div className="rl-section">
        <h2 className="h2 font-extrabold mb-6 rl-section-title">Pasirink savo kelią į <span className="rl-grad-word">pokyčius</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/treniruociu-video" className="group rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative rounded-[40px] bg-[linear-gradient(140deg,#F28ACD_0%,#F5C6EC_45%,#F9E5F8_100%)] p-4 transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(242,138,205,0.4)]">
              <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_20px_35px_-20px_rgba(242,138,205,0.6)] p-6 transition-all duration-300 group-hover:rounded-[24px]">
                <p className="font-semibold text-neutral-800">Treniruočių programos</p>
                <p className="text-sm text-neutral-600 mt-2">Pažingsninės treniruotės ir aiškios užduotys.</p>
              </div>
            </div>
          </Link>

          <Link href="/mitybos-planai" className="group rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative rounded-[40px] bg-[linear-gradient(140deg,#F28ACD_0%,#F5C6EC_45%,#F9E5F8_100%)] p-4 transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(242,138,205,0.4)]">
              <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_20px_35px_-20px_rgba(242,138,205,0.6)] p-6 transition-all duration-300 group-hover:rounded-[24px]">
                <p className="font-semibold text-neutral-800">Mitybos planai</p>
                <p className="text-sm text-neutral-600 mt-2">Receptai, pirkinių sąrašai ir pakaitalai.</p>
              </div>
            </div>
          </Link>

          <Link href="/vip" className="group rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative rounded-[40px] bg-[linear-gradient(140deg,#F28ACD_0%,#F5C6EC_45%,#F9E5F8_100%)] p-4 transition-all duration-300 group-hover:shadow-[0_12px_32px_rgba(242,138,205,0.4)]">
              <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_20px_35px_-20px_rgba(242,138,205,0.6)] p-6 transition-all duration-300 group-hover:rounded-[24px]">
                <p className="font-semibold text-neutral-800">Asmeninė priežiūra</p>
                <p className="text-sm text-neutral-600 mt-2">1:1 konsultacijos ir savaitinis palaikymas.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
