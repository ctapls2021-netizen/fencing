import React from 'react';
import { Logo } from '../core/Logo.jsx';
export function SiteFooter({ blurb = 'Since 1994 we have been designing, fabricating, and installing our USA-made products to the glowing satisfaction of our customers.', year = 2026, style }) {
  return <footer style={{ background: '#fff', padding: '48px 24px 44px', textAlign: 'center', ...style }}>
    <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, paddingBottom: 22, borderBottom: '1px solid var(--mb-blue-light)', width: '100%' }}>
        <Logo height={32} style={{ margin: '0 auto' }} />
        <p style={{ margin: 0, maxWidth: 520, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 11.5, lineHeight: 1.6, color: 'var(--text-body)', textAlign: 'center' }}>{blurb}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6, paddingTop: 14, fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 9.5, color: 'var(--text-muted)', textAlign: 'center', width: '100%' }}>
        <span>© {year} Mulholland Brand. All rights reserved.</span>
        <span>30+ Years · Made in Our LA Factory · Rust-Proof Aluminum</span>
      </div>
    </div>
  </footer>;
}
