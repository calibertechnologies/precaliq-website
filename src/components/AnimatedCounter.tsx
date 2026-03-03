'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hasAnimated = useRef(false);

  const parsed = useMemo(() => {
    const match = value.match(/^([<$]?)(\d+)(.*)/);
    if (!match) return null;
    return { prefix: match[1] || '', num: parseInt(match[2], 10), suffix: match[3] || '' };
  }, [value]);

  const [count, setCount] = useState(parsed ? parsed.num : 0);

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

  useEffect(() => {
    if (!visible || !parsed || hasAnimated.current) return;
    hasAnimated.current = true;
    setCount(0);
    const duration = 1200;
    const steps = 30;
    const stepTime = duration / steps;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.round(eased * parsed.num));
      if (current >= steps) {
        setCount(parsed.num);
        clearInterval(timer);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [visible, parsed]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-5xl md:text-6xl font-extrabold tracking-tight text-white inline-block transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {parsed ? `${parsed.prefix}${count}${parsed.suffix}` : value}
      </div>
      <div
        className={`text-[0.8125rem] text-white/35 mt-3 font-medium tracking-wide uppercase transition-all duration-700 delay-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {label}
      </div>
    </div>
  );
}
