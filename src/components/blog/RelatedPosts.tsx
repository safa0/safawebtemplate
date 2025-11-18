"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BlogPostMetadata } from '@/lib/blog-types';
import { BlogCard } from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPostMetadata[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.related-posts-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-16 bg-khaki-light">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="related-posts-title font-serif text-4xl text-earth mb-12 text-center">
          Related Articles
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
