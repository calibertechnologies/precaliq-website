interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-surface rounded-2xl ring-1 ring-border-subtle shadow-card ${
        hover ? 'hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
