import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import SectionLabel from '@/components/SectionLabel';
import Accordion from '@/components/Accordion';
import AuroraBackground from '@/components/AuroraBackground';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a demo of PreCal-IQ. See how AI-powered preconstruction can transform your estimating workflow. We respond within one business day.',
  alternates: { canonical: 'https://precaliq.com/contact' },
};

const faqs = [
  {
    question: 'How long does a demo take?',
    answer: 'Most demos run 30 minutes. We walk through your workflow, show PreCal-IQ on a real spec, and answer questions.',
  },
  {
    question: 'Do I need to prepare anything?',
    answer: 'No preparation needed. If you have a spec PDF you\'d like us to demo with, we\'re happy to use it — but it\'s not required.',
  },
  {
    question: 'Is there a free plan?',
    answer: 'Yes. After the demo, you can start with the Free plan — one project, three categories, no credit card required.',
  },
  {
    question: 'How quickly can I be up and running?',
    answer: 'Most teams are generating their first takeoff within 15 minutes of signing up. There\'s nothing to install — PreCal-IQ runs in your browser.',
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6" style={{ background: '#0A0A1A' }}>
        <AuroraBackground />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedReveal direction="fade">
            <SectionLabel light>Contact</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              Request a Demo
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={180}>
            <p className="mt-6 text-[1.125rem] text-blue-100/50 max-w-xl mx-auto leading-relaxed">
              See how PreCal-IQ can transform your preconstruction workflow.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-snow">
        <div className="absolute top-[30%] left-[5%] w-2 h-2 rounded-full particle-2 pointer-events-none" style={{ background: 'rgba(37,99,235,0.08)' }} />
        <div className="absolute bottom-[20%] right-[8%] w-2.5 h-2.5 rounded-full particle-1 pointer-events-none" style={{ background: 'rgba(96,165,250,0.06)' }} />

        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedReveal direction="right">
              <div className="card-spotlight bg-white rounded-2xl ring-1 ring-border shadow-card p-8">
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1.5">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal placeholder:text-slate/50"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-1.5">Work Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal placeholder:text-slate/50"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-charcoal mb-1.5">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      autoComplete="organization"
                      className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal placeholder:text-slate/50"
                      placeholder="Acme Construction"
                    />
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-semibold text-charcoal mb-1.5">Role</label>
                    <select
                      id="role"
                      name="role"
                      className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all text-charcoal"
                    >
                      <option value="">Select your role</option>
                      <option value="estimator">Estimator</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="preconstruction-manager">Preconstruction Manager</option>
                      <option value="owner">Owner / Executive</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-1.5">
                      Tell us about your workflow <span className="font-normal text-slate">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-snow ring-1 ring-border rounded-xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all resize-none text-charcoal placeholder:text-slate/50"
                      placeholder="What types of projects do you bid on? What tools do you currently use?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 text-white rounded-xl text-[0.9375rem] font-semibold bg-accent hover:bg-accent-hover transition-all duration-300 shadow-sm hover:shadow-accent cursor-pointer btn-shimmer"
                  >
                    Request Demo
                  </button>
                  <p className="text-xs text-slate text-center">
                    We&apos;ll respond within one business day. No spam, no obligations.
                  </p>
                </form>
              </div>
            </AnimatedReveal>

            {/* FAQ + Email */}
            <div>
              <AnimatedReveal direction="left">
                <h2 className="text-xl font-bold text-charcoal mb-6">Common Questions</h2>
                <Accordion items={faqs} />
              </AnimatedReveal>

              <AnimatedReveal direction="left" delay={200}>
                <div className="card-spotlight card-glow-line bg-white rounded-2xl ring-1 ring-border shadow-card mt-8 p-6">
                  <h3 className="font-bold text-charcoal">Prefer email?</h3>
                  <p className="mt-2 text-graphite text-sm">
                    Reach us directly at{' '}
                    <a href="mailto:hello@precaliq.com" className="text-accent hover:text-accent-hover underline-animated transition-colors">
                      hello@precaliq.com
                    </a>
                  </p>
                </div>
              </AnimatedReveal>
            </div>
          </div>
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
