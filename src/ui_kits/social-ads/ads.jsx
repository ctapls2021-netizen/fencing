const { Logo: ALogo, Icon: AIcon } = window.MulhollandBrandDesignSystem_0ab04f;
const AP = '../../assets/';
const adSeal = (file, size, style) => <img src={AP + 'badges/' + file} alt="Top Quality Since 1994" style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', boxShadow: 'var(--shadow-badge)', ...style }} />;
const goldBar = { background: 'var(--grad-gold-soft)', color: 'var(--mb-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28, fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em' };

function AdStoryPremium() {
  return <div style={{ width: 1080, height: 1920, position: 'relative', background: 'url(' + AP + 'photos/house-modern-slat-fence.jpg) center 30%/cover', overflow: 'hidden' }}>
    <div style={{ background: 'var(--mb-blue)', height: 446, padding: '200px 110px 0', color: '#fff', fontFamily: 'var(--font-display)', fontSize: 76, lineHeight: 1.05 }}>
      <div style={{ fontWeight: 700 }}>Premium Custom</div><div style={{ fontWeight: 300 }}>Gates &amp; Fences</div>
    </div>
    {adSeal('seal-top-quality-crown.png', 236, { position: 'absolute', right: 86, top: 340 })}
    <div style={{ position: 'absolute', left: 0, right: 0, top: 940, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 30, color: '#fff', textShadow: 'var(--shadow-text)' }}>
      <img src={AP + 'icons/products/horizontal-slat-gate.png'} style={{ height: 80, filter: 'invert(1)' }} /><img src={AP + 'icons/products/pedestrian-gate.png'} style={{ height: 80, filter: 'invert(1)' }} />
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 38, letterSpacing: '0.08em', lineHeight: 1.1 }}>Fabricated Locally.<br />Installed to Perfection.</div>
    </div>
    <div style={{ ...goldBar, position: 'absolute', left: 0, right: 0, top: 1110, height: 100, fontSize: 32 }}><AIcon name="move-right" size={60} />Schedule A Consultation</div>
    <div style={{ position: 'absolute', left: 0, right: 0, top: 1250, display: 'flex', justifyContent: 'center' }}><ALogo height={80} style={{ boxShadow: 'var(--shadow-badge)' }} /></div>
    <div style={{ position: 'absolute', inset: '1210px 0 0', background: 'linear-gradient(180deg,rgba(60,60,60,.85),rgba(40,40,40,.95))', zIndex: -1 }} />
  </div>;
}

