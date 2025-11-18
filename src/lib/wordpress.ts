/**
 * WordPress REST API Integration
 * ================================
 * Utility functions for fetching content from WordPress via the REST API
 */

// WordPress API Configuration
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

// Type Definitions
export interface WPFeaturedMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details?: {
    width: number;
    height: number;
    sizes?: {
      medium?: { source_url: string };
      large?: { source_url: string };
      thumbnail?: { source_url: string };
    };
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
  description?: string;
  count?: number;
}

export interface WPAuthor {
  id: number;
  name: string;
  description?: string;
  avatar_urls?: {
    24?: string;
    48?: string;
    96?: string;
  };
}

export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: WPAuthor[];
    'wp:featuredmedia'?: WPFeaturedMedia[];
    'wp:term'?: Array<WPCategory[] | WPTag[]>;
  };
}

export interface WPPaginationMeta {
  total: number;
  totalPages: number;
  currentPage: number;
  perPage: number;
}

export interface WPPostsResponse {
  posts: WPPost[];
  pagination: WPPaginationMeta;
}

/**
 * Fetch posts from WordPress
 * @param params Query parameters for filtering and pagination
 */
export async function getPosts(params: {
  page?: number;
  perPage?: number;
  categories?: number[];
  tags?: number[];
  search?: string;
  orderBy?: string;
  order?: 'asc' | 'desc';
} = {}): Promise<WPPostsResponse> {
  const {
    page = 1,
    perPage = 10,
    categories,
    tags,
    search,
    orderBy = 'date',
    order = 'desc',
  } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
    orderby: orderBy,
    order,
    _embed: 'true', // Include embedded data (author, featured media, categories, tags)
  });

  if (categories && categories.length > 0) {
    queryParams.append('categories', categories.join(','));
  }

  if (tags && tags.length > 0) {
    queryParams.append('tags', tags.join(','));
  }

  if (search) {
    queryParams.append('search', search);
  }

  try {
    const response = await fetch(`${WP_API_URL}/posts?${queryParams}`, {
      next: { revalidate: 3600 }, // Revalidate every hour (ISR)
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    const total = parseInt(response.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0', 10);

    return {
      posts,
      pagination: {
        total,
        totalPages,
        currentPage: page,
        perPage,
      },
    };
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
}

/**
 * Fetch a single post by slug
 * @param slug The post slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true`, {
      next: { revalidate: 3600 }, // Revalidate every hour (ISR)
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

/**
 * Fetch all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  try {
    const response = await fetch(`${WP_API_URL}/posts?per_page=100&_fields=slug`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const posts = await response.json();
    return posts.map((post: { slug: string }) => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<WPCategory[]> {
  try {
    const response = await fetch(`${WP_API_URL}/categories?per_page=100`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Fetch all tags
 */
export async function getTags(): Promise<WPTag[]> {
  try {
    const response = await fetch(`${WP_API_URL}/tags?per_page=100`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

/**
 * Get related posts based on categories and tags
 * @param post The current post
 * @param limit Maximum number of related posts to return
 */
export async function getRelatedPosts(post: WPPost, limit: number = 3): Promise<WPPost[]> {
  try {
    const categories = post.categories || [];
    const tags = post.tags || [];

    if (categories.length === 0 && tags.length === 0) {
      // If no categories or tags, return recent posts
      const { posts } = await getPosts({ perPage: limit });
      return posts.filter(p => p.id !== post.id).slice(0, limit);
    }

    // Fetch posts with same categories or tags
    const { posts } = await getPosts({
      perPage: limit + 1,
      categories: categories.length > 0 ? categories : undefined,
      tags: tags.length > 0 ? tags : undefined,
    });

    // Filter out the current post and limit results
    return posts.filter(p => p.id !== post.id).slice(0, limit);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

/**
 * Sanitize and process WordPress HTML content
 * This function can be extended to handle custom WordPress shortcodes, etc.
 */
export function sanitizeContent(content: string): string {
  // Basic sanitization - in production, use a library like DOMPurify
  // For now, we trust WordPress to provide sanitized content
  return content;
}

/**
 * Extract plain text from WordPress excerpt (removes HTML tags)
 */
export function getPlainTextExcerpt(excerpt: string, maxLength: number = 160): string {
  const text = excerpt.replace(/<[^>]*>/g, '');
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

/**
 * Format WordPress date
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Get reading time estimate
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
