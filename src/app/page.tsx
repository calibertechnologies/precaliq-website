import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bildera — AI-Powered Preconstruction Platform',
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Preconstruction,<br />
            <span className="text-[#1F4E79]">Reimagined with AI</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Bildera automates material takeoffs from specs and plans, generates multi-option bids, manages vendor pricing, and detects change orders — so your team can bid faster, smarter, and more accurately.
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-[#1F4E79] text-white rounded-lg text-lg font-medium hover:bg-[#163a5c] transition">
              Request a Demo
            </a>
            <a href="/features" className="px-8 py-3 border border-gray-300 rounded-lg text-lg font-medium text-gray-700 hover:bg-gray-50 transition">
              See Features
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">The Problem with Manual Estimating</h2>
          <p className="mt-4 text-lg text-gray-600">
            Construction estimators spend 60% of their time reading specifications and counting items — work that is tedious, error-prone, and expensive. A single missed spec reference can cost $50,000 or more in rework.
          </p>
        </div>
      </section>

      {/* 3 Differentiators */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Teams Choose Bildera</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Takeoffs',
                description: 'Upload specs and plans. Bildera reads every page, cross-references CSI codes, and generates structured takeoffs in minutes — not days.',
              },
              {
                title: 'Multi-Option Bids',
                description: 'Automatically generate Standard, Premium, and Budget variants. Compare options side-by-side and build competitive bids with one click.',
              },
              {
                title: 'Vendor & Change Management',
                description: 'Send takeoffs to vendors, collect pricing through a secure portal, and detect changes between document revisions automatically.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl border p-8">
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="space-y-8">
            {[
              { step: '1', title: 'Upload Documents', desc: 'Upload spec PDFs and architectural plans. Bildera parses every section and classifies drawings automatically.' },
              { step: '2', title: 'Generate Takeoffs', desc: 'Select categories (doors, flooring, MEP, etc.) and Bildera generates detailed material takeoffs with AI — cross-referencing specs and plans.' },
              { step: '3', title: 'Build Your Bid', desc: 'Choose variants per category, add vendor pricing, and generate professional bid documents in PDF or Excel.' },
              { step: '4', title: 'Track Changes', desc: 'When revisions come in, Bildera detects what changed, estimates cost impact, and helps you issue change orders.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-[#1F4E79] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Comparison */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Bildera vs. Traditional Tools</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-center py-3 px-4">Bildera</th>
                  <th className="text-center py-3 px-4">PlanSwift</th>
                  <th className="text-center py-3 px-4">Bluebeam</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AI Spec Reading', true, false, false],
                  ['Automated Takeoffs', true, false, false],
                  ['Multi-Option Variants', true, false, false],
                  ['Vendor Portal', true, false, false],
                  ['Change Detection', true, false, false],
                  ['Bid Document Generation', true, false, false],
                  ['Plan Markup Tools', false, true, true],
                  ['On-Screen Takeoff', false, true, true],
                ].map(([feature, b, p, bb], i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-4">{feature as string}</td>
                    <td className="text-center py-3 px-4">{b ? '✓' : '—'}</td>
                    <td className="text-center py-3 px-4">{p ? '✓' : '—'}</td>
                    <td className="text-center py-3 px-4">{bb ? '✓' : '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-[#1F4E79] text-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ['10x', 'Faster Takeoffs'],
            ['15', 'Takeoff Categories'],
            ['< 5 min', 'Per Category'],
            ['$0', 'Missed Specs'],
          ].map(([stat, label], i) => (
            <div key={i}>
              <div className="text-4xl font-bold">{stat}</div>
              <div className="text-sm text-white/70 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Transform Your Preconstruction?</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Join GCs who are winning more bids with AI-powered estimating.
        </p>
        <a href="/contact" className="mt-8 inline-block px-8 py-3 bg-[#1F4E79] text-white rounded-lg text-lg font-medium hover:bg-[#163a5c] transition">
          Request a Demo
        </a>
      </section>
    </div>
  );
}
