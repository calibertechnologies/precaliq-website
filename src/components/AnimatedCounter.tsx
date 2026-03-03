'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Parse numeric part and suffix
  const match = value.match(/^([<$]?)(\d+)(.*)/);
  const prefix = match?.[1] || '';
  const numPart = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] || value;

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible || !match) return;
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * numPart));
      if (current >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [visible, numPart, match]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-5xl md:text-6xl font-extrabold tracking-tight text-gradient-amber inline-block transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {match ? `${prefix}${count}${suffix}` : value}
      </div>
      <div
        className={`text-[0.8125rem] text-white/40 mt-3 font-medium tracking-wide uppercase transition-all duration-700 delay-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </div>
    </div>
  );
}
