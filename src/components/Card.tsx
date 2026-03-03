interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <div
      className={`bg-surface rounded-2xl ring-1 ring-border-subtle shadow-card ${
        hover ? 'hover-lift hover:shadow-card-hover' : ''
      } ${glow ? 'glow-border' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
