import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bildera — AI-Powered Preconstruction Platform',
  description: 'Bildera automates construction takeoffs, bid building, and vendor management. Built for GCs who want to bid faster and smarter.',
  openGraph: {
    title: 'Bildera — AI-Powered Preconstruction Platform',
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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-xl font-bold text-[#1F4E79]">Bildera</a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="/features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/blog" className="text-gray-600 hover:text-gray-900">Blog</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="https://app.bildera.com" className="px-4 py-2 bg-[#1F4E79] text-white rounded-lg hover:bg-[#163a5c] transition">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-[#1F4E79] text-lg">Bildera</h3>
          <p className="text-sm text-gray-500 mt-2">AI-powered preconstruction platform for general contractors.</p>
          <p className="text-xs text-gray-400 mt-4">A Caliber Technologies Company</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Product</h4>
          <div className="space-y-2 text-sm text-gray-500">
            <a href="/features" className="block hover:text-gray-700">Features</a>
            <a href="/pricing" className="block hover:text-gray-700">Pricing</a>
            <a href="/contact" className="block hover:text-gray-700">Request Demo</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Resources</h4>
          <div className="space-y-2 text-sm text-gray-500">
            <a href="/blog" className="block hover:text-gray-700">Blog</a>
            <a href="/about" className="block hover:text-gray-700">About</a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-sm mb-3">Legal</h4>
          <div className="space-y-2 text-sm text-gray-500">
            <a href="#" className="block hover:text-gray-700">Privacy Policy</a>
            <a href="#" className="block hover:text-gray-700">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Bildera. All rights reserved.
      </div>
    </footer>
  );
}
