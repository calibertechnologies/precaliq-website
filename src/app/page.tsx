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

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="text-center py-8 md:py-12">
        <AnimatedReveal direction="fade">
          <SectionLabel light>AI-Powered Preconstruction</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold leading-[1.08] tracking-tight">
            Preconstruction,<br />
            <span className="text-amber">Reimagined</span> with AI
          </h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={250}>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            PreCalIQ automates material takeoffs from specs and plans, generates multi-option bids, manages vendor pricing, and detects change orders — so your team can bid faster, smarter, and more accurately.
          </p>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={400}>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary-light">
              Request a Demo
            </Button>
            <Button href="/features" variant="secondary" className="bg-white/10 text-white ring-white/20 hover:bg-white/20 hover:text-white">
              See Features
            </Button>
          </div>
        </AnimatedReveal>
      </Section>

      {/* Problem */}
      <Section bg="cream-dark">
        <AnimatedReveal direction="up" className="text-center">
          <SectionLabel>The Challenge</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">The Problem with Manual Estimating</h2>
          <p className="mt-5 text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Construction estimators spend 60% of their time reading specifications and counting items — work that is tedious, error-prone, and expensive. A single missed spec reference can cost $50,000 or more in rework.
          </p>
        </AnimatedReveal>
      </Section>

      {/* 3 Differentiators */}
      <Section bg="white" wide>
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>Why PreCalIQ</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">Why Teams Choose PreCalIQ</h2>
        </AnimatedReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'AI-Powered Takeoffs',
              description: 'Upload specs and plans. PreCalIQ reads every page, cross-references CSI codes, and generates structured takeoffs in minutes — not days.',
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
            <AnimatedReveal key={i} direction="up" delay={i * 100}>
              <Card className="p-8 h-full">
                <h3 className="text-xl font-bold text-charcoal">{item.title}</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">{item.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* How it Works — Timeline */}
      <Section bg="cream" wide>
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">Four Steps to a Winning Bid</h2>
        </AnimatedReveal>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-0.5 bg-border-subtle" aria-hidden="true" />
          {[
            { step: '1', title: 'Upload Documents', desc: 'Upload spec PDFs and architectural plans. PreCalIQ parses every section and classifies drawings automatically.' },
            { step: '2', title: 'Generate Takeoffs', desc: 'Select categories (doors, flooring, MEP, etc.) and PreCalIQ generates detailed material takeoffs with AI — cross-referencing specs and plans.' },
            { step: '3', title: 'Build Your Bid', desc: 'Choose variants per category, add vendor pricing, and generate professional bid documents in PDF or Excel.' },
            { step: '4', title: 'Track Changes', desc: 'When revisions come in, PreCalIQ detects what changed, estimates cost impact, and helps you issue change orders.' },
          ].map((item, i) => (
            <AnimatedReveal key={item.step} direction="up" delay={i * 120}>
              <div className="text-center relative">
                <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto relative z-10 ring-4 ring-cream">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-charcoal mt-5">{item.title}</h3>
                <p className="text-charcoal-light mt-2 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Competitor Comparison */}
      <Section bg="white">
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>Comparison</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">PreCalIQ vs. Traditional Tools</h2>
        </AnimatedReveal>
        <AnimatedReveal direction="scale" delay={100}>
          <Card hover={false} className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-cream">
                    <th className="text-left py-4 px-6 font-semibold text-charcoal">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-navy">PreCalIQ</th>
                    <th className="text-center py-4 px-6 font-semibold text-charcoal-light">PlanSwift</th>
                    <th className="text-center py-4 px-6 font-semibold text-charcoal-light">Bluebeam</th>
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
                    <tr key={i} className="border-t border-border-subtle">
                      <td className="py-3.5 px-6 text-charcoal font-medium">{feature as string}</td>
                      <td className="text-center py-3.5 px-6">
                        {b ? <span className="text-navy font-bold text-base">&#10003;</span> : <span className="text-charcoal-light/40">—</span>}
                      </td>
                      <td className="text-center py-3.5 px-6">
                        {p ? <span className="text-charcoal-light font-bold text-base">&#10003;</span> : <span className="text-charcoal-light/40">—</span>}
                      </td>
                      <td className="text-center py-3.5 px-6">
                        {bb ? <span className="text-charcoal-light font-bold text-base">&#10003;</span> : <span className="text-charcoal-light/40">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </AnimatedReveal>
      </Section>

      {/* Stats */}
      <Section bg="navy" wide>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-cream-dark via-cream to-cream-dark">
        <AnimatedReveal direction="up" className="text-center">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">Ready to Transform Your Preconstruction?</h2>
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
