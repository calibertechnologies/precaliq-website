type BgVariant = 'white' | 'snow' | 'smoke' | 'dark' | 'accent';

interface SectionProps {
  children: React.ReactNode;
  bg?: BgVariant;
  className?: string;
  wide?: boolean;
  id?: string;
}

const bgStyles: Record<BgVariant, { className: string; style?: React.CSSProperties }> = {
  white: { className: 'bg-white' },
  snow: { className: 'bg-snow' },
  smoke: { className: 'bg-smoke' },
  dark: {
    className: 'text-white relative overflow-hidden',
    style: { background: '#0D0D0D' },
  },
  accent: {
    className: 'text-white relative overflow-hidden',
    style: { background: 'linear-gradient(160deg, #1D1D1F, #2563EB 150%)' },
  },
};

export default function Section({ children, bg = 'white', className = '', wide = false, id }: SectionProps) {
  const { className: bgClass, style } = bgStyles[bg];
  return (
    <section id={id} className={`py-24 md:py-36 px-6 ${bgClass}`} style={style}>
      <div className={`mx-auto relative z-10 ${wide ? 'max-w-6xl' : 'max-w-4xl'} ${className}`}>
        {children}
      </div>
    </section>
  );
}
