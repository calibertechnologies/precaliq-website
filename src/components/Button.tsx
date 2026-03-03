type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'primary-light';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit';
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-white hover:bg-navy-light shadow-md hover:shadow-glow shimmer-hover',
  'primary-light':
    'bg-white text-navy hover:bg-cream shadow-md hover:shadow-lg shimmer-hover',
  secondary:
    'bg-surface text-charcoal ring-1 ring-border-subtle hover:bg-cream-dark hover:ring-charcoal/10',
  ghost:
    'text-charcoal-light hover:text-charcoal hover:bg-cream-dark',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-[1.0625rem] font-semibold transition-all duration-300 cursor-pointer';

  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? 'button'} className={classes}>
      {children}
    </button>
  );
}
