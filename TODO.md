# TODO

## Navigation Review Observations (2026-04-09)

- [x] **FAQ hash scroll timing**: Resolved — FAQ is now its own page route `/faq` instead of a hash link `/#faq`. Eliminated the Lenis smooth scroll race condition entirely.

- [ ] **Category/tag badges unused as links**: `CategoryBadge` and `TagBadge` in `src/components/blog/CategoryBadge.tsx` are `<Link>` components, but `BlogCard.tsx` renders tags as plain `<span>` elements instead (correctly, since the card itself is already wrapped in a `<Link>`). Consider whether these link components are dead code or if they should be used elsewhere (e.g. blog detail page, blog sidebar filter).

- [ ] **Social links not configured**: Footer supports LinkedIn and Twitter links via `siteConfig.social`, but they are not currently rendering. Add social URLs to `src/config/site.ts` when ready.
