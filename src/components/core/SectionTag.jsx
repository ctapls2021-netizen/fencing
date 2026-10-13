import React from 'react';
import { Icon } from './Icon.jsx';
export function SectionTag({ accent, children, icon, variant = 'solid', accentColor, iconColor, style }) {
  const solid = variant === 'solid';
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: solid ? '9px 22px' : 0, background: solid ? 'var(--mb-blue)' : 'transparent',
    fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontWeight: 800, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: solid ? '#fff' : 'var(--mb-ink)', ...style }}>
    {icon && <Icon name={icon} size={15} color={iconColor || (solid ? '#fff' : 'var(--mb-blue)')} />}
    <span>{accent && <span style={{ color: accentColor || (solid ? 'var(--mb-yellow)' : 'var(--mb-blue)') }}>{accent} </span>}{children}</span>
  </span>;
}
