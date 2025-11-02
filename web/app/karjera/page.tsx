export const metadata = {
  title: 'Karjera | Renata Ladies',
  description: 'Prisijunk prie Renata Ladies komandos – atviri pasiūlymai ir iniciatyvūs CV.',
}

export default function CareersPage() {
  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            <span className="gradient-text">Karjera</span>
          </h1>
        </div>
      </div>
      <p className="text-neutral-600 mb-8">
        Šiuo metu neturime atvirų pozicijų, tačiau laukiame iniciatyvių kandidatų. Siųskite CV el. paštu
        <a href="mailto:info@renataladies.com" className="text-[#AB57F4] font-medium"> info@renataladies.com</a>.
      </p>
    </div>
  )
}
