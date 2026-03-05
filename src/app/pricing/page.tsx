import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Accordion from '@/components/Accordion';
import DeviceFrame from '@/components/DeviceFrame';
import ScrollPerspective from '@/components/ScrollPerspective';
import FloatingScreenshot from '@/components/FloatingScreenshot';
import AuroraBackground from '@/components/AuroraBackground';
import { BidBuilderMockup } from '@/components/AppMockup';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Precaliq pricing: Free plan for one project, Professional at $299/month for unlimited projects and 15 categories, Enterprise with custom pricing. Start free, no credit card required.',
  alternates: { canonical: 'https://precaliq.com/pricing' },
};

const tiers = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Try Precaliq on a single project — no credit card required.',
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
    cta: 'Upgrade to Pro',
    href: 'https://app.precaliq.com/settings/billing',
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
    question: 'Can I try Precaliq before committing?',
    answer: "Yes. The Free plan lets you test Precaliq on one project with three takeoff categories — no credit card required. When you're ready for more, upgrade to Professional with a 14-day free trial.",
  },
  {
    question: 'What counts as a "project"?',
    answer: 'A project corresponds to a single construction bid or job. Each project can contain multiple spec documents, plan sets, takeoffs, vendor quotes, and bid sessions.',
  },
  {
    question: 'How does vendor pricing work?',
    answer: 'You send takeoff line items to vendors through a secure, tokenized link. Vendors download the Excel file, add their pricing, and upload it back — no account required. Precaliq parses the pricing and matches it to your takeoff items automatically.',
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
    question: 'What file formats does Precaliq accept?',
    answer: 'Precaliq accepts PDF files for both specifications and architectural plans. Vendor pricing uploads are accepted as Excel (.xlsx) files.',
  },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden pb-24 md:pb-36" style={{ background: '#0A0A1A' }}>
        <AuroraBackground />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24 md:pt-36 pb-8">
          <AnimatedReveal direction="fade">
            <SectionLabel light>Pricing</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              Simple, <span className="text-gradient">transparent</span> pricing
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={180}>
            <p className="mt-6 text-[1.125rem] text-blue-100/50 max-w-lg mx-auto leading-relaxed">
              Start free. Scale as your team wins more bids.
            </p>
          </AnimatedReveal>
        </div>

        <div className="relative z-10 max-w-md mx-auto px-6">
          <ScrollPerspective>
            <FloatingScreenshot glow>
              <DeviceFrame glow dark>
                <BidBuilderMockup />
              </DeviceFrame>
            </FloatingScreenshot>
          </ScrollPerspective>
        </div>
      </section>

      {/* Tiers */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-snow">
        {/* Floating decorative particles */}
        <div className="absolute top-[30%] right-[8%] w-2 h-2 rounded-full particle-1 pointer-events-none" style={{ background: 'rgba(37,99,235,0.1)' }} />
        <div className="absolute bottom-[20%] left-[12%] w-2.5 h-2.5 rounded-full particle-3 pointer-events-none" style={{ background: 'rgba(96,165,250,0.08)' }} />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {tiers.map((tier, i) => (
              <AnimatedReveal key={tier.name} direction="up" delay={i * 120}>
                <div
                  className={`pricing-card relative rounded-2xl bg-white ${tier.highlight ? 'ring-2 ring-accent pricing-highlight' : 'ring-1 ring-border shadow-card'}`}
                >
                  <div className="relative rounded-2xl p-8 flex flex-col h-full">
                    {tier.highlight && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-semibold px-5 py-1.5 rounded-full shadow-lg btn-shimmer" style={{ background: 'linear-gradient(135deg, #2563EB, #3B82F6)' }}>
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
                          <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(96,165,250,0.05))' }}>
                            <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
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
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-36 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-light pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <AnimatedReveal direction="up" className="text-center mb-14">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight">Common Questions</h2>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={100}>
            <div className="max-w-3xl mx-auto">
              <Accordion items={faqs} />
            </div>
          </AnimatedReveal>
        </div>
      </section>
      {/* FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
