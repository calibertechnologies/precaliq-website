import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Card from '@/components/Card';

export const metadata: Metadata = { title: 'Blog — PreCalIQ' };

export default function BlogPage() {
  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="text-center py-8 md:py-12">
        <AnimatedReveal direction="fade">
          <SectionLabel light>Insights</SectionLabel>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-tight tracking-tight">Blog</h1>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={200}>
          <p className="mt-5 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Insights on AI, preconstruction, and the future of construction estimating.
          </p>
        </AnimatedReveal>
      </Section>

      {/* Blog posts grid */}
      <Section bg="white" wide>
        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <AnimatedReveal key={post.slug} direction="up" delay={i * 80}>
              <a href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="p-8 h-full flex flex-col">
                  <p className="text-xs text-charcoal-light/60 font-medium uppercase tracking-wide">{post.date}</p>
                  <h2 className="mt-3 text-xl font-bold text-charcoal group-hover:text-navy transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-charcoal-light text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center text-navy font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
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
