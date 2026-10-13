import React from 'react';
export function StatCallout({ value = '30+', caption = 'Years Designing, Manufacturing & Installing', sub = 'Across Southern California', color = '#fff', style }) {
  return <div style={{ textAlign: 'center', color, ...style }}>
    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 200, fontSize: 44, lineHeight: 1, color: 'var(--mb-gold)', letterSpacing: '-0.01em' }}>{value}</div>
    <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 10, marginTop: 8, lineHeight: 1.4 }}>{caption}{sub && <><br />{sub}</>}</div>
  </div>;
}
