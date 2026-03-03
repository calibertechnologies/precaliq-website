'use client';

interface FloatingScreenshotProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export default function FloatingScreenshot({ children, glow = false, className = '' }: FloatingScreenshotProps) {
  return (
    <div className={`relative group ${className}`}>
      {glow && (
        <div
          className="hero-glow"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(96,165,250,0.15), rgba(37,99,235,0.2))' }}
        />
      )}
      <div className="relative">
        {children}
      </div>
    </div>
  );
}
