import type { Metadata } from 'next';

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
    q: 'Can I try PreCalIQ before committing?',
    a: "Yes. The Free plan lets you test PreCalIQ on one project with three takeoff categories — no credit card required. When you're ready for more, upgrade to Professional with a 14-day free trial.",
  },
  {
    q: 'What counts as a "project"?',
    a: 'A project corresponds to a single construction bid or job. Each project can contain multiple spec documents, plan sets, takeoffs, vendor quotes, and bid sessions.',
  },
  {
    q: 'How does vendor pricing work?',
    a: 'You send takeoff line items to vendors through a secure, tokenized link. Vendors download the Excel file, add their pricing, and upload it back — no account required. PreCalIQ parses the pricing and matches it to your takeoff items automatically.',
  },
  {
    q: 'Can I add more team members on the Professional plan?',
    a: 'Professional includes up to 10 team members. If you need more, contact us about the Enterprise plan, which supports unlimited users.',
  },
  {
    q: 'Do you offer annual billing?',
    a: 'Yes. Annual billing saves 20% — $239/month billed annually ($2,868/year) instead of $299/month.',
  },
  {
    q: 'What file formats does PreCalIQ accept?',
    a: 'PreCalIQ accepts PDF files for both specifications and architectural plans. Vendor pricing uploads are accepted as Excel (.xlsx) files.',
  },
];

export default function PricingPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Start free and scale as your team wins more bids.
        </p>

        {/* Tiers */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-xl border p-8 flex flex-col ${
                tier.highlight ? 'border-[#1F4E79] ring-2 ring-[#1F4E79] relative' : ''
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1F4E79] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900">{tier.name}</h2>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                {tier.period && <span className="text-gray-500 ml-1">{tier.period}</span>}
              </div>
              <p className="mt-3 text-gray-600 text-sm">{tier.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#1F4E79] font-bold mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                className={`mt-8 block text-center px-6 py-3 rounded-lg font-medium transition ${
                  tier.highlight
                    ? 'bg-[#1F4E79] text-white hover:bg-[#163a5c]'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
