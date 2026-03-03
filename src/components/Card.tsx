interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl ring-1 ring-border shadow-sm ${
        hover ? 'hover-lift hover:shadow-md hover:ring-border-strong' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
