import { Suspense } from 'react';
import { Metadata } from 'next';
import { getPosts, getCategories, getTags } from '@/lib/wordpress';
import { Header } from '@/components/ui/Header';
import { BlogHeader } from '@/components/blog/BlogHeader';
import { BlogCard } from '@/components/blog/BlogCard';
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

interface BlogPageProps {
  searchParams?: {
    page?: string;
    search?: string;
    category?: string;
    tag?: string;
  };
}

async function BlogContent({ searchParams }: BlogPageProps) {
  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || '';
  const categorySlug = searchParams?.category || '';
  const tagSlug = searchParams?.tag || '';

  // Fetch categories and tags for filters
  const [categories, tags] = await Promise.all([
    getCategories(),
    getTags(),
  ]);

  // Get category/tag IDs from slugs
  const categoryIds = categorySlug
    ? categories.filter(c => c.slug === categorySlug).map(c => c.id)
    : [];

  const tagIds = tagSlug
    ? tags.filter(t => t.slug === tagSlug).map(t => t.id)
    : [];

  // Fetch posts with filters
  const { posts, pagination } = await getPosts({
    page,
    perPage: 12,
    search: search || undefined,
    categories: categoryIds.length > 0 ? categoryIds : undefined,
    tags: tagIds.length > 0 ? tagIds : undefined,
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        {/* Header with Search and Filters */}
        <BlogHeader categories={categories} tags={tags} />

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">
              No articles found. Try adjusting your filters.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                searchParams={searchParams}
              />
            )}
          </>
        )}
      </section>

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
}

export default function BlogPage(props: BlogPageProps) {
  return (
    <Suspense fallback={<BlogLoadingSkeleton />}>
      <BlogContent {...props} />
    </Suspense>
  );
}

// Pagination Component
function Pagination({
  currentPage,
  totalPages,
  searchParams,
}: {
  currentPage: number;
  totalPages: number;
  searchParams?: any;
}) {
  const buildUrl = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    return `/blog?${params.toString()}`;
  };

  const pages = [];
  const maxVisible = 5;

  let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
  let endPage = Math.min(totalPages, startPage + maxVisible - 1);

  if (endPage - startPage < maxVisible - 1) {
    startPage = Math.max(1, endPage - maxVisible + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center items-center gap-2">
      {/* Previous */}
      {currentPage > 1 && (
        <a
          href={buildUrl(currentPage - 1)}
          className="px-4 py-2 rounded-lg border border-khaki text-earth hover:bg-khaki-light transition-colors"
        >
          Previous
        </a>
      )}

      {/* First page */}
      {startPage > 1 && (
        <>
          <a
            href={buildUrl(1)}
            className="px-4 py-2 rounded-lg border border-khaki text-earth hover:bg-khaki-light transition-colors"
          >
            1
          </a>
          {startPage > 2 && <span className="px-2">...</span>}
        </>
      )}

      {/* Page numbers */}
      {pages.map((page) => (
        <a
          key={page}
          href={buildUrl(page)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            page === currentPage
              ? 'bg-earth text-white border-earth'
              : 'border-khaki text-earth hover:bg-khaki-light'
          }`}
        >
          {page}
        </a>
      ))}

      {/* Last page */}
      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && <span className="px-2">...</span>}
          <a
            href={buildUrl(totalPages)}
            className="px-4 py-2 rounded-lg border border-khaki text-earth hover:bg-khaki-light transition-colors"
          >
            {totalPages}
          </a>
        </>
      )}

      {/* Next */}
      {currentPage < totalPages && (
        <a
          href={buildUrl(currentPage + 1)}
          className="px-4 py-2 rounded-lg border border-khaki text-earth hover:bg-khaki-light transition-colors"
        >
          Next
        </a>
      )}
    </nav>
  );
}

// Loading Skeleton
function BlogLoadingSkeleton() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-20">
        <div className="bg-white border-b border-khaki-light">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="animate-pulse">
            <div className="h-12 bg-khaki-light rounded w-64 mx-auto mb-4"></div>
            <div className="h-6 bg-khaki-light rounded w-96 mx-auto mb-8"></div>
            <div className="h-12 bg-khaki-light rounded-full max-w-2xl mx-auto"></div>
          </div>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-khaki-light h-64 rounded-lg mb-4"></div>
              <div className="h-6 bg-khaki-light rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-khaki-light rounded w-full mb-2"></div>
              <div className="h-4 bg-khaki-light rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </section>
      </main>
    </>
  );
}
