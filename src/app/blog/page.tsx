import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { BASE_URL } from '@/config/metadata';
import { Header } from '@/components/ui/Header';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { FooterSection } from '@/components/sections/FooterSection';
import { generateMetadata as genMetadata } from '@/config/metadata';

export const metadata: Metadata = genMetadata('blog');

export default async function BlogPage() {
  const posts = getAllPosts();

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fellowship Insights — Gradient Fellows Blog',
    url: `${BASE_URL}/blog`,
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${BASE_URL}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <>
      {/* Safe: built from trusted server-side blog data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-khaki-light pt-20">
        {/* Header */}
        <div className="bg-white border-b border-earth/10">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-dark mb-6">
              Fellowship Insights
            </h1>
            <p className="text-lg md:text-xl text-dark/60 max-w-2xl mx-auto">
              Stories, guides, and perspectives on the STEM-to-AI transition
              and the future of domain expertise in machine learning.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-dark/60">
                No articles found yet. Check back soon!
              </p>
            </div>
          ) : (
            <BlogGrid posts={posts} />
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-dark text-white rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg mb-8 text-white/70">
              Get fellowship updates and STEM-to-AI insights in your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="blog-email" className="sr-only">Email address</label>
              <input
                id="blog-email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-dark placeholder:text-dark/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent/80 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        <FooterSection />
      </main>
    </>
  );
}
