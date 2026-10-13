import React from 'react';
import { Icon } from './Icon.jsx';
const VARIANTS = {
  primary: { bg: 'var(--mb-blue)', hover: 'var(--mb-blue-deep)', fg: '#fff', bd: 'var(--mb-blue)' },
  accent: { bg: 'var(--mb-gold)', hover: '#F0C64A', fg: 'var(--mb-navy)', bd: 'var(--mb-gold)' },
  'outline-gold': { bg: 'transparent', hover: 'rgba(228,183,61,.14)', fg: '#fff', bd: 'var(--mb-gold)' },
  white: { bg: '#fff', hover: 'var(--mb-tint)', fg: 'var(--mb-blue)', bd: '#fff' },
  'outline-light': { bg: 'transparent', hover: 'rgba(255,255,255,.12)', fg: '#fff', bd: 'rgba(255,255,255,.75)' },
  'outline-blue': { bg: '#fff', hover: 'var(--mb-tint)', fg: 'var(--mb-ink)', bd: 'var(--mb-blue)' },
  navy: { bg: 'var(--mb-navy)', hover: '#1B2A42', fg: '#fff', bd: 'var(--mb-navy)' },
};
const SIZES = { sm: { height: 34, padding: '0 14px', fontSize: 11, gap: 6, icon: 13 }, md: { height: 42, padding: '0 20px', fontSize: 12.5, gap: 8, icon: 15 }, lg: { height: 54, padding: '0 30px', fontSize: 14, gap: 10, icon: 17 } };
export function Button({ variant = 'primary', size = 'md', icon, iconRight, uppercase, tracked, fullWidth, disabled, href, onClick, type = 'button', children, style, className }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary; const s = SIZES[size] || SIZES.md;
  const upper = uppercase ?? (variant === 'accent');
  const css = { display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, alignItems: 'center', justifyContent: 'center', gap: s.gap, height: s.height, padding: s.padding, boxSizing: 'border-box',
    fontFamily: 'var(--font-ui)', fontSize: s.fontSize, fontWeight: upper ? 800 : 700, letterSpacing: tracked ? '0.28em' : upper ? '0.08em' : '0.01em', textTransform: upper ? 'uppercase' : 'none',
    color: v.fg, background: hover && !disabled ? v.hover : v.bg, border: '1px solid ' + v.bd, borderRadius: 'var(--radius-button)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
    textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast)', transform: press && !disabled ? 'translateY(1px)' : 'none', ...style };
  const Tag = href ? 'a' : 'button';
  return <Tag className={className} href={href} type={href ? undefined : type} disabled={href ? undefined : disabled} onClick={disabled ? undefined : onClick} style={css}
    onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }} onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}>
    {icon && <Icon name={icon} size={s.icon} />}{children}{iconRight && <Icon name={iconRight} size={s.icon} />}
  </Tag>;
}
