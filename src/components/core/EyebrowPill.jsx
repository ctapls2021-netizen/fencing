import React from 'react';
export function EyebrowPill({ children, tone = 'light', style }) {
  const light = tone === 'light';
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', padding: '5px 14px', borderRadius: 999, border: '1px solid ' + (light ? 'rgba(255,255,255,.8)' : 'var(--mb-blue)'),
    fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.24em', textTransform: 'uppercase', color: light ? '#fff' : 'var(--mb-blue)', ...style }}>
    <span style={{ width: 4, height: 4, borderRadius: 4, background: 'var(--mb-gold)' }} />{children}
  </span>;
}
