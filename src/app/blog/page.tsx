import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import { Header } from '@/components/ui/Header';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { FooterSection } from '@/components/sections/FooterSection';

export const metadata: Metadata = {
  title: 'Blog - LambdaFlow™',
  description: 'Expert insights on automation, AI, and digital transformation from the LambdaFlow team',
  openGraph: {
    title: 'Blog - LambdaFlow™',
    description: 'Expert insights on automation, AI, and digital transformation',
    type: 'website',
  },
};

export default async function BlogPage() {
  // Get all posts from MDX files
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-khaki-light pt-20">
        {/* Header */}
        <div className="bg-white border-b border-khaki-light">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#2F4538] mb-6">
              Automation Insights
            </h1>
            <p className="text-lg md:text-xl text-[#2F4538]/70 max-w-2xl mx-auto">
              Explore the latest trends, strategies, and success stories in intelligent
              automation and process optimization.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-[#2F4538]/60">
                No articles found yet. Check back soon!
              </p>
            </div>
          ) : (
            <BlogGrid posts={posts} />
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="bg-[#2F4538] text-khaki-light rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get the latest automation insights delivered to your inbox monthly.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white text-[#2F4538] placeholder:text-[#2F4538]/50 focus:outline-none focus:ring-2 focus:ring-khaki"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-khaki text-[#2F4538] rounded-lg font-semibold hover:bg-khaki-light transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
}

