import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Palette, Factory, ShieldCheck, Truck, Globe } from 'lucide-react'
import { CupArt } from '../art.jsx'
import { useSEO, useJsonLd } from '../seo.jsx'
import { posts } from '../data/posts.jsx'

const featuredGuides = ['pet-cup-capacity-carton-planning-guide', 'injection-pp-cup-model-weight-guide', 'cup-lid-weight-caliber-guide', 'cup-sealing-film-machine-guide']

const categories = [
  { title: 'PET Cold Cups', slug: 'pet-cold-cups', desc: 'Crystal-clear cups from 74 to 107 mm, with capacities from 3 to 32 oz for boba, iced coffee and smoothies.', art: <img src="/assets/images/prod-pet.webp" alt="Clear PET cold cups in multiple sizes" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
  { title: 'Injection PP Cups', slug: 'injection-pp-cups', desc: 'Hard-wall PP cups for hot and cold drinks, in round, U-shape and square formats.', art: <img src="/assets/images/prod-pp-hard.webp" alt="Injection PP hard cups" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
  { title: 'Lids & Sealing Films', slug: 'lids-sealing-films', desc: 'Flat, dome and sipper lids plus PP/PET sealing films matched to each cup caliber.', art: <img src="/assets/images/prod-lids.webp" alt="PET and PP cup lids and sealing films" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
  { title: 'Paper & PLA Cups', slug: 'paper-pla-cups', desc: 'Single, double and ripple-wall paper cups alongside compostable PLA cold cup options.', art: <img src="/assets/images/prod-pla.webp" alt="Paper and PLA beverage cups" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
]

const whyItems = [
  { icon: <Package size={22} />, title: 'MOQ from 1,000 pcs', desc: 'Start with a size, quantity and artwork brief that matches your sourcing plan.' },
  { icon: <Palette size={22} />, title: 'Custom Logo Printing', desc: 'PET, PP and paper cup lines can be specified for branded beverage programs.' },
  { icon: <Factory size={22} />, title: 'ODM / OEM Coordination', desc: 'Discuss custom calibers, capacities and mold requirements with our sourcing team.' },
  { icon: <ShieldCheck size={22} />, title: 'Specification-Led Sourcing', desc: 'Match material, caliber, capacity and lid style before production is arranged.' },
  { icon: <Truck size={22} />, title: 'Export Packing Support', desc: 'Plan carton quantities and container loading around the selected cup specification.' },
  { icon: <Globe size={22} />, title: 'B2B Inquiry Support', desc: 'Share your target market and use case to receive a more relevant quotation.' },
]

const solutions = [
  {
    title: 'PET Cold Cup Solutions',
    desc: 'Clear PET cups for cold beverages, with matched lids available across the core caliber range.',
    art: <img src="/assets/images/prod-pet.webp" alt="Clear PET cold cups" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} loading="lazy" />,
    points: ['74 / 78 / 90 / 93 / 95 / 98 / 107 mm options', '3 oz to 32 oz capacity range', 'Straight-wall, U-shape and dessert formats', 'Matching flat, dome and sipper lids'],
    apps: 'Bubble tea · Iced coffee · Smoothies · Desserts',
  },
  {
    title: 'Injection PP Cup Solutions',
    desc: 'Hard injection-molded PP cups in round, U-shape and square formats for hot and cold drinks.',
    art: <img src="/assets/images/prod-pp-hard.webp" alt="Injection PP beverage cups" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} loading="lazy" />,
    points: ['90 / 92 square / 95 mm caliber options', '360 ml to 960 ml capacity range', 'Clear and frosted finishes', 'Compatible with standard sealing machines'],
    apps: 'Milk tea chains · Fresh juice · Yogurt drinks',
    flip: true,
  },
  {
    title: 'Lids, Films & Accessories',
    desc: 'Match lid type and sealing film to the selected cup rim before ordering.',
    art: <img src="/assets/images/prod-lids.webp" alt="Cup lids and sealing films" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} loading="lazy" />,
    points: ['Flat, dome, sipper and specialty lid types', 'PET and PP sealing film options', 'Straws, carriers and sleeves available', '90 / 92 / 95 / 98 / 119 mm matching options'],
    apps: 'Takeaway · Delivery platforms · Sealing machines',
  },
]

export default function Home() {
  useSEO({
    title: 'PET Cups Manufacturer China | Custom Plastic Cups Wholesale — Claropack',
    description: 'Factory-direct PET cold cups, injection PP cups, lids and paper cups. PET sizes from 74mm to 107mm and 3oz to 32oz. Custom logo printing from 1,000 pcs.',
  })
  useJsonLd({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Claropack',
    url: 'https://claropack.com',
    description: 'Factory-direct supplier of disposable PET cold cups, injection PP cups, lids, paper cups and food packaging.',
    email: 'jackygary6666@gmail.com',
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', telephone: '+86-181-0251-1685', availableLanguage: ['English', 'Chinese'] },
    address: { '@type': 'PostalAddress', addressRegion: 'Guangdong', addressCountry: 'CN' },
  })
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div>
            <h1>One-Stop Solution for Premium Beverage Packaging</h1>
            <p className="lead">
              Factory-direct PET cold cups, injection PP cups, lids and paper cups —
              custom printed for beverage brands, cafés and distributors worldwide.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <Link to="/products" className="btn btn-outline">Browse Products</Link>
            </div>
            <div className="hero-badges">
              <span className="hero-badge">MOQ from 1,000 pcs</span>
              <span className="hero-badge">Custom Logo Printing</span>
              <span className="hero-badge">Food-Grade Materials</span>
            </div>
          </div>
          <div className="hero-art"><CupArt straw /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Product Categories</h2>
            <p>Four core lines covering everything a beverage brand needs, from cup to lid.</p>
          </div>
          <div className="cat-grid">
            {categories.map((c) => (
              <Link to={`/products/${c.slug}`} className="cat-card" data-component="product-item" key={c.title}>
                <div className="cat-art">{c.art}</div>
                <div className="cat-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="stats-row">
            <div className="stat"><h3>74–107</h3><p>mm PET cup caliber range</p></div>
            <div className="stat"><h3>3–32</h3><p>oz PET capacity range</p></div>
            <div className="stat"><h3>360–960</h3><p>ml injection PP range</p></div>
            <div className="stat"><h3>1,000</h3><p>pieces custom-print MOQ</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Why Choose Us</h2>
            <p>Built for B2B buyers who need consistent quality, honest pricing and fast answers.</p>
          </div>
          <div className="why-grid">
            {whyItems.map((w) => (
              <div className="why-item" data-component="value-prop" key={w.title}>
                <div className="why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Quality You Can Verify</h2>
            <p>Raw material traceability and finished-product inspection on every order.</p>
          </div>
          <div className="trust-row" data-component="trust-marquee">
            <span className="trust-badge">Material &amp; caliber guidance</span>
            <span className="trust-badge">Custom printing coordination</span>
            <span className="trust-badge">Matched lids &amp; sealing film</span>
            <span className="trust-badge">Export carton planning</span>
            <span className="trust-badge">Specification tables by product line</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Solutions by Product Line</h2>
          </div>
          {solutions.map((s) => (
            <div className={`solution${s.flip ? ' flip' : ''}`} key={s.title}>
              <div className="sol-art">{s.art}</div>
              <div>
                <h3>{s.title}</h3>
                <p className="sol-desc">{s.desc}</p>
                <ul className="sol-list">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
                <p style={{ fontSize: '0.88rem', color: '#64748B', marginBottom: 16 }}>
                  <strong style={{ color: '#0C4A6E' }}>Applications:</strong> {s.apps}
                </p>
                <Link to="/contact" className="btn btn-primary">Get Pricing</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Packaging Guides &amp; Sourcing Insights</h2>
            <p>Compare materials, calibers and sizes before you order.</p>
          </div>
          <div className="cat-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {featuredGuides.map((slug) => (
              <Link to={`/blog/${slug}`} className="cat-card" key={slug}>
                <div className="cat-art" style={{ height: 180 }}>
                  <img src={posts[slug].img} alt={posts[slug].title} width="800" height="800" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} loading="lazy" />
                </div>
                <div className="cat-body">
                  <h3>{posts[slug].title}</h3>
                  <p>{posts[slug].excerpt}</p>
                  <span className="text-link" style={{ marginTop: 'auto', display: 'inline-block', fontWeight: 500, color: '#0EA5E9' }}>Read Guide →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link to="/blog" className="btn btn-outline">View All Guides</Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Ready to source your custom cups?</h2>
          <p>Send us your size, quantity and logo — get a quotation within 24 hours.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Inquiry</Link>
        </div>
      </section>
    </>
  )
}
