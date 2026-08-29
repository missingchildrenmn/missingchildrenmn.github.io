# UI kit — missingchildrenmn.com

Recreation of the Missing Children Minnesota public website, built from
`missingchildrenmn/missingchildrenmn.github.io` (Jekyll, `remote_theme: aterenin/minima-reboot`,
which is a Bootstrap 4.6 port of Minima) plus the live page copy at http://missingchildrenmn.com.

## Files
| File | What it is |
| --- | --- |
| `index.html` | Click-through: nav switches all seven pages |
| `SiteShell.jsx` | Header + container + footer, plus the long-form `H2/H3/H4/P/A/Quote` furniture from `#content` |
| `HomePage.jsx` | Home: centered logo, mission, program copy, latest post, RSS link |
| `MissingChildPage.jsx` | The site's most important page — the step-by-step crisis guide |
| `ResourcesPage.jsx` | Minnesota + national resource lists with phone numbers |
| `SupportPage.jsx` | Support (volunteer / give) and Contact |
| `AboutPage.jsx` | About MCM history, blog list, and the intentionally-blank Child Safety page |

## Structural facts copied from source
- Header: 5px brand rule on top (`#nav-header { border-top: 5px solid }`), hairline bottom, 3.5rem tall, title left / links right, hamburger under 768px.
- Container is Bootstrap `.container` — 1140px max at xl, 15px gutters.
- Every page is `h1` → wide banner photograph → long-form content. Banners carry no text.
- Long-form headings get `margin-top: 2rem; margin-bottom: 1rem`, and body copy in posts/pages is justified (`.text-justify`).
- Footer: site title, contact column, social column, mission statement in muted justified text.

## Known gaps
- **Child Safety** page content was not in the repository, so the page is left blank with an on-screen note rather than invented.
- The site loads no webfont; type is the Bootstrap/system stack (`--font-sans`).
