export default function FAQ() {
  return (
    <section className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="h2 font-extrabold">DUK apie <span className="rl-grad-word">mitybos</span> planus</h2>
          <p className="text-neutral-600 mt-2 text-responsive">Dažniausi klausimai prieš startą.</p>
        </div>
        <div className="space-y-4">
          <details className="group border rounded-xl p-4">
            <summary className="font-semibold cursor-pointer">Ar planai tinka pradedančiosioms?</summary>
            <p className="mt-2 text-neutral-600">Taip – instrukcijos ir pakaitalai leidžia lengvai prisitaikyti.</p>
          </details>
          <details className="group border rounded-xl p-4">
            <summary className="font-semibold cursor-pointer">Ar gausiu pirkinių sąrašą?</summary>
            <p className="mt-2 text-neutral-600">Taip – kiekvienai savaitei pridėtas pirkinių sąrašas.</p>
          </details>
          <details className="group border rounded-xl p-4">
            <summary className="font-semibold cursor-pointer">Ar galiu keisti patiekalus?</summary>
            <p className="mt-2 text-neutral-600">Taip – su pakaitalų lentele gali keisti ingredientus.</p>
          </details>
        </div>
      </div>
    </section>
  )
}
