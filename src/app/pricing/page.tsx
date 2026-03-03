import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = { title: 'Pricing — PreCalIQ' };

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try PreCalIQ on a single project with limited features.',
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
    description: 'Full-featured platform for growing GCs and estimating teams.',
    features: [
      'Unlimited projects',
      'All 15 takeoff categories',
      'Multi-option variants (Standard, Premium, Budget)',
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
    description: 'For large contractors with advanced security and integration needs.',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'SSO / SAML authentication',
      'Custom integrations (ERP, accounting)',
      'Dedicated account manager',
      'On-premise deployment option',
      'Custom AI model training',
      'SLA with 99.9% uptime guarantee',
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
      <Section bg="gradient" className="text-center py-8 md:py-12">
        <AnimatedReveal direction="fade">
          <SectionLabel light>Pricing</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tight">
            Simple, <span className="text-gradient-amber">Transparent</span> Pricing
          </h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Start free and scale as your team wins more bids.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Tiers */}
      <Section bg="white" wide>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <AnimatedReveal key={tier.name} direction="up" delay={i * 100}>
              <div className={`relative rounded-2xl ${tier.highlight ? 'p-px bg-gradient-to-br from-navy via-amber to-navy-light' : ''}`}>
                <div
                  className={`relative rounded-2xl p-8 flex flex-col h-full bg-surface transition-all duration-300 hover:-translate-y-1 ${
                    tier.highlight
                      ? 'shadow-card-hover'
                      : 'ring-1 ring-border-subtle shadow-card hover:shadow-card-hover'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-navy to-navy-light text-white text-xs font-semibold px-5 py-1.5 rounded-full shadow-glow">
                      Most Popular
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-charcoal">{tier.name}</h2>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-charcoal tracking-tight">{tier.price}</span>
                    {tier.period && <span className="text-charcoal-light ml-1">{tier.period}</span>}
                  </div>
                  <p className="mt-3 text-charcoal-light text-sm leading-relaxed">{tier.description}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-charcoal-light">
                        <svg className="w-4 h-4 text-navy mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
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
      </Section>

      {/* FAQ */}
      <Section bg="cream">
        <AnimatedReveal direction="up" className="text-center mb-12">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight">Frequently Asked Questions</h2>
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
