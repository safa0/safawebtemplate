# Bug List

## Active Bugs

### 1. Mission Section Horizontal Slats Reveal Not Working
**Status:** Unresolved
**Priority:** High
**Component:** `src/components/sections/MissionSection.tsx`

**Description:**
The horizontal slats reveal animation for the mission section text is not displaying properly. Text either doesn't appear or the animation doesn't trigger when scrolling to the section horizontally.

**Attempted Solutions:**

1. **Timeline with horizontal ScrollTrigger** (Failed)
   - Created main timeline with `horizontal: true` in ScrollTrigger config
   - Used trigger point "left center"
   - Issue: Animation didn't trigger or text remained hidden

2. **Direct animations without ScrollTrigger** (Failed)
   - Removed ScrollTrigger and used direct GSAP animations with delays
   - Issue: Animations played before section was visible (all sections mount at once in horizontal scroll)

3. **Viewport detection with conditional trigger** (Current - Still failing)
   - Added `isInViewport()` function to check if section is visible on mount
   - If visible: plays animation immediately
   - If off-screen: uses ScrollTrigger with "left 80%" start point
   - Issue: Still not revealing text properly

**Technical Details:**
- Uses SVG clip-path with 20 horizontal rectangles
- Animates scaleY from 0 to 1 with stagger
- Applied to `.mission-title`, `.mission-statement`, and `.mission-cta` elements
- Horizontal scroll context may be interfering with ScrollTrigger detection

**Possible Next Steps:**
- Try different ScrollTrigger start points (e.g., "left right", "center center")
- Test with containerAnimation property for horizontal scroll
- Consider alternative reveal methods (opacity fade, simple slide-in)
- Debug by checking if ScrollTrigger is actually firing (add markers)
- Check if horizontal scroll container is affecting trigger calculations

**Related Files:**
- `/src/components/sections/MissionSection.tsx`
- `/src/app/page.tsx` (horizontal scroll setup)
- `/src/components/providers/SmoothScrollProvider.tsx` (scroll context)

---

## Resolved Bugs

### 2. Horizontal Scroll Position Jump After Navigation
**Status:** Resolved
**Priority:** High
**Component:** SmoothScrollProvider / Browser scroll restoration
**Date Resolved:** 2025-11-18

**Description:**
When navigating from a different page back to the homepage and then scrolling, the horizontal scroll immediately jumped past the mission section and service cards, making them inaccessible.

**Root Cause:**
The issue was caused by two factors:
1. Browser's automatic scroll restoration was attempting to restore the previous scroll position when navigating back to the homepage
2. The SmoothScrollProvider wasn't resetting scroll position when the route changed, allowing cached scroll states to persist

**Solution:**
Implemented two-part fix:
1. Added `history.scrollRestoration = "manual"` in the root layout to disable browser-level scroll restoration
2. Modified SmoothScrollProvider to:
   - Import and track the current pathname using Next.js `usePathname()` hook
   - Reset scroll position to top (both window and Lenis) when the component mounts
   - Re-run the effect when pathname changes by adding it to the dependency array
   - This ensures all ScrollTriggers are properly cleaned up and recreated on navigation

**Files Modified:**
- `/src/app/layout.tsx` - Added scroll restoration prevention
- `/src/components/providers/SmoothScrollProvider.tsx` - Added route-based scroll reset

---

## Future Enhancements

(To be added)
