import React from 'react';
const FILES = { primary: 'mulholland-logo-out-of-the-ordinary.png', white: 'mulholland-logo-aluminum-tech-white.png', 'white-outline': 'mulholland-logo-aluminum-tech-white-outline.png', mark: 'mb-road-mark-blue.png', 'mark-white': 'mb-road-mark-white.png' };
export function Logo({ variant = 'primary', height = 36, src, style, alt = 'Mulholland Brand' }) {
  const base = (typeof window !== 'undefined' && window.MB_ASSET_BASE) || '/assets/';
  return <img src={src || base + 'logo/' + FILES[variant]} alt={alt} style={{ height, width: 'auto', display: 'block', ...style }} />;
}
