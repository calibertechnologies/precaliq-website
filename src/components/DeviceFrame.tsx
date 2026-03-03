interface DeviceFrameProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
  dark?: boolean;
}

export default function DeviceFrame({ children, glow = false, className = '', dark = false }: DeviceFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className="hero-glow"
          style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.35), rgba(96,165,250,0.2), rgba(37,99,235,0.15))' }}
        />
      )}
      <div
        className={`relative rounded-2xl overflow-hidden device-frame device-shine ${dark ? 'glow-border' : ''}`}
        style={{ background: dark ? '#0d0f1a' : '#1a1a2e' }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-2.5"
          style={{ background: dark ? 'rgba(0,0,0,0.4)' : '#111122' }}
        >
          <div className="flex items-center gap-1.5">
            <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#FF5F57' }} />
            <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#FEBC2E' }} />
            <span className="w-[10px] h-[10px] rounded-full" style={{ background: '#28C840' }} />
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="px-8 py-1 rounded-md text-[10px] font-medium"
              style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.3)' }}
            >
              app.precaliq.com
            </div>
          </div>
          <div className="w-[46px] flex items-center justify-end gap-2">
            <svg className="w-3 h-3 opacity-20" fill="white" viewBox="0 0 24 24"><path d="M4 8h16M4 16h16" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
          </div>
        </div>
        {/* Content */}
        <div className="relative">
          {children}
        </div>
      </div>
    </div>
  );
}
