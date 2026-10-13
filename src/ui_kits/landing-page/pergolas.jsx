const { Button: PB, SectionTag: PTag, Eyebrow: PEyebrow, Icon: PIcon, LeadForm: PLeadForm, CtaBar: PCtaBar, FinancingStrip: PFin, TrustRow: PTrust, OfferBox: POffer, FeatureItem: PFeature, SiteHeader: PHeader, SiteFooter: PFooter } = window.MulhollandBrandDesignSystem_0ab04f;

const PERGOLA_REVIEWS = [
  { title: 'The ultimate backyard upgrade!', quote: 'We spent years avoiding our backyard in the afternoon because the sun was just brutal. The louvers rotate silently, and the rain sensor closed the roof perfectly during our last storm.', name: 'Robert & Chloe M', location: 'Pasadena, CA', project: 'Motorized Louvered Pergola with Free Leaf-Pattern Privacy Screen' },
  { title: 'Perfect for coastal salt air — absolutely zero maintenance.', quote: "Living right on the coast in Del Mar, our old wood pergola rotted and warped within three years. We upgraded to Mulholland's wood-like aluminum pergola and it is night-and-day difference.", name: 'Marcus T.', location: 'Del Mar, CA', project: 'Wood-Look Aluminum Pergola with Integrated Side Privacy Slats' },
  { title: 'Flawless local craftsmanship from factory to backyard.', quote: "The fact that they manufacture everything in their own local factory is why we chose them. We wanted our pergola's frame to match the exact charcoal gray of our home's window trims, and they matched it perfectly.", name: 'Elena G.', location: 'Sherman Oaks, CA', project: 'Modern Attached Louvered Pergola with Integrated LED Lighting' },
];
const PERGOLA_FAQ = [
  { q: 'How do the motorized louvers operate, and do they close automatically?', a: 'Our motorized louvers are operated via a sleek, weather-resistant remote control or a smartphone app. For ultimate peace of mind, we can integrate smart rain sensors that automatically close the louvers completely at the very first drop of rain.' },
  { q: 'How does the "Call to Verify Supply Availability" work?', a: 'Summer installation slots are limited. Call (800) 562-5770 and an advisor will confirm production availability for your dates.' },
  { q: 'Can the pergolas withstand high winds and the hot SoCal sun?', a: 'Yes. Frames are 6063-T5 architectural aluminum with a marine-grade powder coat engineered for Southern California conditions.' },
];
const SERIES = [['Profile 24 Series', '(The Most Versatile & Customizable)', 'pergola-louvered-bar.jpg'], ['Aluminum Weave Series', '(Unique "Basket Weave" Artistry)', 'pergola-louvered-bar.jpg'], ['Hi-Tech Series', '(Sleek, Ultra-Modern & High-Shade)', 'pergola-white-pool.jpg']];

function SeriesCard({ name, sub, img }) {
  const [h, setH] = React.useState(false);
  return <a href="#quote" onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: 'block', textDecoration: 'none', color: '#fff' }}>
    <div style={{ background: h ? 'var(--mb-blue-deep)' : 'var(--mb-blue)', padding: '26px 16px 22px', textAlign: 'center', transition: 'background var(--dur-fast)' }}>
      <PIcon name="arrow-down" size={16} />
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, marginTop: 10 }}>{name}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 9, marginTop: 4 }}>{sub}</div>
    </div>
    <div style={{ height: 256, background: 'url(' + PH + img + ') center/cover' }} />
  </a>;
}

