import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import DeviceFrame from '@/components/DeviceFrame';
import FloatingScreenshot from '@/components/FloatingScreenshot';
import ScrollPerspective from '@/components/ScrollPerspective';
import AuroraBackground from '@/components/AuroraBackground';
import FeatureShowcase from '@/components/FeatureShowcase';
import { HeroMockup, SpecsMockup, TakeoffMockup, BidBuilderMockup } from '@/components/AppMockup';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore Precaliq features: AI specification parsing, automated takeoffs across 15 categories, multi-option bid variants, vendor pricing portal, change order detection, and bid document generation.',
  alternates: { canonical: 'https://precaliq.com/features' },
};

export default function FeaturesPage() {
  return (
    <div>
      {/* ═══════════ DARK HERO ═══════════ */}
      <section className="relative overflow-hidden pb-24 md:pb-36" style={{ background: '#0A0A1A' }}>
        {/* Animated aurora gradient blobs */}
        <AuroraBackground />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-8 md:pt-36 md:pb-12 text-center">
          <AnimatedReveal direction="fade">
            <SectionLabel light>Platform</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              Everything you need to<br className="hidden sm:block" />
              <span className="text-gradient">win more bids</span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={180}>
            <p className="mt-6 text-[1.125rem] text-blue-100/50 max-w-xl mx-auto leading-relaxed">
              From specification parsing to bid delivery — a complete preconstruction workflow, powered by AI.
            </p>
          </AnimatedReveal>
        </div>

        {/* Centered HeroMockup — scroll-driven perspective flatten */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <ScrollPerspective>
            <FloatingScreenshot glow>
              <DeviceFrame glow dark>
                <HeroMockup />
              </DeviceFrame>
            </FloatingScreenshot>
          </ScrollPerspective>
        </div>
      </section>

      {/* ═══════════ FEATURE SHOWCASES ═══════════ */}
      <section className="bg-snow">
        <div className="max-w-6xl mx-auto px-6">
          {/* Input group header */}
          <div className="pt-20 md:pt-28 pb-4">
            <AnimatedReveal direction="up">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Input</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">Upload. We read everything.</h2>
            </AnimatedReveal>
          </div>

          <FeatureShowcase
            badge="AI Specification Parsing"
            title="Every CSI section, extracted automatically"
            description="Upload spec PDFs and Precaliq reads every section — identifying manufacturers, materials, finishes, fire ratings, hardware sets, and CSI codes automatically."
            details={[
              'Supports 200+ page specification documents',
              'Extracts data from all CSI divisions',
            ]}
            screenshot={
              <DeviceFrame>
                <SpecsMockup />
              </DeviceFrame>
            }
          />

          <FeatureShowcase
            badge="Architectural Plan Analysis"
            title="Plans and schedules, classified by AI"
            description="Upload plans and Precaliq classifies sheets (door schedules, finish schedules, floor plans), extracts schedules, and combines plan data with specs."
            details={[
              'AI vision reads complex tables and ditto marks',
              'Multi-page schedule extraction',
            ]}
            screenshot={
              <DeviceFrame>
                <SpecsMockup />
              </DeviceFrame>
            }
            reverse
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Processing group header */}
          <div className="pt-20 md:pt-28 pb-4">
            <AnimatedReveal direction="up">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Processing</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">Generate. With precision.</h2>
            </AnimatedReveal>
          </div>

          <FeatureShowcase
            badge="15-Category Takeoffs"
            title="Detailed takeoffs across every trade"
            description="Generate detailed takeoffs for doors, millwork, cabinets, flooring, storefront, ceiling systems, painting, waterproofing, roofing, MEP, structural steel, windows, and more."
            details={[
              'Each category has dedicated AI prompts tuned for construction accuracy',
            ]}
            screenshot={
              <DeviceFrame>
                <TakeoffMockup />
              </DeviceFrame>
            }
          />

          <FeatureShowcase
            badge="Multi-Option Variants"
            title="Standard, Premium, and Budget — instantly"
            description="Automatically generate Standard, Premium, and Budget options for any takeoff. AI swaps materials and manufacturers while preserving quantities and locations."
            details={[
              'Compare options side-by-side with instant cost deltas',
            ]}
            screenshot={
              <DeviceFrame>
                <TakeoffMockup />
              </DeviceFrame>
            }
            reverse
          />
        </div>
      </section>

      <section className="bg-snow">
        <div className="max-w-6xl mx-auto px-6">
          {/* Collaboration group header */}
          <div className="pt-20 md:pt-28 pb-4">
            <AnimatedReveal direction="up">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Collaboration</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">Price. Together.</h2>
            </AnimatedReveal>
          </div>

          <FeatureShowcase
            badge="Vendor Portal & Pricing"
            title="Collect quotes without the phone tag"
            description="Send takeoffs to vendors through a secure, tokenized link. Vendors download the Excel, add pricing, and upload back — no account required."
            details={[
              'AI parses vendor pricing and matches it to your takeoff items automatically',
            ]}
            screenshot={
              <DeviceFrame>
                <VendorPortalMockup />
              </DeviceFrame>
            }
          />

          <FeatureShowcase
            badge="Collaborative Bid Builder"
            title="Assemble your bid, track every change"
            description="Create bid sessions, select variant options per category, and watch totals update in real-time. Every selection change is logged."
            details={[
              'Track user, timestamp, and cost impact for every bid modification',
            ]}
            screenshot={
              <DeviceFrame>
                <BidBuilderMockup />
              </DeviceFrame>
            }
            reverse
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Output group header */}
          <div className="pt-20 md:pt-28 pb-4">
            <AnimatedReveal direction="up">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Output</span>
                <div className="flex-1 h-px bg-border" />
              </div>
              <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">Deliver. Professionally.</h2>
            </AnimatedReveal>
          </div>

          <FeatureShowcase
            badge="Bid Document Generation"
            title="Professional proposals, one click"
            description="Generate professional PDF bid proposals and Excel workbooks with company branding, scope of work, cost breakdowns, terms, and signature lines."
            details={[
              'Bid versioning tracks V1, V2, V3 — send directly to clients from Precaliq',
            ]}
            screenshot={
              <DeviceFrame>
                <PdfPreviewMockup />
              </DeviceFrame>
            }
          />

          <FeatureShowcase
            badge="Change Order Detection"
            title="Spot revisions before they cost you"
            description="Upload revised specs or plans. Precaliq compares against originals, identifying additions, removals, and modifications with estimated cost impact."
            details={[
              'Integrates with bid builder to show how revisions affect your current bid',
            ]}
            screenshot={
              <DeviceFrame>
                <DiffViewMockup />
              </DeviceFrame>
            }
            reverse
          />
        </div>
      </section>

      {/* ═══════════ EXCEL EXPORT ═══════════ */}
      <Section bg="smoke">
        <AnimatedReveal direction="scale">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-border">
            <div className="bg-white rounded-2xl p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Export</span>
                  <h3 className="mt-4 text-2xl font-extrabold text-charcoal">Excel-native output</h3>
                  <p className="mt-4 text-graphite leading-relaxed">
                    Every takeoff, variant comparison, and bid package exports to professionally formatted Excel workbooks — ready for submission or further analysis.
                  </p>
                </div>
                <div className="screenshot-float rounded-xl overflow-hidden ring-1 ring-border shadow-lg">
                  <ExcelTableMockup />
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      {/* ═══════════ CTA (DARK) ═══════════ */}
      <section className="relative overflow-hidden py-32 md:py-44 px-6" style={{ background: '#0A0A1A' }}>
        <AuroraBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.07]" style={{ background: 'radial-gradient(circle, #2563EB, transparent 60%)' }} />

        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-2xl mx-auto">
          <SectionLabel light>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-[1.15] tracking-[-0.02em]">See Precaliq in action</h2>
          <p className="mt-4 text-blue-100/40 leading-relaxed">Book a 30-minute demo with your own spec documents.</p>
          <div className="mt-10">
            <Button href="/contact">
              Request a Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}

