import React from 'react';
export function Eyebrow({ children, color = 'var(--mb-blue)', align, style }) {
  return <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 9.5, letterSpacing: '0.24em', textTransform: 'uppercase', color, textAlign: align, ...style }}>{children}</div>;
}
