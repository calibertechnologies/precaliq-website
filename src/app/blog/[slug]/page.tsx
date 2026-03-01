import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog-posts';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found — Bildera' };
  return {
    title: `${post.title} — Bildera Blog`,
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
    <div className="py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <a href="/blog" className="text-sm text-[#1F4E79] hover:underline">&larr; Back to Blog</a>
        <p className="mt-6 text-sm text-gray-400">{post.date}</p>
        <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">{post.title}</h1>
        <p className="mt-4 text-lg text-gray-600">{post.excerpt}</p>
        <hr className="my-8 border-gray-200" />
        <div className="prose prose-gray max-w-none">
          {post.content.split('\n\n').map((block, i) => {
            if (block.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{block.replace('## ', '')}</h2>;
            }
            if (block.startsWith('### ')) {
              return <h3 key={i} className="text-xl font-semibold text-gray-900 mt-8 mb-3">{block.replace('### ', '')}</h3>;
            }
            if (block.startsWith('| ')) {
              const rows = block.split('\n').filter((r) => !r.match(/^\|\s*-/));
              const headers = rows[0]?.split('|').filter(Boolean).map((c) => c.trim()) ?? [];
              const dataRows = rows.slice(1).map((r) => r.split('|').filter(Boolean).map((c) => c.trim()));
              return (
                <div key={i} className="overflow-x-auto my-6">
                  <table className="w-full text-sm border">
                    <thead>
                      <tr className="bg-gray-50">
                        {headers.map((h, j) => (
                          <th key={j} className="text-left py-2 px-3 border-b font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {dataRows.map((row, ri) => (
                        <tr key={ri} className="border-b">
                          {row.map((cell, ci) => (
                            <td key={ci} className="py-2 px-3">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (block.startsWith('- ') || block.startsWith('1. ')) {
              const items = block.split('\n');
              const isOrdered = block.startsWith('1. ');
              const Tag = isOrdered ? 'ol' : 'ul';
              return (
                <Tag key={i} className={`my-4 space-y-2 ${isOrdered ? 'list-decimal' : 'list-disc'} pl-6 text-gray-700`}>
                  {items.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item.replace(/^[-\d]+[.)]\s*/, '').split('**').map((part, k) =>
                        k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                      )}
                    </li>
                  ))}
                </Tag>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed my-4">
                {block.split('**').map((part, k) =>
                  k % 2 === 1 ? <strong key={k}>{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>
        <hr className="my-12 border-gray-200" />
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">Ready to see Bildera in action?</h3>
          <p className="mt-2 text-gray-600">Transform your preconstruction workflow with AI-powered takeoffs.</p>
          <a href="/contact" className="mt-6 inline-block px-8 py-3 bg-[#1F4E79] text-white rounded-lg font-medium hover:bg-[#163a5c] transition">
            Request a Demo
          </a>
        </div>
      </article>
    </div>
  );
}