/* ── Additional Mockup Components for Features Page ── */

function VendorPortalMockup() {
  return (
    <div className="bg-gray-50 min-h-0">
      <div className="flex items-center h-10 px-4 gap-4 text-[9px] font-semibold text-white/80" style={{ background: '#1F4E79' }}>
        <span className="font-bold text-[10px] tracking-tight text-white">Precaliq</span>
        <div className="flex-1" />
        <span className="text-white/60">Vendor Portal</span>
      </div>
      <div className="px-5 pt-4 pb-3 bg-white border-b border-gray-100">
        <p className="text-[11px] font-bold text-gray-900">Vendor Quote Request</p>
        <p className="text-[8px] text-gray-400 mt-0.5">Highland Medical Center — Interior Doors</p>
      </div>
      <div className="p-4 space-y-2.5">
        <div className="bg-white rounded-lg p-3 ring-1 ring-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-semibold text-gray-800">Quote Items (12)</span>
            <div className="flex gap-1.5">
              <span className="px-2 py-0.5 rounded text-[7px] font-semibold bg-blue-50 text-blue-600">Download Excel</span>
              <span className="px-2 py-0.5 rounded text-[7px] font-semibold bg-green-50 text-green-600">Upload Pricing</span>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="text-[7px] font-bold text-gray-400 uppercase">
                <th className="text-left py-1 px-1.5">Item</th>
                <th className="text-left py-1 px-1.5">Description</th>
                <th className="text-left py-1 px-1.5">Qty</th>
                <th className="text-right py-1 px-1.5">Unit Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                { item: 'D-101', desc: 'Solid Core Oak, 90min', qty: 2, price: '$1,240' },
                { item: 'D-102', desc: 'Hollow Metal, 60min', qty: 4, price: '$890' },
                { item: 'D-103', desc: 'Glass Aluminum Frame', qty: 1, price: '$2,100' },
              ].map((r, i) => (
                <tr key={i} className={`text-[8px] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                  <td className="py-1.5 px-1.5 font-semibold text-blue-600">{r.item}</td>
                  <td className="py-1.5 px-1.5 text-gray-600">{r.desc}</td>
                  <td className="py-1.5 px-1.5 text-gray-600">{r.qty}</td>
                  <td className="py-1.5 px-1.5 text-right font-semibold text-gray-700">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-lg p-3 ring-1 ring-green-100 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
              <svg className="w-2.5 h-2.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </div>
            <span className="text-[8px] text-green-700 font-semibold">No account required — just download, price, and re-upload</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PdfPreviewMockup() {
  return (
    <div className="bg-gray-50 min-h-0">
      <div className="flex items-center h-10 px-4 gap-4 text-[9px] font-semibold text-white/80" style={{ background: '#1F4E79' }}>
        <span className="font-bold text-[10px] tracking-tight text-white">Precaliq</span>
        <div className="flex-1" />
        <span className="text-white/60">Bid Documents</span>
      </div>
      <div className="p-4 flex gap-3">
        {/* Sidebar versions */}
        <div className="w-[100px] space-y-1.5">
          <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-2">Versions</p>
          {[
            { ver: 'V3', date: 'Mar 1', active: true },
            { ver: 'V2', date: 'Feb 22', active: false },
            { ver: 'V1', date: 'Feb 15', active: false },
          ].map((v) => (
            <div key={v.ver} className={`px-2.5 py-1.5 rounded text-[8px] ${v.active ? 'bg-blue-50 text-blue-700 font-semibold ring-1 ring-blue-200' : 'text-gray-400'}`}>
              <span className="font-bold">{v.ver}</span>
              <span className="ml-1.5 text-[7px] opacity-60">{v.date}</span>
            </div>
          ))}
        </div>
        {/* PDF preview */}
        <div className="flex-1 bg-white rounded-lg shadow-sm ring-1 ring-gray-100 p-4">
          <div className="text-center mb-3">
            <p className="text-[10px] font-bold text-gray-900">BID PROPOSAL</p>
            <p className="text-[7px] text-gray-400 mt-0.5">Highland Medical Center — V3</p>
          </div>
          <div className="border-t border-gray-100 pt-2 space-y-2">
            <div className="flex justify-between text-[8px]">
              <span className="text-gray-400">Scope of Work</span>
              <span className="text-gray-600 font-medium">Interior Doors, Flooring, Millwork</span>
            </div>
            <div className="flex justify-between text-[8px]">
              <span className="text-gray-400">Total Bid Amount</span>
              <span className="text-blue-600 font-bold">$478,900.00</span>
            </div>
            <div className="flex justify-between text-[8px]">
              <span className="text-gray-400">Valid Until</span>
              <span className="text-gray-600 font-medium">April 15, 2026</span>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            <span className="px-2 py-1 rounded text-[7px] font-semibold bg-blue-600 text-white">Download PDF</span>
            <span className="px-2 py-1 rounded text-[7px] font-semibold bg-gray-100 text-gray-600">Export Excel</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DiffViewMockup() {
  return (
    <div className="bg-gray-50 min-h-0">
      <div className="flex items-center h-10 px-4 gap-4 text-[9px] font-semibold text-white/80" style={{ background: '#1F4E79' }}>
        <span className="font-bold text-[10px] tracking-tight text-white">Precaliq</span>
        <div className="flex-1" />
        <span className="text-white/60">Change Orders</span>
      </div>
      <div className="px-5 pt-3 pb-2 bg-white border-b border-gray-100">
        <div className="flex items-center gap-2">
          <p className="text-[11px] font-bold text-gray-900">Revision Comparison</p>
          <span className="px-1.5 py-0.5 rounded text-[7px] font-semibold bg-orange-50 text-orange-600">3 changes detected</span>
        </div>
        <p className="text-[8px] text-gray-400 mt-0.5">Spec Rev A → Rev B · Highland Medical Center</p>
      </div>
      <div className="p-3 space-y-2">
        <div className="bg-green-50 rounded-lg p-2.5 ring-1 ring-green-100">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-green-200 text-green-800">ADDED</span>
            <span className="text-[8px] font-semibold text-gray-800">08 14 16 — Flush Wood Doors</span>
          </div>
          <p className="text-[7px] text-gray-500 pl-1">New section requiring additional 6 doors at Corridor 3F</p>
          <p className="text-[7px] text-green-700 font-semibold pl-1 mt-0.5">Est. impact: +$8,400</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-2.5 ring-1 ring-yellow-100">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-yellow-200 text-yellow-800">MODIFIED</span>
            <span className="text-[8px] font-semibold text-gray-800">08 11 13 — Hollow Metal Frames</span>
          </div>
          <p className="text-[7px] text-gray-500 pl-1">Fire rating changed: 60min → 90min for Level 2</p>
          <p className="text-[7px] text-yellow-700 font-semibold pl-1 mt-0.5">Est. impact: +$3,200</p>
        </div>
        <div className="bg-red-50 rounded-lg p-2.5 ring-1 ring-red-100">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="px-1.5 py-0.5 rounded text-[7px] font-bold bg-red-200 text-red-800">REMOVED</span>
            <span className="text-[8px] font-semibold text-gray-800">09 65 13 — Resilient Base</span>
          </div>
          <p className="text-[7px] text-gray-500 pl-1">Section removed, replaced by 09 65 19 Resilient Tile</p>
          <p className="text-[7px] text-red-700 font-semibold pl-1 mt-0.5">Est. impact: -$1,800</p>
        </div>
      </div>
    </div>
  );
}

function ExcelTableMockup() {
  return (
    <div className="bg-white">
      {/* Excel-like header */}
      <div className="flex items-center h-7 px-3 text-[8px] font-semibold" style={{ background: '#217346', color: 'white' }}>
        <span>Precaliq_Takeoff_Export.xlsx</span>
      </div>
      {/* Sheet tabs */}
      <div className="flex items-center gap-0 border-b border-gray-200 bg-gray-50">
        {['Summary', 'Interior Doors', 'Flooring', 'Millwork'].map((tab, i) => (
          <div key={tab} className={`px-3 py-1.5 text-[7px] font-semibold border-r border-gray-200 ${i === 1 ? 'bg-white text-gray-900' : 'text-gray-400'}`}>
            {tab}
          </div>
        ))}
      </div>
      {/* Table */}
      <table className="w-full text-[7px]">
        <thead>
          <tr style={{ background: '#E2EFDA' }}>
            <th className="text-left py-1 px-2 font-bold text-gray-700 border border-gray-200">Item</th>
            <th className="text-left py-1 px-2 font-bold text-gray-700 border border-gray-200">Description</th>
            <th className="text-center py-1 px-2 font-bold text-gray-700 border border-gray-200">Qty</th>
            <th className="text-right py-1 px-2 font-bold text-gray-700 border border-gray-200">Unit Cost</th>
            <th className="text-right py-1 px-2 font-bold text-gray-700 border border-gray-200">Total</th>
          </tr>
        </thead>
        <tbody>
          {[
            { item: 'D-101', desc: 'Solid Core Oak 3070', qty: 2, unit: '$1,240', total: '$2,480' },
            { item: 'D-102', desc: 'HM Door & Frame 3070', qty: 4, unit: '$890', total: '$3,560' },
            { item: 'D-103', desc: 'Alum Storefront Entry', qty: 1, unit: '$2,100', total: '$2,100' },
            { item: 'D-104', desc: 'Solid Core Birch 3068', qty: 2, unit: '$980', total: '$1,960' },
          ].map((r, i) => (
            <tr key={i}>
              <td className="py-1 px-2 text-blue-700 font-semibold border border-gray-200">{r.item}</td>
              <td className="py-1 px-2 text-gray-600 border border-gray-200">{r.desc}</td>
              <td className="py-1 px-2 text-center text-gray-700 border border-gray-200">{r.qty}</td>
              <td className="py-1 px-2 text-right text-gray-700 border border-gray-200">{r.unit}</td>
              <td className="py-1 px-2 text-right font-bold text-gray-900 border border-gray-200">{r.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
