'use client';

import { useEffect, useRef } from 'react';

interface ScrollPerspectiveProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollPerspective({ children, className = '' }: ScrollPerspectiveProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // progress: 0 when element top is at viewport bottom, 1 when top reaches viewport top
      const raw = 1 - rect.top / viewH;
      const progress = Math.max(0, Math.min(1, raw));

      // perspective tilt goes from rotateY(-6deg) rotateX(4deg) → rotateY(0) rotateX(0)
      const rotY = -6 * (1 - progress);
      const rotX = 4 * (1 - progress);
      const translateY = 40 * (1 - progress);
      const scale = 0.92 + 0.08 * progress;

      el.style.transform = `perspective(1200px) rotateY(${rotY}deg) rotateX(${rotX}deg) translateY(${translateY}px) scale(${scale})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  );
}
