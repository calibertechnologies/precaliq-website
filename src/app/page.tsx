import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import MarqueeStrip from '@/components/MarqueeStrip';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import DeviceFrame from '@/components/DeviceFrame';
import FloatingScreenshot from '@/components/FloatingScreenshot';
import FeatureShowcase from '@/components/FeatureShowcase';
import { HeroMockup, SpecsMockup, TakeoffMockup, BidBuilderMockup } from '@/components/AppMockup';

export const metadata: Metadata = {
  title: 'PreCalIQ — AI-Powered Preconstruction Platform',
  description: 'PreCalIQ automates construction takeoffs, bid building, and vendor management. The only AI platform that reads both specs and plans. From specs to bids in minutes.',
  alternates: { canonical: 'https://precaliq.com' },
};

export default function HomePage() {
  return (
    <div>
      {/* ═══════════ DARK HERO ═══════════ */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(170deg, #0A0A1A 0%, #0f1029 40%, #12122A 60%, #0A0A1A 100%)' }}>
        {/* Decorative gradient orbs */}
        <div className="absolute top-[5%] right-[10%] w-[600px] h-[600px] rounded-full opacity-[0.08] pointer-events-none blur-3xl" style={{ background: 'radial-gradient(circle, #2563EB, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[3%] w-[400px] h-[400px] rounded-full opacity-[0.05] pointer-events-none blur-3xl" style={{ background: 'radial-gradient(circle, #60A5FA, transparent 70%)' }} />
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none blur-3xl" style={{ background: '#818CF8' }} />

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
                  { text: 'SOC 2 Compliant', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
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

          {/* Hero Screenshot — large, centered, floating below text */}
          <AnimatedReveal direction="up" delay={500}>
            <div className="mt-16 md:mt-20 mx-auto max-w-5xl">
              <FloatingScreenshot glow float>
                <DeviceFrame glow dark>
                  <HeroMockup />
                </DeviceFrame>
              </FloatingScreenshot>
            </div>
          </AnimatedReveal>
        </div>

        {/* Bottom gradient — smooth multi-step dark→white transition */}
        <div className="relative h-48 md:h-56 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,26,0.8) 20%, rgba(15,15,40,0.9) 40%, rgba(30,30,60,0.6) 55%, rgba(200,205,220,0.3) 70%, rgba(250,250,250,0.7) 85%, #FAFAFA 100%)' }} />
      </section>

      {/* ═══════════ SOCIAL PROOF ═══════════ */}
      <section className="py-10 md:py-14 px-6 bg-snow border-b border-border">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate whitespace-nowrap">Trusted by GCs across the US</p>
          <div className="flex items-center gap-8 md:gap-10 flex-wrap justify-center">
            {['Summit Healthcare', 'Lakeshore Dev', 'Metro Transit', 'Pinnacle Build Co', 'Apex Contractors'].map((name) => (
              <span key={name} className="text-sm font-bold text-stone tracking-tight whitespace-nowrap">{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROBLEM STATEMENT ═══════════ */}
      <Section bg="white">
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

        {/* Visual stat callouts */}
        <AnimatedReveal direction="up" delay={150}>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { stat: '200+', label: 'Pages per spec' },
              { stat: '60%', label: 'Time wasted' },
              { stat: '$50K', label: 'Cost of errors' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-snow ring-1 ring-border hover-lift">
                <div className="text-2xl md:text-3xl font-extrabold text-charcoal tracking-tight">{item.stat}</div>
                <div className="text-xs text-slate mt-1.5 font-medium uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </AnimatedReveal>
      </Section>

      {/* ═══════════ THE SOLUTION (WITH SCREENSHOTS) ═══════════ */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedReveal direction="up" className="text-center mb-8">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.02em]">
              Three capabilities.<br className="hidden sm:block" /> Zero competitors.
            </h2>
          </AnimatedReveal>

          <FeatureShowcase
            badge="01 — Specification Parsing"
            title="We Read Your Specs"
            description="Upload a spec PDF. PreCalIQ identifies every CSI section, extracts manufacturers, materials, fire ratings, hardware sets, and finishes — page by page."
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
            description='Specs say "1-hr fire-rated, oak veneer." Plans say "Door D-101." PreCalIQ connects them automatically — no manual lookup.'
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
              'Vendor portal for automated quote collection',
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
      <Section bg="snow" wide>
        <AnimatedReveal direction="up" className="text-center mb-20">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.02em]">
            Four steps to a winning bid
          </h2>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          {/* Connecting gradient line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px]" style={{ background: 'linear-gradient(to right, rgba(37,99,235,0.08), rgba(37,99,235,0.2), rgba(37,99,235,0.08))' }} aria-hidden="true" />

          {[
            { step: '01', title: 'Upload', desc: 'Drop in spec PDFs and architectural plan drawings. PreCalIQ parses every section and classifies every sheet.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { step: '02', title: 'Generate', desc: 'Select categories — doors, flooring, millwork. AI generates detailed takeoffs cross-referencing specs with plans.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
            { step: '03', title: 'Price', desc: 'Send takeoffs to vendors through a secure portal. Collect and compare quotes automatically.', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
            { step: '04', title: 'Win', desc: 'Build your bid with real-time cost comparisons. Generate professional bid documents in PDF or Excel.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
          ].map((item, i) => (
            <AnimatedReveal key={item.step} direction="up" delay={i * 100}>
              <div className="text-center relative group">
                <div className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto relative z-10 bg-charcoal ring-4 ring-white shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-500">
                  <svg className="w-10 h-10 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-charcoal mt-6">{item.title}</h3>
                <p className="text-graphite mt-3 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6" style={{ background: 'linear-gradient(170deg, #0D0D0D 0%, #111827 50%, #0D0D0D 100%)' }}>
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-3xl opacity-[0.06] pointer-events-none" style={{ background: '#2563EB' }} />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full blur-3xl opacity-[0.04] pointer-events-none" style={{ background: '#60A5FA' }} />

        {/* Subtle grid overlay */}
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
              { value: '10x', label: 'Faster Takeoffs', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { value: '15', label: 'Takeoff Categories', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { value: '5', label: 'Minutes Per Category', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { value: '0', label: 'Missed Specifications', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((item, i) => (
              <AnimatedReveal key={i} direction="up" delay={i * 80}>
                <div className="text-center p-6 rounded-2xl ring-1 ring-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] hover:ring-white/[0.1] transition-all duration-500">
                  <svg className="w-6 h-6 text-accent/40 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <AnimatedCounter value={item.value} label={item.label} />
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>

        {/* Marquee */}
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

      {/* ═══════════ CTA (DARK) ═══════════ */}
      <section className="relative overflow-hidden py-32 md:py-44 px-6" style={{ background: 'linear-gradient(170deg, #0A0A1A 0%, #12122A 60%, #0A0A1A 100%)' }}>
        {/* Decorative accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.07]" style={{ background: 'radial-gradient(circle, #2563EB, transparent 60%)' }} />

        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-2xl mx-auto">
          <SectionLabel light>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-[-0.02em]">
            Ready to transform your preconstruction?
          </h2>
          <p className="mt-6 text-[1.0625rem] text-blue-100/40 leading-[1.75]">
            Join the GCs who are winning more bids with AI-powered estimating. Start with a free project — no credit card required.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact">
              Request a Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button href="/pricing" variant="secondary">
              View Pricing
            </Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
