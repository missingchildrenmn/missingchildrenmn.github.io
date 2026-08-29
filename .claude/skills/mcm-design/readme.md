# Missing Children Minnesota — Design System

Missing Children Minnesota (MCM) is an all-volunteer Minnesota nonprofit, founded by parents of
missing children in 1983. Its work is threefold: help locate missing children, support families
during and after a search, and teach abduction prevention and personal safety to children and
adults. Since 1983 MCM has helped more than 3,500 families across the Midwest, and it runs four
educational programs in schools, daycares, early-childhood and family-education groups, churches
and camps.

Contact of record: P.O. Box 1111, Minnetonka, MN 55345 · 612.334.9449 · 888.RUN.YELL
(888.786.9355) · general.info@missingchildrenmn.com

## Products in this system

| Surface | What it is | Source |
| --- | --- | --- |
| **missingchildrenmn.com** | The public website — mission, crisis guidance, resources, support, blog. Jekyll on GitHub Pages using the `aterenin/minima-reboot` remote theme (a Bootstrap 4.6 port of Minima). | https://github.com/missingchildrenmn/missingchildrenmn.github.io |
| **KidsIdKit** | A digital kids ID kit app: parents keep a private, on-device record (photos, physical details, medical notes, care providers, friends, social accounts) and export a printable sheet for law enforcement. .NET MAUI Blazor Hybrid + Blazor WASM, UI built on Ionic web components. | https://github.com/missingchildrenmn/KidsIdKit |

Sources used to build this system (explore them for deeper fidelity — they contain much more
than is captured here):

- https://github.com/missingchildrenmn/missingchildrenmn.github.io — site config, banners, logo
- https://github.com/missingchildrenmn/KidsIdKit — **`docs/colors.md` is the authoritative color
  definition**, plus `KidsIdKit.Core/scss/custom.scss`, `SharedComponents/*.razor(.css)`,
  `wwwroot/css/ionic-overrides.css`, and the `resources/` logo + app-icon assets
- https://github.com/aterenin/minima-reboot — the site's remote Jekyll theme (layouts, `_layout.scss`)
- https://github.com/HTBox/MobileKidsIdApp — the legacy app, cited by KidsIdKit's readme as
  holding additional design detail (not read for this build)
- Live page copy: http://missingchildrenmn.com (home, about, missing child, resources, support, contact)

## Index

| Path | What's there |
| --- | --- |
| `styles.css` | Entry point — imports every token file. Consumers link this. |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`, `shape.css`, `layout.css`, `fonts.css` |
| `assets/logo/` | MCM teal mark, black print mark, favicon, KidsIdKit app icons |
| `assets/imagery/` | Site banner photographs, Minnesota outline, inspiration board |
| `assets/icons/` | `pdf.jpg` (used in the app's export screen) |
| `assets/fonts/` | `OpenSans-Regular.ttf` (ships with the MAUI app) |
| `cards/` | Foundation specimen cards for the Design System tab |
| `components/core/` | `Button`, `Icon`, `ContentCard`, `Logo`, `Alert`, `BusyOverlay` |
| `components/site/` | `SiteHeader`, `SiteFooter`, `PageBanner`, `PageHeader`, `PostListItem`, `LinkList` |
| `components/app/` | `AppToolbar`, `AppMenu`, `ChildCard`, `EditText`, `EditBool`, `PinPad` |
| `ui_kits/website/` | Click-through recreation of missingchildrenmn.com (7 pages) |
| `ui_kits/kidsidkit/` | Click-through recreation of the KidsIdKit app (6 screens) |
| `SKILL.md` | Agent-skill entry point |
| `github.md` | Upstream repo association + screen map |

Every component ships `<Name>.jsx`, `<Name>.d.ts` (props) and `<Name>.prompt.md` (when & how).

## CONTENT FUNDAMENTALS

**Who is speaking, and to whom.** MCM writes as *we* to *you* — "you" being a parent, almost
always a frightened one. Copy is instructional and second-person imperative: "Call the police and
tell the dispatcher 'My child is missing, I need to make a report.'" Never marketing-voice, never
third-person institutional ("MCM strives to…") except in the history section.

**Acknowledge, then instruct.** The house move is one sentence of honest emotional
acknowledgement followed immediately by an action: *"Searching for a missing child is terrifying.
There's no way around that. At the same time, it is important to maintain your focus so that you
can be effective."* Do not soften the first half and do not skip the second.

**Structure.** Long pages are stacks of short imperative sections with heading-as-instruction:
SEARCH THE IMMEDIATE AREA · CALL THE POLICE · START A LOG BOOK · WHEN YOUR CHILD IS FOUND…
Each section is 1–4 short paragraphs. Bullets are used for lists of resources, roles, or
history — not for procedure, which is written as prose so it reads calmly.

**Casing.** Page-section headings are set in FULL CAPS and bold; sub-steps too. Sentence case for
body copy, buttons and nav. Emphasis is done with **bold** and, sparingly, ALL CAPS for a single
critical instruction: "CALL THE POLICE!", "**There is NO waiting period to make a report of a
missing person - call immediately**".

**Specificity is the tone.** Real numbers, statutes and named organizations do the reassuring:
"1-800-THE-LOST", "Minn. Stat. § 609.26", "Lifetouch – 1-877-689-4056", "888.RUN.YELL". Prefer a
phone number to an adjective.

**Volunteer/donor copy is warmer and more direct**, with questions: "Do you like to walk around
your neighborhood? Do you have a gift for talking to people?" This is the only place exclamation
marks are frequent.

**In the app**, microcopy is plain and orienting, one line per screen: "On this page, you can
view/edit existing kids as well as add new kids." Buttons say what they do: "Add a new child",
"Create PDF", "Unlock".

**No emoji, ever**, in product or site copy. (The KidsIdKit repo readme uses all-contributors
emoji — that is developer documentation, not brand voice.) No exclamation-heavy hype, no
euphemism ("passed away", "went missing" → "is missing"), no jargon, no acronym without its
expansion on first use ("National Center for Missing and Exploited Children (NCMEC)").

**Vibe:** a calm, competent, unglamorous neighbor who has done this before and will stay on the
phone with you.

## VISUAL FOUNDATIONS

**Color.** One family — teal — carries the brand, with three functional accents. Dark teal
(`#084150` → `#437985`, plus the app's `#145c6c`) for headers, toolbars, sidebars and primary
actions; light blue (`#46b6bc` → `#94d9da`) as the accent, seen in the logo, the card shadow and
the photographic color cast; green (`#31812e`, app `#70af6d`) for secondary/back actions, toggles
and menu dividers; orange (`#df8319`) for destructive and urgent; pale yellow (`#ede493` →
`#f6efc5`) for notes and warnings. Text is the MCM black ramp (`#212121` → `#797979`) on near-white
(`#fdfdfd` site, `#ffffff` app). Never more than one saturated hue per screen region. There are no
gradients in the brand except one inherited Blazor sidebar rule; do not introduce more.

