import React from 'react';
import { Icon } from '../core/Icon.jsx';
const DEFAULT = [{ icon: 'shield-check', label: '30+ Years Experience' }, { icon: 'factory', label: 'Made in Our LA Factory' }, { icon: 'droplet', label: 'Rust-Proof Aluminum' }, { icon: 'landmark', label: '0% Financing Available' }];
export function TrustRow({ items = DEFAULT, iconColor = 'var(--mb-gold)', color = '#fff', style }) {
  return <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', ...style }}>
    {items.map(it => <div key={it.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, minWidth: 64, maxWidth: 90 }}>
      <Icon name={it.icon} size={24} color={iconColor} />
      <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 10, color, textAlign: 'center', lineHeight: 1.3 }}>{it.label}</span>
    </div>)}
  </div>;
}
