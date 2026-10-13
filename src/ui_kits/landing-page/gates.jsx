const { Button: GB, SectionTag: GTag, Eyebrow: GEyebrow, Icon: GIcon, LeadForm: GLeadForm, CtaBar: GCtaBar, FinancingStrip: GFin, TrustRow: GTrust, StatCallout: GStat, OfferBox: GOffer, FeatureItem: GFeature, ProductTile: GTile, SiteHeader: GHeader, SiteFooter: GFooter } = window.MulhollandBrandDesignSystem_0ab04f;

const GATE_STYLES = [
  ['gate-hitech-garden.jpg', 'horizontal-slat-gate', 'Hi-Tech Aluminum', 'Gates & Fences'],
  ['gate-profile24-palm.jpg', 'pedestrian-gate', 'Profile 24 Aluminum', 'Gates & Fences'],
  ['gate-woodlook-double.jpg', 'double-swing-gate', 'Wood-Like', 'Aluminum Series'],
  ['gate-row-1.jpg', 'glass-garage-door', 'Glass Series Gates &', 'Fences'],
  ['gate-row-2.jpg', 'solid-vertical-gate', 'Solid Aluminum Series', 'Gates & Fences'],
  ['gate-sliding-black.jpg', 'laser-cut-panel', 'Laser Cut Aluminum', 'Gates & Fences'],
  ['house-modern-slat-fence.jpg', 'traditional-picket-gate', 'Traditional Aluminum', 'Gates & Fences'],
  ['gate-row-3.jpg', 'retractable-security-gate', 'Retractable Security', 'Bars & Gates'],
  ['backyard-privacy-slats.jpg', 'walk-gate-keypad', 'Aluminum', 'Pedestrian Gates'],
];
const GATE_REVIEWS = [
  { title: "The best investment we've made in our home", quote: 'We spent months looking for a contractor who could handle both our driveway gate and side gates. Their team was incredibly professional, the installation is flawless, and the patented sliding gate operates silently.', name: 'Marcus & Sarah K.', location: 'Pasadena, CA', project: 'Custom Driveway Gate & Matching Side Gate' },
  { title: 'Perfect for coastal homes — zero maintenance!', quote: "Living right by the ocean, our old wood fence warped and rotted within three years. We upgraded to Mulholland's aluminum horizontal slat fencing and it still looks brand new after two years of salt air and sun.", name: 'David L.', location: 'Del Mar, CA', project: 'Modern Horizontal Privacy Fencing' },
  { title: 'Seamless process from factory to installation', quote: 'The fact that they manufacture everything locally in their own factory made a massive difference. We wanted a very specific custom charcoal color to match our home\u2019s trim, and they matched it perfectly.', name: 'Elena G.', location: 'Sherman Oaks, CA', project: 'Complete Perimeter Fence & Automatic Gate System' },
];
const GATE_FAQ = [
  { q: 'Can I start with just a fence now and add a matching gate later?', a: "Absolutely. Because we custom-manufacture everything in our local factory and keep your property's specifications on file, we can easily fabricate and install a perfectly matching gate or additional fencing in the future." },
  { q: 'Do you manufacture and install everything in-house?', a: 'Yes. Every gate and fence is cut, welded and powder-coated in our Canoga Park facility and installed by our own crew.' },
  { q: 'How does aluminum compare to wood or steel?', a: 'Aluminum cannot rust, never needs repainting, and will not rot, warp or split. Rinse it with a hose twice a year.' },
  { q: 'Can you automate my gate?', a: 'Yes — remote keypads, smartphone apps and telephone intercom systems are all integrated by our team.' },
];

