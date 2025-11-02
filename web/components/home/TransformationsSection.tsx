import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import Reveal from '@/components/ui/Reveal';
import { transformations } from '@/lib/transformations';
import { GradientButton } from '@/components/ui/GradientButton';

export default function TransformationsSection() {
  return (
    <section className="bg-gradient-to-b from-neutral-50/30 to-white">
      <div className="rl-section">
        <Reveal>
          <div className="rl-section-header">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title">
                Tikros <span className="gradient-text">transformacijos</span>
              </h2>
            </div>
            <div>
              <p className="rl-section-copy">
                Realūs rezultatai moterų, kurios dirbo su Renata. Perstumk slankiklį ir pamatyk skirtumą!
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformations.map((story, index) => (
            <Reveal key={story.id} delay={0.1 * index}>
              <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] group overflow-hidden">
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={story.beforeImage}
                    afterImage={story.afterImage}
                    alt={`${story.name} transformacija`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-rlText">
                        {story.name}, {story.age} m.
                      </h3>
                      <p className="text-sm text-neutral-500 font-medium">{story.result}</p>
                    </div>
                    {story.duration && (
                      <div className="flex-shrink-0 flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
                        </svg>
                        <span>{story.duration}</span>
                      </div>
                    )}
                  </div>
                  
                  {story.weight && (
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <p className="text-sm font-semibold text-neutral-700">Svorio pokytis: <span className="text-base font-bold text-pink-500">{story.weight}</span></p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">
              Nori tapti kita sėkmės istorija?
            </p>
            <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="text-lg shadow-lg">
              Pradėk savo kelionę
            </GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
