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
  navy: 'bg-navy text-white',
  gradient: 'bg-gradient-to-br from-navy via-navy-dark to-[#0F2D47] text-white',
};

export default function Section({ children, bg = 'cream', className = '', wide = false, id }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-24 px-6 ${bgClasses[bg]}`}>
      <div className={`mx-auto ${wide ? 'max-w-6xl' : 'max-w-4xl'} ${className}`}>
        {children}
      </div>
    </section>
  );
}
