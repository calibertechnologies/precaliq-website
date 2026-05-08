import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import MarqueeStrip from '@/components/MarqueeStrip';
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
  title: 'PreCal-IQ — AI-Powered Preconstruction Platform',
  description: 'PreCal-IQ automates construction takeoffs, bid building, and vendor management. The only AI platform that reads both specs and plans. From specs to bids in minutes.',
  alternates: { canonical: 'https://precaliq.com' },
};

export default function HomePage() {
  return (
    <div>
      {/* ═══════════ DARK HERO ═══════════ */}
      <section className="relative overflow-hidden pb-24 md:pb-36" style={{ background: '#0A0A1A' }}>
        {/* Animated aurora gradient blobs */}
        <AuroraBackground />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-8 md:pt-32 md:pb-0">
          {/* Text content — centered */}
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedReveal direction="fade">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-medium text-blue-300 mb-10 ring-1 ring-blue-400/20" style={{ background: 'rgba(37,99,235,0.1)' }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" style={{ animationDuration: '2s' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                AI-Powered Preconstruction Intelligence
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={80}>
              <h1 className="text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-white">
                From Specs to Bids
                <br />
                <span className="text-gradient">in Minutes</span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={200}>
              <p className="mt-7 text-[1.0625rem] md:text-[1.125rem] text-blue-100/50 max-w-xl mx-auto leading-[1.7]">
                The only AI platform that reads your specifications <em className="text-white/90 not-italic font-medium">and</em> your plans, then generates material takeoffs with complete CSI details — automatically.
              </p>
            </AnimatedReveal>

            <AnimatedReveal direction="up" delay={350}>
              <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact">
                  Request a Demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
                <Button href="/features" variant="secondary">
                  Explore Features
                </Button>
              </div>
            </AnimatedReveal>

            <AnimatedReveal direction="fade" delay={500}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {[
                  { text: 'No credit card', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
                  { text: '15-min setup', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                  { text: 'Cancel anytime', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
                ].map((item, i) => (
                  <span key={i} className="flex items-center gap-2 text-xs text-white/30 font-medium">
                    <svg className="w-3.5 h-3.5 text-blue-400/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                    {item.text}
                  </span>
                ))}
              </div>
            </AnimatedReveal>
          </div>

          {/* Hero Screenshot — scroll-driven perspective flatten */}
          <div className="mt-16 md:mt-20 mx-auto max-w-5xl">
            <ScrollPerspective>
              <FloatingScreenshot glow>
                <DeviceFrame glow dark>
                  <HeroMockup />
                </DeviceFrame>
              </FloatingScreenshot>
            </ScrollPerspective>
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEM STATEMENT ═══════════ */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-light">
        {/* Floating decorative particles */}
        <div className="absolute bottom-0 right-[10%] w-3 h-3 rounded-full particle-1 pointer-events-none" style={{ background: 'rgba(37,99,235,0.15)' }} />
        <div className="absolute bottom-[20%] left-[15%] w-2 h-2 rounded-full particle-2 pointer-events-none" style={{ background: 'rgba(96,165,250,0.12)' }} />
        <div className="absolute bottom-[10%] right-[30%] w-1.5 h-1.5 rounded-full particle-3 pointer-events-none" style={{ background: 'rgba(37,99,235,0.1)' }} />

        <div className="relative max-w-6xl mx-auto">
          <AnimatedReveal direction="up" className="max-w-3xl mx-auto text-center">
            <SectionLabel>The Problem</SectionLabel>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.02em]">
              Estimators spend 60% of their time on work AI should do
            </h2>
            <p className="mt-6 text-[1.0625rem] text-graphite leading-[1.75] max-w-2xl mx-auto">
              Reading 200-page specs, counting items on plans, cross-referencing CSI codes — tedious, error-prone work. A single missed spec reference can cost
              <span className="text-charcoal font-semibold"> $50,000+</span> in rework.
            </p>
          </AnimatedReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { stat: '200+', label: 'Pages per spec', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { stat: '60%', label: 'Time wasted', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { stat: '$50K', label: 'Cost of errors', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
            ].map((item, i) => (
              <AnimatedReveal key={i} direction="up" delay={i * 120}>
                <div className="card-spotlight card-glow-line text-center p-8 rounded-2xl bg-white ring-1 ring-border shadow-card group">
                  <div className="icon-glow w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.08), rgba(96,165,250,0.04))' }}>
                    <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-charcoal tracking-tight">{item.stat}</div>
                  <div className="text-xs text-slate mt-2 font-medium uppercase tracking-wider">{item.label}</div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>

        {/* Section divider */}
        <div className="absolute bottom-0 left-0 right-0 section-divider" />
      </section>

      {/* ═══════════ THE SOLUTION (WITH SCREENSHOTS) ═══════════ */}
      <section className="relative py-16 md:py-24 px-6 bg-white overflow-hidden">
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 mesh-gradient-light pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <AnimatedReveal direction="up" className="text-center mb-8">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.02em]">
              Three capabilities.<br className="hidden sm:block" /> Zero competitors.
            </h2>
          </AnimatedReveal>

          <FeatureShowcase
            badge="01 — Specification Parsing"
            title="We Read Your Specs"
            description="Upload a spec PDF. PreCal-IQ identifies every CSI section, extracts manufacturers, materials, fire ratings, hardware sets, and finishes — page by page."
            details={[
              'Supports 200+ page specification documents',
              'Extracts data from all CSI divisions automatically',
              'Identifies manufacturers, materials, and finishes',
            ]}
            screenshot={
              <DeviceFrame>
                <SpecsMockup />
              </DeviceFrame>
            }
          />

          <FeatureShowcase
            badge="02 — Cross-Referencing"
            title="We Cross-Reference Everything"
            description='Specs say "1-hr fire-rated, oak veneer." Plans say "Door D-101." PreCal-IQ connects them automatically — no manual lookup.'
            details={[
              'Matches spec requirements to plan schedules',
              'Generates takeoff items with full CSI details',
              'Multi-option variants: Standard, Premium, Budget',
            ]}
            screenshot={
              <DeviceFrame>
                <TakeoffMockup />
              </DeviceFrame>
            }
            reverse
          />

          <FeatureShowcase
            badge="03 — Bid Assembly"
            title="We Build Your Bid"
            description="Generate Standard, Premium, and Budget variants. Collect vendor pricing. Assemble professional bid documents. All in one platform."
            details={[
              'Real-time cost totals across all categories',
              'Send takeoffs to vendors and pull accepted quotes into the bid',
              'One-click PDF and Excel bid document generation',
            ]}
            screenshot={
              <DeviceFrame>
                <BidBuilderMockup />
              </DeviceFrame>
            }
          />
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-snow">
        {/* Floating decorative particles */}
        <div className="absolute top-[20%] right-[5%] w-2.5 h-2.5 rounded-full particle-2 pointer-events-none" style={{ background: 'rgba(37,99,235,0.1)' }} />
        <div className="absolute top-[60%] left-[8%] w-2 h-2 rounded-full particle-3 pointer-events-none" style={{ background: 'rgba(96,165,250,0.08)' }} />

        <div className="max-w-6xl mx-auto">
          <AnimatedReveal direction="up" className="text-center mb-20">
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.02em]">
              Four steps to a winning bid
            </h2>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
            {/* Animated gradient connector line */}
            <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] connector-animated rounded-full" aria-hidden="true" />

            {[
              { step: '01', title: 'Upload', desc: 'Drop in spec PDFs and architectural plan drawings. PreCal-IQ parses every section and classifies every sheet.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
              { step: '02', title: 'Generate', desc: 'Select categories — doors, flooring, millwork. AI generates detailed takeoffs cross-referencing specs with plans.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { step: '03', title: 'Price', desc: 'Send takeoffs to vendors through a secure portal. Collect and compare quotes automatically.', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
              { step: '04', title: 'Win', desc: 'Build your bid with real-time cost comparisons. Generate professional bid documents in PDF or Excel.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
            ].map((item, i) => (
              <AnimatedReveal key={item.step} direction="up" delay={i * 120}>
                <div className="step-card text-center relative group bg-white rounded-2xl p-6 pt-10 ring-1 ring-border shadow-card">
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-[10px] font-bold text-white px-3 py-1 rounded-full shadow-sm" style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}>
                    {item.step}
                  </div>
                  <div className="icon-glow w-20 h-20 rounded-2xl flex items-center justify-center mx-auto relative z-10 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105" style={{ background: 'linear-gradient(135deg, #1D1D1F, #2A2A2E)' }}>
                    <svg className="w-9 h-9 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-charcoal mt-6">{item.title}</h3>
                  <p className="text-graphite mt-3 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6" style={{ background: 'linear-gradient(170deg, #0D0D0D 0%, #111827 50%, #0D0D0D 100%)' }}>
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-[0.06] pointer-events-none" style={{ background: '#2563EB' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full blur-3xl opacity-[0.04] pointer-events-none" style={{ background: '#60A5FA' }} />

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedReveal direction="up" className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent/60 mb-4">By The Numbers</p>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-tight tracking-[-0.02em]">
              Built for speed and precision
            </h2>
          </AnimatedReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: 'Hours', label: 'Not days', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { value: '15', label: 'Takeoff Categories', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { value: '3', label: 'Variants Per Category', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { value: 'PDF', label: 'Native input format', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((item, i) => (
              <AnimatedReveal key={i} direction="up" delay={i * 100}>
                <div className="dark-stat-card text-center p-8 rounded-2xl ring-1 ring-white/[0.08] group" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 ring-1 ring-white/[0.08] group-hover:ring-accent/30 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.15), rgba(37,99,235,0.05))' }}>
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <AnimatedCounter value={item.value} label={item.label} />
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-6xl mx-auto relative z-10">
          <div className="border-t border-b border-white/[0.04] py-6">
            <MarqueeStrip items={[
              'Interior Doors', 'Exterior Doors', 'Millwork', 'Cabinets', 'Flooring',
              'Storefront', 'Corner Guards', 'Ceiling Systems', 'Painting', 'Waterproofing',
              'Roofing', 'MEP Rough-Ins', 'Structural Steel', 'Windows', 'Specialty Hardware',
            ]} />
          </div>
        </div>
      </section>

    </div>
  );
}
