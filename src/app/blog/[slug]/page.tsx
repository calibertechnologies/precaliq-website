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
  if (!post) return { title: 'Post Not Found — PreCalIQ' };
  return {
    title: `${post.title} — PreCalIQ Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
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
          <a href="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors duration-200">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </a>
        </AnimatedReveal>
        <AnimatedReveal direction="up" delay={100}>
          <p className="mt-6 text-sm text-amber/70 font-medium uppercase tracking-wide">{post.date}</p>
          <h1 className="mt-3 text-3xl md:text-[2.75rem] font-extrabold leading-tight tracking-tight">{post.title}</h1>
          <p className="mt-4 text-lg text-white/50 leading-relaxed max-w-2xl">{post.excerpt}</p>
        </AnimatedReveal>
      </Section>

      {/* Article content */}
      <Section bg="white">
        <AnimatedReveal direction="up">
          <article className="prose-rich max-w-none">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-2xl font-extrabold text-charcoal mt-12 mb-4">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              if (block.startsWith('### ')) {
                return (
                  <h3 key={i} className="text-xl font-semibold text-charcoal mt-8 mb-3">
                    {block.replace('### ', '')}
                  </h3>
                );
              }
              if (block.startsWith('| ')) {
                const rows = block.split('\n').filter((r) => !r.match(/^\|\s*-/));
                const headers = rows[0]?.split('|').filter(Boolean).map((c) => c.trim()) ?? [];
                const dataRows = rows.slice(1).map((r) => r.split('|').filter(Boolean).map((c) => c.trim()));
                return (
                  <div key={i} className="my-8">
                    <Card hover={false} className="overflow-hidden ring-2 ring-border-subtle">
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-gradient-to-r from-cream to-cream-dark">
                              {headers.map((h, j) => (
                                <th key={j} className="text-left py-3 px-4 font-semibold text-charcoal">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {dataRows.map((row, ri) => (
                              <tr key={ri} className="border-t border-border-subtle">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="py-3 px-4 text-charcoal-light">{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Card>
                  </div>
                );
              }
              if (block.startsWith('- ') || block.startsWith('1. ')) {
                const items = block.split('\n');
                const isOrdered = block.startsWith('1. ');
                const Tag = isOrdered ? 'ol' : 'ul';
                return (
                  <Tag key={i} className={`my-5 space-y-2.5 ${isOrdered ? 'list-decimal' : 'list-disc'} pl-6 text-charcoal-light`}>
                    {items.map((item, j) => (
                      <li key={j} className="leading-relaxed text-[1.0625rem]">
                        {item.replace(/^[-\d]+[.)]\s*/, '').split('**').map((part, k) =>
                          k % 2 === 1 ? <strong key={k} className="text-charcoal font-semibold">{part}</strong> : part
                        )}
                      </li>
                    ))}
                  </Tag>
                );
              }
              return (
                <p key={i} className="text-charcoal-light leading-relaxed my-5 text-[1.0625rem]">
                  {block.split('**').map((part, k) =>
                    k % 2 === 1 ? <strong key={k} className="text-charcoal font-semibold">{part}</strong> : part
                  )}
                </p>
              );
            })}
          </article>
        </AnimatedReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-dark via-cream to-cream-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />
        <AnimatedReveal direction="up" className="text-center relative z-10">
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
