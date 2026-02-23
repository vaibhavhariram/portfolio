import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on technology, cities, and everything in between.',
};

const posts = [
  {
    title: 'Blog Post Title',
    date: 'January 2026',
    excerpt: 'A brief excerpt or summary of what this blog post is about. Keep it to 1-2 sentences to give readers a preview.',
    slug: '#',
  },
  {
    title: 'Another Post',
    date: 'December 2025',
    excerpt: 'Another excerpt for another blog post. What did you learn? What do you want to share?',
    slug: '#',
  },
  // Add more posts here
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-semibold text-[var(--text-primary)] tracking-tight">Blog</h1>
      
      <p className="text-[var(--text-secondary)] leading-relaxed">
        Thoughts on technology, cities, and everything in between. I write about what I&apos;m 
        learning, building, and thinking about.
      </p>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Link 
            key={index}
            href={post.slug}
            className="block p-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg hover:border-[var(--text-muted)] hover:-translate-y-0.5 transition-all group"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-1">{post.date}</p>
                <h3 className="text-[var(--text-primary)] font-medium mb-2 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{post.excerpt}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>

      <p className="text-sm text-[var(--text-muted)] italic">
        More posts coming soon...
      </p>

      <div className="pt-8 flex flex-wrap items-center gap-4">
        <Link 
          href="/traditional" 
          className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <Link 
          href="/" 
          className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
        >
          View on map →
        </Link>
      </div>
    </div>
  );
}
