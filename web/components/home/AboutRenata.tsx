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

export default function AboutRenata() {
	return (
		<section id="apie-renata" className="bg-white">
			<div className="rl-section">
				<div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
					<Reveal>
						<div className="space-y-8">
							<div>
								<p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-400 mb-3">Apie mane</p>
								<h2 className="text-4xl sm:text-5xl font-bold text-rlText leading-tight rl-section-title">
									Kodėl <span className="gradient-text">gali</span> manimi pasitikėti?
								</h2>
							</div>
							<p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
								Mano kelionė – nuo pirmųjų žingsnių sporte iki profesionalių pasiekimų. Kiekvienas etapas parodė, kad nuoseklumas,
								disciplina ir meilė judėjimui leidžia pasiekti viską. Šiandien padedu moterims atrasti stipriausią savo versiją – ne tik
								numesti svorį, bet ir atgauti pasitikėjimą savimi.
							</p>
							<ul className="space-y-3">
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
					</Reveal>

					<Reveal delay={0.2}>
						<div className="relative">
							<div className="relative rounded-[48px] bg-[linear-gradient(140deg,#F28ACD_0%,#F5C6EC_45%,#F9E5F8_100%)] p-5 sm:p-6 lg:p-8">
								<div className="relative aspect-[4/5] overflow-hidden rounded-[36px] bg-white shadow-[0_20px_45px_-20px_rgba(242,138,205,0.6)]">
									<Image
										src="/images/hero/Renata-ladies-renata.png"
										alt="Renata su gertuve"
										fill
										priority
										className="object-contain object-bottom"
										sizes="(max-width: 1024px) 70vw, 520px"
									/>
								</div>

								<div className="absolute -right-6 bottom-24 hidden sm:block">
									<div className="overflow-hidden rounded-3xl bg-white shadow-[0_16px_35px_rgba(0,0,0,0.12)]">
										<div className="relative h-36 w-28">
											<Image
												src="/images/stories/13843.webp"
												alt="Renatos pasirodymo nuotrauka"
												fill
												className="object-cover"
												sizes="112px"
											/>
										</div>
									</div>
								</div>

								<div className="absolute -bottom-8 right-0 w-full max-w-[260px] rounded-3xl bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
									<div className="text-5xl leading-none text-pink-200">“</div>
									<p className="text-sm text-neutral-600">
										„Aš žinau, ką reiškia pradėti nuo nulio. Mano darbas – padėti moterims keisti gyvenimo būdą ir džiaugtis rezultatais.“
									</p>
								</div>
							</div>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}

