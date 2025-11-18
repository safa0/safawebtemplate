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

### 2. Horizontal Scroll Position Jump After Navigation
**Status:** Unresolved
**Priority:** High
**Component:** Header navigation / Horizontal scroll container

**Description:**
When navigating from a different page back to the homepage and then scrolling, the horizontal scroll immediately jumps past the mission section and service cards (1, 2, 3, 4), making them inaccessible.

**Steps to Reproduce:**
1. Start on homepage
2. Click on a header link (e.g., "Industries")
3. Click homepage button to return to first page
4. Attempt to scroll
5. Result: Scroll position jumps past mission and services sections

**Expected Behavior:**
Should start at the beginning of the horizontal scroll and allow smooth scrolling through all sections (Hero → Mission → Services).

**Possible Causes:**
- Scroll position is being restored from previous session
- Horizontal scroll container is not resetting position on navigation
- SmoothScrollProvider or Lenis scroll restoration interfering
- Browser scroll restoration conflicting with custom scroll implementation

**Possible Solutions:**
- Reset horizontal scroll position on route change
- Disable browser scroll restoration for this route
- Add scroll position reset in PageTransition component
- Check SmoothScrollProvider for scroll position caching

**Related Files:**
- `/src/components/ui/Header.tsx` (navigation)
- `/src/components/ui/PageTransition.tsx` (page transitions)
- `/src/components/providers/SmoothScrollProvider.tsx` (scroll management)
- `/src/app/page.tsx` (horizontal scroll container)

---

## Resolved Bugs

(None yet)

---

## Future Enhancements

(To be added)
