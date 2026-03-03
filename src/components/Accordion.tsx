'use client';

import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-surface rounded-xl ring-1 ring-border-subtle overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer"
            >
              <span className="font-semibold text-charcoal pr-4">{item.question}</span>
              <svg
                className={`w-5 h-5 text-charcoal-light shrink-0 transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              className="accordion-content"
              data-open={isOpen ? 'true' : 'false'}
            >
              <div>
                <div className="px-6 pb-4 text-charcoal-light leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
