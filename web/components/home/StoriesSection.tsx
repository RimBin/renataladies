export default function StoriesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 className="h2 font-extrabold mb-6">Klienčių <span className="rl-grad-word">istorijos</span></h2>
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <article key={i} className="bg-white rounded-2xl shadow overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://picsum.photos/seed/story${i}/800/450`} alt="Story" className="w-full object-cover aspect-video" />
            <div className="p-4">
              <p className="font-semibold">Sėkmės istorija #{i}</p>
              <p className="text-responsive text-neutral-700 mt-1">Trumpa apžvalga apie pasiektą rezultatą ir pokytį savijautoje.</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
