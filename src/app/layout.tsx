import type { Metadata } from 'next';
import './globals.css';
import MobileMenu from '@/components/MobileMenu';
import Logo from '@/components/Logo';

export const metadata: Metadata = {
  title: 'PreCalIQ — AI-Powered Preconstruction Platform',
  description: 'PreCalIQ automates construction takeoffs, bid building, and vendor management. Built for GCs who want to bid faster and smarter.',
  openGraph: {
    title: 'PreCalIQ — AI-Powered Preconstruction Platform',
    description: 'Automate takeoffs, build bids, manage vendors. Built for general contractors.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-xl border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2.5 group">
          <Logo size={30} />
          <span className="text-lg font-bold text-navy tracking-tight">
            Pre<span className="text-navy/30">-</span>Cal<span className="text-navy/30">-</span>IQ
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/features" className="text-charcoal-light hover:text-navy transition-colors duration-200">Features</a>
          <a href="/pricing" className="text-charcoal-light hover:text-navy transition-colors duration-200">Pricing</a>
          <a href="/about" className="text-charcoal-light hover:text-navy transition-colors duration-200">About</a>
          <a href="/blog" className="text-charcoal-light hover:text-navy transition-colors duration-200">Blog</a>
          <a href="/contact" className="text-charcoal-light hover:text-navy transition-colors duration-200">Contact</a>
          <a
            href="https://app.precaliq.com"
            className="px-5 py-2.5 bg-navy text-white rounded-xl text-sm font-semibold hover:bg-navy-light transition-all duration-300 shadow-sm hover:shadow-glow shimmer-hover"
          >
            Get Started
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#141413] text-white/80 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(31,78,121,0.05), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={28} light />
            <h3 className="text-lg font-bold text-white tracking-tight">
              Pre<span className="text-white/30">-</span>Cal<span className="text-white/30">-</span>IQ
            </h3>
          </div>
          <p className="text-sm text-white/40 mt-3 leading-relaxed">The IQ behind your precon.</p>
          <p className="text-xs text-white/25 mt-4">A Caliber Technologies Company</p>
        </div>
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-white/30 mb-4">Product</h4>
          <div className="space-y-3 text-sm">
            <a href="/features" className="block text-white/50 hover:text-amber transition-colors duration-200">Features</a>
            <a href="/pricing" className="block text-white/50 hover:text-amber transition-colors duration-200">Pricing</a>
            <a href="/contact" className="block text-white/50 hover:text-amber transition-colors duration-200">Request Demo</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-white/30 mb-4">Resources</h4>
          <div className="space-y-3 text-sm">
            <a href="/blog" className="block text-white/50 hover:text-amber transition-colors duration-200">Blog</a>
            <a href="/about" className="block text-white/50 hover:text-amber transition-colors duration-200">About</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-xs uppercase tracking-wider text-white/30 mb-4">Legal</h4>
          <div className="space-y-3 text-sm">
            <a href="/privacy" className="block text-white/50 hover:text-amber transition-colors duration-200">Privacy Policy</a>
            <a href="/terms" className="block text-white/50 hover:text-amber transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/25 relative z-10">
        &copy; {new Date().getFullYear()} PreCalIQ. All rights reserved.
      </div>
    </footer>
  );
}
