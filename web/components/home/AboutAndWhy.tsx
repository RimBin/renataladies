import Image from 'next/image';
import Reveal from '../ui/Reveal';
import { GradientButton } from '../ui/GradientButton';

const highlights = [
	'Sertifikuota mitybos ir fitneso specialistė',
	'IFBB PRO atletė',
	'Lietuvos čempionė',
	'Europos ir pasaulio čempionatų prizininkė',
	'15+ metų patirtis',
];

const features = [
	{
		icon: "💡",
		title: "Mokslu pagrįsta",
		desc: "Jokių mitų ar trumpalaikių madų. Tik patikrinti metodai, kurie duoda ilgalaikius rezultatus ir gerina sveikatą.",
	},
	{
		icon: "❤️",
		title: "Sukurta moteriai",
		desc: "Sistema atsižvelgia į moters kūno ypatumus, hormonų svyravimus ir gyvenimo būdo poreikius.",
	},
	{
		icon: "🤝",
		title: "Asmeninis ryšys",
		desc: "Tai ne tik planai, bet ir nuolatinis mano palaikymas, motyvacija ir atsakymai į visus klausimus.",
	},
];

export default function AboutAndWhy() {
	return (
		<section id="apie-renata" className="bg-white">
			<div className="rl-section">
				<Reveal>
					<div className="rl-section-header">
						<div>
							<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText leading-tight rl-section-title">
								Kodėl mano sistema <br/><span className="gradient-text">veikia</span>?
							</h2>
						</div>
						<div>
							<p className="rl-section-copy">
								Sukūriau metodiką, kuri sujungia mitybos mokslą, judesio svarbą ir, svarbiausia, realaus gyvenimo patogumą.
							</p>
						</div>
					</div>
				</Reveal>

				<div className="grid lg:grid-cols-2 gap-10 items-center">
					<Reveal>
						<div className="space-y-8">
							<div>
								<p className="text-base text-neutral-600 mb-8">
									Tai ne trumpalaikė dieta ar ekstremali programa – tai ilgalaikis gyvenimo būdo keitimas, kuris tampa natūraliu ir maloniu.
									Kiekviena moteris unikali, todėl mano sistema pritaikoma individualiai – atsižvelgiant į tikslus,
									gyvenimo ritmą, mitybos įpročius ir fizinį aktyvumą.
								</p>
								<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
									{features.map((f, i) => (
										<Reveal key={i} delay={0.1 * (i + 1)}>
											<div className="text-left">
												<span className="text-4xl block mb-2">{f.icon}</span>
												<h4 className="font-semibold text-base text-neutral-800 mb-1">{f.title}</h4>
												<p className="text-neutral-600 text-sm">{f.desc}</p>
											</div>
										</Reveal>
									))}
								</div>
							</div>

							<div className="pt-6 border-t border-neutral-200">
								<div className="mb-8">
									<div className="relative w-full h-64 overflow-hidden rounded-3xl">
										<Image
											src="/images/hero/taurės.jpg"
											alt="Renatos laimėtos taurės"
											fill
											className="object-cover object-[center_75%]"
										/>
									</div>
								</div>
								<ul className="space-y-3 mb-6">
									{highlights.map((item) => (
										<li key={item} className="flex items-start gap-3 text-neutral-700 text-sm sm:text-base">
											<span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
												<svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
													<path
														fillRule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l3.999-4.001z"
														clipRule="evenodd"
													/>
												</svg>
											</span>
											<span>{item}</span>
										</li>
									))}
								</ul>
								<GradientButton
									as="a"
									href="/apie"
									withArrow
									icon="et-circle-cutout"
									iconHover="slide-right"
									className="w-fit rounded-full px-8 py-3 text-base font-semibold"
								>
									Daugiau apie mane
								</GradientButton>
							</div>
						</div>
					</Reveal>

					<Reveal delay={0.2}>
						<div className="relative">
							<div className="relative rounded-[48px] bg-[linear-gradient(140deg,#F28ACD_0%,#F5C6EC_45%,#F9E5F8_100%)] p-5 sm:p-6 lg:p-8">
								<div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-white shadow-[0_20px_45px_-20px_rgba(242,138,205,0.6)]">
									<Image
										src="/images/hero/Renata-ladies-renata.png"
										alt="Renata"
										fill
										priority
										className="object-contain object-bottom"
										sizes="(max-width: 1024px) 70vw, 520px"
									/>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
