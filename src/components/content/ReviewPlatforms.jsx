import React from 'react';
const DEFAULT = [{ name: 'Google', rating: '5.0' }, { name: 'yelp', rating: '4.9' }, { name: 'houzz', rating: '5.0' }, { name: 'facebook', rating: '4.9' }];
export function ReviewPlatforms({ items = DEFAULT, color = '#fff', style }) {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 48, flexWrap: 'wrap', color, ...style }}>
    {items.map(p => <div key={p.name} style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: p.name === 'Google' ? 500 : 800, fontSize: 17, letterSpacing: '-0.01em' }}>{p.name}</span>
      {p.rating && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16 }}>{p.rating}</span>}
    </div>)}
  </div>;
}
