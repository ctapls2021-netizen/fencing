import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function FaqItem({ question, children, defaultOpen = false, style }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return <div style={{ borderBottom: '1px solid var(--mb-blue-light)', ...style }}>
    <button type="button" onClick={() => setOpen(!open)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, padding: '16px 0', background: 'none', border: 0, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13, color: 'var(--mb-ink)' }}>
      <span>{question}</span>
      <span style={{ width: 20, height: 20, flex: 'none', borderRadius: 20, background: 'var(--mb-tint)', border: '1px solid var(--border-hairline)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={open ? 'minus' : 'plus'} size={11} color="var(--mb-gray-600)" /></span>
    </button>
    {open && <div style={{ padding: '0 36px 18px 0', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 12.5, lineHeight: 1.65, color: 'var(--text-body)' }}>{children}</div>}
  </div>;
}
