import { FormEvent, useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  cosmeticServices, detailPages, doctorsBio, faqs, focusAreas, generalServices, hours, links,
  locations, siteNav, socials, surgicalServices, ServiceItem,
} from './content';

const logo = '/images/36d4c3e355-768x576.png';
const portrait = '/images/w9696-714x1024.jpg';
const categoryCards = [
  { name: 'General', path: '/general/', image: '/images/tooth-extraction-1.jpg', text: 'More than you imagined. Cleanings, fillings, and x-rays are only the start.', tag: 'Everyday care' },
  { name: 'Cosmetic', path: '/cosmetic-dentistry/', image: '/images/cosmetic-d.jpg', text: 'Uncover your true “wow” factor with Invisalign, veneers, and professional teeth whitening.', tag: 'Smile design' },
  { name: 'Surgical', path: '/surgical-dentistry/', image: '/images/imp-2.jpg', text: 'Whatever the concern, our dentists deliver lasting solutions with advanced implants and restorative care.', tag: 'Oral surgery' },
];
const slides = [
  { kicker: 'ROOTED IN PRECISION', title: 'ROOT\nCANAL', note: 'Gentle care for deep-rooted problems', image: '/images/Root-Canal-5-300x300.png', action: '/index.php/microscopic-root-canal-treatment/', number: '01' },
  { kicker: 'FIX YOUR CROWDED TEETH', title: 'INVISIBLE\nALIGNERS', note: 'No ugly braces. A set of aligners every two weeks and before you know it—you have a perfect smile which you’ve always wanted.', image: '/images/Orthodontic-Treatment-1-300x300.png', action: '/cosmetic-dentistry/', number: '02' },
  { kicker: 'IMPLANTING CONFIDENCE', title: 'DENTAL\nIMPLANTS', note: 'We are the pioneers of implant placement in Pakistan.', image: '/images/Implants-300x300.png', action: '/index.php/dental-implants/', number: '03' },
  { kicker: 'STRAIGHTEN YOUR SMILE', title: 'ORTHODONTIC\nTREATMENT', note: 'Explore orthodontic treatment with Dr. Rana Obaid Dental Surgery.', image: '/images/Orthodontic-Treatment-1-300x300.png', action: '/cosmetic-dentistry/', number: '04' },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className="arrow" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}
