import type { Metadata } from 'next';
import AnimatedReveal from '@/components/AnimatedReveal';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import AuroraBackground from '@/components/AuroraBackground';

export const metadata: Metadata = {
  title: 'About',
  description: 'PreCal-IQ was built by preconstruction veterans who spent years reading specs manually. Learn about our mission, team, and vision for AI-powered preconstruction.',
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
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-snow">
        <div className="absolute top-[40%] right-[5%] w-2 h-2 rounded-full particle-1 pointer-events-none" style={{ background: 'rgba(37,99,235,0.1)' }} />

        <div className="max-w-4xl mx-auto relative">
          <AnimatedReveal direction="up">
            <SectionLabel>Mission</SectionLabel>
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">Why PreCal-IQ?</h2>
            <p className="text-graphite leading-[1.75] text-[1.0625rem]">
              In construction, the difference between a winning bid and a losing one comes down to
              calibration — getting the quantities, specs, and costs dialed in with precision.
              PreCal-IQ was built because we believe AI can bring a new level of intelligence to
              this process. We&apos;re not replacing estimators — we&apos;re giving them superhuman
              accuracy by reading every spec section, interpreting every plan sheet, and generating
              takeoffs that are calibrated to win.
            </p>
          </AnimatedReveal>

          {/* Pull quote */}
          <AnimatedReveal direction="up" delay={150}>
            <div className="mt-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-accent quote-line-glow" />
              <blockquote className="pl-8 py-2">
                <p className="text-xl md:text-2xl text-charcoal italic leading-relaxed font-medium">
                  &ldquo;AI won&apos;t replace construction estimators — but estimators who use AI will replace
                  those who don&apos;t.&rdquo;
                </p>
              </blockquote>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* The Name */}
      <section className="relative py-24 md:py-36 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-light pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <AnimatedReveal direction="up" className="text-center mb-14">
            <SectionLabel>Brand</SectionLabel>
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">The Name</h2>
            <p className="mt-4 text-graphite max-w-2xl mx-auto leading-relaxed">
              PreCal-IQ brings intelligence to preconstruction. The name says exactly what we do.
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
                description: 'Precision — getting quantities right, specs aligned, costs accurate.',
              },
              {
                syllable: 'IQ',
                meaning: 'Intelligence',
                description: 'The product doesn\'t just digitize preconstruction — it makes it smarter. It reads, interprets, and generates with AI precision.',
              },
            ].map((item, i) => (
              <AnimatedReveal key={item.syllable} direction="up" delay={i * 120}>
                <div className="card-spotlight card-glow-line bg-white rounded-2xl ring-1 ring-border shadow-card p-8 h-full group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl font-extrabold text-charcoal group-hover:text-accent transition-colors duration-500">{item.syllable}</span>
                    <div className="flex-1 h-px bg-border group-hover:bg-accent/20 transition-colors duration-500" />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] badge-shimmer text-accent px-2 py-1 rounded inline-block">{item.meaning}</p>
                  <p className="mt-4 text-graphite leading-relaxed text-sm">{item.description}</p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-snow">
        <div className="max-w-4xl mx-auto relative">
          <AnimatedReveal direction="up">
            <SectionLabel>Origin</SectionLabel>
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">Our Story</h2>
            <div className="space-y-5 text-graphite leading-[1.75] text-[1.0625rem]">
              <p>
                PreCal-IQ was born out of frustration. Our founders spent years working in preconstruction
                for general contractors — reading specifications page by page, manually counting doors
                and materials, and assembling bids in spreadsheets that were outdated before the ink
                dried. They saw firsthand how much time, money, and competitive edge was lost to a
                process that hadn&apos;t fundamentally changed in decades.
              </p>
              <p>
                In 2024, they set out to build the platform they wished they&apos;d had: one that could
                read a spec the way an experienced estimator does, cross-reference it against
                architectural plans, and produce structured material takeoffs in minutes instead of
                days. The result is PreCal-IQ.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24 md:py-36 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-light pointer-events-none" />
        <div className="absolute bottom-[30%] right-[10%] w-2 h-2 rounded-full particle-2 pointer-events-none" style={{ background: 'rgba(37,99,235,0.08)' }} />

        <div className="max-w-4xl mx-auto relative">
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
                spec Section 08 11 00 with a door schedule on sheet A5.01. PreCal-IQ does — because it
                was built by people who&apos;ve lived that workflow.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Who It's For */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden mesh-gradient-snow">
        <div className="max-w-6xl mx-auto relative">
          <AnimatedReveal direction="up" className="text-center mb-14">
            <SectionLabel>Audience</SectionLabel>
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug">Who It&apos;s For</h2>
          </AnimatedReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { role: 'Estimators', desc: 'Precision in preconstruction — that\'s your entire job. PreCal-IQ delivers it.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { role: 'GC Executives', desc: 'Intelligent precon is the competitive advantage you\'re chasing.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
              { role: 'Subcontractors', desc: 'Calibrated takeoffs are what win you bids.', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
              { role: 'Owners & Developers', desc: 'Smarter preconstruction is how projects stay on budget.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((item, i) => (
              <AnimatedReveal key={item.role} direction="up" delay={i * 100}>
                <div className="card-spotlight bg-white rounded-2xl ring-1 ring-border shadow-card p-6 flex gap-5 items-start group">
                  <div className="icon-glow w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500" style={{ background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(96,165,250,0.05))' }}>
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-charcoal text-lg">{item.role}</p>
                    <p className="text-graphite text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 md:py-36 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-light pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <AnimatedReveal direction="up">
            <SectionLabel>Team</SectionLabel>
            <h2 className="text-2xl md:text-[2rem] font-extrabold text-charcoal leading-snug mb-6">Our Team</h2>
            <p className="text-graphite leading-[1.75] text-[1.0625rem]">
              PreCal-IQ is built by a small, focused team of engineers and construction professionals
              who have collectively spent decades in preconstruction, commercial contracting, and
              software development. We&apos;re headquartered in the United States and work closely
              with GCs across the country to refine and expand the platform.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32 md:py-44 px-6" style={{ background: '#0A0A1A' }}>
        <AuroraBackground />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.07]" style={{ background: 'radial-gradient(circle, #2563EB, transparent 60%)' }} />
        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-2xl mx-auto">
          <SectionLabel light>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-[1.15] tracking-[-0.02em]">Want to learn more?</h2>
          <p className="mt-4 text-blue-100/40 leading-relaxed">See how PreCal-IQ transforms your preconstruction workflow.</p>
          <div className="mt-10">
            <Button href="/contact">Get in Touch</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
