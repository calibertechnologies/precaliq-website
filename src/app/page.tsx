import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';
import StatCard from '@/components/StatCard';

export const metadata: Metadata = {
  title: 'PreCalIQ — AI-Powered Preconstruction Platform',
};

const icons = {
  ai: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
  options: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  vendor: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
};

export default function HomePage() {
  return (
    <div>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1E33] via-navy-dark to-[#0F2D47] text-white hero-mesh">
        {/* Decorative floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-amber/10 rounded-full blur-3xl animate-float-slow pointer-events-none" />
        <div className="absolute bottom-10 right-[15%] w-96 h-96 bg-navy-light/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <AnimatedReveal direction="fade">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-white/80 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse-glow" />
              AI-Powered Preconstruction Platform
            </div>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-[4.75rem] font-extrabold leading-[1.05] tracking-tight">
              Preconstruction,<br />
              <span className="text-gradient-amber">Reimagined</span> with AI
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={250}>
            <p className="mt-7 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              PreCalIQ automates material takeoffs from specs and plans, generates multi-option bids, manages vendor pricing, and detects change orders — so your team can bid faster, smarter, and more accurately.
            </p>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={400}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary-light">
                Request a Demo
              </Button>
              <Button href="/features" variant="secondary" className="bg-white/5 text-white ring-white/15 hover:bg-white/10 hover:text-white hover:ring-white/25">
                See Features
              </Button>
            </div>
          </AnimatedReveal>

          {/* Trust bar */}
          <AnimatedReveal direction="fade" delay={600}>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-xs text-white/30 font-medium">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-amber/60" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                SOC 2 Compliant
              </span>
              <span className="w-px h-3 bg-white/15" />
              <span>No credit card required</span>
              <span className="w-px h-3 bg-white/15" />
              <span>Setup in 15 minutes</span>
              <span className="w-px h-3 bg-white/15" />
              <span>Cancel anytime</span>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ============ PROBLEM ============ */}
      <Section bg="cream-dark">
        <AnimatedReveal direction="up" className="text-center">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-tight">The Problem with Manual Estimating</h2>
          <p className="mt-6 text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Construction estimators spend 60% of their time reading specifications and counting items — work that is tedious, error-prone, and expensive. A single missed spec reference can cost <span className="text-amber font-semibold">$50,000</span> or more in rework.
          </p>
        </AnimatedReveal>
      </Section>

      {/* ============ 3 DIFFERENTIATORS ============ */}
      <Section bg="white" wide>
        <AnimatedReveal direction="up" className="text-center mb-16">
          <SectionLabel>Why PreCalIQ</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-tight">Why Teams Choose PreCalIQ</h2>
        </AnimatedReveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: icons.ai,
              title: 'AI-Powered Takeoffs',
              description: 'Upload specs and plans. PreCalIQ reads every page, cross-references CSI codes, and generates structured takeoffs in minutes — not days.',
              gradient: 'from-navy/10 to-navy/5',
            },
            {
              icon: icons.options,
              title: 'Multi-Option Bids',
              description: 'Automatically generate Standard, Premium, and Budget variants. Compare options side-by-side and build competitive bids with one click.',
              gradient: 'from-amber/10 to-amber/5',
            },
            {
              icon: icons.vendor,
              title: 'Vendor & Change Management',
              description: 'Send takeoffs to vendors, collect pricing through a secure portal, and detect changes between document revisions automatically.',
              gradient: 'from-navy/10 to-amber/5',
            },
          ].map((item, i) => (
            <AnimatedReveal key={i} direction="up" delay={i * 120}>
              <Card className="p-8 h-full group" glow>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-navy mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">{item.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ============ HOW IT WORKS ============ */}
      <Section bg="cream" wide>
        <AnimatedReveal direction="up" className="text-center mb-16">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-tight">Four Steps to a Winning Bid</h2>
        </AnimatedReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-navy/20 via-amber/30 to-navy/20" aria-hidden="true" />
          {[
            { step: '1', title: 'Upload Documents', desc: 'Upload spec PDFs and architectural plans. PreCalIQ parses every section and classifies drawings automatically.' },
            { step: '2', title: 'Generate Takeoffs', desc: 'Select categories (doors, flooring, MEP, etc.) and PreCalIQ generates detailed material takeoffs with AI — cross-referencing specs and plans.' },
            { step: '3', title: 'Build Your Bid', desc: 'Choose variants per category, add vendor pricing, and generate professional bid documents in PDF or Excel.' },
            { step: '4', title: 'Track Changes', desc: 'When revisions come in, PreCalIQ detects what changed, estimates cost impact, and helps you issue change orders.' },
          ].map((item, i) => (
            <AnimatedReveal key={item.step} direction="up" delay={i * 120}>
              <div className="text-center relative group">
                <div className="w-16 h-16 bg-gradient-to-br from-navy to-navy-dark text-white rounded-2xl flex items-center justify-center text-lg font-bold mx-auto relative z-10 ring-4 ring-cream shadow-glow group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-charcoal mt-5">{item.title}</h3>
                <p className="text-charcoal-light mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ============ COMPARISON ============ */}
      <Section bg="white">
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>Comparison</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-tight">PreCalIQ vs. Traditional Tools</h2>
        </AnimatedReveal>
        <AnimatedReveal direction="scale" delay={100}>
          <Card hover={false} className="overflow-hidden ring-2 ring-border-subtle">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-cream to-cream-dark">
                    <th className="text-left py-4 px-6 font-semibold text-charcoal">Feature</th>
                    <th className="text-center py-4 px-6 font-bold text-navy">PreCalIQ</th>
                    <th className="text-center py-4 px-6 font-medium text-charcoal-light">PlanSwift</th>
                    <th className="text-center py-4 px-6 font-medium text-charcoal-light">Bluebeam</th>
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
                    <tr key={i} className="border-t border-border-subtle hover:bg-cream/50 transition-colors">
                      <td className="py-3.5 px-6 text-charcoal font-medium">{feature as string}</td>
                      <td className="text-center py-3.5 px-6">
                        {b ? (
                          <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-navy/10 text-navy">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                        ) : <span className="text-charcoal-light/30">—</span>}
                      </td>
                      <td className="text-center py-3.5 px-6">
                        {p ? (
                          <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-charcoal/5 text-charcoal-light">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                        ) : <span className="text-charcoal-light/30">—</span>}
                      </td>
                      <td className="text-center py-3.5 px-6">
                        {bb ? (
                          <span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-charcoal/5 text-charcoal-light">
                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          </span>
                        ) : <span className="text-charcoal-light/30">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </AnimatedReveal>
      </Section>

      {/* ============ STATS ============ */}
      <Section bg="navy" wide>
        {/* Decorative */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/0 via-amber/5 to-navy/0 pointer-events-none" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
          {[
            ['10x', 'Faster Takeoffs'],
            ['15', 'Takeoff Categories'],
            ['< 5 min', 'Per Category'],
            ['$0', 'Missed Specs'],
          ].map(([stat, label], i) => (
            <AnimatedReveal key={i} direction="up" delay={i * 100}>
              <StatCard value={stat} label={label} />
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden py-28 md:py-36 px-6">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-cream to-cream-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />

        <AnimatedReveal direction="up" className="text-center relative z-10">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-charcoal leading-tight">Ready to Transform Your Preconstruction?</h2>
          <p className="mt-5 text-lg text-charcoal-light max-w-xl mx-auto leading-relaxed">
            Join GCs who are winning more bids with AI-powered estimating.
          </p>
          <div className="mt-10">
            <Button href="/contact">
              Request a Demo
            </Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
