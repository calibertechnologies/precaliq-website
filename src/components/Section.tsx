type BgVariant = 'cream' | 'white' | 'cream-dark' | 'navy' | 'gradient' | 'dark';

interface SectionProps {
  children: React.ReactNode;
  bg?: BgVariant;
  className?: string;
  wide?: boolean;
  id?: string;
  dots?: boolean;
  grain?: boolean;
}

const bgStyles: Record<BgVariant, { className: string; style?: React.CSSProperties }> = {
  cream: { className: 'bg-cream' },
  white: { className: 'bg-surface' },
  'cream-dark': { className: 'bg-cream-dark' },
  navy: {
    className: 'text-white relative overflow-hidden',
    style: { background: 'linear-gradient(160deg, #1F4E79, #163A5C, #0F2D47)' },
  },
  gradient: {
    className: 'text-white relative overflow-hidden hero-mesh',
    style: { background: 'linear-gradient(160deg, #0A1E33 0%, #163A5C 40%, #0F2D47 100%)' },
  },
  dark: {
    className: 'text-white relative overflow-hidden',
    style: { background: 'linear-gradient(160deg, #0F0F0E, #1A1A18)' },
  },
};

export default function Section({ children, bg = 'cream', className = '', wide = false, id, dots = false, grain: showGrain = false }: SectionProps) {
  const { className: bgClass, style } = bgStyles[bg];
  const dotsClass = dots ? (bg === 'navy' || bg === 'gradient' || bg === 'dark' ? 'dot-grid-dark' : 'dot-grid') : '';
  const grainClass = showGrain ? 'grain' : '';
  return (
    <section id={id} className={`py-24 md:py-32 px-6 ${bgClass} ${dotsClass} ${grainClass}`} style={style}>
      <div className={`mx-auto relative z-10 ${wide ? 'max-w-6xl' : 'max-w-4xl'} ${className}`}>
        {children}
      </div>
    </section>
  );
}
