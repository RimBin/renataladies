import Reveal from '../ui/Reveal';

const features = [
	{
		icon: "💡",
		title: "Mokslu pagrįsta",
		desc: "Jokių mitų ar trumpalaikių madų. Tik patikrinti metodai, kurie duoda ilgalaikius rezultatus ir gerina sveikatą.",
		animation: 'icon-pulse',
	},
	{
		icon: "❤️",
		title: "Sukurta moteriai",
		desc: "Sistema atsižvelgia į moters kūno ypatumus, hormonų svyravimus ir gyvenimo būdo poreikius.",
		animation: 'icon-bounce',
	},
	{
		icon: "🤝",
		title: "Asmeninis ryšys",
		desc: "Tai ne tik planai, bet ir nuolatinis mano palaikymas, motyvacija ir atsakymai į visus klausimus.",
		animation: 'icon-float',
	},
];

export default function WhyItWorks() {
	return (
		<section className="bg-neutral-50/70">
			<div className="rl-section">
				<Reveal>
					<div className="rl-section-header">
						<div>
							<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText leading-tight rl-section-title">
								Kodėl mano sistema <span className="gradient-text">veikia</span>?
							</h2>
						</div>
						<div>
							<p className="rl-section-copy">
								Sukūriau metodiką, kuri sujungia mitybos mokslą, judesio svarbą ir, svarbiausia, realaus gyvenimo patogumą.
							</p>
						</div>
					</div>
				</Reveal>

				<div className="mb-12">
					<p className="text-lg text-neutral-600 text-center max-w-3xl mx-auto">
						Tai ne trumpalaikė dieta ar ekstremali programa – tai ilgalaikis gyvenimo būdo keitimas, kuris tampa natūraliu ir maloniu.
						Kiekviena moteris unikali, todėl mano sistema pritaikoma individualiai – atsižvelgiant į tikslus,
						gyvenimo ritmą, mitybos įpročius ir fizinį aktyvumą.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
					{features.map((f, i) => (
						<Reveal key={i} delay={0.1 * (i + 1)}>
							<div className="relative p-8 rounded-2xl border border-neutral-200/80 bg-white h-full flex flex-col items-center text-center group hover:border-neutral-300 transition-colors">
								<div className={`text-6xl mb-4 ${f.animation}`}>{f.icon}</div>
								<h3 className="font-bold text-xl text-neutral-800 mb-3">{f.title}</h3>
								<p className="text-neutral-600 text-base flex-grow">{f.desc}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
