import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function CtaBar({ label = 'Request Free On-Site Estimate', phone = '(800) 562-5770', href = '#quote', inset = false, style }) {
  const [h, setH] = React.useState(false);
  return <div style={{ background: 'var(--grad-blue-bar)', padding: inset ? '18px 24px' : '22px 24px', display: 'flex', justifyContent: 'center', ...style }}>
    <a href={href} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center', padding: '9px 30px', borderRadius: 999, background: h ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.13)', border: '1px solid rgba(255,255,255,.18)', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 12.5, color: '#fff', transition: 'background var(--dur-fast)' }}>
      <span>{label}</span>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--mb-yellow)', fontWeight: 700 }}><Icon name="phone" size={13} />Or Call Now: {phone}</span>
    </a>
  </div>;
}
