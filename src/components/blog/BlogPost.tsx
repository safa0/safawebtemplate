"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { WPPost, WPCategory, WPTag, formatDate, getReadingTime } from '@/lib/wordpress';
import { CategoryBadge, TagBadge } from './CategoryBadge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

interface BlogPostProps {
  post: WPPost;
}

export function BlogPost({ post }: BlogPostProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header elements
      gsap.from('.post-header > *', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
      });

      // Animate content
      gsap.from('.post-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const categories = post._embedded?.['wp:term']?.[0] as any[] || [];
  const tags = post._embedded?.['wp:term']?.[1] as any[] || [];
  const author = post._embedded?.author?.[0];
  const readingTime = getReadingTime(post.content.rendered);

  return (
    <article ref={contentRef} className="max-w-4xl mx-auto px-6 py-12">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.title.rendered },
        ]}
      />

      {/* Post Header */}
      <header className="post-header mb-12">
        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category: WPCategory) => (
              <CategoryBadge
                key={category.id}
                name={category.name}
                slug={category.slug}
                size="md"
              />
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-earth mb-6 leading-tight">
          {post.title.rendered}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
          {author && (
            <div className="flex items-center gap-3">
              {author.avatar_urls?.['48'] && (
                <Image
                  src={author.avatar_urls['48']}
                  alt={author.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              )}
              <div>
                <p className="font-medium text-earth">{author.name}</p>
                <p className="text-sm text-gray-500">Author</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 text-sm">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Featured Image */}
        {featuredImage && (
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden bg-khaki-light mb-8">
            <Image
              src={featuredImage.source_url}
              alt={featuredImage.alt_text || post.title.rendered}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Post Content */}
      <div
        className="post-content prose prose-lg max-w-none
          prose-headings:font-serif prose-headings:text-earth
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-a:text-earth prose-a:no-underline hover:prose-a:underline
          prose-strong:text-earth
          prose-img:rounded-lg
          prose-blockquote:border-l-4 prose-blockquote:border-earth prose-blockquote:pl-4 prose-blockquote:italic
          prose-code:text-earth prose-code:bg-khaki-light prose-code:px-1 prose-code:rounded
          prose-pre:bg-earth prose-pre:text-white"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-12 pt-8 border-t border-khaki-light">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: WPTag) => (
              <TagBadge key={tag.id} name={tag.name} slug={tag.slug} />
            ))}
          </div>
        </div>
      )}

      {/* Author Bio */}
      {author && author.description && (
        <div className="mt-12 p-6 bg-khaki-light rounded-lg">
          <div className="flex items-start gap-4">
            {author.avatar_urls?.['96'] && (
              <Image
                src={author.avatar_urls['96']}
                alt={author.name}
                width={96}
                height={96}
                className="rounded-full"
              />
            )}
            <div>
              <h3 className="font-serif text-2xl text-earth mb-2">
                About {author.name}
              </h3>
              <p className="text-gray-700">{author.description}</p>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
