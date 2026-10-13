import React from 'react';
import { Icon } from '../core/Icon.jsx';
const CARDS = ['paypal', 'amex', 'discover', 'mastercard', 'visa'];
export function FinancingStrip({ tone = 'blue', note = 'Flexible Payment Options for Your Project', style }) {
  const base = (typeof window !== 'undefined' && window.MB_ASSET_BASE) || '/assets/';
  const blue = tone === 'blue';
  const fg = blue ? '#fff' : 'var(--mb-navy)';
  return <div style={{ background: blue ? 'var(--mb-blue)' : 'var(--mb-gray-100)', padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, flexWrap: 'wrap', ...style }}>
    <div style={{ borderTop: '1px solid ' + (blue ? 'rgba(255,255,255,.6)' : 'var(--mb-blue)'), borderBottom: '1px solid ' + (blue ? 'rgba(255,255,255,.6)' : 'var(--mb-blue)'), padding: '4px 0', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>
      <span style={{ color: blue ? 'var(--mb-yellow)' : 'var(--mb-blue)', fontSize: 18 }}>0%</span> <span style={{ color: blue ? 'var(--mb-yellow)' : 'var(--mb-blue)' }}>FINANCING</span> <span style={{ color: fg }}>AVAILABLE</span>
    </div>
    <div style={{ display: 'flex', gap: 6 }}>{CARDS.map(c => <img key={c} src={base + 'payment/' + c + '.png'} alt={c} style={{ width: 26, height: 18, borderRadius: 2, display: 'block' }} />)}</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontWeight: 600, fontSize: 11, color: fg }}><Icon name="arrow-right" size={14} />{note}</div>
  </div>;
}
