import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog-posts';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';
import Card from '@/components/Card';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://precaliq.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      url: `https://precaliq.com/blog/${slug}`,
      siteName: 'PreCalIQ',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div>
      {/* Hero */}
      <Section bg="gradient" className="py-8 md:py-12">
        <AnimatedReveal direction="fade">
          <a href="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white/70 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </a>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={80}>
          <p className="mt-6 text-xs text-amber/60 font-semibold uppercase tracking-[0.2em]">{post.date}</p>
          <h1 className="mt-3 text-3xl md:text-[2.75rem] font-extrabold leading-[1.1] tracking-[-0.01em]">{post.title}</h1>
          <p className="mt-5 text-[1.0625rem] text-white/40 leading-relaxed max-w-2xl">{post.excerpt}</p>
        </AnimatedReveal>
      </Section>

      {/* Article content */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <article className="prose-rich max-w-none">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-extrabold text-charcoal mt-14 mb-5">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-charcoal mt-10 mb-4">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('| ')) {
                const rows = block.split('\n').filter((r) => !r.match(/^\|\s*-/));
                const headers = rows[0]?.split('|').filter(Boolean).map((c) => c.trim()) ?? [];
                const dataRows = rows.slice(1).map((r) => r.split('|').filter(Boolean).map((c) => c.trim()));
                return (
                  <div key={i} className="my-10">
                    <div className="rounded-2xl ring-1 ring-border-subtle overflow-hidden shadow-card">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-cream">
                              {headers.map((h, j) => (
                                <th key={j} className="text-left py-3.5 px-5 font-semibold text-charcoal text-[0.8125rem]">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, ri) => (
                              <tr key={ri} className="border-t border-border-subtle">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="py-3 px-5 text-charcoal-light">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                );
              }
              if (block.startsWith('- ') || block.startsWith('1. ')) {
                const items = block.split('\n');
                const isOrdered = block.startsWith('1. ');
                const Tag = isOrdered ? 'ol' : 'ul';
                return (
                  <Tag key={i} className={`my-6 space-y-3 ${isOrdered ? 'list-decimal' : 'list-disc'} pl-6 text-charcoal-light`}>
                    {items.map((item, j) => (
                      <li key={j} className="leading-[1.7] text-[1.0625rem]">
                        {item.replace(/^[-\d]+[.)]\s*/, '').split('**').map((part, k) =>
                          k % 2 === 1 ? <strong key={k} className="text-charcoal font-semibold">{part}</strong> : part
                        )}
                      </li>
                    ))}
                  </Tag>
                );
              }
              return (
                <p key={i} className="text-charcoal-light leading-[1.75] my-5 text-[1.0625rem]">
                  {block.split('**').map((part, k) =>
                    k % 2 === 1 ? <strong key={k} className="text-charcoal font-semibold">{part}</strong> : part
                  )}
                </p>
              );
            })}
          </article>
        </AnimatedReveal>
      </Section>

      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { '@type': 'Organization', name: 'PreCalIQ' },
            publisher: { '@type': 'Organization', name: 'PreCalIQ', url: 'https://precaliq.com' },
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://precaliq.com/blog/${slug}` },
          }),
        }}
      />

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6 bg-cream">
        <div className="absolute inset-0 dot-grid pointer-events-none" />
        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-xl mx-auto">
          <SectionLabel>Next Step</SectionLabel>
          <h3 className="text-2xl md:text-3xl font-extrabold text-charcoal">Ready to see PreCalIQ in action?</h3>
          <p className="mt-3 text-charcoal-light leading-relaxed">Transform your preconstruction workflow with AI-powered takeoffs.</p>
          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
