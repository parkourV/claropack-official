import React from 'react'
import { Link } from 'react-router-dom'
import { Package, Palette, Factory, ShieldCheck, Truck, Globe } from 'lucide-react'
import { CupArt, LidArt, PaperCupArt, FactoryArt, PrintArt } from '../art.jsx'

const categories = [
  { title: 'PET Cold Cups', desc: 'Crystal-clear cups in 89 / 93 / 95 / 98 mm calibers, 12–22 oz, for boba, iced coffee and smoothies.', art: <img src="/assets/images/prod-pet.jpg" alt="PET Cold Cups" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  { title: 'Injection PP Cups', desc: 'Durable hard PP cups for hot & cold drinks, reusable-grade thickness, custom molds available.', art: <img src="/assets/images/prod-pp-hard.jpg" alt="Injection PP Cups" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  { title: 'Lids & Sealing Films', desc: 'Flat, dome and sipper lids plus PP/PET sealing films matched to every cup caliber.', art: <img src="/assets/images/prod-lids.jpg" alt="Lids & Sealing Films" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  { title: 'Paper & PLA Cups', desc: 'Single/double/ripple-wall paper cups and compostable PLA cold cups for eco-focused brands.', art: <img src="/assets/images/prod-pla.jpg" alt="Paper & PLA Cups" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
]

const whyItems = [
  { icon: <Package size={22} />, title: 'Low MOQ from 1,000 pcs', desc: 'Trial orders and small-batch custom runs welcome — grow at your own pace.' },
  { icon: <Palette size={22} />, title: 'Custom Logo Printing', desc: 'Up to full-color offset printing on PET, PP and paper cups. Free artwork check.' },
  { icon: <Factory size={22} />, title: 'ODM / OEM Service', desc: 'Custom molds, calibers and capacities engineered around your product line.' },
  { icon: <ShieldCheck size={22} />, title: 'Food-Grade Materials', desc: 'Food-contact safe raw materials with inspection reports available per batch.' },
  { icon: <Truck size={22} />, title: 'Fast, Reliable Dispatch', desc: '98.6% on-time dispatch rate with agile supply chain and export packing.' },
  { icon: <Globe size={22} />, title: 'Global B2B Support', desc: 'English-speaking sales team, response within hours across time zones.' },
]

const solutions = [
  {
    title: 'PET Cold Cup Solutions',
    desc: 'Our core line: crystal-clear PET cups engineered for cold beverages, with matching lids for every caliber.',
    art: <CupArt straw />,
    points: ['Calibers 89 / 93 / 95 / 98 mm, capacities 7–22 oz', 'U-shaped, parfait and dessert cup formats', 'Custom logo printing from 1,000 pcs', 'Matching flat, dome and strawless lids'],
    apps: 'Bubble tea · Iced coffee · Smoothies · Desserts',
  },
  {
    title: 'Injection PP Cup Solutions',
    desc: 'Hard injection-molded PP cups with premium wall thickness for brands that want a sturdier in-hand feel.',
    art: <CupArt tint="#38BDF8" body="#F0F9FF" />,
    points: ['Hot & cold compatible', 'Custom mold development for exclusive shapes', 'Works with sealing film machines', 'Stackable, transport-efficient design'],
    apps: 'Milk tea chains · Fresh juice · Yogurt drinks',
    flip: true,
  },
  {
    title: 'Lids, Films & Accessories',
    desc: 'One-stop matching: every cup ships with the right lid or sealing film so your store operations stay simple.',
    art: <LidArt />,
    points: ['Flat / dome / sipper lid types', 'PP & PET sealing films by roll', 'Straws, carriers and sleeves available', 'Caliber-matched to avoid leak issues'],
    apps: 'Takeaway · Delivery platforms · Sealing machines',
  },
]

export default function Home() {
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
              <Link to="/products" className="cat-card" data-component="product-item" key={c.title}>
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
            <div className="stat"><h3>9+</h3><p>Years in the industry</p></div>
            <div className="stat"><h3>98.6%</h3><p>On-time dispatch rate</p></div>
            <div className="stat"><h3>4.9/5</h3><p>Buyer store rating</p></div>
            <div className="stat"><h3>1,000</h3><p>Pieces minimum order</p></div>
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
            <span className="trust-badge">SGS-Audited Supplier</span>
            <span className="trust-badge">Food Contact Safe</span>
            <span className="trust-badge">Trade Assurance</span>
            <span className="trust-badge">Raw Material Traceability</span>
            <span className="trust-badge">Finished Product Inspection</span>
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
