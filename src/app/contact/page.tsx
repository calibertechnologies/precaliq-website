import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Card from '@/components/Card';
import Accordion from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Request a demo of PreCalIQ. See how AI-powered preconstruction can transform your estimating workflow. We respond within one business day.',
  alternates: { canonical: 'https://precaliq.com/contact' },
};

const faqs = [
  {
    question: 'How long does a demo take?',
    answer: 'Most demos run 30 minutes. We walk through your workflow, show PreCalIQ on a real spec, and answer questions.',
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
    answer: 'Most teams are generating their first takeoff within 15 minutes of signing up. There\'s nothing to install — PreCalIQ runs in your browser.',
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="text-center py-10 md:py-16">
        <AnimatedReveal direction="fade">
          <SectionLabel light>Contact</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={80}>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Request a Demo
          </h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={180}>
          <p className="mt-6 text-[1.125rem] text-white/45 max-w-xl mx-auto leading-relaxed">
            See how PreCalIQ can transform your preconstruction workflow.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Form + FAQ */}
      <Section bg="white" wide>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <AnimatedReveal direction="right">
            <Card hover={false} className="p-8">
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-1.5">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-cream ring-1 ring-border-subtle rounded-xl focus:ring-2 focus:ring-navy focus:bg-surface outline-none transition-all text-charcoal placeholder:text-charcoal-muted/50"
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
                    className="w-full px-4 py-3 bg-cream ring-1 ring-border-subtle rounded-xl focus:ring-2 focus:ring-navy focus:bg-surface outline-none transition-all text-charcoal placeholder:text-charcoal-muted/50"
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
                    className="w-full px-4 py-3 bg-cream ring-1 ring-border-subtle rounded-xl focus:ring-2 focus:ring-navy focus:bg-surface outline-none transition-all text-charcoal placeholder:text-charcoal-muted/50"
                    placeholder="Acme Construction"
                  />
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-charcoal mb-1.5">Role</label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-3 bg-cream ring-1 ring-border-subtle rounded-xl focus:ring-2 focus:ring-navy focus:bg-surface outline-none transition-all text-charcoal"
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
                    Tell us about your workflow <span className="font-normal text-charcoal-muted">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-cream ring-1 ring-border-subtle rounded-xl focus:ring-2 focus:ring-navy focus:bg-surface outline-none transition-all resize-none text-charcoal placeholder:text-charcoal-muted/50"
                    placeholder="What types of projects do you bid on? What tools do you currently use?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 text-white rounded-xl text-[0.9375rem] font-semibold transition-all duration-300 shadow-md hover:shadow-glow cursor-pointer shimmer-hover"
                  style={{ background: 'linear-gradient(135deg, #1F4E79, #2A6399)' }}
                >
                  Request Demo
                </button>
                <p className="text-xs text-charcoal-muted text-center">
                  We&apos;ll respond within one business day. No spam, no obligations.
                </p>
              </form>
            </Card>
          </AnimatedReveal>

          {/* FAQ + Email */}
          <div>
            <AnimatedReveal direction="left">
              <h2 className="text-xl font-bold text-charcoal mb-6">Common Questions</h2>
              <Accordion items={faqs} />
            </AnimatedReveal>

            <AnimatedReveal direction="left" delay={200}>
              <Card hover={false} className="mt-8 p-6">
                <h3 className="font-bold text-charcoal">Prefer email?</h3>
                <p className="mt-2 text-charcoal-light text-sm">
                  Reach us directly at{' '}
                  <a href="mailto:hello@precaliq.com" className="text-navy hover:text-navy-light underline underline-offset-2 transition-colors">
                    hello@precaliq.com
                  </a>
                </p>
              </Card>
            </AnimatedReveal>
          </div>
        </div>
      </Section>
    </div>
  );
}
