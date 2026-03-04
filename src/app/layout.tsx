import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MobileMenu from '@/components/MobileMenu';
import Logo from '@/components/Logo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#1D1D1F',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://precaliq.com'),
  title: {
    default: 'Precaliq — AI-Powered Preconstruction Platform',
    template: '%s — Precaliq',
  },
  description: 'Precaliq automates construction takeoffs, bid building, and vendor management using AI. The only platform that reads both specs and plans. Built for GCs who want to bid faster and smarter.',
  keywords: ['construction takeoff software', 'AI preconstruction', 'construction estimating', 'material takeoff', 'bid management', 'vendor pricing', 'CSI specification parsing', 'construction AI'],
  authors: [{ name: 'Precaliq', url: 'https://precaliq.com' }],
  creator: 'Precaliq',
  publisher: 'Caliber Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Precaliq — AI-Powered Preconstruction Platform',
    description: 'Automate takeoffs, build bids, manage vendors. The only AI platform that reads both specs and plans.',
    url: 'https://precaliq.com',
    siteName: 'Precaliq',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precaliq — AI-Powered Preconstruction Platform',
    description: 'Automate takeoffs, build bids, manage vendors. Built for GCs who want to bid faster.',
  },
  alternates: {
    canonical: 'https://precaliq.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Precaliq',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'AI-powered preconstruction platform that automates construction takeoffs, bid building, and vendor management.',
              url: 'https://precaliq.com',
              author: {
                '@type': 'Organization',
                name: 'Caliber Technologies',
                url: 'https://precaliq.com',
              },
              offers: {
                '@type': 'AggregateOffer',
                lowPrice: '0',
                highPrice: '299',
                priceCurrency: 'USD',
                offerCount: '3',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border"
      style={{ background: 'rgba(255, 255, 255, 0.85)', backdropFilter: 'blur(20px) saturate(1.2)', WebkitBackdropFilter: 'blur(20px) saturate(1.2)' }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[72px]" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-2.5 group" aria-label="Precaliq home">
          <Logo size={32} />
          <span className="text-[1.125rem] font-bold text-charcoal tracking-tight">
            Precaliq
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {[
            { href: '/features', label: 'Features' },
            { href: '/pricing', label: 'Pricing' },
            { href: '/about', label: 'About' },
            { href: '/blog', label: 'Blog' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[0.875rem] font-medium text-graphite hover:text-charcoal rounded-lg hover:bg-smoke transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.precaliq.com/login"
            className="px-4 py-2 text-[0.875rem] font-medium text-graphite hover:text-charcoal transition-colors duration-200"
          >
            Log in
          </a>
          <a
            href="https://app.precaliq.com"
            className="px-5 py-2.5 text-[0.875rem] font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-all duration-300 shadow-sm hover:shadow-accent"
          >
            Get Started
          </a>
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0D0D0D' }}>
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(37, 99, 235, 0.2), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <a href="/" className="inline-flex items-center gap-2.5" aria-label="Precaliq home">
              <Logo size={28} light />
              <span className="text-lg font-bold text-white tracking-tight">
                Precaliq
              </span>
            </a>
            <p className="text-[0.875rem] text-white/30 mt-4 leading-relaxed max-w-xs">
              The IQ behind your precon. AI-powered preconstruction for general contractors.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">Product</h4>
            <ul className="space-y-3">
              {[
                { href: '/features', label: 'Features' },
                { href: '/pricing', label: 'Pricing' },
                { href: '/contact', label: 'Request Demo' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[0.875rem] text-white/35 hover:text-white/70 transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">Resources</h4>
            <ul className="space-y-3">
              {[
                { href: '/blog', label: 'Blog' },
                { href: '/about', label: 'About' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[0.875rem] text-white/35 hover:text-white/70 transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">Legal</h4>
            <ul className="space-y-3">
              {[
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[0.875rem] text-white/35 hover:text-white/70 transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/20 mb-5">Get Started</h4>
            <a
              href="https://app.precaliq.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[0.875rem] font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-all duration-300"
            >
              Try Free
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {currentYear} Precaliq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
