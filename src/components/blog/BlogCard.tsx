"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WPPost, formatDate, getPlainTextExcerpt, getReadingTime } from '@/lib/wordpress';
import { CategoryBadge } from './CategoryBadge';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface BlogCardProps {
  post: WPPost;
  index?: number;
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const categories = post._embedded?.['wp:term']?.[0] as any[] || [];
  const author = post._embedded?.author?.[0];
  const readingTime = getReadingTime(post.content.rendered);

  return (
    <article ref={cardRef} className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
          {/* Featured Image */}
          {featuredImage && (
            <div className="relative w-full h-64 overflow-hidden bg-khaki-light">
              <Image
                src={featuredImage.source_url}
                alt={featuredImage.alt_text || post.title.rendered}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {categories.slice(0, 2).map((category: any) => (
                  <CategoryBadge
                    key={category.id}
                    name={category.name}
                    slug={category.slug}
                    variant="outline"
                  />
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="font-serif text-2xl text-earth mb-3 group-hover:text-khaki-dark transition-colors line-clamp-2">
              {post.title.rendered}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-4 line-clamp-3">
              {getPlainTextExcerpt(post.excerpt.rendered)}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                {author && (
                  <span className="font-medium text-earth">{author.name}</span>
                )}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
