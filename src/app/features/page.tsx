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
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Architectural Plan Analysis',
    description: 'Upload architectural plans and PreCalIQ classifies sheets (door schedules, finish schedules, floor plans), extracts door and room data, and combines plan data with specs for complete takeoffs.',
    badge: 'AI Core',
    stage: 'Input',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
      </svg>
    ),
  },
  {
    title: '15-Category Takeoffs',
    description: 'Generate takeoffs for doors, millwork, cabinets, flooring, storefront, ceiling systems, painting, waterproofing, roofing, MEP rough-ins, structural steel, windows, specialty hardware, corner guards, and bumper rails.',
    badge: 'Takeoffs',
    stage: 'Processing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Option Variants',
    description: 'Generate Standard, Premium, and Budget options for any takeoff. AI swaps materials, manufacturers, and finishes while preserving quantities and locations. Compare options side-by-side.',
    badge: 'Takeoffs',
    stage: 'Processing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: 'Vendor Portal & Pricing',
    description: 'Invite vendors, send takeoffs for pricing, and collect quotes through a secure portal. No vendor login required — just a secure link. Vendor pricing is automatically parsed and matched to takeoff items.',
    badge: 'Collaboration',
    stage: 'Bidding',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: 'Collaborative Bid Builder',
    description: 'Create bid sessions, select variant options per category, and watch totals update in real-time. Every selection change is logged with user, timestamp, and cost delta.',
    badge: 'Collaboration',
    stage: 'Bidding',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Bid Document Generation',
    description: 'Generate professional PDF bid proposals and Excel workbooks with one click. Include company branding, scope of work, cost breakdowns, terms, and signature lines.',
    badge: 'Output',
    stage: 'Delivery',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Change Order Detection',
    description: 'Upload a revised spec or plan and PreCalIQ compares it to the original, identifying additions, removals, and modifications. Each change includes estimated cost impact.',
    badge: 'AI Core',
    stage: 'Ongoing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
  },
  {
    title: 'Excel Export',
    description: 'Export single takeoffs, multi-category workbooks, variant comparisons, and full bid packages to professionally formatted Excel files — ready for submission or further analysis.',
    badge: 'Output',
    stage: 'Delivery',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
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
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tight">
            Everything You Need to <span className="text-gradient-amber">Win Bids</span>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to go from specs and plans to a winning bid.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Features grid */}
      <Section bg="white" wide>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <AnimatedReveal key={i} direction="up" delay={i * 60}>
              <Card className="p-7 h-full group" glow>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy/10 to-amber/5 flex items-center justify-center text-navy shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant={badgeVariant(feature.badge)}>{feature.badge}</Badge>
                      <Badge>{feature.stage}</Badge>
                    </div>
                    <h2 className="text-lg font-bold text-charcoal leading-snug">{feature.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-charcoal-light leading-relaxed text-sm">{feature.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-cream to-cream-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal direction="up" className="text-center relative z-10">
          <SectionLabel>Ready?</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal">See PreCalIQ in Action</h2>
          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
