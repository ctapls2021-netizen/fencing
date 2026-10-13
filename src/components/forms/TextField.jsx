import React from 'react';
export function TextField({ label, placeholder, value, onChange, type = 'text', name, variant = 'labeled', required, error, style }) {
  const [focus, setFocus] = React.useState(false);
  const boxed = variant === 'boxed';
  return <label style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
    {label && !boxed && <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13, color: 'inherit' }}>{label}</span>}
    <input name={name} type={type} required={required} value={value} onChange={onChange} placeholder={boxed ? (placeholder || label) : placeholder}
      onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-label={label}
      style={{ height: 'var(--field-h)', boxSizing: 'border-box', width: '100%', padding: '0 14px', borderRadius: 0, outline: 'none', background: '#fff', color: 'var(--mb-ink)',
        border: '1px solid ' + (error ? 'var(--mb-danger)' : focus ? 'var(--mb-blue)' : 'var(--border-field)'), boxShadow: focus ? '0 0 0 3px rgba(44,101,176,.18)' : 'none',
        fontFamily: 'var(--font-ui)', fontSize: boxed ? 12 : 13, fontWeight: boxed ? 700 : 400 }} />
    {error && <span style={{ fontFamily: 'var(--font-ui)', fontSize: 11, color: 'var(--mb-danger)' }}>{error}</span>}
  </label>;
}
