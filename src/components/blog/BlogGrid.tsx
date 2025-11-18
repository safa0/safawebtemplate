"use client";

import { BlogPostMetadata } from '@/lib/blog-types';
import { BlogCard } from './BlogCard';

interface BlogGridProps {
  posts: BlogPostMetadata[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {posts.map((post, index) => (
        <BlogCard key={post.slug} post={post} index={index} />
      ))}
    </div>
  );
}
