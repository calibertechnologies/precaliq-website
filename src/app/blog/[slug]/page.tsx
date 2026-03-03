import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog-posts';
import AnimatedReveal from '@/components/AnimatedReveal';
import Section from '@/components/Section';
import SectionLabel from '@/components/SectionLabel';
import Button from '@/components/Button';

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
      <section className="relative overflow-hidden bg-white py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedReveal direction="fade">
            <a href="/blog" className="inline-flex items-center gap-1.5 text-sm text-graphite hover:text-charcoal transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>
          </AnimatedReveal>
          <AnimatedReveal direction="up" delay={80}>
            <p className="mt-6 text-xs text-accent font-semibold uppercase tracking-[0.2em]">{post.date}</p>
            <h1 className="mt-3 text-3xl md:text-[2.75rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-charcoal">{post.title}</h1>
            <p className="mt-5 text-[1.0625rem] text-graphite leading-relaxed max-w-2xl">{post.excerpt}</p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Article content */}
      <Section bg="snow">
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
                    <div className="rounded-2xl ring-1 ring-border overflow-hidden shadow-sm">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-smoke">
                              {headers.map((h, j) => (
                                <th key={j} className="text-left py-3.5 px-5 font-semibold text-charcoal text-[0.8125rem]">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, ri) => (
                              <tr key={ri} className="border-t border-border">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="py-3 px-5 text-graphite">{cell}</td>
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
                  <Tag key={i} className={`my-6 space-y-3 ${isOrdered ? 'list-decimal' : 'list-disc'} pl-6 text-graphite`}>
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
                <p key={i} className="text-graphite leading-[1.75] my-5 text-[1.0625rem]">
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
      <section className="relative overflow-hidden py-24 px-6 bg-white">
        <AnimatedReveal direction="up" className="text-center relative z-10 max-w-xl mx-auto">
          <SectionLabel>Next Step</SectionLabel>
          <h3 className="text-2xl md:text-3xl font-extrabold text-charcoal">Ready to see PreCalIQ in action?</h3>
          <p className="mt-3 text-graphite leading-relaxed">Transform your preconstruction workflow with AI-powered takeoffs.</p>
          <div className="mt-8">
            <Button href="/contact">Request a Demo</Button>
          </div>
        </AnimatedReveal>
      </section>
    </div>
  );
}
