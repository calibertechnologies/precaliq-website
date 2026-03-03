import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import AnimatedCounter from '@/components/AnimatedCounter';
import MarqueeStrip from '@/components/MarqueeStrip';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'PreCalIQ — AI-Powered Preconstruction Platform',
  description: 'PreCalIQ automates construction takeoffs, bid building, and vendor management. The only AI platform that reads both specs and plans. From specs to bids in minutes.',
  alternates: { canonical: 'https://precaliq.com' },
};

export default function HomePage() {
  return (
    <div>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden hero-mesh" style={{ background: 'linear-gradient(160deg, #0A1E33 0%, #122D4A 30%, #163A5C 60%, #0F2D47 100%)' }}>
        {/* Morphing gradient blobs */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] animate-morph animate-float-slow opacity-[0.07] pointer-events-none" style={{ background: 'radial-gradient(circle, #C8964E, transparent 70%)' }} />
        <div className="absolute bottom-[5%] right-[8%] w-[400px] h-[400px] animate-morph animate-float opacity-[0.05] pointer-events-none" style={{ background: 'radial-gradient(circle, #2A6399, transparent 70%)', animationDelay: '-4s' }} />
        <div className="absolute top-[40%] left-[50%] w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-[0.08] pointer-events-none" style={{ background: '#1F4E79' }} />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-28 md:pt-44 md:pb-40">
          <AnimatedReveal direction="fade">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-xs font-medium text-white/60 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber opacity-75 animate-ping" style={{ animationDuration: '2s' }} />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber" />
              </span>
              AI-Powered Preconstruction Intelligence
            </div>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.25rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-white max-w-4xl">
              From Specs to Bids
              <br />
              <span className="text-gradient-amber">in Minutes</span>
            </h1>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={200}>
            <p className="mt-8 text-[1.125rem] md:text-[1.25rem] text-white/45 max-w-xl leading-[1.7]">
              The only AI platform that reads your specifications <em className="text-white/60 not-italic font-medium">and</em> your plans, then generates material takeoffs with complete CSI details — automatically.
            </p>
          </AnimatedReveal>

          <AnimatedReveal direction="up" delay={350}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary-light">
                Request a Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button href="/features" variant="secondary" className="bg-white/[0.04] text-white/80 ring-white/[0.08] hover:bg-white/[0.08] hover:text-white hover:ring-white/15">
                Explore Features
              </Button>
            </div>
          </AnimatedReveal>

          {/* Trust indicators */}
          <AnimatedReveal direction="fade" delay={550}>
            <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-white/25 font-medium">
              {['SOC 2 Compliant', 'No credit card required', 'Setup in 15 minutes', 'Cancel anytime'].map((item, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber/40" />
                  {item}
                </span>
              ))}
            </div>
          </AnimatedReveal>
        </div>

        {/* Bottom gradient fade to cream */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--color-cream), transparent)' }} />
      </section>

      {/* ═══════════ PROBLEM STATEMENT ═══════════ */}
      <Section bg="cream">
        <AnimatedReveal direction="up" className="max-w-3xl mx-auto text-center">
          <SectionLabel>The Problem</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.01em]">
            Estimators spend 60% of their time on work AI should do
          </h2>
          <p className="mt-6 text-[1.0625rem] text-charcoal-light leading-[1.75] max-w-2xl mx-auto">
            Reading 200-page specs, counting items on plans, cross-referencing CSI codes — tedious, error-prone work. A single missed spec reference can cost
            <span className="text-charcoal font-semibold"> $50,000+</span> in rework.
          </p>
        </AnimatedReveal>
      </Section>

      {/* ═══════════ THE SOLUTION — 3 PILLARS ═══════════ */}
      <Section bg="white" wide dots>
        <AnimatedReveal direction="up" className="text-center mb-20">
          <SectionLabel>The Solution</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.01em]">
            Three capabilities.<br className="hidden sm:block" /> Zero competitors.
          </h2>
        </AnimatedReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              number: '01',
              title: 'We Read Your Specs',
              description: 'Upload a spec PDF. PreCalIQ identifies every CSI section, extracts manufacturers, materials, fire ratings, hardware sets, and finishes — page by page.',
              color: '#1F4E79',
            },
            {
              number: '02',
              title: 'We Cross-Reference Everything',
              description: 'Specs say "1-hr fire-rated, oak veneer." Plans say "Door D-101." PreCalIQ connects them automatically — no manual lookup.',
              color: '#C8964E',
            },
            {
              number: '03',
              title: 'We Build Your Bid',
              description: 'Generate Standard, Premium, and Budget variants. Collect vendor pricing. Assemble professional bid documents. All in one platform.',
              color: '#1F4E79',
            },
          ].map((item, i) => (
            <AnimatedReveal key={i} direction="up" delay={i * 100}>
              <Card className="p-8 md:p-10 h-full group" glow>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[0.8125rem] font-bold tracking-wider" style={{ color: item.color }}>{item.number}</span>
                  <div className="flex-1 h-px bg-border-subtle" />
                </div>
                <h3 className="text-xl font-bold text-charcoal leading-snug">{item.title}</h3>
                <p className="mt-4 text-charcoal-light leading-relaxed">{item.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <Section bg="cream-dark" wide>
        <AnimatedReveal direction="up" className="text-center mb-20">
          <SectionLabel>Process</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.01em]">
            Four steps to a winning bid
          </h2>
        </AnimatedReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ background: 'linear-gradient(to right, rgba(31,78,121,0.15), rgba(200,150,78,0.25), rgba(31,78,121,0.15))' }} aria-hidden="true" />

          {[
            { step: '01', title: 'Upload', desc: 'Drop in spec PDFs and architectural plan drawings. PreCalIQ parses every section and classifies every sheet.' },
            { step: '02', title: 'Generate', desc: 'Select categories — doors, flooring, millwork, MEP. AI generates detailed takeoffs cross-referencing specs with plans.' },
            { step: '03', title: 'Price', desc: 'Send takeoffs to vendors through a secure portal. Collect and compare quotes automatically.' },
            { step: '04', title: 'Win', desc: 'Build your bid with real-time cost comparisons. Generate professional bid documents in PDF or Excel.' },
          ].map((item, i) => (
            <AnimatedReveal key={item.step} direction="up" delay={i * 100}>
              <div className="text-center relative group">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto relative z-10 ring-4 ring-cream-dark group-hover:scale-105 transition-transform duration-500"
                  style={{ background: 'linear-gradient(160deg, #1F4E79, #163A5C)' }}
                >
                  <span className="text-white/90 text-sm font-bold tracking-wider">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-charcoal mt-6">{item.title}</h3>
                <p className="text-charcoal-light mt-3 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <Section bg="white">
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>Comparison</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.01em]">
            What others miss, we catch
          </h2>
        </AnimatedReveal>

        <AnimatedReveal direction="scale" delay={100}>
          <div className="rounded-2xl ring-1 ring-border-subtle overflow-hidden shadow-elevated">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cream">
                    <th className="text-left py-4 px-6 font-semibold text-charcoal text-[0.8125rem]">Capability</th>
                    <th className="text-center py-4 px-6 font-bold text-navy text-[0.8125rem]">PreCalIQ</th>
                    <th className="text-center py-4 px-6 font-medium text-charcoal-muted text-[0.8125rem]">PlanSwift</th>
                    <th className="text-center py-4 px-6 font-medium text-charcoal-muted text-[0.8125rem]">Bluebeam</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['AI Specification Reading', true, false, false],
                    ['Automated Material Takeoffs', true, false, false],
                    ['Multi-Option Bid Variants', true, false, false],
                    ['Vendor Pricing Portal', true, false, false],
                    ['Change Order Detection', true, false, false],
                    ['Bid Document Generation', true, false, false],
                    ['Plan Markup Tools', false, true, true],
                    ['On-Screen Measurement', false, true, true],
                  ].map(([feature, b, p, bb], i) => (
                    <tr key={i} className="border-t border-border-subtle">
                      <td className="py-3.5 px-6 text-charcoal font-medium text-[0.875rem]">{feature as string}</td>
                      {[b, p, bb].map((val, j) => (
                        <td key={j} className="text-center py-3.5 px-6">
                          {val ? (
                            <span className={`inline-flex w-7 h-7 items-center justify-center rounded-full ${j === 0 ? 'bg-navy/10 text-navy' : 'bg-charcoal/[0.04] text-charcoal-muted'}`}>
                              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            </span>
                          ) : <span className="text-charcoal/15">—</span>}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="relative overflow-hidden py-24 md:py-32 px-6" style={{ background: 'linear-gradient(160deg, #0F0F0E, #1A1A18, #0F0F0E)' }}>
        <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-[0.06] pointer-events-none" style={{ background: '#C8964E' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              ['10x', 'Faster Takeoffs'],
              ['15', 'Takeoff Categories'],
              ['5', 'Minutes Per Category'],
              ['0', 'Missed Specifications'],
            ].map(([stat, label], i) => (
              <AnimatedCounter key={i} value={stat} label={label} />
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="mt-20 max-w-6xl mx-auto relative z-10">
          <MarqueeStrip items={[
            'Interior Doors', 'Exterior Doors', 'Millwork', 'Cabinets', 'Flooring',
            'Storefront', 'Corner Guards', 'Ceiling Systems', 'Painting', 'Waterproofing',
            'Roofing', 'MEP Rough-Ins', 'Structural Steel', 'Windows', 'Specialty Hardware',
          ]} />
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="relative overflow-hidden py-32 md:py-40 px-6 bg-cream">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        {/* Decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-[0.04]" style={{ background: '#1F4E79' }} />

        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-2xl mx-auto">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-[1.15] tracking-[-0.01em]">
            Ready to transform your preconstruction?
          </h2>
          <p className="mt-6 text-[1.0625rem] text-charcoal-light leading-[1.75]">
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
