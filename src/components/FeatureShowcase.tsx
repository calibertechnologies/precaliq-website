import AnimatedReveal from '@/components/AnimatedReveal';

interface FeatureShowcaseProps {
  title: string;
  description: string;
  details?: string[];
  badge: string;
  screenshot: React.ReactNode;
  reverse?: boolean;
}

export default function FeatureShowcase({ title, description, details, badge, screenshot, reverse = false }: FeatureShowcaseProps) {
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24">
      {/* Text side */}
      <AnimatedReveal direction={reverse ? 'left' : 'right'} className={reverse ? 'md:order-2' : ''}>
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-accent bg-accent-soft ring-1 ring-accent/10 mb-5">
            {badge}
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-charcoal leading-snug tracking-tight">
            {title}
          </h3>
          <p className="mt-4 text-graphite leading-relaxed text-[1.0625rem]">
            {description}
          </p>
          {details && details.length > 0 && (
            <ul className="mt-6 space-y-2.5">
              {details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-graphite">
                  <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {detail}
                </li>
              ))}
            </ul>
          )}
        </div>
      </AnimatedReveal>

      {/* Screenshot side */}
      <AnimatedReveal direction={reverse ? 'right' : 'left'} className={reverse ? 'md:order-1' : ''}>
        <div className="showcase-screenshot screenshot-float rounded-2xl overflow-hidden">
          {screenshot}
        </div>
      </AnimatedReveal>
    </div>
  );
}
