# Blog System - Quick Start Guide

## 5-Minute Setup

### 1. Set Environment Variable

Create `.env.local` in the project root:

```bash
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-wordpress-site.com/wp-json/wp/v2
```

Replace `your-wordpress-site.com` with your actual WordPress domain.

### 2. Verify WordPress REST API

Visit your WordPress REST API endpoint in a browser:

```
https://your-wordpress-site.com/wp-json/wp/v2/posts
```

You should see JSON data with your posts.

### 3. Run the Development Server

```bash
npm run dev
```

### 4. View Your Blog

- **Blog Listing**: http://localhost:3000/blog
- **Individual Post**: http://localhost:3000/blog/your-post-slug

## Testing Without WordPress

If you don't have a WordPress site yet, you can test with a demo site:

```bash
# .env.local
NEXT_PUBLIC_WORDPRESS_API_URL=https://demo.wp-api.org/wp-json/wp/v2
```

## Common WordPress API URLs

Different WordPress setups may have different API URLs:

```bash
# Standard WordPress
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-site.com/wp-json/wp/v2

# WordPress in subdirectory
NEXT_PUBLIC_WORDPRESS_API_URL=https://your-site.com/blog/wp-json/wp/v2

# WordPress.com
NEXT_PUBLIC_WORDPRESS_API_URL=https://public-api.wordpress.com/wp/v2/sites/your-site.wordpress.com
```

## What's Working

- Blog listing page at `/blog`
- Individual blog posts at `/blog/[slug]`
- Search functionality
- Category and tag filtering
- Pagination
- Related posts
- SEO meta tags
- GSAP animations
- Responsive design

## Next Steps

1. **Create Posts**: Log into WordPress and create some blog posts
2. **Set Featured Images**: Add featured images to posts for better appearance
3. **Add Categories/Tags**: Organize posts with categories and tags
4. **Customize Design**: Adjust colors and styling in components
5. **Deploy**: Deploy to Vercel/Netlify with environment variables

## Support

See `BLOG_SETUP.md` for detailed documentation and troubleshooting.
