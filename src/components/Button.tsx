type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'primary-light';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-[0.9375rem] font-semibold transition-all duration-300 cursor-pointer';

  const variants: Record<ButtonVariant, { className: string; style?: React.CSSProperties }> = {
    primary: {
      className: `${base} text-white shadow-md hover:shadow-glow shimmer-hover`,
      style: { background: 'linear-gradient(135deg, #1F4E79, #2A6399)' },
    },
    'primary-light': {
      className: `${base} bg-white text-navy hover:bg-cream shadow-md hover:shadow-lg shimmer-hover`,
    },
    secondary: {
      className: `${base} bg-surface text-charcoal ring-1 ring-border-subtle hover:bg-cream-dark hover:ring-charcoal/10`,
    },
    ghost: {
      className: `${base} text-charcoal-light hover:text-charcoal hover:bg-cream-dark`,
    },
  };

  const v = variants[variant];
  const classes = `${v.className} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} style={v.style}>
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? 'button'} className={classes} style={v.style}>
      {children}
    </button>
  );
}
