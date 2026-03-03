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
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tight">
            About <span className="text-gradient-amber">PreCalIQ</span>
          </h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            The IQ behind your precon.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Why PreCalIQ */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <SectionLabel>Mission</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight mb-6">Why PreCalIQ?</h2>
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
          <div className="mt-10 relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(to right, #1F4E79, #C8964E)' }} />
            <div className="relative bg-cream-dark/80 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-amber">
              <p className="text-xl text-charcoal italic leading-relaxed font-medium">
                &ldquo;AI won&apos;t replace construction estimators — but estimators who use AI will replace
                those who don&apos;t.&rdquo;
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      {/* The Name */}
      <Section bg="cream" wide>
        <AnimatedReveal direction="up" className="text-center mb-12">
          <SectionLabel>Brand</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight">The Name</h2>
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
              gradientStyle: 'linear-gradient(to bottom right, rgba(31,78,121,0.1), rgba(31,78,121,0.05))',
            },
            {
              syllable: 'Cal',
              meaning: 'Calibration',
              description: 'In construction, calibration means precision — getting quantities right, specs aligned, costs accurate. It also ties directly back to our parent company, Caliber Technologies, reinforcing the lineage.',
              gradientStyle: 'linear-gradient(to bottom right, rgba(200,150,78,0.1), rgba(200,150,78,0.05))',
            },
            {
              syllable: 'IQ',
              meaning: 'Intelligence',
              description: 'The product doesn\'t just digitize preconstruction — it makes it smarter. It reads specs, interprets plans, and generates takeoffs that would take a human estimator days.',
              gradientStyle: 'linear-gradient(to bottom right, rgba(31,78,121,0.1), rgba(200,150,78,0.05))',
            },
          ].map((item, i) => (
            <AnimatedReveal key={item.syllable} direction="up" delay={i * 100}>
              <Card className="p-8 h-full group" glow>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: item.gradientStyle }}>
                  <span className="text-2xl font-extrabold text-navy">{item.syllable}</span>
                </div>
                <p className="text-sm font-semibold text-amber uppercase tracking-wide">{item.meaning}</p>
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
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight mb-6">Our Story</h2>
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
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight mb-6">What We Believe</h2>
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
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight">Who It&apos;s For</h2>
        </AnimatedReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { role: 'Estimators', desc: 'Precision in preconstruction — that\'s your entire job. PreCalIQ delivers it.', icon: '1' },
            { role: 'GC Executives', desc: 'Intelligent precon is the competitive advantage you\'re chasing.', icon: '2' },
            { role: 'Subcontractors', desc: 'Calibrated takeoffs are what win you bids.', icon: '3' },
            { role: 'Owners & Developers', desc: 'Smarter preconstruction is how projects stay on budget.', icon: '4' },
          ].map((item, i) => (
            <AnimatedReveal key={item.role} direction="up" delay={i * 80}>
              <Card className="p-6 flex gap-5 items-start group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: 'linear-gradient(to bottom right, rgba(31,78,121,0.1), rgba(200,150,78,0.1))' }}>
                  <svg className="w-5 h-5 text-navy" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">{item.role}</p>
                  <p className="text-charcoal-light text-sm mt-1 leading-relaxed">{item.desc}</p>
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
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal leading-tight mb-6">Our Team</h2>
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
          <div className="relative rounded-2xl overflow-hidden p-px" style={{ background: 'linear-gradient(to bottom right, rgba(31,78,121,0.2), rgba(200,150,78,0.2), rgba(31,78,121,0.2))' }}>
            <div className="bg-surface rounded-2xl p-12 text-center">
              <p className="text-xs text-amber uppercase tracking-wider font-semibold">A Company by</p>
              <p className="mt-3 text-3xl font-extrabold text-gradient-navy inline-block">Caliber Technologies</p>
              <p className="mt-4 text-charcoal-light max-w-lg mx-auto leading-relaxed">
                PreCalIQ is developed and operated by Caliber Technologies — a technology company
                focused on building AI-powered tools for the construction industry.
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom right, #ECEAE5, #F5F3F0, #ECEAE5)' }} />
        <AnimatedReveal direction="up" className="text-center relative z-10">
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-charcoal">Want to Learn More?</h2>
          <div className="mt-8">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
