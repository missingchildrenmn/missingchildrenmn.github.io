Use Button for every tappable action in MCM app or site work; it carries the 48px minimum touch size the app enforces.

```jsx
<Button variant="primary" icon="add-circle" block>Add a new child</Button>
<Button variant="back">Back</Button>
```

Variants: `primary`/`save` = teal #145c6c, `back`/`secondary` = green #70af6d, `danger` = orange text-only (destructive), `clear`/`icon` = transparent. Icons are Ionicons names — load the Ionicons CDN script on the page.
