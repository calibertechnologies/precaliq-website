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
        hover ? 'hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-out' : ''
      } ${glow ? 'glow-border' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
