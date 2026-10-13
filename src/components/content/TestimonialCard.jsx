import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function TestimonialCard({ title, quote, name, location, project, tone = 'onBlue', style }) {
  const blue = tone === 'onBlue';
  const fg = blue ? '#fff' : 'var(--mb-ink)';
  return <div style={{ color: fg, display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0, ...style }}>
    <div style={{ display: 'flex', gap: 3 }}>{[0,1,2,3,4].map(i => <span key={i} style={{ color: 'var(--mb-star)', fontSize: 15, lineHeight: 1 }}>★</span>)}</div>
    <div style={{ fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontWeight: 800, fontSize: 15, lineHeight: 1.1 }}>{title}</div>
    <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 300, fontSize: 10.5, lineHeight: 1.6, flex: 1 }}>{quote}</div>
    <div style={{ borderTop: '1px solid ' + (blue ? 'rgba(255,255,255,.4)' : 'var(--mb-gray-400)'), paddingTop: 10 }}>
      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, color: blue ? '#fff' : 'var(--mb-blue)' }}>{name}</div>
      {location && <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 8.5, color: blue ? '#fff' : 'var(--mb-blue)', marginTop: 1 }}>{location}</div>}
      {project && <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
        <Icon name="badge-check" size={20} color={blue ? 'var(--mb-gold)' : 'var(--mb-blue)'} />
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 8.5, lineHeight: 1.35 }}>Verified Project: {project}</span>
      </div>}
    </div>
  </div>;
}
