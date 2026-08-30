# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public website for Missing Children Minnesota (a nonprofit), served at
`missingchildrenmn.com` (see `CNAME`). It is a Jekyll site, and it is almost
entirely *content* — there is no application code, no tests, and no build
scripts. Nearly every change is an edit to page copy, a link, or contact info
that goes live to the public on push to `main`.

## Commands

```sh
bundle install                 # first time / after Gemfile changes
bundle exec jekyll serve       # local preview at http://localhost:4000
bundle exec jekyll build       # one-off build into _site/ (gitignored)
```

There is no lint or test suite. "Verifying a change" means building or serving
locally and looking at the affected page.

`Gemfile.lock` is intentionally not committed (it's gitignored). GitHub Pages
reads neither it nor the `Gemfile` — it builds with its own pinned dependency
set — so the `Gemfile` exists purely to make local preview resemble production.
A local `bundle` failure therefore says nothing about whether the deployed site
is healthy. Don't add plugin gems that `github-pages` already bundles, and don't
pin their versions; to move dependency versions, run `bundle update github-pages`.

## Deployment

GitHub Pages builds and deploys `main` automatically using its **built-in**
Jekyll build. The custom Actions workflow that used to do this
(`.github/workflows/static.yml`) was deliberately removed in commit `7b8db8e`
("use pages build") — do not reintroduce a build workflow unless the user
explicitly asks for one.

Because Pages does the build, only plugins on the GitHub Pages allowlist are
available. `_config.yml` lists just `jekyll-feed`; `remote_theme` is supported
by Pages natively.

## Structure and conventions

- **Theme is remote**: `remote_theme: aterenin/minima-reboot` (a `minima`
  fork). Local files shadow the theme's copies, and these do:

  | Local file | Shadows / adds |
  | --- | --- |
  | `assets/main.scss` | the theme's one-line `@import "minima-reboot";` — repeats that import, then adds the MCM brand layer |
  | `_includes/header.html` | logo mark, skip link, and the crisis phone bar |
  | `_includes/footer.html` | contact, address, phones and social links |
  | `_includes/head-includes.html` | favicon and `theme-color` (the theme ships this file **empty as an extension point** — prefer it over overriding `head.html`) |
  | `_includes/banner.html` | new; renders a page banner with `srcset` and dimensions |
  | `_layouts/page.html` | renders `page.banner` between the `h1` and the content |
  | `_layouts/home.html` | the home page: mark, mission, three routes, recent posts |

  To change anything else, create the corresponding file locally — but first read
  the upstream theme to see what you're overriding.
- **Nav order is explicit** in `_config.yml` under `header_pages:`, listed by
  filename. Without it the theme falls back to alphabetical order, which buries
  `missing-child.markdown`. A new page must be added there or it won't appear.
- **Contact details live in `_config.yml` under `mcm:`** — phones (with `tel:`
  hrefs), address, social URLs. The header bar, the footer and `contact.markdown`
  all read from there, so the numbers cannot drift apart. These are
  safety-critical: change them only from an authoritative source.
- **One page per top-level file.** Each content page is a `.markdown` file at
  the repo root with front matter `layout: page`, a `title:`, and an explicit
  `permalink:` (e.g. `about.markdown` → `/about-mcm/`). The filename and the URL
  intentionally differ in places; when adding cross-links, link the *permalink*,
  not the filename.
- `index.markdown` uses `layout: home`; `blog.html` (`/blog/`) hand-renders the
  post list rather than relying on the theme's home layout.
- **Posts** live in `_posts/` as `YYYY-MM-DD-title.markdown` with
  `layout: post`; permalink pattern is `/:year/:month/:day/:title/`.
- **Every page opens with a banner image**, declared in **front matter** as
  `banner: /assets/<page>-banner.jpg` — not as a markdown image in the body,
  which is where these used to live. `_layouts/page.html` renders it through
  `_includes/banner.html`, which supplies the dimensions and the `srcset`.
  Each banner therefore ships in two widths: `<name>.jpg` at 1800px and
  `<name>-900.jpg`, both 4.5:1. Add both when adding a page. `alt` is
  deliberately empty — the brand book has these carry no text and no overlay,
  so they are decorative.
- Markdown is kramdown: a trailing `\` forces a line break (used in the address
  and phone blocks on `contact.markdown`).

## Design work

`.claude/skills/mcm-design/` is a committed, project-scoped skill holding the
MCM and KidsIdKit brand: palette, type, logos, banner imagery, and a UI kit.
Use it for anything visual — new page styling, mockups, graphics — instead of
inventing colors or pulling a logo from the live site.

The site's brand layer is `assets/main.scss`. Its `:root` block mirrors the
token names in `.claude/skills/mcm-design/tokens/`, so use those variables
rather than writing hex values. Rules the brand book states outright and that
the CSS depends on: **the website uses no cards**, loads **no webfont** (the
`--font-display`/Jost token is app-only), has **no icon system** (social links
are plain text), and has **almost no motion**. Section headings get their caps
and weight from CSS (`#content h2`), so don't type them into the markdown —
`h3` is deliberately left un-uppercased because it carries trademarked program
names like *Run, Yell & Tell!®*. It is checked in
deliberately so it travels with the repo; Jekyll never publishes it (see the
exclude note in `_config.yml`). Its `assets/imagery/` duplicates the banners in
`/assets/`; `/assets/` remains the source of truth for what the site serves.

## Content care

The site carries emergency guidance for families of missing children plus the
org's phone numbers, mailing address, and social accounts. Phone numbers,
hotline info, and the "what to do immediately" steps on `missing-child.markdown`
are safety-critical — do not reword, reorder, or "clean up" that guidance, and
never invent contact details or statistics. Copy them from an authoritative
source the user provides, or ask.
