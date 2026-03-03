import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Badge from '@/components/Badge';

export const metadata: Metadata = { title: 'Features — PreCalIQ' };

const features = [
  {
    title: 'AI Specification Parsing',
    description: 'Upload spec PDFs and PreCalIQ reads every section — identifying manufacturers, materials, finishes, fire ratings, hardware sets, and standards. Specs are organized by CSI division and cross-referenced during takeoff generation.',
    badge: 'AI Core',
    stage: 'Input',
  },
  {
    title: 'Architectural Plan Analysis',
    description: 'Upload architectural plans and PreCalIQ classifies sheets (door schedules, finish schedules, floor plans), extracts door and room data, and combines plan data with specs for complete takeoffs.',
    badge: 'AI Core',
    stage: 'Input',
  },
  {
    title: '15-Category Takeoffs',
    description: 'Generate takeoffs for doors, millwork, cabinets, flooring, storefront, ceiling systems, painting, waterproofing, roofing, MEP rough-ins, structural steel, windows, specialty hardware, corner guards, and bumper rails.',
    badge: 'Takeoffs',
    stage: 'Processing',
  },
  {
    title: 'Multi-Option Variants',
    description: 'Generate Standard, Premium, and Budget options for any takeoff. AI swaps materials, manufacturers, and finishes while preserving quantities and locations. Compare options side-by-side.',
    badge: 'Takeoffs',
    stage: 'Processing',
  },
  {
    title: 'Vendor Portal & Pricing',
    description: 'Invite vendors, send takeoffs for pricing, and collect quotes through a secure portal. No vendor login required — just a secure link. Vendor pricing is automatically parsed and matched to takeoff items.',
    badge: 'Collaboration',
    stage: 'Bidding',
  },
  {
    title: 'Collaborative Bid Builder',
    description: 'Create bid sessions, select variant options per category, and watch totals update in real-time. Every selection change is logged with user, timestamp, and cost delta.',
    badge: 'Collaboration',
    stage: 'Bidding',
  },
  {
    title: 'Bid Document Generation',
    description: 'Generate professional PDF bid proposals and Excel workbooks with one click. Include company branding, scope of work, cost breakdowns, terms, and signature lines.',
    badge: 'Output',
    stage: 'Delivery',
  },
  {
    title: 'Change Order Detection',
    description: 'Upload a revised spec or plan and PreCalIQ compares it to the original, identifying additions, removals, and modifications. Each change includes estimated cost impact.',
    badge: 'AI Core',
    stage: 'Ongoing',
  },
  {
    title: 'Excel Export',
    description: 'Export single takeoffs, multi-category workbooks, variant comparisons, and full bid packages to professionally formatted Excel files — ready for submission or further analysis.',
    badge: 'Output',
    stage: 'Delivery',
  },
];

const badgeVariant = (badge: string) => {
  if (badge === 'AI Core') return 'navy' as const;
  if (badge === 'Takeoffs') return 'amber' as const;
  return 'default' as const;
};

export default function FeaturesPage() {
  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="text-center py-8 md:py-12">
        <AnimatedReveal direction="fade">
          <SectionLabel light>Platform</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tight">Features</h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to go from specs and plans to a winning bid.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Features list — alternating */}
      <Section bg="white" wide>
        <div className="space-y-16">
          {features.map((feature, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimatedReveal key={i} direction={isEven ? 'right' : 'left'} delay={50}>
                <div className={`flex flex-col md:flex-row items-start gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 bg-navy text-white rounded-2xl font-bold text-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge variant={badgeVariant(feature.badge)}>{feature.badge}</Badge>
                      <Badge>{feature.stage}</Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-charcoal">{feature.title}</h2>
                    <p className="mt-3 text-charcoal-light leading-relaxed text-[1.0625rem]">{feature.description}</p>
                  </div>
                </div>
              </AnimatedReveal>
            );
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-cream-dark via-cream to-cream-dark">
        <AnimatedReveal direction="up" className="text-center">
          <SectionLabel>Ready?</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal">See PreCalIQ in Action</h2>
          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
