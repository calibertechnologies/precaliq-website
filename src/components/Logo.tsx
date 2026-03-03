interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function Logo({ className = '', size = 32, light = false }: LogoProps) {
  const primary = light ? '#FFFFFF' : '#1D1D1F';
  const accent = '#2563EB';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id={`logo-grad-${light ? 'l' : 'd'}`} x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor={primary} />
          <stop offset="100%" stopColor={light ? '#E0E0E0' : '#3A3A3C'} />
        </linearGradient>
      </defs>

      {/* Background shape - rounded square */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#logo-grad-${light ? 'l' : 'd'})`} />

      {/* I - vertical bar */}
      <rect x="16" y="16" width="8" height="32" rx="3" fill={light ? '#1D1D1F' : '#FFFFFF'} opacity="0.95" />

      {/* Q - circle with tail */}
      <circle cx="40" cy="30" r="13" stroke={light ? '#1D1D1F' : '#FFFFFF'} strokeWidth="6" fill="none" opacity="0.95" />
      {/* Q tail - accent */}
      <line x1="46" y1="38" x2="54" y2="50" stroke={accent} strokeWidth="6" strokeLinecap="round" />

      {/* Precision dot - accent */}
      <circle cx="20" cy="52" r="3.5" fill={accent} />
    </svg>
  );
}
