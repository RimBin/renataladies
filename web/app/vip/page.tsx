export default function VipPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 py-12">
  <h1 className="h1 font-extrabold">Asmeninė <span className="rl-grad-word">priežiūra</span></h1>
  <p className="mt-3 text-neutral-700 text-responsive">1:1 konsultacijos, savaitiniai patikrinimai ir individualus planas.</p>
      <a href="/api/checkout?plan=vip" className="inline-block mt-6 bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white px-6 py-3 rounded-full font-semibold">Rezervuoti</a>
    </section>
  )
}
