export default function WhyRenata() {
  const features = [
    { title: 'Patogūs receptai', desc: 'Lengvai sekami ir skanūs, pritaikyti kasdienybei.' },
    { title: 'Aiškūs planai', desc: 'Be perteklinės informacijos – tik tai, kas veikia.' },
    { title: 'Palaikymas', desc: 'Žmogiškas ir motyvuojantis, kai jo reikia labiausiai.' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 className="h2 font-extrabold mb-6">Kodėl Renata Ladies?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-2xl bg-white shadow p-5">
            <p className="font-semibold">{f.title}</p>
            <p className="text-responsive text-neutral-700 mt-1">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
