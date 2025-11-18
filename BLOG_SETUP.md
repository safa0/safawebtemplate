# Blog System with WordPress Integration

This project includes a comprehensive blog system with WordPress REST API integration.

## Features

- **WordPress Integration**: Seamlessly fetch posts, categories, tags, and media from WordPress
- **Modern Design**: Responsive design matching the LambdaFlow aesthetic with earth tones and serif fonts
- **SEO Optimized**: OpenGraph tags, Twitter cards, and JSON-LD structured data
- **Performance**: ISR (Incremental Static Regeneration) with 1-hour revalidation
- **Search & Filtering**: Full-text search, category filtering, and tag filtering
- **Pagination**: Client-side pagination with URL parameter support
- **GSAP Animations**: Smooth scroll-triggered animations consistent with the site
- **Related Posts**: Automatically shows related articles based on categories/tags

## File Structure

```
src/
├── lib/
│   └── wordpress.ts              # WordPress API utilities and type definitions
├── components/
│   └── blog/
│       ├── BlogCard.tsx          # Post preview card component
│       ├── BlogPost.tsx          # Full post display component
│       ├── BlogHeader.tsx        # Header with search/filter functionality
│       ├── RelatedPosts.tsx      # Related posts section
│       └── CategoryBadge.tsx     # Category and tag badge components
└── app/
    └── blog/
        ├── page.tsx              # Blog listing page (/blog)
        └── [slug]/
            └── page.tsx          # Dynamic blog post page (/blog/[slug])
```

## WordPress Setup

### 1. Prerequisites

You need a WordPress site with the REST API enabled (WordPress 4.7+). The REST API is enabled by default in modern WordPress installations.

### 2. Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and set your WordPress API URL:
   ```bash
   NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
   ```

### 3. WordPress Configuration

#### Basic Setup (Public Posts)

For public posts, no additional configuration is needed. The REST API exposes public posts by default.

#### Advanced Setup (Authentication)

If you need to access draft posts or private content:

1. **Install Application Passwords** (WordPress 5.6+):
   - Go to Users → Profile in WordPress admin
   - Scroll to "Application Passwords"
   - Create a new application password
   - Copy the generated password

2. **Add credentials to `.env.local`**:
   ```bash
   WORDPRESS_AUTH_USER=your_username
   WORDPRESS_AUTH_PASSWORD=your_application_password
   ```

3. **Update API calls** in `src/lib/wordpress.ts` to include authentication headers:
   ```typescript
   const headers: HeadersInit = {};
   if (process.env.WORDPRESS_AUTH_USER && process.env.WORDPRESS_AUTH_PASSWORD) {
     headers.Authorization = `Basic ${btoa(
       `${process.env.WORDPRESS_AUTH_USER}:${process.env.WORDPRESS_AUTH_PASSWORD}`
     )}`;
   }
   ```

### 4. WordPress Plugins (Recommended)

While not required, these plugins enhance the blog experience:

- **Yoast SEO**: Better SEO meta tags
- **Advanced Custom Fields (ACF)**: Add custom fields to posts
- **WP REST API Controller**: Fine-tune API responses
- **JWT Authentication**: Alternative authentication method

## Usage

### Creating Blog Posts in WordPress

1. Log into your WordPress admin
2. Go to Posts → Add New
3. Write your post content
4. Set a featured image (recommended for best appearance)
5. Assign categories and tags
6. Publish

The post will automatically appear on your Next.js site within 1 hour (ISR revalidation period).

### Customization

#### Adjust Revalidation Time

In `src/lib/wordpress.ts`, change the `revalidate` value in fetch calls:

```typescript
next: { revalidate: 3600 } // 3600 seconds = 1 hour
```

Or in `src/app/blog/[slug]/page.tsx`:

```typescript
export const revalidate = 3600; // Revalidate every hour
```

#### Change Posts Per Page

In `src/app/blog/page.tsx`, adjust the `perPage` value:

```typescript
const { posts, pagination } = await getPosts({
  page,
  perPage: 12, // Change this number
  // ...
});
```

#### Modify Colors

The blog uses colors from `tailwind.config.ts`:

- `earth`: Main brand color (#9C8B6C)
- `khaki-light`: Light background (#E8DCC4)
- `khaki-dark`: Dark accent (#8B7355)

#### Custom WordPress Fields

To add custom fields:

1. Install ACF (Advanced Custom Fields) in WordPress
2. Create custom fields for posts
3. Update types in `src/lib/wordpress.ts`:

```typescript
export interface WPPost {
  // ... existing fields
  acf?: {
    custom_field_name: string;
    // Add your custom fields
  };
}
```

4. Access in components:

```typescript
const customValue = post.acf?.custom_field_name;
```

## API Reference

### Main Functions (src/lib/wordpress.ts)

#### `getPosts(params)`

Fetch posts with filtering and pagination.

```typescript
const { posts, pagination } = await getPosts({
  page: 1,
  perPage: 10,
  categories: [1, 2],
  tags: [5],
  search: 'automation',
  orderBy: 'date',
  order: 'desc'
});
```

#### `getPostBySlug(slug)`

Fetch a single post by its slug.

```typescript
const post = await getPostBySlug('my-blog-post');
```

#### `getAllPostSlugs()`

Get all post slugs for static generation.

```typescript
const slugs = await getAllPostSlugs();
```

#### `getCategories()`

Fetch all categories.

```typescript
const categories = await getCategories();
```

#### `getTags()`

Fetch all tags.

```typescript
const tags = await getTags();
```

#### `getRelatedPosts(post, limit)`

Get related posts based on categories and tags.

```typescript
const relatedPosts = await getRelatedPosts(currentPost, 3);
```

## SEO Features

### OpenGraph Tags

Each blog post includes OpenGraph tags for social sharing:

- Title
- Description
- Image
- Type (article)
- Published time
- Author

### Twitter Cards

Twitter-specific meta tags for better Twitter sharing appearance.

### JSON-LD Structured Data

Structured data for search engines:

- Article schema
- Author information
- Publication dates
- Featured image

### Dynamic Metadata

Each page generates dynamic metadata based on post content.

## Performance Optimization

### ISR (Incremental Static Regeneration)

Pages are statically generated and revalidated every hour, providing:

- Fast page loads (static HTML)
- Fresh content (regular revalidation)
- Reduced API calls (caching)

### Image Optimization

Uses Next.js `Image` component for:

- Automatic image optimization
- Lazy loading
- Responsive images
- WebP format support

### Caching Strategy

- WordPress API responses are cached via Next.js fetch cache
- Static pages are regenerated on-demand when stale
- Client-side navigation uses Next.js router cache

## Troubleshooting

### Posts Not Showing

1. **Check API URL**: Verify `NEXT_PUBLIC_WORDPRESS_API_URL` is correct
2. **Test API**: Visit `https://your-site.com/wp-json/wp/v2/posts` directly
3. **Check WordPress Settings**: Ensure posts are published (not drafts)
4. **CORS Issues**: If developing locally, ensure WordPress allows requests from localhost

### Images Not Loading

1. **Check Featured Images**: Ensure posts have featured images set in WordPress
2. **Image URLs**: Verify image URLs in WordPress media library are accessible
3. **SSL Issues**: If WordPress uses HTTP but Next.js uses HTTPS, update WordPress to HTTPS

### Slow Performance

1. **Increase Revalidation Time**: Longer cache periods reduce API calls
2. **Limit Posts Per Page**: Fewer posts = faster initial load
3. **Optimize WordPress**: Use caching plugins like WP Super Cache
4. **Use CDN**: Serve WordPress media through a CDN

### API Errors

1. **Check Console**: Look for error messages in browser/terminal
2. **WordPress API**: Ensure REST API is enabled (Settings → Permalinks → Save)
3. **Rate Limiting**: Some hosts limit API requests
4. **Authentication**: If using auth, verify credentials are correct

## Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Next.js Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [WordPress Application Passwords](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)

## Future Enhancements

Consider adding:

- **Comments System**: Integrate WordPress comments or third-party solutions
- **Newsletter Signup**: Add email subscription forms
- **Reading Progress Bar**: Show scroll progress on blog posts
- **Table of Contents**: Auto-generate TOC for long posts
- **Social Sharing Buttons**: Easy sharing to social platforms
- **Dark Mode**: Theme toggle for blog pages
- **Search Highlighting**: Highlight search terms in results
- **Infinite Scroll**: Alternative to pagination
- **Draft Preview**: Preview unpublished posts
- **Multi-author Support**: Author archive pages