function Brand() {
  return <Link to="/" className="brand" aria-label="Dr. Rana Obaid Dental Surgery home"><img src={logo} alt="" /><span><b>DR. RANA OBAID</b><small>DENTAL SURGERY · KARACHI</small></span></Link>;
}
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <>
    <div className="concept-strip"><span className="strip-dot" /> Independent concept redesign · for discussion only <Link to="/contact/">View clinic details <Arrow /></Link></div>
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner wrap">
        <Brand />
        <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
          {siteNav.map((item) => <NavLink key={item.path} to={item.path} end={item.path === '/'} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>{item.label}</NavLink>)}
          <a className="nav-call" href={links.phone}><span className="phone-icon">↗</span><span><small>CALL THE CLINIC</small><b>0334-357-1377</b></span></a>
        </nav>
      </div>
    </header>
  </>;
}
function Footer() {
  return <footer className="site-footer">
    <div className="footer-main wrap">
      <div className="footer-brand"><Brand /><p>Professional dental care with a personal touch, in Karachi.</p><a className="footer-phone" href={links.phone}>0334-357-1377 <Arrow diagonal /></a></div>
      <div><h3>Explore</h3><div className="footer-links">{siteNav.slice(0, 6).map((item) => <Link key={item.path} to={item.path}>{item.label}</Link>)}</div></div>
      <div><h3>Visit</h3><div className="footer-links"><a href={links.tajMap} target="_blank" rel="noreferrer">Taj Medical Complex <Arrow diagonal /></a><a href={links.cliftonMap} target="_blank" rel="noreferrer">Clifton branch <Arrow diagonal /></a><a href={links.email}>Email the clinic <Arrow diagonal /></a></div></div>
      <div><h3>Follow</h3><div className="footer-links">{socials.map(s => <a key={s.label} href={s.href} target="_blank" rel="noreferrer">{s.label} <Arrow diagonal /></a>)}</div></div>
    </div>
    <div className="footer-bottom wrap"><span>© 2026 Dr. Rana Obaid Dental Surgery</span><span>Website concept · not an official clinic deployment</span><a href="#top">Back to top ↑</a></div>
  </footer>;
}
function OpeningCurtain() {
  const [visible, setVisible] = useState(true);
  const [opening, setOpening] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(false);
      return;
    }
    const beginOpening = window.setTimeout(() => setOpening(true), 850);
    const finishOpening = window.setTimeout(() => setVisible(false), 1850);
    return () => {
      window.clearTimeout(beginOpening);
      window.clearTimeout(finishOpening);
    };
  }, []);
  if (!visible) return null;
  return <div className={`opening-curtain ${opening ? 'is-opening' : ''}`} role="status" aria-live="polite" aria-label="Opening Dr. Rana Obaid Dental Surgery" aria-hidden={opening}>
    <div className="curtain-panel curtain-panel-left" /><div className="curtain-panel curtain-panel-right" />
    <div className="opening-glow" />
    <div className="opening-center"><div className="opening-logo-frame"><img src={logo} alt="" /></div><span className="opening-name">DR. RANA OBAID</span><span className="opening-subtitle">DENTAL SURGERY · KARACHI</span><div className="opening-loader"><span /></div><span className="opening-message">Preparing your visit</span></div>
  </div>;
}
function Shell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);
  return <div id="top"><OpeningCurtain /><Header /><main key={location.pathname} className="page-transition">{children}</main><Footer /><a className="whatsapp-float" href={links.whatsapp} target="_blank" rel="noreferrer" aria-label="Contact the clinic on WhatsApp"><span>◌</span><small>WhatsApp us</small></a></div>;
}
function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: React.ReactNode; copy?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'light' : ''}`}><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || reduced) return;
    const timer = window.setInterval(() => setActive(v => (v + 1) % slides.length), 6200);
    return () => window.clearInterval(timer);
  }, [paused]);
  const slide = slides[active];
  return <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel" aria-label="Featured treatments">
    <div className="hero-backdrop" />
    <div className="hero-grid wrap">
      <div className="hero-copy" key={slide.number}>
        <span className="hero-kicker"><i />{slide.kicker}</span>
        <h1>{slide.title.split('\n').map((line, i) => <span key={i}>{line}</span>)}</h1>
        <p>{slide.note}</p>
        <div className="hero-actions"><Link className="button button-gold" to={slide.action}>Explore treatment <Arrow /></Link><a className="button button-glass" href={links.phone}><span className="tiny-phone">↗</span> Call 0334-357-1377</a></div>
        <div className="hero-controls"><div className="slide-progress" role="tablist" aria-label="Choose featured treatment">{slides.map((s, i) => <button key={s.number} role="tab" aria-label={`Show ${s.title.replace('\n', ' ')}`} aria-selected={i === active} className={i === active ? 'selected' : ''} onClick={() => setActive(i)}><span>{s.number}</span><i /></button>)}</div><span className="slide-count">0{active + 1} <span>/</span> 0{slides.length}</span></div>
      </div>
      <div className="hero-art" key={`art-${slide.number}`}>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="hero-glass-card"><span className="glass-label">CARE, WITH PRECISION</span><div className="hero-photo-frame"><img src={slide.image} alt="Original dental treatment image from Dr. Rana Obaid Dental Surgery" /></div><div className="glass-card-footer"><span className="gold-spark">✳</span><span>Care designed around you<small>Dr. Rana Obaid Dental Surgery</small></span><Arrow diagonal /></div></div>
        <div className="float-note note-top"><span className="note-symbol">✳</span><span>Thoughtful care<small>From first visit to follow-up</small></span></div>
        <div className="float-note note-bottom"><span className="review-stars">★★★★★</span><b>1,200+</b><small>5-star reviews*</small></div>
        <span className="hero-index">KHI · 24°51′N</span>
      </div>
    </div>
    <div className="hero-bottom wrap"><span><i /> Patient-first dentistry in Karachi</span><a href="#meet">Discover our approach <Arrow /></a><span className="hero-scroll">SCROLL TO EXPLORE ↓</span></div>
  </section>;
}
function HomePage() {
  return <>
    <Hero />
    <section className="intro-section section-pad" id="meet"><div className="wrap intro-grid">
      <div className="intro-photo"><img src={portrait} alt="Dr. Rana Obaid in his dental clinic" /><div className="photo-caption"><span>DR. RANA OBAID</span><small>Oral & Maxillofacial Surgery</small></div><span className="image-index">01 / CLINICIAN</span></div>
      <div className="intro-copy"><SectionHeading eyebrow="MEET YOUR DENTIST" title={<>A steady hand.<br /><em>A human touch.</em></>} /><div className="bio-copy">{doctorsBio.split('\n\n').map(p => <p key={p}>{p}</p>)}</div><ul className="focus-list">{focusAreas.map((f, i) => <li key={f}><span>0{i + 1}</span>{f}</li>)}</ul><Link to="/about/" className="text-link">More about Dr. Rana <Arrow /></Link></div>
    </div></section>
    <section className="proof-strip"><div className="wrap proof-inner"><div className="proof-item"><span className="proof-icon">✳</span><span><strong>BDS · MCPS</strong><small>Clinical training</small></span></div><div className="proof-divider" /><div className="proof-item"><span className="proof-icon">⌖</span><span><strong>Since 2019</strong><small>Patient-centred practice</small></span></div><div className="proof-divider" /><div className="proof-item"><span className="proof-icon">★</span><span><strong>1,200+</strong><small>5-star reviews*</small></span></div><div className="proof-footnote">*Review count as presented on the clinic’s current website.</div></div></section>
    <section className="patient-words section-pad"><div className="wrap"><div className="services-top"><SectionHeading eyebrow="KIND WORDS FROM OUR PATIENTS" title={<>A little reassurance,<br /><em>from real visits.</em></>} copy="The following review graphics are the same ones displayed on the clinic’s current website." /><span className="reviews-count"><b>1,200+</b><small>5-star reviews*</small></span></div><div className="review-grid"><figure><img src="/images/1.png" alt="Original review graphic: Dabeer Khan praises a positive dental treatment experience for his daughter." /><figcaption><span>Patient review</span><b>Dabeer Khan</b></figcaption></figure><figure><img src="/images/2.png" alt="Original review graphic: Entishamullah Khan describes a smooth wisdom tooth extraction experience." /><figcaption><span>Patient review</span><b>Entishamullah Khan</b></figcaption></figure><figure><img src="/images/3.png" alt="Original review graphic: Shayan Siddiqui shares feedback on aligner treatment." /><figcaption><span>Patient review</span><b>Shayan Siddiqui</b></figcaption></figure></div><p className="review-disclaimer">*Review count as presented on the clinic’s current website. Reviews shown here are original graphics from that site.</p></div></section>
    <section className="services-section section-pad"><div className="wrap"><div className="services-top"><SectionHeading eyebrow="CARE THAT MEETS YOU HERE" title={<>Comprehensive care.<br /><em>One trusted team.</em></>} copy="More than you imagined. Cleanings, fillings, and x-rays are only the start." /><Link to="/services/" className="text-link">View all services <Arrow /></Link></div><div className="category-grid">{categoryCards.map((card, i) => <Link className="category-card" to={card.path} key={card.name}><div className="category-image"><img src={card.image} alt={`${card.name} dental care`} /><span className="category-number">0{i + 1}</span><span className="category-arrow"><Arrow diagonal /></span></div><div className="category-meta"><span>{card.tag}</span><span>Explore <Arrow /></span></div><h3>{card.name}</h3><p>{card.text}</p></Link>)}</div></div></section>
    <section className="locations-section section-pad"><div className="wrap"><div className="locations-header"><SectionHeading eyebrow="FIND US IN KARACHI" title={<>Two places to<br /><em>feel looked after.</em></>} copy="Choose the location that works for you. Tap through for directions." /><a className="button button-outline" href={links.phone}>Call before you visit <Arrow /></a></div><div className="clinic-glimpse"><div className="clinic-glimpse-photo"><img src="/images/clinic-3.jpg" alt="Clinic interior photograph displayed on the current website" /><span>CLINIC ENVIRONMENT</span></div><div><span className="eyebrow"><i /> A LOOK INSIDE</span><h3>A calm, comfortable space for care.</h3><p>Original clinic photo retained from the current website.</p></div></div><div className="location-grid">{locations.map((loc, i) => <article className="location-card" key={loc.name}><div className="location-top"><span className="location-count">0{i + 1} / LOCATION</span><span className="location-pin">⌖</span></div><span className="location-label">{loc.label}</span><h3>{loc.name}</h3><p className="location-address">{loc.address}</p><div className="hours-list">{loc.hours.map(h => <div key={h.days}><span>{h.days}</span><b>{h.time}</b></div>)}</div><a href={loc.map} className="text-link" target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a></article>)}</div><p className="location-note">A different address appears in older page footers on the current site: Hanif Hospital, Block B, Matric Board Office Flyover, North Nazimabad, Karachi. Please confirm this listing before publishing.</p><div className="defence-note"><span>DEFENCE BRANCH</span><p>Phone listed on the current site: <a href="tel:03409554051">0340 955 4051</a> · A street address was not shown.</p></div></div></section>
    <section className="cta-band"><div className="cta-orb" /><div className="wrap cta-inner"><span className="eyebrow"><i /> YOUR NEXT STEP</span><h2>Let's make your<br /><em>visit feel easy.</em></h2><p>Questions, appointment enquiries, or just not sure where to begin? Our team is a call away.</p><div className="cta-actions"><a href={links.whatsapp} className="button button-gold" target="_blank" rel="noreferrer">Message on WhatsApp <Arrow diagonal /></a><Link to="/contact/" className="button button-glass">Contact the clinic <Arrow /></Link></div></div></section>
  </>;
}
function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return <section className="page-hero"><div className="page-hero-lines" /><div className="wrap page-hero-content"><span className="eyebrow"><i />{eyebrow}</span><h1>{title}</h1><p>{copy}</p><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>{eyebrow}</span></div></div><span className="page-hero-mark">DRO</span></section>;
}
function AboutPage() {
  return <><PageHero eyebrow="ABOUT THE CLINIC" title="Expertise, with empathy." copy="Professional dental care rooted in experience, precision, and a personal approach." /><section className="section-pad"><div className="wrap about-layout"><div className="about-photo"><img src={portrait} alt="Dr. Rana Obaid at his clinic" /><span className="photo-caption"><b>DR. RANA OBAID</b><small>Oral & Maxillofacial Surgery</small></span></div><div className="about-copy"><SectionHeading eyebrow="MEET DR. RANA OBAID" title={<>Care that sees<br /><em>the whole person.</em></>} />{doctorsBio.split('\n\n').map(p => <p key={p}>{p}</p>)}<h3>Areas of focus</h3><ul className="focus-list">{focusAreas.map((f, i) => <li key={f}><span>0{i + 1}</span>{f}</li>)}</ul></div></div></section><section className="about-note"><div className="wrap"><p>“My goal is not only to treat but also to educate patients so they feel confident about their oral health decisions.”</p><span>— Dr. Rana Obaid</span></div></section><section className="about-source section-pad"><div className="wrap"><span className="eyebrow"><i /> CLINIC OVERVIEW</span><h2>About Us</h2><p>Looking for the best dentist in Karachi or a trusted maxillofacial surgeon near you? At Dr. Rana Obaid Dental Surgery, Taj Medical Complex, Saddar Karachi, we provide expert care in wisdom tooth extraction, surgical extractions, braces, dental implants, teeth whitening, crowns, fillings, and cosmetic dentistry.</p><p>Since, 2019, it is recognized among the top oral and maxillofacial surgeons in Karachi, our clinic offers compassionate, affordable, and professional dental care. Whether you search for a dentist near me, a dental surgeon in Karachi, or the best oral surgeon in Karachi, we ensure safe treatments with high patient satisfaction.</p></div></section></>;
}
function TreatmentCard({ item, number }: { item: ServiceItem; number: number }) {
  const detailPath = item.title === 'Dental Veneers' ? '/index.php/dental-veneers/' : item.title === 'Dental Implants' ? '/index.php/dental-implants/' : item.title === 'Root Canal Therapy' ? '/index.php/microscopic-root-canal-treatment/' : null;
  return <article className="treatment-card"><span className="treatment-num">{String(number).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.intro}</p><ul>{item.points.map(p => <li key={p}>{p}</li>)}</ul>{detailPath && <Link to={detailPath} className="treatment-cta">Read treatment details <Arrow /></Link>}<a href={links.whatsapp} className="treatment-cta" target="_blank" rel="noreferrer">Ask about this treatment <Arrow diagonal /></a></article>;
}
function ServicePage({ type }: { type: 'general' | 'cosmetic' | 'surgical' }) {
  const map = {
    general: { name: 'General dentistry', eyebrow: 'EVERYDAY DENTAL CARE', title: 'A healthy smile starts with the basics.', copy: 'A full range of general dentistry services to help you and your family maintain healthy, beautiful smiles.', items: generalServices, image: '/images/tooth-extraction-1.jpg', visuals: [{ label: 'Root canal treatment', image: '/images/Root-Canal-5-300x300.png' }, { label: 'Tooth extraction', image: '/images/tooth-extraction-300x300.png' }] },
    cosmetic: { name: 'Cosmetic dentistry', eyebrow: 'SMILE DESIGN', title: 'Feel more like yourself when you smile.', copy: 'Personalised cosmetic dentistry treatments to enhance the appearance of your teeth and help you achieve the smile you’ve always dreamed of.', items: cosmeticServices, image: '/images/cosmetic-d.jpg', visuals: [{ label: 'Dental veneers', image: '/images/Veeners-300x300.png' }, { label: 'Teeth whitening', image: '/images/Teeth-whitenning-300x300.png' }, { label: 'Orthodontic treatment', image: '/images/Orthodontic-Treatment-1-300x300.png' }] },
    surgical: { name: 'Surgical dentistry', eyebrow: 'ORAL & MAXILLOFACIAL CARE', title: 'Precision for complex care.', copy: 'Surgical dentistry focuses on procedures inside the mouth to treat complex dental and oral health conditions.', items: surgicalServices, image: '/images/ssssad70eb59-300x208.jpg', visuals: [{ label: 'Dental implants', image: '/images/Implants-300x300.png' }, { label: 'Wisdom tooth removal', image: '/images/wisdom-tooth-removal-300x300.png' }, { label: 'Tooth extraction', image: '/images/tooth-extraction-300x300.png' }] },
  }[type];
  return <><PageHero eyebrow={map.eyebrow} title={map.title} copy={map.copy} /><section className="service-lead"><div className="wrap service-lead-inner"><img src={map.image} alt={`${map.name} from the original clinic website`} /><div><SectionHeading eyebrow="CARE, EXPLAINED" title={<>A clearer path<br /><em>to feeling better.</em></>} /><p>{map.copy}</p><a href={links.phone} className="text-link">Talk to the clinic <Arrow /></a></div></div></section><section className="treatment-visuals"><div className="wrap visual-strip">{map.visuals.map((visual) => <div className="visual-item" key={visual.label}><img src={visual.image} alt="" /><span>{visual.label}</span></div>)}</div></section><section className="treatment-section section-pad"><div className="wrap"><div className="service-list-heading"><SectionHeading eyebrow={map.eyebrow} title={<>Explore {map.name}.</>} copy="Learn more about the treatments listed on the clinic’s current website." /></div><div className="treatment-grid">{map.items.map((item, i) => <TreatmentCard key={item.title} item={item} number={i + 1} />)}</div></div></section><CtaSimple /></>;
}
function ServicesPage() {
  return <><PageHero eyebrow="OUR SERVICES" title="Care for every chapter of your smile." copy="Explore the care areas and treatment information shared by Dr. Rana Obaid Dental Surgery." /><section className="section-pad services-overview"><div className="wrap"><SectionHeading eyebrow="THREE CARE PATHWAYS" title={<>Find the right place<br /><em>to start.</em></>} copy="Choose a service area to read the clinic’s information and get in touch with the team." /><div className="service-overview-grid">{categoryCards.map((c, i) => <Link className="service-overview-card" to={c.path} key={c.name}><div className="category-image"><img src={c.image} alt={`${c.name} service`} /><span className="category-number">0{i + 1}</span></div><span>{c.tag}</span><h3>{c.name} dentistry</h3><p>{c.text}</p><span className="text-link">Explore this area <Arrow /></span></Link>)}</div><div className="services-original-list"><h3>Services highlighted on the current website</h3><div>{['Dental implants', 'Dental veneers', 'Root canal treatment', 'Simple and complicated tooth extraction', 'Orthodontic treatment', 'Cosmetic dentistry', 'Wisdom tooth removal', 'Teeth whitening'].map((x, i) => <span key={x}><i>0{i + 1}</i>{x}</span>)}</div></div></div></section><CtaSimple /></>;
}
function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); setError('');
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = encodeURIComponent(`Appointment enquiry from ${d.get('name')}`);
    const body = encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || 'Not provided'}\n\n${d.get('message')}`);
    setSent(true);
    window.location.href = `mailto:info@drranaobaiddentalsurgery.com?subject=${subject}&body=${body}`;
  }
  return <form className="contact-form" onSubmit={submit}>
    <div className="form-heading"><span>01 — SEND A MESSAGE</span><h3>How can we help?</h3><p>Share a few details. Your email app will open with a message ready for the clinic.</p></div>
    <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="e.g. Ayesha Khan" /></label><label>Email address<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
    <label>Phone number <span className="optional">(optional)</span><input type="tel" name="phone" autoComplete="tel" placeholder="+92 ..." /></label>
    <label>Your message<textarea name="message" rows={4} required placeholder="Tell us what you’d like to ask…" /></label>
    {error && <p className="form-error" role="alert">{error}</p>}{sent && <p className="form-success" role="status">Your email app is opening with your enquiry. If it does not open, email us directly at info@drranaobaiddentalsurgery.com.</p>}
    <button type="submit" className="button button-blue">Prepare email to the clinic <Arrow /></button><small className="form-disclaimer">This concept form does not store or transmit your information to a server.</small>
  </form>;
}
function ContactPage() {
  return <><PageHero eyebrow="CONTACT THE CLINIC" title="Your next step can be a conversation." copy="Call, WhatsApp, or send an enquiry to Dr. Rana Obaid Dental Surgery." /><section className="contact-details"><div className="wrap contact-grid"><div className="contact-left"><SectionHeading eyebrow="WE’RE HERE TO HELP" title={<>Let’s talk<br /><em>about your care.</em></>} copy="Call or WhatsApp to discuss your dental treatment and appointment enquiry." /><a className="contact-call" href={links.phone}><span>CALL / WHATSAPP</span><strong>+92 334 357 1377</strong><Arrow diagonal /></a><a className="text-link" href={links.email}>info@drranaobaiddentalsurgery.com <Arrow diagonal /></a><div className="contact-address"><span>MAIN CLINIC</span><p>Taj Medical Complex, 3rd Floor, Room #14, MA Jinnah Road, Karachi, Pakistan</p><a href={links.tajMap} target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a></div></div><ContactForm /></div></section><section className="section-pad contact-locations"><div className="wrap"><SectionHeading eyebrow="OUR KARACHI LOCATIONS" title={<>Choose your<br /><em>nearest clinic.</em></>} /><div className="location-grid">{locations.map((loc, i) => <article className="location-card" key={loc.name}><div className="location-top"><span className="location-count">0{i + 1} / LOCATION</span><span className="location-pin">⌖</span></div><span className="location-label">{loc.label}</span><h3>{loc.name}</h3><p className="location-address">{loc.address}</p><div className="hours-list">{loc.hours.map(h => <div key={h.days}><span>{h.days}</span><b>{h.time}</b></div>)}</div><a href={loc.map} className="text-link" target="_blank" rel="noreferrer">Get directions <Arrow diagonal /></a></article>)}</div><p className="location-note">Older footer text on the current website also mentions Hanif Hospital, Block B, Matric Board Office Flyover, North Nazimabad, Karachi. Please confirm this address before it is presented as a current branch.</p><div className="defence-note"><span>DEFENCE BRANCH</span><p>Phone listed on the current website: <a href="tel:03409554051">0340 955 4051</a>. No physical address was listed with this number.</p></div></div></section></>;
}
function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqs.map((f, i) => <article key={f.question} className={`faq-item ${open === i ? 'faq-open' : ''}`}><button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}><span>{String(i + 1).padStart(2, '0')}</span>{f.question}<b>{open === i ? '−' : '+'}</b></button>{open === i && <p>{f.answer}</p>}</article>)}</div>;
}
function PatientPage() {
  return <><PageHero eyebrow="NEW PATIENTS" title="A little clarity before you visit." copy="A few helpful answers from the clinic’s current patient information." /><section className="section-pad patient-section"><div className="wrap patient-grid"><div><SectionHeading eyebrow="YOUR FIRST VISIT" title={<>Good care begins<br /><em>with good questions.</em></>} copy="The clinic asks new patients to call or message to arrange a convenient appointment." /><a href={links.whatsapp} className="button button-blue" target="_blank" rel="noreferrer">Message the clinic <Arrow diagonal /></a><div className="patient-hours"><h3>Main clinic hours</h3>{hours.map(h => <p key={h.days}><span>{h.days}</span><b>{h.time}</b></p>)}</div></div><div><div className="faq-intro"><span className="eyebrow"><i /> QUICK ANSWERS</span><h2>Before you<br /><em>get in touch.</em></h2></div><FaqAccordion /></div></div></section><section className="emergency-note"><div className="wrap"><span>NEED URGENT ATTENTION?</span><p>The clinic’s patient page asks urgent cases to WhatsApp <a href={links.whatsapp} target="_blank" rel="noreferrer">0334-357-1377</a>. For life-threatening emergencies, contact local emergency services.</p></div></section></>;
}
function CtaSimple() {
  return <section className="simple-cta"><div className="wrap simple-cta-inner"><div><span className="eyebrow"><i /> HAVE A QUESTION?</span><h2>Talk to our team.</h2></div><a className="button button-gold" href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp the clinic <Arrow diagonal /></a></div></section>;
}
function DetailTreatmentPage({ type }: { type: keyof typeof detailPages }) {
  const detail = detailPages[type];
  return <><PageHero eyebrow="TREATMENT INFORMATION" title={detail.title} copy="Treatment information from Dr. Rana Obaid Dental Surgery’s current website." /><section className="section-pad detail-page"><div className="wrap detail-layout"><img src={detail.image} alt={`${detail.title} illustration from the clinic website`} /><div><SectionHeading eyebrow="UNDERSTANDING YOUR OPTIONS" title={<>The details,<br /><em>made clearer.</em></>} /><p className="detail-intro">{detail.intro}</p><a href={links.whatsapp} target="_blank" rel="noreferrer" className="button button-blue">Ask the clinic <Arrow diagonal /></a></div></div><div className="wrap detail-facts">{detail.sections.map(section => <article key={section.title}><h2>{section.title}</h2><ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></section><CtaSimple /></>;
}
function NotFound() {
  return <section className="not-found wrap"><span className="eyebrow"><i /> NOT FOUND</span><h1>That page isn't here.</h1><Link className="button button-blue" to="/">Back to the home page <Arrow /></Link></section>;
}
export default function App() {
  return <Shell><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about/" element={<AboutPage />} />
    <Route path="/services/" element={<ServicesPage />} />
    <Route path="/general/" element={<ServicePage type="general" />} />
    <Route path="/cosmetic-dentistry/" element={<ServicePage type="cosmetic" />} />
    <Route path="/surgical-dentistry/" element={<ServicePage type="surgical" />} />
    <Route path="/contact/" element={<ContactPage />} />
    <Route path="/patient/" element={<PatientPage />} />
    <Route path="/index.php/microscopic-root-canal-treatment/" element={<DetailTreatmentPage type="rootCanal" />} />
    <Route path="/index.php/dental-veneers/" element={<DetailTreatmentPage type="veneers" />} />
    <Route path="/index.php/dental-implants/" element={<DetailTreatmentPage type="implants" />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Shell>;
}
