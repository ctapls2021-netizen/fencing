import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

export function SiteHeader({ phone = '(800) 562-5770', ctaLabel = 'Free Estimate', ctaHref = '#quote', ctaBlock = false, ctaVariant = 'primary', onCta, style }) {
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < 768);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return <header style={{
    height: isMobile ? 56 : 'var(--header-h)',
    background: 'rgba(255,255,255,.98)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border-hairline)',
    boxShadow: '0 2px 10px rgba(0,0,0,.05)',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingLeft: isMobile ? 12 : 'max(24px, calc((100% - 1040px) / 2))',
    maxWidth: '100%',
    boxSizing: 'border-box',
    ...style,
    ...(isMobile ? { paddingLeft: 12 } : {}),
    position: 'sticky',
    top: 0,
    zIndex: 100
  }}>
    <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
      <Logo height={isMobile ? 28 : (ctaBlock ? 44 : 30)} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 6 : (ctaBlock ? 20 : 0), paddingRight: isMobile ? 0 : (ctaBlock ? 0 : 'max(24px, calc((100% - 1040px) / 2))') }}>
      <a href={'tel:' + phone.replace(/[^0-9]/g, '')} style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        height: 26,
        whiteSpace: 'nowrap',
        flex: 'none',
        padding: isMobile ? '0 6px' : '0 14px',
        border: ctaBlock ? 'none' : '1px solid var(--mb-blue)',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: isMobile ? 11.5 : (ctaBlock ? 15 : 11.5),
        color: 'var(--mb-ink)',
        textDecoration: 'none',
        background: ctaBlock ? 'transparent' : '#fff'
      }}>
        <Icon name="phone" size={isMobile ? 13 : (ctaBlock ? 16 : 12)} color="var(--mb-blue)" />
        {phone}
      </a>
      {ctaBlock
        ? <Button variant={ctaVariant} href={ctaHref} onClick={onCta} icon={isMobile ? undefined : "arrow-right"} uppercase tracked style={{ height: '100%', padding: isMobile ? '0 12px' : '0 48px', fontSize: isMobile ? 11 : 13.5, letterSpacing: isMobile ? '0.04em' : '0.14em', whiteSpace: 'nowrap' }}>
            {isMobile ? 'Estimate' : ctaLabel}
          </Button>
        : <Button variant={ctaVariant} href={ctaHref} onClick={onCta} uppercase size="sm" style={{ height: 26, padding: isMobile ? '0 12px' : '0 38px', fontSize: 10, letterSpacing: '0.16em', whiteSpace: 'nowrap' }}>
            {ctaLabel}
          </Button>}
    </div>
  </header>;
}
