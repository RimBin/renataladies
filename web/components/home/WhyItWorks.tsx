import Reveal from '../ui/Reveal';
import { Lightbulb, Heart, Handshake } from 'lucide-react'

const features = [
	{ icon: Lightbulb, number: '01', title: 'Mokslu pagrįsta', desc: 'Jokių mitų ar trumpalaikių madų. Tik patikrinti metodai, kurie duoda ilgalaikius rezultatus ir gerina sveikatą.' },
	{ icon: Heart, number: '02', title: 'Sukurta moteriai', desc: 'Sistema atsižvelgia į moters kūno ypatumus, hormonų svyravimus ir gyvenimo būdo poreikius.' },
	{ icon: Handshake, number: '03', title: 'Asmeninis ryšys', desc: 'Tai ne tik planai, bet ir nuolatinis mano palaikymas, motyvacija ir atsakymai į visus klausimus.' },
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
					{features.map((f, i) => {
						const Icon = f.icon;
						return (
							<Reveal key={i} delay={0.1 * (i + 1)}>
								<div className="p-8 rounded-3xl border border-transparent bg-gradient-to-b from-neutral-50 to-neutral-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] hover:border-neutral-200/60 transition-all duration-300 h-full flex flex-col group">
									<div className="w-12 h-12 text-rlPink mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-md">
										<Icon className="w-full h-full" />
									</div>
									<p className="text-5xl font-bold gradient-text opacity-30 mb-3">{f.number}</p>
									<h3 className="text-2xl font-bold text-rlText mb-3">{f.title}</h3>
									<p className="text-neutral-600 flex-grow">{f.desc}</p>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
