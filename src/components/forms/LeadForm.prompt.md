The conversion form on every landing page — hero card and closing estimate form.
```jsx
<LeadForm variant="hero" banner="0% Financing Available · 18 Months 0% Interest*" />
<LeadForm variant="full" />      // blue submit, "Request Free" in gold
<LeadForm variant="full-gold" /> // gold submit, for use on a blue panel
```
- Submitting swaps to a "We'll be in touch" confirmation (fake).
- Full variant inherits text color: set color #fff when placed on blue.
