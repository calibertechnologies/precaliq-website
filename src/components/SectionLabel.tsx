interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`text-[0.8125rem] font-semibold uppercase tracking-wider mb-4 ${
      light ? 'text-white/60' : 'text-amber'
    }`}>
      {children}
    </p>
  );
}
