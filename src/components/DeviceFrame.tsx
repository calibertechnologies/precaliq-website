interface DeviceFrameProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export default function DeviceFrame({ children, glow = false, className = '' }: DeviceFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className="hero-glow"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(96,165,250,0.2))' }}
        />
      )}
      <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl" style={{ background: '#1a1a2e' }}>
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#111122' }}>
          <span className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
          <span className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-0.5 rounded-md text-[10px] text-white/30 font-medium" style={{ background: 'rgba(255,255,255,0.05)' }}>
              app.precaliq.com
            </div>
          </div>
          <div className="w-[52px]" />
        </div>
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}
