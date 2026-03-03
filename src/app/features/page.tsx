import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Explore PreCalIQ features: AI specification parsing, automated takeoffs across 15 categories, multi-option bid variants, vendor pricing portal, change order detection, and bid document generation.',
  alternates: { canonical: 'https://precaliq.com/features' },
};

const featureGroups = [
  {
    label: 'Input',
    headline: 'Upload. We read everything.',
    features: [
      {
        title: 'AI Specification Parsing',
        description: 'Upload spec PDFs and PreCalIQ reads every section — identifying manufacturers, materials, finishes, fire ratings, hardware sets, and CSI codes automatically.',
        detail: 'Supports 200+ page specification documents. Extracts data from all CSI divisions.',
      },
      {
        title: 'Architectural Plan Analysis',
        description: 'Upload plans and PreCalIQ classifies sheets (door schedules, finish schedules, floor plans), extracts schedules, and combines plan data with specs.',
        detail: 'AI vision reads complex tables, ditto marks, and multi-page schedules.',
      },
    ],
  },
  {
    label: 'Processing',
    headline: 'Generate. With precision.',
    features: [
      {
        title: '15-Category Takeoffs',
        description: 'Generate detailed takeoffs for doors, millwork, cabinets, flooring, storefront, ceiling systems, painting, waterproofing, roofing, MEP, structural steel, windows, and more.',
        detail: 'Each category has dedicated AI prompts tuned for construction accuracy.',
      },
      {
        title: 'Multi-Option Variants',
        description: 'Automatically generate Standard, Premium, and Budget options for any takeoff. AI swaps materials and manufacturers while preserving quantities and locations.',
        detail: 'Compare options side-by-side with instant cost deltas.',
      },
    ],
  },
  {
    label: 'Collaboration',
    headline: 'Price. Together.',
    features: [
      {
        title: 'Vendor Portal & Pricing',
        description: 'Send takeoffs to vendors through a secure, tokenized link. Vendors download the Excel, add pricing, and upload back — no account required.',
        detail: 'AI parses vendor pricing and matches it to your takeoff items automatically.',
      },
      {
        title: 'Collaborative Bid Builder',
        description: 'Create bid sessions, select variant options per category, and watch totals update in real-time. Every selection change is logged.',
        detail: 'Track user, timestamp, and cost impact for every bid modification.',
      },
    ],
  },
  {
    label: 'Output',
    headline: 'Deliver. Professionally.',
    features: [
      {
        title: 'Bid Document Generation',
        description: 'Generate professional PDF bid proposals and Excel workbooks with company branding, scope of work, cost breakdowns, terms, and signature lines.',
        detail: 'Bid versioning tracks V1, V2, V3 — send directly to clients from PreCalIQ.',
      },
      {
        title: 'Change Order Detection',
        description: 'Upload revised specs or plans. PreCalIQ compares against originals, identifying additions, removals, and modifications with estimated cost impact.',
        detail: 'Integrates with bid builder to show how revisions affect your current bid.',
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="text-center py-10 md:py-16">
        <AnimatedReveal direction="fade">
          <SectionLabel light>Platform</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={80}>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Everything you need to<br className="hidden sm:block" />
            <span className="text-gradient-amber">win more bids</span>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={180}>
          <p className="mt-6 text-[1.125rem] text-white/45 max-w-xl mx-auto leading-relaxed">
            From specification parsing to bid delivery — a complete preconstruction workflow, powered by AI.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Feature Groups */}
      {featureGroups.map((group, gi) => (
        <Section key={group.label} bg={gi % 2 === 0 ? 'white' : 'cream'} wide dots={gi === 0}>
          <AnimatedReveal direction="up" className="mb-14">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber">{group.label}</span>
              <div className="flex-1 h-px bg-border-subtle" />
            </div>
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">{group.headline}</h2>
          </AnimatedReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {group.features.map((feature, fi) => (
              <AnimatedReveal key={fi} direction="up" delay={fi * 100}>
                <Card className="p-8 h-full group" glow>
                  <h3 className="text-lg font-bold text-charcoal leading-snug">{feature.title}</h3>
                  <p className="mt-4 text-charcoal-light leading-relaxed">{feature.description}</p>
                  <p className="mt-4 text-sm text-charcoal-muted leading-relaxed border-t border-border-subtle pt-4">
                    {feature.detail}
                  </p>
                </Card>
              </AnimatedReveal>
            ))}
          </div>
        </Section>
      ))}

      {/* Excel Export standalone callout */}
      <Section bg="cream-dark">
        <AnimatedReveal direction="scale">
          <div className="relative rounded-2xl p-px overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(31,78,121,0.2), rgba(200,150,78,0.2), rgba(31,78,121,0.2))' }}>
            <div className="bg-surface rounded-2xl p-10 md:p-14 text-center">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-amber">Export</span>
              <h3 className="mt-4 text-2xl font-extrabold text-charcoal">Excel-native output</h3>
              <p className="mt-4 text-charcoal-light max-w-lg mx-auto leading-relaxed">
                Every takeoff, variant comparison, and bid package exports to professionally formatted Excel workbooks — ready for submission or further analysis.
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 px-6 bg-cream">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <AnimatedReveal direction="up" className="text-center relative z-10">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal">See PreCalIQ in action</h2>
          <p className="mt-4 text-charcoal-light">Book a 30-minute demo with your own spec documents.</p>
          <div className="mt-8">
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
