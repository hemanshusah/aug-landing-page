# OBISS HUB — Website Brand Assets

Vector recreation of the OBISS HUB mark, built as clean, scalable SVGs (all paths, no raster) so they stay crisp at any size.

## Files

**Logo (icon + wordmark)**
- `logo-primary-blue.svg` — horizontal lockup, blue `#0049DB`, for light backgrounds
- `logo-primary-white.svg` — horizontal lockup, white, for dark/blue backgrounds
- `logo-stacked-blue.svg` / `logo-stacked-white.svg` — icon above wordmark, for square/social placements

**Icon only**
- `icon-mark-blue.svg` — mark only, blue
- `icon-mark-white.svg` — mark only, white (use on `--obiss-blue` or dark backgrounds)

**Favicon**
- `favicon.svg` — rounded-square app-icon version (white mark on blue), works directly as a modern `<link rel="icon" type="image/svg+xml">`
- `favicon.ico` — multi-size (16/32/48) fallback for older browsers
- `favicon-16.png`, `favicon-32.png`, `favicon-48.png`, `favicon-192.png`, `favicon-512.png` — PNG fallbacks
- `apple-touch-icon.png` — 180×180 for iOS home screen

**Footer watermark**
- `footer-watermark.svg` — full lockup at 8% opacity, for a subtle background mark in a footer or hero section

**Styles**
- `brand-colors.css` — CSS variables for the three brand colors + font stack

## HTML head snippet

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="alternate icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

## Notes
- All logo/icon SVGs use `viewBox` only (no fixed width/height), so they scale cleanly — set size via CSS/HTML attributes wherever you place them.
- Wordmark is set in bold Arial/Helvetica via `<text>` (not outlined to paths). If a designer later hands you the exact brand typeface, swap the `font-family` in the `<text>` elements or ask me to convert the text to outlined paths for pixel-perfect consistency across every browser/OS.
- Colors: `#0049DB` (primary), `#579BFF` (accent), `#F3F3F3` (light neutral) — matches your brand sheet.
