Use Icon for every glyph in MCM app work — it is the Ionicons set the app actually uses, self-hosted so nothing depends on a CDN loader.

```jsx
<Icon name="people-outline" size={24} base="../.." />
```

Pass `base` from nested pages so the mask URL resolves. Outline names for navigation, solid (`add-circle`, `trash`) for actions. `Button`'s `icon` prop uses this component internally — set `iconBase` on the Button when nested.
