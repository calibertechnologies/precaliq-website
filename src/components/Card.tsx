interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  premium?: boolean;
}

export default function Card({ children, className = '', hover = true, premium = false }: CardProps) {
  if (premium) {
    return (
      <div className={`card-premium rounded-2xl ring-1 ring-border shadow-card ${className}`}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={`bg-white rounded-2xl ring-1 ring-border shadow-card ${
        hover ? 'hover-lift hover:shadow-card-hover hover:ring-border-strong' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
