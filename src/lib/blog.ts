import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost, BlogPostMetadata } from './blog-types';

// Re-export types and utilities for convenience
export type { BlogPost, BlogPostMetadata } from './blog-types';
export { formatDate } from './blog-types';

const BLOG_DIRECTORY = path.join(process.cwd(), 'src/content/blog');

/**
 * Get all blog post files from the content directory
 */
function getBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }
  return fs.readdirSync(BLOG_DIRECTORY).filter((file) => file.endsWith('.mdx'));
}

/**
 * Parse frontmatter and content from an MDX file
 */
function parseBlogFile(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, '');
  const filePath = path.join(BLOG_DIRECTORY, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContents);
  const { text: readingTimeText } = readingTime(content);

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    author: data.author || 'LambdaFlow Team',
    tags: data.tags || [],
    image: data.image || '/images/blog/default.jpg',
    content,
    readingTime: readingTimeText,
  };
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPostMetadata[] {
  const files = getBlogFiles();

  const posts = files
    .map((filename) => {
      const post = parseBlogFile(filename);
      // Return only metadata, not full content
      const { content, ...metadata } = post;
      return metadata;
    })
    .sort((a, b) => {
      // Sort by date, newest first
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  return posts;
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filename = `${slug}.mdx`;
    const post = parseBlogFile(filename);
    return post;
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all post slugs for static generation
 */
export function getAllPostSlugs(): string[] {
  const files = getBlogFiles();
  return files.map((filename) => filename.replace(/\.mdx$/, ''));
}

/**
 * Get related posts based on shared tags
 */
export function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): BlogPostMetadata[] {
  const allPosts = getAllPosts();

  // Filter out current post and score by number of shared tags
  const postsWithScore = allPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => {
      const sharedTags = post.tags.filter((tag) => tags.includes(tag));
      return {
        post,
        score: sharedTags.length,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  // Return top N posts
  return postsWithScore.slice(0, limit).map((item) => item.post);
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

/**
 * Get all unique tags from all posts
 */
export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tagsSet = new Set<string>();

  allPosts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort();
}
