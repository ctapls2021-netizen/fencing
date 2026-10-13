import React from 'react';
const LUCIDE = 'https://cdn.jsdelivr.net/npm/lucide-static@0.469.0/icons/';
const cache = {};
function load(name) {
  if (!cache[name]) cache[name] = fetch(LUCIDE + name + '.svg').then(r => r.ok ? r.text() : '').catch(() => '');
  return cache[name];
}
export function Icon({ name, size = 18, color = 'currentColor', title, style, stroke }) {
  const [svg, setSvg] = React.useState('');
  React.useEffect(() => { let on = true; load(name).then(t => { if (on) setSvg(t.replace(/<svg([^>]*)>/, (m, a) => '<svg' + a.replace(/\s(width|height|class)="[^"]*"/g, '') + ' width="100%" height="100%">').replace(/stroke-width="[^"]*"/, m => stroke ? 'stroke-width="' + stroke + '"' : m)); }); return () => { on = false; }; }, [name, stroke]);
  return <span role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}
    style={{ display: 'inline-flex', flex: 'none', width: size, height: size, color, lineHeight: 0, ...style }} dangerouslySetInnerHTML={{ __html: svg }} />;
}
