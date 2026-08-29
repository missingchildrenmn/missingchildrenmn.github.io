Use EditText for every field on a KidsIdKit details page; label above the control in portrait.

```jsx
<EditText label="Given name" value={name} onChange={e => setName(e.target.value)} />
<EditText label="Medical notes" multiline rows={4} />
```
