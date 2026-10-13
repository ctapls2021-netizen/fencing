import React from 'react';
import {
  Button, SectionTag, Eyebrow, EyebrowPill, Icon, LeadForm, CtaBar,
  FinancingStrip, TrustRow, StatCallout, OfferBox, FeatureItem,
  ProductTile, ProjectCard, TestimonialCard, ReviewPlatforms, FaqItem,
  SiteHeader, SiteFooter
} from '../../components/index.js';

export const PH = '/assets/photos/';
export const lpH2 = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(24px,3vw,30px)', lineHeight: 1.12, color: 'var(--mb-ink)', textWrap: 'balance' };
export const lpBody = { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 12.5, lineHeight: 1.65, color: 'var(--text-body)', margin: 0, textWrap: 'pretty' };
export const Wrap = ({ children, max = 960, style }) => <div style={{ width: '100%', maxWidth: max, margin: '0 auto', padding: '0 clamp(16px,4vw,24px)', boxSizing: 'border-box', ...style }}>{children}</div>;

export function Hero({ image, pill, title, offer, lines, primary, secondary, secondaryVariant = 'outline-gold', trust, stat, formBanner }) {
  return <section style={{ position: 'relative', background: 'var(--grad-photo-protect), url(' + image + ') center/cover', color: '#fff' }}>
    <Wrap style={{ display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', padding: '56px 24px 28px' }}>
      <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start', textShadow: 'var(--shadow-text)' }}>
        <EyebrowPill>{pill}</EyebrowPill>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,4vw,40px)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>{title}</h1>
        {offer}
        {lines}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 6, textShadow: 'none' }}>
          <Button size="sm" href="#quote">{primary}</Button>
          <Button size="sm" variant={secondaryVariant} icon="phone" href="tel:8005625770">{secondary}</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap', marginTop: 28 }}>{trust}{stat}</div>
      </div>
      <div id="quote" style={{ flex: '0 1 300px' }}><LeadForm variant="hero" banner={formBanner} /></div>
    </Wrap>
  </section>;
}

export function PhotoRow({ images, height = 176, gap = 8 }) {
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + images.length + ', minmax(0,1fr))', gap }}>
    {images.map(src => <div key={src} style={{ height, background: 'url(' + src + ') center/cover' }} />)}
  </div>;
}

export function Mosaic({ items }) {
  const [a, b, c, d] = items;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 8 }}>
      <ProjectCard {...a} height={388} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><ProjectCard {...b} height={190} /><ProjectCard {...c} height={190} /></div>
    </div>
    <ProjectCard {...d} height={330} />
  </div>;
}

export function Testimonials({ image, items, variant = 'blue', title = 'What your neighbors are saying' }) {
  const blue = variant === 'blue';
  return <section style={{ background: 'url(' + image + ') center/cover', padding: '72px 24px' }}>
    <div style={{ maxWidth: 716, margin: '0 auto', background: blue ? 'rgba(44,101,176,.96)' : '#fff', border: blue ? 0 : '1px solid var(--mb-blue)', borderRadius: 'var(--radius-card)', padding: '36px 44px 40px', color: blue ? '#fff' : 'var(--mb-ink)' }}>
      <ReviewPlatforms color={blue ? '#fff' : 'var(--mb-blue)'} items={blue ? undefined : [{ name: 'Google' }, { name: 'yelp' }, { name: 'houzz' }, { name: 'facebook' }]} />
      <Eyebrow align="center" color={blue ? '#fff' : 'var(--mb-ink)'} style={{ marginTop: 28 }}>Voices of trust</Eyebrow>
      <h2 style={{ ...lpH2, color: blue ? '#fff' : 'var(--mb-blue)', textAlign: 'center', marginTop: 8 }}>{title}</h2>
      <p style={{ ...lpBody, color: 'inherit', textAlign: 'center', fontSize: 11, maxWidth: 440, margin: '10px auto 32px' }}>With over 30 years of local manufacturing and installation, we have secured and beautified thousands of Southern California homes.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 34 }}>
        {items.map(t => <TestimonialCard key={t.name} tone={blue ? 'onBlue' : 'onWhite'} {...t} />)}
      </div>
    </div>
  </section>;
}

export function Faq({ items, wide }) {
  if (wide) {
    return <section style={{ padding: '88px clamp(24px,5vw,72px) 96px', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '32px 80px', alignItems: 'flex-start' }}>
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'flex-start' }}>
          <Eyebrow>Questions, answered</Eyebrow>
          <h2 style={{ ...lpH2, fontSize: 'clamp(30px,3.8vw,44px)' }}>Frequently asked questions</h2>
          <span style={{ width: 72, height: 4, background: 'var(--mb-gold)', marginTop: 6 }}></span>
        </div>
        <div style={{ flex: '2 1 520px', borderTop: '1px solid var(--mb-blue-light)' }}>{items.map((f, i) => <FaqItem key={f.q} question={f.q} defaultOpen={i === 0} style={{ fontSize: 15 }}>{f.a}</FaqItem>)}</div>
      </div>
    </section>;
  }
  return <section style={{ padding: '56px 24px 64px', background: '#fff' }}>
    <Eyebrow align="center">Questions, answered</Eyebrow>
    <h2 style={{ ...lpH2, textAlign: 'center', marginTop: 10, marginBottom: 28 }}>Frequently asked questions</h2>
    <div style={{ maxWidth: 560, margin: '0 auto' }}>{items.map((f, i) => <FaqItem key={f.q} question={f.q} defaultOpen={i === 0}>{f.a}</FaqItem>)}</div>
  </section>;
}
