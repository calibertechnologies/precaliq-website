'use client';

import { useEffect, useRef } from 'react';

type RevealDirection = 'up' | 'fade' | 'left' | 'right' | 'scale';

interface AnimatedRevealProps {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}

export default function AnimatedReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute('data-visible', 'true');
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={direction}
      style={{ '--delay': `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </div>
  );
}
