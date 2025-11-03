import { GradientButton } from './GradientButton';

interface ServiceCardProps {
  tag: {
    text: string;
    color: 'video' | 'pdf' | 'vip' | 'oneoff';
  };
  imageSrc: string;
  imageFit?: 'cover' | 'contain';
  title: string;
  description: string;
  features: string[];
  price: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
  featured?: boolean;
  compact?: boolean;
  horizontal?: boolean;
}

const tagColors = {
  video: 'bg-red-100 text-red-800',
  pdf: 'bg-blue-100 text-blue-800',
  vip: 'bg-purple-100 text-purple-800',
  oneoff: 'bg-amber-100 text-amber-800',
};

export function ServiceCard({
  tag,
  imageSrc,
  title,
  description,
  features,
  price,
  buttonText,
  buttonHref,
  imageFit = 'cover',
  className = '',
  featured = false,
  compact = false,
  horizontal = false,
}: ServiceCardProps) {
  const cardClasses = [
    "flex bg-white rounded-2xl border border-neutral-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden h-full",
    horizontal ? "flex-col lg:flex-row lg:items-stretch gap-0" : "flex-col",
    featured ? "border-purple-300 shadow-[0_8px_32px_rgba(171,87,244,0.15)]" : "",
    className
  ].filter(Boolean).join(" ");

  const defaultImageHeight = compact ? "h-48" : featured ? "h-80 lg:h-full" : "h-64 sm:h-80";
  const imageHeight = horizontal ? "h-64 lg:h-auto lg:min-h-[24rem]" : defaultImageHeight;
  const titleSize = featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl";
  const padding = horizontal ? "p-6 sm:p-8 lg:p-10" : "p-5 sm:p-6";
  const imageObjectClass = imageFit === 'contain'
    ? horizontal
      ? 'object-contain object-center'
      : 'object-contain object-bottom'
    : 'object-cover';
  const imageWrapperClasses = horizontal
    ? 'relative w-full lg:w-[380px] lg:flex-shrink-0'
    : 'relative w-full';

  return (
    <div className={cardClasses}>
      <div className={`${imageWrapperClasses} ${imageHeight} overflow-hidden bg-white flex items-center justify-center relative`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={title}
          className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${imageObjectClass}`}
        />
        <span
          className={`absolute top-4 left-4 px-2.5 py-1 text-xs font-semibold rounded-full ${tagColors[tag.color]} z-10`}
        >
          {tag.text}
        </span>
      </div>
      <div className={`${padding} flex flex-col flex-grow ${horizontal ? 'w-full lg:flex-1' : ''}`}>
        <h3 className={`${titleSize} font-bold text-rlText mb-2`}>{title}</h3>
        <p className="text-neutral-600 mb-4 sm:mb-5 text-sm sm:text-base">{description}</p>
        {!compact && (
          <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 text-neutral-700 text-sm">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto">
          <div className="mb-4 sm:mb-5">
            <span className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} font-bold text-rlText`}>{price}</span>
          </div>
          <GradientButton as="a" href={buttonHref} withArrow icon="et-circle-cutout" iconHover="slide-right" className="w-full justify-center text-sm sm:text-base font-semibold py-2.5 sm:py-3">
            {buttonText}
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
