import Reveal from '../ui/Reveal';

const features = [
	{
		icon: "💡",
		number: "01",
		title: "Mokslu pagrįsta",
		desc: "Jokių mitų ar trumpalaikių madų. Tik patikrinti metodai, kurie duoda ilgalaikius rezultatus ir gerina sveikatą.",
		animation: 'icon-pulse',
	},
	{
		icon: "❤️",
		number: "02",
		title: "Sukurta moteriai",
		desc: "Sistema atsižvelgia į moters kūno ypatumus, hormonų svyravimus ir gyvenimo būdo poreikius.",
		animation: 'icon-bounce',
	},
	{
		icon: "🤝",
		number: "03",
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

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{features.map((f, i) => (
						<Reveal key={i} delay={0.1 * (i + 1)}>
							<div className="relative p-8 rounded-2xl border border-neutral-200/80 bg-white h-full flex flex-col group hover:border-neutral-300 transition-colors">
								<div className={`text-6xl mb-4 ${f.animation}`}>{f.icon}</div>
								<p className="text-5xl font-bold gradient-text opacity-30 mb-3">{f.number}</p>
								<h3 className="text-2xl font-bold text-rlText mb-3">{f.title}</h3>
								<p className="text-neutral-600 flex-grow">{f.desc}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
