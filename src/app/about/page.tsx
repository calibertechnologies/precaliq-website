import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About — PreCalIQ' };

export default function AboutPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">About PreCalIQ</h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          The IQ behind your precon.
        </p>

        <div className="mt-16 space-y-10 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why PreCalIQ?</h2>
            <p>
              In construction, the difference between a winning bid and a losing one comes down to
              calibration — getting the quantities, specs, and costs dialed in with precision.
              PreCalIQ was built because we believe AI can bring a new level of intelligence to
              this process. We&apos;re not replacing estimators — we&apos;re giving them superhuman
              accuracy by reading every spec section, interpreting every plan sheet, and generating
              takeoffs that are calibrated to win.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Name</h2>
            <p className="mb-6">
              PreCalIQ brings intelligence to preconstruction. The name says exactly what we do — we
              calibrate the precon process with AI, turning specs and plans into accurate, bid-ready
              takeoffs in minutes instead of days.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1F4E79]">Pre</h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">Preconstruction</p>
                <p className="mt-3 text-sm text-gray-600">
                  Every GC, estimator, and project exec knows &ldquo;precon&rdquo; is the phase that
                  determines whether a project succeeds or fails. It&apos;s the most critical and
                  underserved phase in construction.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1F4E79]">Cal</h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">Calibration</p>
                <p className="mt-3 text-sm text-gray-600">
                  In construction, calibration means precision — getting quantities right, specs
                  aligned, costs accurate. It also ties directly back to our parent company,
                  Caliber Technologies, reinforcing the lineage.
                </p>
              </div>
              <div className="bg-white border rounded-xl p-6">
                <h3 className="text-lg font-bold text-[#1F4E79]">IQ</h3>
                <p className="text-sm font-semibold text-gray-500 mt-1">Intelligence</p>
                <p className="mt-3 text-sm text-gray-600">
                  The product doesn&apos;t just digitize preconstruction — it makes it smarter. It reads
                  specs, interprets plans, and generates takeoffs that would take a human estimator days.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p>
              PreCalIQ was born out of frustration. Our founders spent years working in preconstruction
              for general contractors — reading specifications page by page, manually counting doors
              and materials, and assembling bids in spreadsheets that were outdated before the ink
              dried. They saw firsthand how much time, money, and competitive edge was lost to a
              process that hadn&apos;t fundamentally changed in decades.
            </p>
            <p className="mt-4">
              In 2024, they set out to build the platform they wished they&apos;d had: one that could
              read a spec the way an experienced estimator does, cross-reference it against
              architectural plans, and produce structured material takeoffs in minutes instead of
              days. The result is PreCalIQ — an AI-powered preconstruction platform that handles the
              tedious, error-prone work so estimators can focus on strategy, relationships, and
              winning bids.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Believe</h2>
            <p>
              AI won&apos;t replace construction estimators — but estimators who use AI will replace
              those who don&apos;t. We believe the best technology augments human expertise rather
              than attempting to eliminate it. PreCalIQ keeps experienced professionals in the loop
              while removing the manual drudgery that burns them out and slows them down.
            </p>
            <p className="mt-4">
              We also believe that preconstruction deserves purpose-built software. Generic AI tools
              don&apos;t understand CSI divisions, don&apos;t know the difference between a
              fire-rated hollow metal frame and a standard welded frame, and can&apos;t cross-reference
              spec Section 08 11 00 with a door schedule on sheet A5.01. PreCalIQ does — because it
              was built by people who&apos;ve lived that workflow.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who It&apos;s For</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <span className="text-[#1F4E79] font-bold text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="font-semibold text-gray-900">Estimators</p>
                  <p className="text-sm text-gray-600">Precision in preconstruction — that&apos;s your entire job. PreCalIQ delivers it.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#1F4E79] font-bold text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="font-semibold text-gray-900">GC Executives</p>
                  <p className="text-sm text-gray-600">Intelligent precon is the competitive advantage you&apos;re chasing.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#1F4E79] font-bold text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="font-semibold text-gray-900">Subcontractors</p>
                  <p className="text-sm text-gray-600">Calibrated takeoffs are what win you bids.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="text-[#1F4E79] font-bold text-lg mt-0.5">&#10003;</span>
                <div>
                  <p className="font-semibold text-gray-900">Owners &amp; Developers</p>
                  <p className="text-sm text-gray-600">Smarter preconstruction is how projects stay on budget.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p>
              PreCalIQ is built by a small, focused team of engineers and construction professionals
              who have collectively spent decades in preconstruction, commercial contracting, and
              software development. We&apos;re headquartered in the United States and work closely
              with GCs across the country to refine and expand the platform.
            </p>
          </section>

          <section className="bg-gray-50 rounded-xl p-8 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">A Company by</p>
            <p className="mt-2 text-2xl font-bold text-[#1F4E79]">Caliber Technologies</p>
            <p className="mt-3 text-gray-600 max-w-lg mx-auto">
              PreCalIQ is developed and operated by Caliber Technologies — a technology company
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
