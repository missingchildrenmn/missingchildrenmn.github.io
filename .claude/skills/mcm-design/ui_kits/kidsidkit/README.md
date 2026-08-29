# UI kit — KidsIdKit

Recreation of the KidsIdKit app (`missingchildrenmn/KidsIdKit`): a .NET MAUI Blazor Hybrid app
that lets a parent keep a private, on-device ID record for each child. UI is built from
`KidsIdKit.Core` — Razor components using **Ionic** web components (`ion-*`) and **Ionicons**.

## Files
| File | What it is |
| --- | --- |
| `index.html` | Click-through: PIN unlock → Kids → child details; menu routes to Information, Export, Settings; Sign out returns to the lock screen |
| `AppShell.jsx` | Phone viewport, sliding side menu (`ion-menu`), and the sign-in screen (`PinEntry`) |
| `Screens.jsx` | Kids, child details, Information, Export Data, Settings |

## Structural facts copied from source
- Toolbar: `ion-toolbar color="primary"` = solid `#145c6c`, menu button left, page title.
- Side menu: `ion-menu` on `--mcm-dark-teal-1`, Ionicons outline glyphs, 3rem rows, active row on `rgba(255,255,255,.25)`, a 2px green `ion-item-divider` between the two groups. Real items: Kids, Information, Export Data, About | Settings, Sign out.
- Fields are `ion-input fill="outline" mode="md"` with a 34px minimum height; booleans are `ion-toggle justify="end" color="secondary"` (green).
- Every control clears 48×48 (`%min-size-48`); Save is teal, Back is green.
- Records are grouped in `.content-card` — 1px black border, 10px radius, hard 5px teal offset shadow.
- Destructive actions confirm through `McmAlert` (`ion-alert`, backdrop not dismissable).
- The lock screen offers a "Safety information" escape hatch that opens the Information area read-only — an intentional crisis affordance.

## Known gaps
- Photo capture, biometric unlock and cloud backup are represented visually only.
- Ionic's own component CSS is not loaded; the kit reproduces the rendered look with tokens.
