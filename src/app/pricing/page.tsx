import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import DeviceFrame from '@/components/DeviceFrame';
import { BidBuilderMockup } from '@/components/AppMockup';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'PreCalIQ pricing: Free plan for one project, Professional at $299/month for unlimited projects and 15 categories, Enterprise with custom pricing. Start free, no credit card required.',
  alternates: { canonical: 'https://precaliq.com/pricing' },
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try PreCalIQ on a single project — no credit card required.',
    features: [
      '1 active project',
      '3 takeoff categories',
      'Standard variant only',
      'Excel export',
      'Community support',
    ],
    cta: 'Get Started Free',
    href: 'https://app.precaliq.com/register',
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$299',
    period: '/month',
    description: 'Full platform for growing GCs and estimating teams.',
    features: [
      'Unlimited projects',
      'All 15 takeoff categories',
      'Multi-option variants',
      'Vendor portal & pricing',
      'Collaborative bid builder',
      'PDF & Excel bid documents',
      'Change order detection',
      'Priority email support',
      'Up to 10 team members',
    ],
    cta: 'Start 14-Day Trial',
    href: '/contact',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large contractors with advanced needs.',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'SSO / SAML authentication',
      'Custom integrations (ERP, accounting)',
      'Dedicated account manager',
      'On-premise deployment option',
      'Custom AI model training',
      'SLA with 99.9% uptime',
    ],
    cta: 'Contact Sales',
    href: '/contact',
    highlight: false,
  },
];

const faqs = [
  {
    question: 'Can I try PreCalIQ before committing?',
    answer: "Yes. The Free plan lets you test PreCalIQ on one project with three takeoff categories — no credit card required. When you're ready for more, upgrade to Professional with a 14-day free trial.",
  },
  {
    question: 'What counts as a "project"?',
    answer: 'A project corresponds to a single construction bid or job. Each project can contain multiple spec documents, plan sets, takeoffs, vendor quotes, and bid sessions.',
  },
  {
    question: 'How does vendor pricing work?',
    answer: 'You send takeoff line items to vendors through a secure, tokenized link. Vendors download the Excel file, add their pricing, and upload it back — no account required. PreCalIQ parses the pricing and matches it to your takeoff items automatically.',
  },
  {
    question: 'Can I add more team members on the Professional plan?',
    answer: 'Professional includes up to 10 team members. If you need more, contact us about the Enterprise plan, which supports unlimited users.',
  },
  {
    question: 'Do you offer annual billing?',
    answer: 'Yes. Annual billing saves 20% — $239/month billed annually ($2,868/year) instead of $299/month.',
  },
  {
    question: 'What file formats does PreCalIQ accept?',
    answer: 'PreCalIQ accepts PDF files for both specifications and architectural plans. Vendor pricing uploads are accepted as Excel (.xlsx) files.',
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal direction="fade">
            <SectionLabel>Pricing</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-charcoal">
              Simple, <span className="text-gradient">transparent</span> pricing
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={180}>
            <p className="mt-6 text-[1.125rem] text-graphite max-w-lg mx-auto leading-relaxed">
              Start free. Scale as your team wins more bids.
            </p>
          </AnimatedReveal>
          <AnimatedReveal direction="scale" delay={300}>
            <div className="mt-12 max-w-md mx-auto screenshot-float rounded-2xl overflow-hidden shadow-xl ring-1 ring-border">
              <DeviceFrame>
                <BidBuilderMockup />
              </DeviceFrame>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Tiers */}
      <Section bg="snow" wide>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <AnimatedReveal key={tier.name} direction="up" delay={i * 100}>
              <div
                className={`relative rounded-2xl ${tier.highlight ? 'ring-2 ring-accent shadow-accent' : 'ring-1 ring-border shadow-sm'}`}
              >
                <div
                  className={`relative rounded-2xl p-8 flex flex-col h-full bg-white transition-all duration-400 ${
                    !tier.highlight ? 'hover:shadow-md hover:-translate-y-1' : ''
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-5 py-1.5 rounded-full bg-accent shadow-accent">
                      Most Popular
                    </div>
                  )}
                  <h2 className="text-xl font-bold text-charcoal">{tier.name}</h2>
                  <div className="mt-5">
                    <span className="text-4xl font-extrabold text-charcoal tracking-tight">{tier.price}</span>
                    {tier.period && <span className="text-slate ml-1 text-sm">{tier.period}</span>}
                  </div>
                  <p className="mt-3 text-graphite text-sm leading-relaxed">{tier.description}</p>

                  <ul className="mt-8 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-graphite">
                        <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Button
                      href={tier.href}
                      variant={tier.highlight ? 'primary' : 'secondary'}
                      className="w-full"
                    >
                      {tier.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>

        <AnimatedReveal direction="fade" delay={400}>
          <p className="text-center text-sm text-slate mt-10">
            Save 20% with annual billing — <span className="text-charcoal font-medium">$239/month</span> billed annually.
          </p>
        </AnimatedReveal>
      </Section>

      {/* FAQ */}
      <Section bg="white">
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight">Common Questions</h2>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </AnimatedReveal>
      </Section>
    </div>
  );
}