**Type.** No webfont on the website — Bootstrap's system stack (`--font-sans`). The app is set in
Helvetica Neue / Open Sans (`--font-ui`, and Open Sans ships as a real file here). Scale is
Bootstrap's: 2.5 / 2 / 1.75 / 1.5 / 1.25 / 1rem, body 1rem at 1.5, small .875rem. App list links
are bumped to 18px for thumbs. Long-form body copy is **justified** on the site (a real, slightly
old-fashioned trait of this brand — keep it). Headings are bold, left aligned, caps for section
level, with 2rem above / 1rem below.

**Layout.** Site: single 1140px centered column, 15px gutters, no sidebars, no cards — a document.
Header is 3.5rem and not sticky; nav collapses at 768px. App: 250px sidebar over content at ≥641px
(`ion-split-pane`), stacked below; toolbar sticks to the top; the primary action is a fixed
full-width button at the bottom with a 75px spacer reserving room for it.

**Backgrounds and imagery.** Every site page opens with one wide letterbox photograph, edge to
edge inside the container, no text on it, no overlay, no scrim. The photographs are tightly
cropped, cool teal-cast, high-grain, slightly desaturated — a child's eyes, hands, a face at the
edge of frame. Emotionally serious, never stock-cheerful. Elsewhere: flat color. No repeating
patterns, no textures, no illustration — except the one hand-drawn Minnesota outline with a child
silhouette, which is the brand's only drawing and is used as-is.

**Cards.** The app's signature container: white, 1px `#212121` hairline, 10px radius, and a hard
**un-blurred 5px light-teal offset shadow** (`box-shadow:5px 5px 5px #46b6bc`) with 5px inner
padding and 10px between cards; edit actions sit absolutely in the top-right. Modal panels
(PIN card, dialogs) use 12px radius and a soft `0 4px 6px rgba(0,0,0,.1)`. The website uses no
cards at all.

**Radii.** .25rem for controls and small panels, 8px for touch list links and PIN digits, 10px
for content cards, 12px for modal cards, pill only for toggles. Photographs are square-cornered.

**Borders.** Hairline `#e9ecef` for structure (header bottom, footer top, dividers); `#212121`
hairline on content cards; 2px on PIN digit boxes; a 5px brand rule across the top of the site
header. Validation shows as a 1px outline — green `#26b050` valid, red invalid.

**Hover / press / focus.** On teal surfaces, hover is a translucent white wash
(`rgba(255,255,255,.1)`), active/selected is a stronger wash (`rgba(255,255,255,.25)`) plus white
text. On light surfaces, links simply underline or deepen toward dark teal; buttons do not scale,
lift, or shrink. Focus is a border-color change (`#0d6efd` on PIN digits) or a native outline —
never a glow. Nothing bounces.

