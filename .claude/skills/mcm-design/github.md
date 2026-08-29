repo: missingchildrenmn/missingchildrenmn.github.io
branch: main

Secondary source (design language of record): missingchildrenmn/KidsIdKit @ main —
`docs/colors.md`, `KidsIdKit.Core/scss/custom.scss`, `KidsIdKit.Core/SharedComponents/*`,
`KidsIdKit.Core/wwwroot/css/ionic-overrides.css`, `resources/`.
Theme source: aterenin/minima-reboot @ master.

## Last sync
date: 2026-08-29T21:36:45Z

### Updated in this project
- Built the token layer from KidsIdKit `docs/colors.md` and `scss/custom.scss`
- Copied MCM logos, site banner photographs, Minnesota outline and app icons into `assets/`
- Authored 17 components across core / website / KidsIdKit app families
- Added click-through UI kits for missingchildrenmn.com and the KidsIdKit app

## Screen map
| Project screen | Built from |
| --- | --- |
| `ui_kits/website/index.html` + `SiteShell.jsx` | `missingchildrenmn.github.io/_config.yml`; `aterenin/minima-reboot` `_layouts/{default,page,home,post}.html`, `_includes/{head,header,footer}.html`, `_sass/minima-reboot/_layout.scss` |
| `ui_kits/website/HomePage.jsx` | live `/` copy; `minima-reboot` `_layouts/home.html` |
| `ui_kits/website/MissingChildPage.jsx` | live `/missing-child/` copy |
| `ui_kits/website/ResourcesPage.jsx` | live `/resources/` copy |
| `ui_kits/website/SupportPage.jsx` | live `/support/` and `/contact/` copy |
| `ui_kits/website/AboutPage.jsx` | live `/about-mcm/` and `/blog/` copy (Child Safety left blank — not in sources) |
| `ui_kits/kidsidkit/AppShell.jsx` | KidsIdKit `SharedComponents/NavMenu.razor(.css)`, `MainLayout.razor(.css)`, `PinEntry.razor.css` |
| `ui_kits/kidsidkit/Screens.jsx` | KidsIdKit `Pages/Kids.razor`, `SharedComponents/{EditText,EditBool,McmAlert,BusyIndicator}.razor`, `scss/custom.scss` |
| `components/core/*` | KidsIdKit `scss/custom.scss` (`.btn-*`, `.content-card`), `McmAlert.razor`, `BusyIndicator.razor` |
| `components/site/*` | `minima-reboot` includes/layouts + site `assets/*-banner.*` |
| `components/app/*` | KidsIdKit `SharedComponents/*`, `wwwroot/css/ionic-overrides.css` |
| `tokens/colors.css` | KidsIdKit `docs/colors.md`, `scss/custom.scss`, `wwwroot/css/ionic-overrides.css` |
| `assets/**` | `missingchildrenmn.github.io/assets/*`, KidsIdKit `resources/*` + `KidsIdKit.Core/wwwroot/*` |
