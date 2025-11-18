"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { gsap } from 'gsap';
import { WPCategory, WPTag } from '@/lib/wordpress';

interface BlogHeaderProps {
  categories: WPCategory[];
  tags: WPTag[];
}

export function BlogHeader({ categories, tags }: BlogHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const headerRef = useRef<HTMLElement>(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  useEffect(() => {
    // Initialize from URL params
    setSearchQuery(searchParams?.get('search') || '');
    setSelectedCategory(searchParams?.get('category') || '');
    setSelectedTag(searchParams?.get('tag') || '');
  }, [searchParams]);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.8,
        ease: 'power2.out',
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters({ search: searchQuery });
  };

  const handleCategoryChange = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
    updateFilters({ category: categorySlug });
  };

  const handleTagChange = (tagSlug: string) => {
    setSelectedTag(tagSlug);
    updateFilters({ tag: tagSlug });
  };

  const updateFilters = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams?.toString());

    // Update or remove parameters
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    // Navigate with new params
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
    router.push('/blog');
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedTag;

  return (
    <header ref={headerRef} className="bg-white border-b border-khaki-light">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-5xl md:text-6xl text-earth mb-4">
            Insights & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expert perspectives on automation, AI, and digital transformation
          </p>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-24 rounded-full border border-khaki bg-white text-earth placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-earth"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-earth text-white rounded-full hover:bg-khaki-dark transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-earth">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="px-4 py-2 rounded-full border border-khaki bg-white text-earth focus:outline-none focus:ring-2 focus:ring-earth"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.slug}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-earth">Tag:</label>
            <select
              value={selectedTag}
              onChange={(e) => handleTagChange(e.target.value)}
              className="px-4 py-2 rounded-full border border-khaki bg-white text-earth focus:outline-none focus:ring-2 focus:ring-earth"
            >
              <option value="">All Tags</option>
              {tags.map((tag) => (
                <option key={tag.id} value={tag.slug}>
                  {tag.name}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-earth hover:text-khaki-dark underline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
