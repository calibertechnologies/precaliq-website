'use client';

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Primary blue orb — drifts right-left */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full aurora-orb-1"
        style={{
          top: '-10%',
          right: '-5%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.15), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Secondary blue orb — drifts left-right */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full aurora-orb-2"
        style={{
          bottom: '5%',
          left: '-5%',
          background: 'radial-gradient(circle, rgba(96,165,250,0.12), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Indigo accent orb — drifts diagonally */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full aurora-orb-3"
        style={{
          top: '30%',
          left: '30%',
          background: 'radial-gradient(circle, rgba(129,140,248,0.08), transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
    </div>
  );
}
