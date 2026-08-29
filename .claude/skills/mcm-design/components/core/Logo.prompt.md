Use Logo wherever the brand mark appears; pass `base` so nested pages resolve `assets/logo/*`.

```jsx
<Logo variant="teal" height={56} base="../.." />
```

Variants: `teal` (default, transparent PNG), `teal2x` (910px raster), `mono` (2109px black mark for print), `white` (knockout for dark teal surfaces), `app` (KidsIdKit app icon SVG). The original supplied JPEGs are still in `assets/logo/` as `mcm-logo-256.jpg` / `mcm-logo-full.jpg`. Minimum clear space around the mark: the height of the "M".
