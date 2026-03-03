type BadgeVariant = 'default' | 'navy' | 'amber';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-cream-dark text-charcoal-light',
  navy: 'bg-navy/10 text-navy',
  amber: 'bg-amber/15 text-amber',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