function PergolasPage() {
  return <div>
    <PHeader ctaBlock />
    <Hero image={PH + 'pergola-louvered-bar.jpg'} pill="Luxury Outdoor Living"
      title={<><span style={{ color: 'var(--mb-yellow)' }}>Save 20%</span> on Custom Pergolas</>}
      offer={<POffer prefix="+ Get a" highlight="Free Designer" text="Privacy Screen" note={null} style={{ fontSize: 18 }} />}
      lines={<div style={{ fontFamily: 'var(--font-display)', fontSize: 11.5 }}>Turn your patio into a luxury, maintenance-free retreat with custom rust-proof aluminum.<div style={{ fontStyle: 'italic', fontSize: 9.5, marginTop: 4 }}>Limited summer installation slots available.</div></div>}
      primary="Request Complimentary On-Site Estimate" secondary="Or Call Now: (800) 562-5770" secondaryVariant="white"
      trust={<PTrust iconColor="#BBD4F5" items={[{ icon: 'shield-check', label: '30+ Years Experience' }, { icon: 'factory', label: 'Made in USA' }, { icon: 'droplet', label: 'Rust-Proof Aluminum' }, { icon: 'landmark', label: '0% Financing Available' }]} />}
      formBanner="0% Financing Available · 18 Months 0% Interest*" />
    <PFin tone="light" />

    <section style={{ background: 'var(--mb-blue)', color: '#fff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
      <div style={{ padding: '64px 48px', display: 'flex', flexDirection: 'column', gap: 14, justifyContent: 'center' }}>
        <PTag variant="text" icon="settings" accent="Engineered" style={{ color: '#fff' }}>for comfort</PTag>
        <h2 style={{ ...lpH2, color: '#fff' }}>Smart Outdoor Living &amp;<br />Motorized Louvered Systems</h2>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 13, margin: 0 }}>Custom-designed pergolas, motorized rotating louvers, and smart home integration.</p>
        <p style={{ ...lpBody, color: '#fff', fontSize: 10.5 }}>Don't let the harsh California sun force you indoors. Our custom-engineered louvered pergolas give you absolute control over your outdoor climate.</p>
      </div>
      <div style={{ minHeight: 300, background: 'url(' + PH + 'pergola-louvered-bar.jpg) center/cover' }} />
      <div style={{ minHeight: 280, background: 'url(' + PH + 'pergola-white-pool.jpg) center/cover' }} />
      <div style={{ background: '#fff', padding: '40px 48px', display: 'flex', flexDirection: 'column', gap: 28, justifyContent: 'center' }}>
        <PFeature layout="stacked" icon="sun" title="Whisper-Quiet Motorized Louvers" titleColor="var(--mb-blue)">Smart, hidden electric motors rotate the louvers smoothly from 0° to 130° for perfect shade-matching throughout the day.</PFeature>
        <PFeature layout="stacked" icon="trees" title="Zero-Maintenance Wood-Look Finish" titleColor="var(--mb-blue)">Enjoy the warm, organic texture of natural cedar or redwood with a marine-grade powder coating that never rots.</PFeature>
      </div>
    </section>

    <section style={{ padding: '56px 0 60px', textAlign: 'center' }}>
      <h2 style={lpH2}>Our Three Signature Aluminum Pergola Styles</h2>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 17, color: 'var(--mb-blue)', margin: '10px 0 0' }}>Every Mulholland pergola is custom-built to your property's exact dimensions.</p>
      <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--mb-blue)', margin: '2px 0 28px' }}>Choose the design that fits your architectural vision.</p>
      <Wrap max={940} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14 }}>
        {SERIES.map(([n, s, i]) => <SeriesCard key={n} name={n} sub={s} img={i} />)}
      </Wrap>
    </section>
    <PCtaBar />

    <Testimonials variant="white" title="What Your Neighbors Are Saying" image={PH + 'pergola-louvered-bar.jpg'} items={PERGOLA_REVIEWS} />

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
      <div style={{ background: 'var(--mb-blue)', color: '#fff', padding: '48px 48px', display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center' }}>
        <PEyebrow color="#fff">The Mulholland advantage</PEyebrow>
        <h2 style={{ ...lpH2, color: '#fff' }}>Why Southern California Homeowners Choose Mulholland Brand</h2>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 14, margin: 0 }}>We design, manufacture, and install premium custom pergolas under one roof.</p>
      </div>
      <div style={{ minHeight: 240, background: 'url(' + PH + 'factory-floor.jpg) center/cover' }} />
      <div style={{ minHeight: 260, background: 'url(' + PH + 'pergola-louvered-bar.jpg) center/cover' }} />
      <div style={{ background: 'var(--mb-gray-100)', padding: '36px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <PFeature layout="stacked" icon="users" title="One Trusted Local Team">A single point of contact from design to manufacturing and final installation.</PFeature>
        <PFeature layout="stacked" icon="factory" title="Custom-Fabricated Locally">Every pergola is custom-built to your patio's exact dimensions in our local LA factory.</PFeature>
        <PFeature layout="stacked" icon="shield-check" title="Rust-Proof Marine Aluminum">Fabricated from 6063-T5 architectural aluminum with a marine-grade powder coating.</PFeature>
        <PFeature layout="stacked" icon="hand-coins" title="Flexible 0% Financing">Take advantage of our 18 Months No Interest Financing and start your project today.</PFeature>
      </div>
    </section>

    <Faq items={PERGOLA_FAQ} />

    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))' }}>
      <div style={{ background: 'var(--mb-tint)', padding: '64px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, justifyContent: 'center' }}>
        <h2 style={{ ...lpH2, fontSize: 26 }}>Get your free on-site<br />estimate</h2>
        <p style={{ ...lpBody, fontSize: 10.5, maxWidth: 300 }}>Tell us about your property and a Mulholland project designer will reach out to schedule a complimentary, no-pressure on-site consultation.</p>
        <PTag accent="Summer">slots filling quickly</PTag>
        <div style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 17 }}>CALL (800) 562-5770</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 9.5, marginTop: -10 }}>TO VERIFY PRODUCTION AVAILABILITY</div>
      </div>
      <div style={{ background: 'var(--grad-blue-panel)', color: '#fff', padding: '56px 40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><PLeadForm variant="full-gold" /></div>
    </section>
    <PFooter />
  </div>;
}
window.PergolasPage = PergolasPage;
