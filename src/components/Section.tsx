type BgVariant = 'cream' | 'white' | 'cream-dark' | 'navy' | 'gradient';

interface SectionProps {
  children: React.ReactNode;
  bg?: BgVariant;
  className?: string;
  wide?: boolean;
  id?: string;
}

const bgStyles: Record<BgVariant, { className: string; style?: React.CSSProperties }> = {
  cream: { className: 'bg-cream' },
  white: { className: 'bg-surface' },
  'cream-dark': { className: 'bg-cream-dark' },
  navy: {
    className: 'text-white relative overflow-hidden',
    style: { background: 'linear-gradient(to bottom right, #1F4E79, #163A5C, #0F2D47)' },
  },
  gradient: {
    className: 'text-white relative overflow-hidden hero-mesh',
    style: { background: 'linear-gradient(to bottom right, #0A1E33, #163A5C, #0F2D47)' },
  },
};

export default function Section({ children, bg = 'cream', className = '', wide = false, id }: SectionProps) {
  const { className: bgClass, style } = bgStyles[bg];
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${bgClass}`} style={style}>
      <div className={`mx-auto relative z-10 ${wide ? 'max-w-6xl' : 'max-w-4xl'} ${className}`}>
        {children}
      </div>
    </section>
  );
}
