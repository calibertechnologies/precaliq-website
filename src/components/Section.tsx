type BgVariant = 'cream' | 'white' | 'cream-dark' | 'navy' | 'gradient';

interface SectionProps {
  children: React.ReactNode;
  bg?: BgVariant;
  className?: string;
  wide?: boolean;
  id?: string;
}

const bgClasses: Record<BgVariant, string> = {
  cream: 'bg-cream',
  white: 'bg-surface',
  'cream-dark': 'bg-cream-dark',
  navy: 'bg-gradient-to-br from-navy via-navy-dark to-[#0F2D47] text-white relative overflow-hidden',
  gradient: 'bg-gradient-to-br from-[#0F2D47] via-navy-dark to-navy text-white relative overflow-hidden hero-mesh',
};

export default function Section({ children, bg = 'cream', className = '', wide = false, id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${bgClasses[bg]}`}>
      <div className={`mx-auto relative z-10 ${wide ? 'max-w-6xl' : 'max-w-4xl'} ${className}`}>
        {children}
      </div>
    </section>
  );
}
