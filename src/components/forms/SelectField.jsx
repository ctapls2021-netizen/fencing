import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function SelectField({ label, placeholder = 'Select an option', options = [], value, onChange, name, variant = 'labeled', style }) {
  const boxed = variant === 'boxed';
  return <label style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
    {label && !boxed && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13 }}>{label}</span>}
    <span style={{ position: 'relative', display: 'block' }}>
      <select name={name} value={value} onChange={onChange} defaultValue={value === undefined ? '' : undefined} aria-label={label}
        style={{ appearance: 'none', WebkitAppearance: 'none', height: 'var(--field-h)', width: '100%', boxSizing: 'border-box', padding: '0 36px 0 14px', borderRadius: 0, border: '1px solid var(--border-field)', background: '#fff', color: 'var(--mb-ink)', fontFamily: 'var(--font-ui)', fontSize: boxed ? 12 : 13, fontWeight: boxed ? 700 : 400, cursor: 'pointer' }}>
        <option value="" disabled>{boxed ? (label || placeholder) : placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <Icon name="chevron-down" size={15} color="var(--mb-ink)" style={{ position: 'absolute', right: 12, top: '50%', marginTop: -7.5, pointerEvents: 'none' }} />
    </span>
  </label>;
}
