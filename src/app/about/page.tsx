import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';
import AuroraBackground from '@/components/AuroraBackground';

export const metadata: Metadata = {
  title: 'About',
  description: 'Precaliq was built by preconstruction veterans who spent years reading specs manually. Learn about our mission, team, and parent company Caliber Technologies.',
  alternates: { canonical: 'https://precaliq.com/about' },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36 px-6" style={{ background: '#0A0A1A' }}>
        <AuroraBackground />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimatedReveal direction="fade">
            <SectionLabel light>Our Story</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-white">
              The IQ behind<br className="hidden sm:block" />
              <span className="text-gradient">your precon</span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={180}>
            <p className="mt-6 text-[1.125rem] text-blue-100/50 max-w-xl mx-auto leading-relaxed">
              Built by estimators, for estimators. AI that understands construction.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Mission */}
      <Section bg="snow">
        <AnimatedReveal direction="up">
          <SectionLabel>Mission</SectionLabel>
          <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">Why Precaliq?</h2>
          <p className="text-graphite leading-[1.75] text-[1.0625rem]">
            In construction, the difference between a winning bid and a losing one comes down to
            calibration — getting the quantities, specs, and costs dialed in with precision.
            Precaliq was built because we believe AI can bring a new level of intelligence to
            this process. We&apos;re not replacing estimators — we&apos;re giving them superhuman
            accuracy by reading every spec section, interpreting every plan sheet, and generating
            takeoffs that are calibrated to win.
          </p>
        </AnimatedReveal>

        {/* Pull quote */}
        <AnimatedReveal direction="up" delay={150}>
          <div className="mt-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-accent" />
            <blockquote className="pl-8 py-2">
              <p className="text-xl md:text-2xl text-charcoal italic leading-relaxed font-medium">
                &ldquo;AI won&apos;t replace construction estimators — but estimators who use AI will replace
                those who don&apos;t.&rdquo;
              </p>
            </blockquote>
          </div>
        </AnimatedReveal>
      </Section>

      {/* The Name */}
      <Section bg="white" wide>
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>Brand</SectionLabel>
          <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">The Name</h2>
          <p className="mt-4 text-graphite max-w-2xl mx-auto leading-relaxed">
            Precaliq brings intelligence to preconstruction. The name says exactly what we do.
          </p>
        </AnimatedReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              syllable: 'Pre',
              meaning: 'Preconstruction',
              description: 'The phase that determines whether a project succeeds or fails. The most critical and underserved phase in construction.',
            },
            {
              syllable: 'Cal',
              meaning: 'Calibration',
              description: 'Precision — getting quantities right, specs aligned, costs accurate. A direct tie to our parent company, Caliber Technologies.',
            },
            {
              syllable: 'IQ',
              meaning: 'Intelligence',
              description: 'The product doesn\'t just digitize preconstruction — it makes it smarter. It reads, interprets, and generates with AI precision.',
            },
          ].map((item, i) => (
            <AnimatedReveal key={item.syllable} direction="up" delay={i * 100}>
              <Card className="p-8 h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl font-extrabold text-charcoal">{item.syllable}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{item.meaning}</p>
                <p className="mt-4 text-graphite leading-relaxed text-sm">{item.description}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Origin Story */}
      <Section bg="snow">
        <AnimatedReveal direction="up">
          <SectionLabel>Origin</SectionLabel>
          <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">Our Story</h2>
          <div className="space-y-5 text-graphite leading-[1.75] text-[1.0625rem]">
            <p>
              Precaliq was born out of frustration. Our founders spent years working in preconstruction
              for general contractors — reading specifications page by page, manually counting doors
              and materials, and assembling bids in spreadsheets that were outdated before the ink
              dried. They saw firsthand how much time, money, and competitive edge was lost to a
              process that hadn&apos;t fundamentally changed in decades.
            </p>
            <p>
              In 2024, they set out to build the platform they wished they&apos;d had: one that could
              read a spec the way an experienced estimator does, cross-reference it against
              architectural plans, and produce structured material takeoffs in minutes instead of
              days. The result is Precaliq.
            </p>
          </div>
        </AnimatedReveal>
      </Section>

      {/* Philosophy */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <SectionLabel>Philosophy</SectionLabel>
          <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">What We Believe</h2>
          <div className="space-y-5 text-graphite leading-[1.75] text-[1.0625rem]">
            <p>
              AI won&apos;t replace construction estimators — but estimators who use AI will replace
              those who don&apos;t. We believe the best technology augments human expertise rather
              than attempting to eliminate it.
            </p>
            <p>
              We also believe that preconstruction deserves purpose-built software. Generic AI tools
              don&apos;t understand CSI divisions, don&apos;t know the difference between a
              fire-rated hollow metal frame and a standard welded frame, and can&apos;t cross-reference
              spec Section 08 11 00 with a door schedule on sheet A5.01. Precaliq does — because it
              was built by people who&apos;ve lived that workflow.
            </p>
          </div>
        </AnimatedReveal>
      </Section>

      {/* Who It's For */}
      <Section bg="snow" wide>
        <AnimatedReveal direction="up" className="text-center mb-14">
          <SectionLabel>Audience</SectionLabel>
          <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">Who It&apos;s For</h2>
        </AnimatedReveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { role: 'Estimators', desc: 'Precision in preconstruction — that\'s your entire job. Precaliq delivers it.' },
            { role: 'GC Executives', desc: 'Intelligent precon is the competitive advantage you\'re chasing.' },
            { role: 'Subcontractors', desc: 'Calibrated takeoffs are what win you bids.' },
            { role: 'Owners & Developers', desc: 'Smarter preconstruction is how projects stay on budget.' },
          ].map((item, i) => (
            <AnimatedReveal key={item.role} direction="up" delay={i * 80}>
              <Card className="p-6 flex gap-5 items-start group">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-accent-soft group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-charcoal text-lg">{item.role}</p>
                  <p className="text-graphite text-sm mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <SectionLabel>Team</SectionLabel>
          <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">Our Team</h2>
          <p className="text-graphite leading-[1.75] text-[1.0625rem]">
            Precaliq is built by a small, focused team of engineers and construction professionals
            who have collectively spent decades in preconstruction, commercial contracting, and
            software development. We&apos;re headquartered in the United States and work closely
            with GCs across the country to refine and expand the platform.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Caliber Technologies */}
      <Section bg="snow">
        <AnimatedReveal direction="scale">
          <div className="relative rounded-2xl overflow-hidden ring-1 ring-border">
            <div className="bg-white rounded-2xl p-12 text-center">
              <p className="text-xs text-accent uppercase tracking-[0.2em] font-semibold">A Company by</p>
              <p className="mt-3 text-3xl font-extrabold text-charcoal inline-block">Caliber Technologies</p>
              <p className="mt-4 text-graphite max-w-lg mx-auto leading-relaxed">
                Precaliq is developed and operated by Caliber Technologies — a technology company
                focused on building AI-powered tools for the construction industry.
              </p>
            </div>
          </div>
        </AnimatedReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 md:py-44 px-6" style={{ background: '#0A0A1A' }}>
        <AuroraBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.07]" style={{ background: 'radial-gradient(circle, #2563EB, transparent 60%)' }} />
        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-2xl mx-auto">
          <SectionLabel light>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-[1.15] tracking-[-0.02em]">Want to learn more?</h2>
          <p className="mt-4 text-blue-100/40 leading-relaxed">See how Precaliq transforms your preconstruction workflow.</p>
          <div className="mt-10">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
