import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';

export const metadata: Metadata = { title: 'About — PreCalIQ' };

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="text-center py-8 md:py-12">
        <AnimatedReveal direction="fade">
          <SectionLabel light>Our Story</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tight">About PreCalIQ</h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            The IQ behind your precon.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Why PreCalIQ */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <SectionLabel>Mission</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight mb-6">Why PreCalIQ?</h2>
          <p className="text-charcoal-light leading-relaxed text-[1.0625rem]">
            In construction, the difference between a winning bid and a losing one comes down to
            calibration — getting the quantities, specs, and costs dialed in with precision.
            PreCalIQ was built because we believe AI can bring a new level of intelligence to
            this process. We&apos;re not replacing estimators — we&apos;re giving them superhuman
            accuracy by reading every spec section, interpreting every plan sheet, and generating
            takeoffs that are calibrated to win.
          </p>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <div className="mt-10 bg-cream-dark rounded-2xl p-8 border-l-4 border-amber">
            <p className="text-lg text-charcoal italic leading-relaxed">
              &ldquo;AI won&apos;t replace construction estimators — but estimators who use AI will replace
              those who don&apos;t.&rdquo;
            </p>
          </div>
        </AnimatedReveal>
      </Section>

      {/* The Name */}
      <Section bg="cream" wide>
        <AnimatedReveal direction="up" className="text-center mb-12">
          <SectionLabel>Brand</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">The Name</h2>
          <p className="mt-4 text-charcoal-light max-w-2xl mx-auto leading-relaxed text-[1.0625rem]">
            PreCalIQ brings intelligence to preconstruction. The name says exactly what we do — we
            calibrate the precon process with AI, turning specs and plans into accurate, bid-ready
            takeoffs in minutes instead of days.
          </p>
        </AnimatedReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              syllable: 'Pre',
              meaning: 'Preconstruction',
              description: 'Every GC, estimator, and project exec knows "precon" is the phase that determines whether a project succeeds or fails. It\'s the most critical and underserved phase in construction.',
            },
            {
              syllable: 'Cal',
              meaning: 'Calibration',
              description: 'In construction, calibration means precision — getting quantities right, specs aligned, costs accurate. It also ties directly back to our parent company, Caliber Technologies, reinforcing the lineage.',
            },
            {
              syllable: 'IQ',
              meaning: 'Intelligence',
              description: 'The product doesn\'t just digitize preconstruction — it makes it smarter. It reads specs, interprets plans, and generates takeoffs that would take a human estimator days.',
            },
          ].map((item, i) => (
            <AnimatedReveal key={item.syllable} direction="up" delay={i * 100}>
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-extrabold text-navy">{item.syllable}</h3>
                <p className="text-sm font-semibold text-amber mt-1 uppercase tracking-wide">{item.meaning}</p>
                <p className="mt-4 text-charcoal-light leading-relaxed text-sm">{item.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <SectionLabel>Origin</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight mb-6">Our Story</h2>
          <div className="space-y-5 text-charcoal-light leading-relaxed text-[1.0625rem]">
            <p>
              PreCalIQ was born out of frustration. Our founders spent years working in preconstruction
              for general contractors — reading specifications page by page, manually counting doors
              and materials, and assembling bids in spreadsheets that were outdated before the ink
              dried. They saw firsthand how much time, money, and competitive edge was lost to a
              process that hadn&apos;t fundamentally changed in decades.
            </p>
            <p>
              In 2024, they set out to build the platform they wished they&apos;d had: one that could
              read a spec the way an experienced estimator does, cross-reference it against
              architectural plans, and produce structured material takeoffs in minutes instead of
              days. The result is PreCalIQ — an AI-powered preconstruction platform that handles the
              tedious, error-prone work so estimators can focus on strategy, relationships, and
              winning bids.
            </p>
          </div>
        </AnimatedReveal>
      </Section>

      {/* What We Believe */}
      <Section bg="cream">
        <AnimatedReveal direction="up">
          <SectionLabel>Philosophy</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight mb-6">What We Believe</h2>
          <div className="space-y-5 text-charcoal-light leading-relaxed text-[1.0625rem]">
            <p>
              AI won&apos;t replace construction estimators — but estimators who use AI will replace
              those who don&apos;t. We believe the best technology augments human expertise rather
              than attempting to eliminate it. PreCalIQ keeps experienced professionals in the loop
              while removing the manual drudgery that burns them out and slows them down.
            </p>
            <p>
              We also believe that preconstruction deserves purpose-built software. Generic AI tools
              don&apos;t understand CSI divisions, don&apos;t know the difference between a
              fire-rated hollow metal frame and a standard welded frame, and can&apos;t cross-reference
              spec Section 08 11 00 with a door schedule on sheet A5.01. PreCalIQ does — because it
              was built by people who&apos;ve lived that workflow.
            </p>
          </div>
        </AnimatedReveal>
      </Section>

      {/* Who It's For */}
      <Section bg="white" wide>
        <AnimatedReveal direction="up" className="text-center mb-12">
          <SectionLabel>Audience</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight">Who It&apos;s For</h2>
        </AnimatedReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { role: 'Estimators', desc: 'Precision in preconstruction — that\'s your entire job. PreCalIQ delivers it.' },
            { role: 'GC Executives', desc: 'Intelligent precon is the competitive advantage you\'re chasing.' },
            { role: 'Subcontractors', desc: 'Calibrated takeoffs are what win you bids.' },
            { role: 'Owners & Developers', desc: 'Smarter preconstruction is how projects stay on budget.' },
          ].map((item, i) => (
            <AnimatedReveal key={item.role} direction="up" delay={i * 80}>
              <Card className="p-6 flex gap-4 items-start">
                <span className="text-navy font-bold text-xl mt-0.5 shrink-0">&#10003;</span>
                <div>
                  <p className="font-bold text-charcoal text-lg">{item.role}</p>
                  <p className="text-charcoal-light text-sm mt-1">{item.desc}</p>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Our Team */}
      <Section bg="cream">
        <AnimatedReveal direction="up">
          <SectionLabel>Team</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal leading-tight mb-6">Our Team</h2>
          <p className="text-charcoal-light leading-relaxed text-[1.0625rem]">
            PreCalIQ is built by a small, focused team of engineers and construction professionals
            who have collectively spent decades in preconstruction, commercial contracting, and
            software development. We&apos;re headquartered in the United States and work closely
            with GCs across the country to refine and expand the platform.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Caliber Technologies */}
      <Section bg="white">
        <AnimatedReveal direction="scale">
          <Card hover={false} className="p-10 text-center">
            <p className="text-xs text-amber uppercase tracking-wider font-semibold">A Company by</p>
            <p className="mt-3 text-3xl font-extrabold text-navy">Caliber Technologies</p>
            <p className="mt-4 text-charcoal-light max-w-lg mx-auto leading-relaxed">
              PreCalIQ is developed and operated by Caliber Technologies — a technology company
              focused on building AI-powered tools for the construction industry.
            </p>
          </Card>
        </AnimatedReveal>
      </Section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-cream-dark via-cream to-cream-dark">
        <AnimatedReveal direction="up" className="text-center">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-charcoal">Want to Learn More?</h2>
          <div className="mt-8">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
