interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.2em] mb-5 ${
      light ? 'text-white/40' : 'text-accent'
    }`}>
      {children}
    </p>
  );
}
