Use PinPad for the app's sign-in screen; the "Safety information" escape hatch belongs in `children`.

```jsx
<PinPad title="Enter your PIN" subtitle="Your data stays on this device." filled={2} hint="4 to 8 digits">
  <Button variant="primary">Unlock</Button>
</PinPad>
```
