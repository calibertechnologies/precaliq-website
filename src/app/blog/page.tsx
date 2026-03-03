import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = { title: 'Blog — PreCalIQ' };

export default function BlogPage() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">Blog</h1>
        <p className="mt-4 text-center text-lg text-gray-600 max-w-2xl mx-auto">
          Insights on AI, preconstruction, and the future of construction estimating.
        </p>

        <div className="mt-16 space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="border-b pb-10 last:border-0">
              <a href={`/blog/${post.slug}`} className="group block">
                <p className="text-sm text-gray-400">{post.date}</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-[#1F4E79] transition">
                  {post.title}
                </h2>
                <p className="mt-3 text-gray-600">{post.excerpt}</p>
                <span className="mt-4 inline-block text-[#1F4E79] font-medium text-sm">
                  Read more &rarr;
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
