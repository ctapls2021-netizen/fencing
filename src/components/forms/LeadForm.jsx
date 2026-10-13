import React from 'react';
import { TextField } from './TextField.jsx';
import { SelectField } from './SelectField.jsx';
import { Button } from '../core/Button.jsx';
const PRODUCTS = ['Driveway Gates', 'Walk Gates', 'Fencing', 'Wall Toppers', 'Railings', 'Pergolas', 'Garage Doors', 'Equipment Enclosures', 'Building Cladding', 'Security Bars'];
const TIMELINES = ['As soon as possible', '1–3 months', '3–6 months', 'Just researching'];
export function LeadForm({ variant = 'hero', title, banner, submitLabel, products = PRODUCTS, onSubmit, style }) {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); onSubmit && onSubmit(e); };
  const hero = variant === 'hero';
  const done = <div style={{ padding: '32px 0', textAlign: 'center', fontFamily: 'var(--font-display)' }}>
    <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8 }}>We'll be in touch</div>
    <div style={{ fontWeight: 300, fontSize: 14, lineHeight: 1.5 }}>Thanks — someone from our team will reach out shortly to set up your consultation.</div></div>;
  if (hero) return <form onSubmit={submit} style={{ background: 'var(--grad-blue-panel)', color: '#fff', boxShadow: 'var(--shadow-panel)', width: '100%', maxWidth: 300, boxSizing: 'border-box', ...style }}>
    {banner && <div style={{ background: 'var(--mb-blue)', color: 'var(--mb-yellow)', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 10.5, textAlign: 'center', padding: '7px 10px' }}>{banner}</div>}
    <div style={{ padding: '26px 28px 30px' }}>
      <h3 style={{ margin: '0 0 18px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, lineHeight: 1.15, textAlign: 'center' }}>{title || 'Ready To Get Started On Your Project?'}</h3>
      {sent ? done : <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <TextField variant="boxed" label="Name" required /><TextField variant="boxed" label="Email" type="email" /><TextField variant="boxed" label="Phone" type="tel" />
        <TextField variant="boxed" label="Zip Code" /><SelectField variant="boxed" label="Product Interest" options={products} />
        <Button variant="accent" type="submit" fullWidth size="sm" style={{ marginTop: 6, fontSize: 10.5 }}>{submitLabel || 'Schedule Your Free Consultation'}</Button>
      </div>}
    </div>
  </form>;
  return <form onSubmit={submit} style={{ color: 'inherit', width: '100%', maxWidth: 420, ...style }}>
    {sent ? done : <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: '14px 12px' }}>
      <TextField label="Full Name" placeholder="Jane Doe" /><TextField label="Phone Number" placeholder="(310) 555-0123" type="tel" />
      <TextField label="Email Address" placeholder="jane@email.com" type="email" /><TextField label="ZIP Code" placeholder="90210" />
      <SelectField label="What are you interested in?" options={products} style={{ gridColumn: '1 / -1' }} />
      <SelectField label="Project Timeline" placeholder="Select a timeline" options={TIMELINES} style={{ gridColumn: '1 / -1' }} />
      <div style={{ gridColumn: '1 / -1', marginTop: 4 }}>
        <Button variant={variant === 'full-gold' ? 'accent' : 'primary'} type="submit" fullWidth uppercase={false}>
          {submitLabel || <span><span style={{ color: variant === 'full-gold' ? 'inherit' : 'var(--mb-yellow)' }}>Request Free</span> On-Site Estimate</span>}</Button>
        <div style={{ marginTop: 10, textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 10.5, opacity: .85 }}>No obligation. We respect your privacy and never share your information.</div>
      </div>
    </div>}
  </form>;
}
