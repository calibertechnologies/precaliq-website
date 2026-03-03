'use client';

interface MarqueeStripProps {
  items: string[];
  className?: string;
}

export default function MarqueeStrip({ items, className = '' }: MarqueeStripProps) {
  // Double the items for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`} aria-hidden="true">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {allItems.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className="text-[0.8125rem] font-medium text-white/25 uppercase tracking-[0.2em]">{item}</span>
            <span className="w-1 h-1 rounded-full bg-white/10 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