**Motion.** Almost none, and that is deliberate — this software is used in emergencies. The only
transitions in source are a .2s border-color change and Ionic's own menu slide. Use ≤250ms,
`ease`, on color/opacity/transform-slide only. No entrance animations, no parallax, no
scroll-triggered reveals, no spinners except the blocking `ion-loading` scrim
(`rgba(0,0,0,.3)` + spinner + short message).

**Transparency and blur.** Transparency only for scrims and nav washes. **No blur anywhere** —
no frosted glass, no backdrop-filter.

**Density and touch.** 48×48 minimum on every app control (enforced in CSS), 16px between list
links, 32px drag handles. The site is comfortable rather than dense: generous paragraph rhythm,
2rem before section headings.

## ICONOGRAPHY

- **The app uses Ionicons** (bundled with Ionic). Named glyphs in source: `people-outline`,
  `information-circle-outline`, `download-outline`, `help-circle-outline`, `settings-outline`,
  `log-out-outline`, `add-circle`, `trash`, `menu`. **Outline variants for navigation, solid for
  actions** (`add-circle`, `trash`) — follow that split.
- **The glyphs are self-hosted** in `assets/icons/ionicons/` (copied from ionic-team/ionicons v7.4.0) and rendered by the `Icon` component, which inlines the SVG and rewrites its `#000` strokes to `currentColor`. Use `<Icon name="people-outline" base="../.." />`, or `Button`'s `icon` + `iconBase` props. In production Blazor code the app keeps using Ionic's own `<ion-icon>`:
  `<script type="module" src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.esm.js"></script>`
  plus the companion `<script nomodule src="https://unpkg.com/ionicons@7.4.0/dist/ionicons/ionicons.js"></script>`
  (that CDN loader renders nothing in some sandboxed previews, which is why this system ships the SVGs),
  then `<ion-icon name="people-outline"></ion-icon>`. Size via `font-size`; color via `color`.
  In `Button`, pass `icon="add-circle"`.
- Sidebar icons are locked to 24×24 with `object-fit: contain`; button icons are 1em.
- **The website has no icon system.** The theme ships exactly two inline SVGs — an RSS glyph and a
  GitHub mark — and the site itself uses neither social icons nor UI icons. Social links are plain
  text ("Facebook", "Instagram", "Twitter/X", "Mastodon", "Snapchat: Missingchildmn"). Do not add
  an icon set to the site without asking.
- No icon font, no sprite sheet, no PNG icons except `pdf.jpg` on the export screen.
- **No emoji and no unicode-glyph icons** in product UI.

## Brand assets

The supplied marks were JPEGs on a white background. Transparent PNGs were **derived from those exact
files** by unmixing the white background per pixel (no redrawing, no reconstruction):

| File | Use |
| --- | --- |
| `mcm-logo-teal.png` (455×225) · `mcm-logo-teal-2x.png` (910×450) | primary mark on light surfaces |
| `mcm-logo-black.png` (2109×963) | print / one-color |
| `mcm-logo-white.png` (1265×578) | knockout on dark teal |
| `mcm-logo-256.jpg`, `mcm-logo-full.jpg`, `mcm-logo-small.jpg` | the original supplied files, kept as-is |
| `kidsidkit-appicon.svg`, `kidsidkit-appicon-180.png`, `kidsidkit-store-icon.png` | KidsIdKit app mark |

**Still missing: a true vector (SVG/EPS) MCM logo.** The teal source is only 455px wide, so the teal
PNG is not safe above roughly 450px on screen or any size in print — use `mcm-logo-black.png` or
`mcm-logo-white.png` (both from the 2109px original) when the mark must be large. A vector redraw
should be done from the original artwork by someone with the source file, not traced from these rasters.

## Font substitutions (please review)

- **Open Sans** — real file, self-hosted from the MAUI app's resources. ✔
- **`--font-display` = Jost (Google Fonts)** — a **substitute**. The logo wordmark is set in a
  geometric sans (Futura/Century Gothic family) and no font file was provided. Jost is the closest
  free match. If MCM owns the logo font, send the file and this token should be repointed.
- The website intentionally loads **no** webfont; `--font-sans` is the system stack, as in production.

## Intentional additions

- **`BusyOverlay`**, **`PinPad`**, **`ChildCard`** and **`AppToolbar`** are extracted from single-use
  Razor markup (`BusyIndicator`, `PinEntry`, `Kids.razor`, page `ion-header` blocks) so prototypes
  can reuse them; they are not new inventions, just named.
- **`LinkList`** unifies two real list treatments (site bullet list, app touch list) behind a
  `spacing` prop.
- No Tabs, Toast, Avatar, Tooltip or Accordion exist in the sources, so none were authored.
