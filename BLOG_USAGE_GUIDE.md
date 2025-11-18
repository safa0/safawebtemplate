# Blog System Usage Guide

This guide explains how to use the MDX-based blog system that has been implemented for your Next.js website.

## Overview

The blog system uses MDX (Markdown with JSX) files stored in `/src/content/blog/` directory. This allows you to write blog posts in Markdown while having the ability to use React components within your content.

## File Structure

```
src/
├── app/
│   └── blog/
│       ├── page.tsx              # Blog listing page
│       └── [slug]/
│           └── page.tsx          # Individual blog post page
├── components/
│   └── blog/
│       ├── BlogCard.tsx          # Blog post card component
│       ├── MDXComponents.tsx     # Custom MDX component styling
│       └── RelatedPosts.tsx      # Related posts section
├── content/
│   └── blog/
│       ├── 5-ways-automation-transforms-business.mdx
│       ├── roi-of-workflow-automation.mdx
│       └── getting-started-with-lambdaflow.mdx
└── lib/
    └── blog.ts                   # Blog utility functions
```

## Adding a New Blog Post

### Step 1: Create a New MDX File

Create a new `.mdx` file in `/src/content/blog/` with a URL-friendly filename:

```bash
src/content/blog/my-awesome-post.mdx
```

### Step 2: Add Frontmatter

Every blog post must start with frontmatter (metadata) at the top:

```yaml
---
title: "Your Blog Post Title"
date: "2024-03-20"
excerpt: "A brief summary of your post that appears in the blog listing and social media previews."
author: "Author Name"
tags: ["automation", "AI", "workflow"]
image: "https://images.unsplash.com/photo-xxxxx"
---
```

**Frontmatter Fields:**
- `title`: The post title (required)
- `date`: Publication date in YYYY-MM-DD format (required)
- `excerpt`: Brief description, 1-2 sentences (required)
- `author`: Author name (required)
- `tags`: Array of tags for categorization (required)
- `image`: Featured image URL (required)

### Step 3: Write Your Content

After the frontmatter, write your blog post content using Markdown:

```markdown
## Main Heading

This is a paragraph with **bold text** and *italic text*.

### Subheading

- Bullet point 1
- Bullet point 2
- Bullet point 3

1. Numbered list
2. Another item

> This is a blockquote

[Link text](https://example.com)

![Image alt text](https://image-url.com)
```

### Step 4: Add Code Blocks (Optional)

For code examples, use fenced code blocks with language specification:

\`\`\`javascript
function example() {
  console.log("Hello, World!");
}
\`\`\`

\`\`\`python
def example():
    print("Hello, World!")
\`\`\`

### Step 5: Deploy

Once you save the file, the blog post will automatically appear on your blog:
- Listing page: `/blog`
- Individual page: `/blog/my-awesome-post`

## Markdown Features Supported

### Headers
```markdown
# H1 - Main Title
## H2 - Section Title
### H3 - Subsection
#### H4 - Minor Heading
##### H5 - Small Heading
###### H6 - Smallest Heading
```

### Text Formatting
```markdown
**bold text**
*italic text*
~~strikethrough~~
`inline code`
```

### Lists
```markdown
# Unordered List
- Item 1
- Item 2
  - Nested item

# Ordered List
1. First item
2. Second item
3. Third item
```

### Links and Images
```markdown
[Link Text](https://example.com)
![Image Alt Text](https://image-url.com)
```

### Blockquotes
```markdown
> This is a blockquote
> It can span multiple lines
```

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |
```

### Horizontal Rules
```markdown
---
```

## Styling

All MDX content is automatically styled to match your site's design:
- Earth tones color scheme (#2F4538)
- Serif fonts for headings
- Khaki accents
- Responsive design
- Syntax highlighting for code blocks

## SEO Features

The blog system automatically generates:
- Meta titles and descriptions
- Open Graph tags for social sharing
- Twitter Card metadata
- JSON-LD structured data
- Automatic sitemaps (via Next.js)

## Related Posts

Related posts are automatically displayed at the bottom of each blog post based on shared tags. The system shows up to 3 related posts.

## Tips for Great Blog Posts

1. **Use Descriptive Titles**: Make them compelling and SEO-friendly
2. **Write Good Excerpts**: This appears in listings and social shares
3. **Choose Relevant Tags**: Helps with related posts and organization
4. **Use Quality Images**: Unsplash is great for free, high-quality images
5. **Break Up Content**: Use headings, lists, and images to improve readability
6. **Add Code Examples**: When relevant, code blocks help explain technical concepts
7. **Link to Resources**: Add links to relevant internal and external content

## Image Guidelines

### Featured Images
- Recommended size: 1920x1080px or larger
- Format: JPG or PNG
- Use Unsplash for free, high-quality images
- Ensure proper licensing for all images

### In-Content Images
```markdown
![Descriptive alt text](https://image-url.com)
```

## Example Blog Post Template

```mdx
---
title: "How to Implement AI in Your Business"
date: "2024-03-20"
excerpt: "Learn practical strategies for successfully implementing AI technologies in your organization with real-world examples and best practices."
author: "Jane Smith"
tags: ["AI", "implementation", "strategy"]
image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80"
---

Introduction paragraph that hooks the reader and explains what they'll learn.

## Problem Statement

Describe the problem your post addresses...

## Solution Overview

Provide your main insights...

### Step 1: Planning

Detailed explanation...

### Step 2: Implementation

More details...

## Real-World Examples

Share case studies or examples...

## Key Takeaways

- Takeaway 1
- Takeaway 2
- Takeaway 3

## Conclusion

Wrap up your post and provide a call-to-action...

---

**Ready to get started?** Contact us for a free consultation.
```

## Publishing Checklist

Before publishing a new blog post, verify:

- [ ] Frontmatter is complete and correct
- [ ] Title is compelling and SEO-friendly
- [ ] Excerpt is clear and concise
- [ ] Author name is correct
- [ ] Tags are relevant
- [ ] Featured image is high quality and properly sized
- [ ] All links work correctly
- [ ] Images have alt text
- [ ] Content is proofread and error-free
- [ ] Code blocks have proper syntax highlighting
- [ ] Post displays correctly on desktop and mobile

## Troubleshooting

### Post Not Appearing
- Check that the file is in `/src/content/blog/`
- Ensure the file has `.mdx` extension
- Verify frontmatter is properly formatted
- Restart the development server

### Formatting Issues
- Check that frontmatter uses proper YAML syntax
- Ensure there are no spaces before the opening `---`
- Verify all required fields are present

### Image Not Loading
- Verify the image URL is correct and accessible
- Check that Unsplash images use the correct format
- Ensure images are added to Next.js remote patterns if needed

## Advanced Features

### Custom Components (Future Enhancement)

While not implemented yet, MDX supports custom React components:

```mdx
import { CustomButton } from '@/components/CustomButton'

<CustomButton>Click Me</CustomButton>
```

### Draft Posts

To create a draft post that won't appear on the site:
1. Create the file with a different extension like `.draft.mdx`
2. Or store it outside the `/src/content/blog/` directory
3. Move it into the blog directory when ready to publish

## Need Help?

If you need assistance with the blog system:
1. Check this guide first
2. Review existing blog posts for examples
3. Consult the Next.js and MDX documentation
4. Contact your development team

---

Happy blogging!
