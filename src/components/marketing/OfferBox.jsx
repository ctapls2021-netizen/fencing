import React from 'react';
export function OfferBox({ highlight = 'Up to 30% OFF', text = 'Select Glass Products', note = 'Available in Black, White & Clear Glass', prefix, style }) {
  return <div style={{ display: 'inline-block', border: '1px solid rgba(255,255,255,.7)', padding: '10px 16px', color: '#fff', ...style }}>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: 17, lineHeight: 1.2 }}>
      {prefix && <span style={{ fontWeight: 300 }}>{prefix} </span>}<span style={{ fontWeight: 800, color: 'var(--mb-yellow)' }}>{highlight}</span> <span style={{ fontWeight: 300 }}>{text}</span>
    </div>
    {note && <div style={{ fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontSize: 9.5, textAlign: 'center', marginTop: 4 }}>{note}</div>}
  </div>;
}
