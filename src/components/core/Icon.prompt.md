Thin-line icon wrapper (Lucide CDN) — use for every UI glyph: phone, shield, factory, droplet, arrows, chevrons.
```jsx
<Icon name="phone" size={16} color="var(--mb-gold)" />
```
- Icons are fetched from jsDelivr and inlined as SVG (stroke = currentColor), so `color` tints them. Common set: phone, shield-check, factory, droplet, landmark, arrow-right, chevron-down, plus, minus, badge-check, cpu, settings, gift.
- Product-type icons (gates, garage doors) are PNGs in assets/icons/products — use ProductTile or an <img>, not Icon.
