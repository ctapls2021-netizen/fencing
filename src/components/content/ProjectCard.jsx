import React from 'react';
export function ProjectCard({ image, location, title, height = 240, style }) {
  return <figure style={{ position: 'relative', margin: 0, height, overflow: 'hidden', background: 'var(--mb-gray-200)', ...style }}>
    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    <figcaption style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '40px 12px 12px', background: 'var(--grad-caption)', color: '#fff' }}>
      {location && <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: 8, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 3, opacity: .9 }}>{location}</div>}
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 13 }}>{title}</div>
    </figcaption>
  </figure>;
}
