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

  const variants: Record<ButtonVariant, string> = {
    primary: `${base} text-white bg-accent hover:bg-accent-hover shadow-sm hover:shadow-accent btn-shimmer`,
    'primary-light': `${base} bg-white text-charcoal hover:bg-snow shadow-sm hover:shadow-md`,
    secondary: `${base} bg-white text-charcoal ring-1 ring-border-strong hover:ring-accent/20 hover:bg-snow hover:shadow-sm`,
    ghost: `${base} text-graphite hover:text-charcoal hover:bg-smoke`,
  };

  const classes = `${variants[variant]} ${className}`;

  if (href) {
    return <a href={href} className={classes}>{children}</a>;
  }

  return <button type={type ?? 'button'} className={classes}>{children}</button>;
}
