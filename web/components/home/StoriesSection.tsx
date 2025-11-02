"use client";

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { testimonials } from '@/lib/testimonials';

function getEmbedUrl(url: string) {
  const youtubeMatch = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/i);
  if (youtubeMatch?.[1]) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
  }
  return url;
}

export default function StoriesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const embedUrl = useMemo(() => (activeVideo ? getEmbedUrl(activeVideo) : null), [activeVideo]);

  useEffect(() => {
    if (!activeVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeVideo]);

  return (
    <section className="bg-white">
      <div className="rl-section">
        <div className="rl-section-header">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title">
              Klienčių <span className="gradient-text">istorijos</span>
            </h2>
          </div>
          <div>
            <p className="rl-section-copy">
              Realios istorijos iš moterų, kurios pasiekė savo tikslų ir atrado naują save su Renatos pagalba.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group bg-white rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
              <button
                type="button"
                onClick={() => setActiveVideo(testimonial.videoUrl)}
                className="block relative aspect-video w-full"
                aria-label={`Peržiūrėti ${testimonial.name} vaizdo atsiliepimą`}
              >
                <Image
                  src={testimonial.videoThumbnail}
                  alt={`Atsiliepimas iš ${testimonial.name}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <svg className="w-8 h-8 text-rlText" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-rlText shadow-sm">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-200 text-pink-600">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4.754 2.516A1.5 1.5 0 003 3.83v12.34a1.5 1.5 0 002.254 1.314l11.094-6.17a1.5 1.5 0 000-2.628L4.754 2.516z" />
                    </svg>
                  </span>
                  <span>Video</span>
                </div>
              </button>
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-wider text-pink-500 mb-2">{testimonial.category}</p>
                <p className="text-neutral-700 mb-3 font-medium">{testimonial.text}</p>
                <p className="text-sm text-neutral-500 font-semibold">{testimonial.name}, {testimonial.age} m.</p>
              </div>
            </div>
          ))}
        </div>

        {embedUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10">
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} aria-hidden="true" />
            <div
              role="dialog"
              aria-modal="true"
              className="relative z-10 w-full max-w-4xl"
            >
              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-rlText shadow-lg"
                aria-label="Uždaryti vaizdo įrašą"
              >
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-black shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
                <iframe
                  src={embedUrl}
                  title="Klienčių atsiliepimo vaizdo įrašas"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

