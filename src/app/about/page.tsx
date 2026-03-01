import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About — Bildera' };

export default function AboutPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">About Bildera</h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          Built by construction professionals, powered by AI.
        </p>

        <div className="mt-16 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p>
              Bildera was born out of frustration. Our founders spent years working in preconstruction
              for general contractors — reading specifications page by page, manually counting doors
              and materials, and assembling bids in spreadsheets that were outdated before the ink
              dried. They saw firsthand how much time, money, and competitive edge was lost to a
              process that hadn&apos;t fundamentally changed in decades.
            </p>
            <p className="mt-4">
              In 2024, they set out to build the platform they wished they&apos;d had: one that could
              read a spec the way an experienced estimator does, cross-reference it against
              architectural plans, and produce structured material takeoffs in minutes instead of
              days. The result is Bildera — an AI-powered preconstruction platform that handles the
              tedious, error-prone work so estimators can focus on strategy, relationships, and
              winning bids.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Believe</h2>
            <p>
              AI won&apos;t replace construction estimators — but estimators who use AI will replace
              those who don&apos;t. We believe the best technology augments human expertise rather
              than attempting to eliminate it. Bildera keeps experienced professionals in the loop
              while removing the manual drudgery that burns them out and slows them down.
            </p>
            <p className="mt-4">
              We also believe that preconstruction deserves purpose-built software. Generic AI tools
              don&apos;t understand CSI divisions, don&apos;t know the difference between a
              fire-rated hollow metal frame and a standard welded frame, and can&apos;t cross-reference
              spec Section 08 11 00 with a door schedule on sheet A5.01. Bildera does — because it
              was built by people who&apos;ve lived that workflow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p>
              Bildera is built by a small, focused team of engineers and construction professionals
              who have collectively spent decades in preconstruction, commercial contracting, and
              software development. We&apos;re headquartered in the United States and work closely
              with GCs across the country to refine and expand the platform.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-8 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">A Company by</p>
            <p className="mt-2 text-2xl font-bold text-[#1F4E79]">Caliber Technologies</p>
            <p className="mt-3 text-gray-600 max-w-lg mx-auto">
              Bildera is developed and operated by Caliber Technologies — a technology company
              focused on building AI-powered tools for the construction industry.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <a href="/contact" className="px-8 py-3 bg-[#1F4E79] text-white rounded-lg text-lg font-medium hover:bg-[#163a5c] transition">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}
