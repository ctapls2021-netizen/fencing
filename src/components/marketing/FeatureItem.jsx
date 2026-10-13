import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function FeatureItem({ icon, title, children, layout = 'inline', titleColor, tone = 'light', style }) {
  const dark = tone === 'dark';
  const fg = dark ? '#fff' : 'var(--mb-ink)';
  const ic = layout === 'inline'
    ? <span style={{ width: 28, height: 28, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--mb-blue)', marginTop: 2 }}><Icon name={icon} size={16} color="#fff" /></span>
    : <Icon name={icon} size={28} color={dark ? '#fff' : 'var(--mb-blue)'} />;
  return <div style={{ display: 'flex', flexDirection: layout === 'inline' ? 'row' : 'column', gap: layout === 'inline' ? 12 : 10, ...style }}>
    {icon && ic}
    <div style={{ minWidth: 0 }}>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: layout === 'inline' ? 15 : 16, lineHeight: 1.15, color: titleColor || fg, marginBottom: 5 }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 11.5, lineHeight: 1.55, color: dark ? 'rgba(255,255,255,.85)' : 'var(--text-muted)', textWrap: 'pretty' }}>{children}</div>
    </div>
  </div>;
}
