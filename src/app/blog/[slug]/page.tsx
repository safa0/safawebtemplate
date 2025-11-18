import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, getRelatedPosts, getPlainTextExcerpt } from '@/lib/wordpress';
import { Header } from '@/components/ui/Header';
import { BlogPost } from '@/components/blog/BlogPost';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { FooterSection } from '@/components/sections/FooterSection';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const excerpt = getPlainTextExcerpt(post.excerpt.rendered);

  return {
    title: `${post.title.rendered} - LambdaFlow™`,
    description: excerpt,
    openGraph: {
      title: post.title.rendered,
      description: excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.modified,
      authors: post._embedded?.author?.[0]?.name ? [post._embedded.author[0].name] : undefined,
      images: featuredImage
        ? [
            {
              url: featuredImage.source_url,
              width: featuredImage.media_details?.width,
              height: featuredImage.media_details?.height,
              alt: featuredImage.alt_text || post.title.rendered,
            },
          ]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.rendered,
      description: excerpt,
      images: featuredImage ? [featuredImage.source_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Fetch related posts
  const relatedPosts = await getRelatedPosts(post, 3);

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    description: getPlainTextExcerpt(post.excerpt.rendered),
    image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    datePublished: post.date,
    dateModified: post.modified,
    author: {
      '@type': 'Person',
      name: post._embedded?.author?.[0]?.name || 'LambdaFlow Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LambdaFlow™',
      logo: {
        '@type': 'ImageObject',
        url: 'https://your-domain.com/logo.png',
      },
    },
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header />

      <main className="min-h-screen bg-white pt-20">
        {/* Blog Post Content */}
        <BlogPost post={post} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
}

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour
