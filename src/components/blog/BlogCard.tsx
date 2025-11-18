"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlogPostMetadata, formatDate } from '@/lib/blog-types';

interface BlogCardProps {
  post: BlogPostMetadata;
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

  return (
    <article ref={cardRef} className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-64 overflow-hidden bg-khaki-light">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-khaki-light text-[#2F4538] rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <h3 className="font-serif text-2xl text-[#2F4538] mb-3 group-hover:text-accent transition-colors line-clamp-2">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#2F4538]/70 mb-4 flex-1 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between text-sm text-[#2F4538]/60 pt-4 border-t border-khaki/30">
              <div className="flex items-center gap-3">
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
