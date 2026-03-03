'use client';

import { useState } from 'react';

const links = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 text-charcoal-light hover:text-charcoal transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-cream/95 backdrop-blur-lg border-b border-border-subtle shadow-card-hover">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 px-4 text-charcoal-light hover:text-charcoal hover:bg-cream-dark rounded-xl transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.precaliq.com"
              className="mt-2 py-3 px-4 bg-navy text-white rounded-xl text-center font-semibold hover:bg-navy-light transition-all"
              onClick={() => setOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