function GatesPage() {
  return <div>
    <GHeader />
    <Hero image={PH + 'house-modern-slat-fence.jpg'} pill="Luxury Gates & Fences"
      title={<>Elevate Your Curb Appeal.<br />Upgrade Your Security.</>}
      offer={<GOffer />}
      lines={<div style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11.5, textAlign: 'center', width: 300 }}>Custom Gates • Fences • Railings • Glass Systems<div style={{ fontStyle: 'italic', fontWeight: 400, fontSize: 9.5, marginTop: 4 }}>Limited Supply Available</div></div>}
      primary="Request Free On-Site Estimate" secondary="Or Call Now: (800) 562-5770"
      trust={<GTrust />} stat={<GStat />} />
    <GFin />

    <section style={{ padding: '64px 0 0' }}>
      <Wrap style={{ display: 'flex', gap: 48, flexWrap: 'wrap', alignItems: 'center', paddingBottom: 48 }}>
        <div style={{ flex: '1 1 340px', textAlign: 'center' }}>
          <h2 style={lpH2}>Advanced gate engineering<br />&amp; smart automation</h2>
          <p style={{ ...lpBody, fontWeight: 400, color: 'var(--mb-ink)', marginTop: 12 }}>Custom-designed driveway gates, whisper-quiet motors,<br />and smart access control.</p>
        </div>
        <div style={{ flex: '1 1 340px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p style={{ ...lpBody, fontSize: 11 }}>Enhance security and make a lasting first impression with a custom aluminum gate. Every system is built to fit your property and engineered with rust-proof, maintenance-free materials.</p>
          <GFeature icon="settings" title="Patented IST™ Sliding Technology">Hides all bulky tracks and rollers inside the gate frame for a clean, silent, hovering slide.</GFeature>
          <GFeature icon="cpu" title="Smart Automation Integration">Seamlessly integrated with remote keypads, smartphone apps, and telephone intercom systems for effortless entry.</GFeature>
        </div>
      </Wrap>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: -16, left: '10%', width: '35%', zIndex: 1 }}><GTag accent="Secure" icon="shield-check" style={{ width: '100%', justifyContent: 'center' }}>Entrances</GTag></div>
        <div style={{ height: 360, background: 'url(' + PH + 'gate-sliding-black.jpg) center/cover' }} />
      </div>
      <div style={{ marginTop: 6 }}><PhotoRow images={[PH + 'gate-row-1.jpg', PH + 'gate-row-2.jpg', PH + 'gate-row-3.jpg']} gap={6} /></div>
    </section>

    <section style={{ padding: '0 0 56px', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', transform: 'translateY(-50%)' }}><GTag accent="Maintenance-free">Perimeter</GTag></div>
      <Wrap max={780}>
        <h2 style={lpH2}>Premium aluminum fencing &amp; privacy slats</h2>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, color: 'var(--mb-blue)', margin: '12px 0 6px' }}>Say goodbye to rotting wood and rusting steel. Enjoy complete privacy and lifetime durability.</p>
        <p style={{ ...lpBody, fontSize: 10.5 }}>Your backyard should be a quiet, secure sanctuary—not a fishbowl for the street to see. Mulholland Brand manufactures and installs premium architectural aluminum fencing that provides ultimate privacy and security with absolutely zero annual maintenance, staining, or painting.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, textAlign: 'left', margin: '28px 0' }}>
          <GFeature icon="columns-3" title="Looks Like Wood, Lasts Like Aluminum" titleColor="var(--mb-blue)">Get the warm, organic look of natural cedar or redwood with a marine-grade powder coating that never rots, splits, or fades.</GFeature>
          <GFeature icon="shield-check" title="Perimeter Privacy Slats" titleColor="var(--mb-blue)">Modern horizontal and vertical slats designed to block street views and wind while elevating your property value.</GFeature>
        </div>
      </Wrap>
      <Wrap max={760}>
        <PhotoRow images={[PH + 'woodlook-walk-gate.jpg', PH + 'woodlook-fence-1.jpg', PH + 'woodlook-fence-2.jpg']} height={190} gap={6} />
        <GCtaBar inset style={{ marginTop: 16 }} />
      </Wrap>
    </section>

    <section style={{ padding: '8px 0 64px', textAlign: 'center' }}>
      <GEyebrow align="center">A spectrum of gates &amp; fences</GEyebrow>
      <h2 style={{ ...lpH2, marginTop: 8 }}>Find Your Perfect Gate Style</h2>
      <p style={{ ...lpBody, fontWeight: 400, color: 'var(--mb-ink)', marginTop: 6 }}>Explore Mulholland's Custom Aluminum Designs – From Classic Elegance to Modern Innovation</p>
      <Wrap max={760} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '18px 24px', marginTop: 28 }}>
        {GATE_STYLES.map(([img, icon, a, b]) => <GTile key={a + b} image={PH + img} icon={icon} label={<>{a}<br />{b}</>} />)}
      </Wrap>
    </section>

    <section style={{ background: 'var(--mb-tint)', paddingTop: 22 }}>
      <Wrap max={650} style={{ paddingBottom: 26 }}>
        <GTag accent="So-Cal">Living</GTag>
        <h2 style={{ ...lpH2, marginTop: 14 }}>Inspirational transformations<br />across <span style={{ color: 'var(--mb-blue)' }}>Southern California</span></h2>
        <p style={{ ...lpBody, fontSize: 10.5, maxWidth: 340, marginTop: 10 }}>Explore real-world projects designed, manufactured, and installed by our team. See how we combine security, privacy, and premium architectural style.</p>
      </Wrap>
      <Mosaic items={[
        { image: PH + 'gate-sliding-black.jpg', location: 'Bel Air, CA', title: 'Pedestrian Entry Gate' },
        { image: PH + 'gate-row-1.jpg', location: 'Pasadena, CA', title: 'Perimeter Fence Run' },
        { image: PH + 'woodlook-fence-1.jpg', location: 'Sherman Oaks, CA', title: 'Automated Driveway Gate' },
        { image: PH + 'backyard-privacy-slats.jpg', location: 'Del Mar, CA', title: 'Backyard Privacy Slats' }]} />
    </section>
    <div style={{ background: 'var(--mb-blue)', paddingBottom: 28 }}><GFin /><GCtaBar style={{ background: 'transparent', padding: '0 24px' }} /></div>

    <Testimonials image={PH + 'woodlook-fence-2.jpg'} items={GATE_REVIEWS} />

    <section style={{ padding: '40px 0 0' }}>
      <Wrap max={760} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 32, alignItems: 'end' }}>
        <div style={{ paddingBottom: 28 }}>
          <GEyebrow>The Mulholland advantage</GEyebrow>
          <h2 style={{ ...lpH2, marginTop: 10 }}>We do both — gates and fences, <span style={{ color: 'var(--mb-blue)' }}>under one roof</span></h2>
          <p style={{ ...lpBody, fontSize: 10.5, marginTop: 14 }}>Most homeowners hire one contractor for their fence and a completely separate company for their gate. This often leads to mismatched colors, conflicting metal profiles, and multiple contractors pointing fingers at each other.</p>
          <p style={{ ...lpBody, fontSize: 10.5, marginTop: 10 }}>Because Mulholland Brand is a full-service manufacturer and installer of both gates and fences, we ensure a flawless, coordinated design across your entire property.</p>
        </div>
        <div style={{ height: 300, background: 'url(' + PH + 'house-modern-slat-fence.jpg) center/cover' }} />
      </Wrap>
      <Wrap max={760}><GCtaBar inset /></Wrap>
      <Wrap max={760} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 0 }}>
        <div style={{ minHeight: 250, background: 'url(' + PH + 'backyard-privacy-slats.jpg) center/cover' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, padding: '26px 0 26px 20px' }}>
          <GFeature layout="stacked" icon="users" title="One trusted local team">A single point of contact from design to installation — no finger-pointing between contractors.</GFeature>
          <GFeature layout="stacked" icon="ruler" title="Perfectly coordinated design">Matching colors and metal profiles across your gates and fencing, every time.</GFeature>
          <GFeature layout="stacked" icon="shield-check" title="One comprehensive warranty">Your entire perimeter system is covered under a single, unified warranty.</GFeature>
          <GFeature layout="stacked" icon="expand" title="Built to expand">Start with a fence or a gate today — we engineer systems to match and grow later.</GFeature>
        </div>
      </Wrap>
    </section>

    <Faq items={GATE_FAQ} />

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
      <div style={{ background: 'linear-gradient(var(--overlay-blue),var(--overlay-blue)), url(' + PH + 'gate-profile24-palm.jpg) center/cover', color: '#fff', padding: '80px 40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', gap: 14 }}>
        <GTag accent="Free">Consultation</GTag>
        <h2 style={{ ...lpH2, color: '#fff', fontSize: 28 }}>Get your free on-<br />site estimate</h2>
        <p style={{ ...lpBody, color: '#fff', fontSize: 10.5, maxWidth: 300 }}>Tell us about your property and a Mulholland project designer will reach out to schedule a complimentary, no-pressure on-site consultation.</p>
        <div style={{ background: 'rgba(0,0,0,.35)', padding: '6px 12px', fontFamily: 'var(--font-ui)', fontSize: 10, display: 'flex', gap: 10, alignItems: 'center' }}>Prefer to speak to a project designer? <GIcon name="contact" size={16} /></div>
        <a href="tel:8005625770" style={{ color: '#fff', textDecoration: 'none', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 18, display: 'flex', alignItems: 'center', gap: 8 }}><GIcon name="phone" size={16} />(800) 562-5770</a>
      </div>
      <div style={{ background: 'var(--mb-tint)', padding: '64px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><GLeadForm variant="full" /></div>
    </section>
    <GFooter />
  </div>;
}
window.GatesPage = GatesPage;
