interface LogoProps {
  className?: string;
  size?: number;
  light?: boolean;
}

export default function Logo({ className = '', size = 32, light = false }: LogoProps) {
  const primary = light ? '#FFFFFF' : '#1F4E79';
  const accent = '#C8964E';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer rounded square with gradient */}
      <defs>
        <linearGradient id={`logo-grad-${light ? 'l' : 'd'}`} x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor={primary} />
          <stop offset="100%" stopColor={light ? '#FFFFFF' : '#163A5C'} />
        </linearGradient>
        <linearGradient id={`logo-accent-${light ? 'l' : 'd'}`} x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor={accent} />
          <stop offset="100%" stopColor="#D4A85A" />
        </linearGradient>
      </defs>

      {/* Background shape - rounded square */}
      <rect x="2" y="2" width="60" height="60" rx="16" fill={`url(#logo-grad-${light ? 'l' : 'd'})`} />

      {/* Stylized "IQ" letters */}
      {/* I - vertical bar */}
      <rect x="16" y="16" width="8" height="32" rx="3" fill="white" opacity="0.95" />

      {/* Q - circle with tail */}
      <circle cx="40" cy="30" r="13" stroke="white" strokeWidth="6" fill="none" opacity="0.95" />
      {/* Q tail - diagonal amber accent */}
      <line x1="46" y1="38" x2="54" y2="50" stroke={accent} strokeWidth="6" strokeLinecap="round" />

      {/* Small precision dot - amber */}
      <circle cx="20" cy="52" r="3.5" fill={accent} />
    </svg>
  );
}
