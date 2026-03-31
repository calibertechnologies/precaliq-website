import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Card from '@/components/Card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on AI-powered preconstruction, construction estimating, takeoff automation, and the future of bidding. From the PreCal-IQ team.',
  alternates: { canonical: 'https://precaliq.com/blog' },
};

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-24 md:py-36 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedReveal direction="fade">
            <SectionLabel>Insights</SectionLabel>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-charcoal">Blog</h1>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={180}>
            <p className="mt-6 text-[1.125rem] text-graphite max-w-xl mx-auto leading-relaxed">
              Insights on AI, preconstruction, and the future of construction estimating.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Featured post */}
      <Section bg="snow" wide>
        {blogPosts.length > 0 && (
          <AnimatedReveal direction="up" className="mb-12">
            <a href={`/blog/${blogPosts[0].slug}`} className="group block">
              <Card className="p-10 md:p-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">Latest</span>
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-slate">{blogPosts[0].date}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-charcoal group-hover:text-accent transition-colors leading-snug">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-4 text-graphite leading-relaxed max-w-2xl">{blogPosts[0].excerpt}</p>
                <span className="mt-6 inline-flex items-center text-accent font-semibold text-sm group-hover:gap-2.5 gap-1.5 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Card>
            </a>
          </AnimatedReveal>
        )}

        {/* Remaining posts grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.slice(1).map((post, i) => (
            <AnimatedReveal key={post.slug} direction="up" delay={i * 60}>
              <a href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="p-8 h-full flex flex-col">
                  <p className="text-xs text-slate font-medium uppercase tracking-wide">{post.date}</p>
                  <h2 className="mt-3 text-lg font-bold text-charcoal group-hover:text-accent transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-graphite text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center text-accent font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                    Read more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Card>
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
