import React from 'react';
export function ProductTile({ image, icon, label, href, onClick, style }) {
  const [h, setH] = React.useState(false);
  const base = (typeof window !== 'undefined' && window.MB_ASSET_BASE) || '/assets/';
  const iconSrc = icon && (icon.indexOf('/') >= 0 ? icon : base + 'icons/products/' + icon + '.png');
  return <a href={href} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'block', position: 'relative', textDecoration: 'none', cursor: 'pointer', paddingBottom: 12, ...style }}>
    <div style={{ aspectRatio: '3 / 2', overflow: 'hidden', background: 'var(--mb-gray-200)' }}>
      <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: h ? 'scale(1.04)' : 'none', transition: 'transform var(--dur-slow) var(--ease-out)' }} />
    </div>
    <div style={{ position: 'absolute', left: '24%', right: '24%', bottom: 0, background: '#fff', boxShadow: h ? 'var(--shadow-card)' : 'none', transition: 'box-shadow var(--dur-med)' }}>
      {iconSrc && <div style={{ height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><img src={iconSrc} alt="" style={{ height: 24, opacity: .8 }} /></div>}
      <div style={{ background: h ? 'var(--mb-blue-deep)' : 'var(--mb-blue)', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 10.5, lineHeight: 1.15, textAlign: 'center', padding: '5px 8px', transition: 'background var(--dur-fast)' }}>{label}</div>
    </div>
  </a>;
}