function AdFeedWoodLook() {
  const cols = [['factory-floor.jpg', 'Made in our LA factory', 'Engineered for your project. No middleman, no compromise.'], ['gate-row-2.jpg', 'Built & installed by our crew', 'Precision. Quality. No middleman.'], ['backyard-privacy-slats.jpg', 'Slopes are our specialty', '30+ years mastering slopes. Any terrain.']];
  const it = { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fff', textShadow: '0 4px 18px rgba(0,0,0,.45)' };
  return <div style={{ width: 1080, height: 1350, position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg,rgba(15,25,45,.75) 0%,rgba(15,25,45,0) 30%,rgba(15,25,45,0) 45%,rgba(15,25,45,.6) 62%), url(' + AP + 'photos/woodlook-fence-1.jpg) center 30%/cover' }}>
    <div style={{ ...it, fontStyle: 'normal', fontWeight: 700, fontSize: 30, textAlign: 'center', paddingTop: 36, borderBottom: '2px solid rgba(255,255,255,.35)', paddingBottom: 18, margin: '0 40px' }}>The beauty of wood. The strength of aluminum</div>
    <div style={{ padding: '30px 64px 0' }}>
      <div style={{ ...it, fontStyle: 'normal', fontWeight: 900, fontSize: 84, lineHeight: 1 }}><span style={{ color: 'var(--mb-yellow)' }}>The wood look</span> you love.</div>
      <div style={{ ...it, fontSize: 64, lineHeight: 1.1, marginTop: 8 }}>Aluminum built to last.</div>
      <ALogo height={66} style={{ marginTop: 36, boxShadow: 'var(--shadow-badge)' }} />
    </div>
    {adSeal('seal-top-quality-shield.png', 150, { position: 'absolute', right: 40, top: 236 })}
    <div style={{ position: 'absolute', left: 0, right: 0, top: 560, textAlign: 'center' }}>
      <div style={{ ...it, fontSize: 54 }}>Act now and get up to</div>
      <div style={{ ...it, fontWeight: 900, fontSize: 230, lineHeight: .9, letterSpacing: '-0.06em' }}>60<span style={{ color: 'var(--mb-yellow)' }}>%</span>OFF<sup style={{ fontSize: 60 }}>*</sup></div>
    </div>
    <div style={{ position: 'absolute', left: 0, right: 0, top: 800, height: 110, background: 'var(--mb-yellow)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 30, paddingBottom: 18, zIndex: 0 }}>
      <div style={{ ...it, color: 'var(--mb-navy)', textShadow: 'none', fontSize: 38, textTransform: 'none', display: 'flex', alignItems: 'center', gap: 14 }}><AIcon name="triangle-alert" size={40} />LIMITED-TIME <span style={{ fontWeight: 600 }}>OFFER</span></div>
      <div style={{ ...it, color: 'var(--mb-navy)', textShadow: 'none', fontSize: 38, textTransform: 'none', display: 'flex', alignItems: 'center', gap: 6 }}><AIcon name="chevron-right" size={40} />While Inventory Lasts</div>
    </div>
    <div style={{ position: 'absolute', left: 0, right: 0, top: 910, bottom: 0, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, background: 'var(--mb-blue)', borderTop: '10px solid var(--mb-blue)' }}>
      {cols.map(([img, t, s]) => <div key={t} style={{ background: 'linear-gradient(180deg,rgba(20,35,70,0) 30%,rgba(20,35,70,.75) 60%,rgba(44,101,176,.95)), url(' + AP + 'photos/' + img + ') center/cover', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', textAlign: 'center', padding: '0 24px 44px' }}>
        <div style={{ ...it, fontSize: 30, lineHeight: 1.05 }}>{t}</div>
        <div style={{ ...it, fontWeight: 400, textTransform: 'none', fontSize: 25, marginTop: 14, lineHeight: 1.1 }}>{s}</div>
      </div>)}
    </div>
  </div>;
}

function AdStoryCollage() {
  const q = (img) => <div style={{ background: 'url(' + AP + 'photos/' + img + ') center/cover' }} />;
  return <div style={{ width: 1080, height: 1920, display: 'grid', gridTemplateRows: '640px 640px 640px', background: 'var(--mb-blue)' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>{q('house-modern-slat-fence.jpg')}{q('house-modern-slat-fence.jpg')}</div>
    <div style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 72, lineHeight: 1.05 }}><b>Premium Custom</b><br /><span style={{ fontWeight: 300 }}>Gates &amp; Fences</span></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginTop: 36 }}>
        <img src={AP + 'icons/products/horizontal-slat-gate.png'} style={{ height: 60, filter: 'invert(1)' }} />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 30, letterSpacing: '0.06em', textAlign: 'left' }}>Fabricated Locally.<br />Installed to Perfection.</div>
      </div>
      <div style={{ ...goldBar, alignSelf: 'stretch', height: 84, fontSize: 26, marginTop: 50 }}><AIcon name="move-right" size={44} />REQUEST A DESIGN CONSULTATION</div>
      <ALogo height={74} style={{ marginTop: 36 }} />
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>{q('gate-sliding-black.jpg')}{q('gate-row-3.jpg')}</div>
  </div>;
}

function AdSquarePergola() {
  return <div style={{ width: 1080, height: 1080, position: 'relative', overflow: 'hidden', background: 'var(--grad-photo-protect), url(' + AP + 'photos/pergola-louvered-bar.jpg) center/cover', color: '#fff' }}>
    <div style={{ position: 'absolute', left: 80, top: 90, right: 80 }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, border: '2px solid rgba(255,255,255,.85)', borderRadius: 999, padding: '10px 28px', fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 22, letterSpacing: '0.24em' }}><span style={{ width: 10, height: 10, borderRadius: 10, background: 'var(--mb-gold)' }} />LUXURY OUTDOOR LIVING</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 104, lineHeight: 1, letterSpacing: '-0.02em', marginTop: 40, textShadow: 'var(--shadow-text)' }}><span style={{ color: 'var(--mb-yellow)' }}>Save 20%</span><br />on Custom<br />Pergolas</div>
      <div style={{ display: 'inline-block', border: '2px solid rgba(255,255,255,.75)', padding: '16px 28px', marginTop: 36, fontFamily: 'var(--font-display)', fontSize: 40 }}>+ Get a <b style={{ color: 'var(--mb-yellow)', fontWeight: 800 }}>Free Designer</b> <span style={{ fontWeight: 300 }}>Privacy Screen</span></div>
    </div>
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 150, background: 'var(--grad-blue-bar)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 80px' }}>
      <ALogo height={70} />
      <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 34, color: 'var(--mb-yellow)', display: 'flex', alignItems: 'center', gap: 14 }}><AIcon name="phone" size={34} />(800) 562-5770</div>
    </div>
  </div>;
}

Object.assign(window, { AdStoryPremium, AdFeedWoodLook, AdStoryCollage, AdSquarePergola });
