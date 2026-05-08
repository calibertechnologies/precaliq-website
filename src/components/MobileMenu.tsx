'use client';

import { useState, useEffect } from 'react';

const links = [
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="p-2 text-graphite hover:text-charcoal transition-colors cursor-pointer relative z-50"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        <div className="w-5 h-4 relative flex flex-col justify-between">
          <span className={`block h-[1.5px] w-full bg-current transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[1.5px] w-full bg-current transition-all duration-200 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-[1.5px] w-full bg-current transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </div>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-ink/20 backdrop-blur-sm z-40 animate-[fade-in_200ms_ease-out]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div className="fixed top-[72px] left-0 right-0 bottom-0 bg-white z-40 animate-[reveal-up_300ms_ease-out]">
            <nav className="max-w-6xl mx-auto px-6 pt-8 flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-4 px-2 text-lg font-medium text-charcoal border-b border-border transition-colors"
                  onClick={() => setOpen(false)}
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <a
                  href="https://app.precaliq.com/login"
                  className="py-3 px-4 text-center text-graphite font-medium rounded-xl ring-1 ring-border"
                  onClick={() => setOpen(false)}
                >
                  Log in
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
