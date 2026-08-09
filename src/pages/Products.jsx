import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../seo.jsx'

const CATS = ['PET Cold Cups', 'Injection PP Cups', 'Lids & Films', 'Paper & PLA Cups']

const products = {
  'PET Cold Cups': [
    { name: '74mm PET Dessert Cup', specs: ['74mm caliber', '3 oz', '3.8 g'], art: <img src="/assets/images/prod-pet.jpg" alt="74mm PET dessert cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
    { name: '78mm PET Cold Cup', specs: ['78mm caliber', '5.5–8 oz', '6 g'], art: <img src="/assets/images/prod-pet.jpg" alt="78mm PET cold cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
    { name: '93mm PET Cold Cup', specs: ['93mm caliber', '9–12 oz', '8–11 g'], art: <img src="/assets/images/prod-pet.jpg" alt="93mm PET cold cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
    { name: '95mm PET Cold Cup', specs: ['95mm caliber', '16–22 oz', '14–16 g'], art: <img src="/assets/images/prod-pet.jpg" alt="95mm PET cold cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
    { name: '107mm PET Jumbo Cup', specs: ['107mm caliber', '30–32 oz', '19–20 g'], art: <img src="/assets/images/prod-pet.jpg" alt="107mm PET jumbo cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} loading="lazy" /> },
  ],
  'Injection PP Cups': [
    { name: 'Injection PP Cup 90mm', specs: ['90mm caliber', 'Hot & cold', 'Hard wall'], art: <img src="/assets/images/prod-pp-hard.jpg" alt="PP Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Injection PP Cup 95mm', specs: ['95mm caliber', 'Custom mold'], art: <img src="/assets/images/prod-pp-hard.jpg" alt="PP Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Frosted PP Cup', specs: ['Frosted finish', 'Premium feel'], art: <img src="/assets/images/prod-pp-frosted.jpg" alt="Frosted Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
  'Lids & Films': [
    { name: 'Dome Lid', specs: ['89–98mm', 'PET clear'], art: <img src="/assets/images/prod-lids.jpg" alt="Dome Lid" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Flat / Sipper Lid', specs: ['89–98mm', 'Strawless option'], art: <img src="/assets/images/prod-lids.jpg" alt="Flat Lid" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Injection PP Lid', specs: ['With stopper', '90/95/98mm'], art: <img src="/assets/images/prod-lids.jpg" alt="PP Lid" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Sealing Film Roll', specs: ['PP & PET cups', 'Custom print'], art: <img src="/assets/images/prod-lids.jpg" alt="Sealing Film" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
  'Paper & PLA Cups': [
    { name: 'Single Wall Paper Cup', specs: ['2–32 oz', 'PE / PLA coating'], art: <img src="/assets/images/prod-paper.jpg" alt="Paper Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Double / Ripple Wall Cup', specs: ['Hot drinks', 'Insulated'], art: <img src="/assets/images/prod-paper.jpg" alt="Paper Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'PLA Compostable Cold Cup', specs: ['Clear PLA', 'Eco option'], art: <img src="/assets/images/prod-pla.jpg" alt="PLA Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Paper Ice Cream Cup', specs: ['With lid', 'Custom print'], art: <img src="/assets/images/prod-paper.jpg" alt="Ice Cream Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
}

const petSpecs = [
  ['74-7401', '3 oz', '74 mm', '39 mm', '3.8 g'],
  ['5.5-7801', '5.5 oz', '78 mm', '54 mm', '6 g'],
  ['8oz-7802', '8 oz', '78 mm', '80 mm', '6 g'],
  ['93-9oz', '9 oz', '93 mm', '71 mm', '8 g'],
  ['9301', '12 oz', '93 mm', '108 mm', '11 g'],
  ['95-9507', '16 oz', '95 mm', '123 mm', '14 g'],
  ['95-9508', '22 oz', '95 mm', '146 mm', '16 g'],
  ['107-10703', '30 oz', '107 mm', '162 mm', '19 g'],
  ['107-10701', '32 oz', '107 mm', '178 mm', '20 g'],
]

export default function Products() {
  const [cat, setCat] = useState(CATS[0])
  useSEO({
    title: 'PET Cold Cups, PP Cups & Lids Wholesale | 74-107mm Series — Claropack',
    description: 'Browse PET cold cups from 3oz to 32oz, injection PP cups from 360ml to 960ml, plus dome, flat and sipper lids with matching sealing films.',
  })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Products</h1>
          <p>All items support custom logo printing. MOQ from 1,000 pieces.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="cat-tabs">
            {CATS.map((c) => (
              <button
                key={c}
                className={`cat-tab${cat === c ? ' active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="prod-grid">
            {products[cat].map((p) => (
              <div className="prod-card" data-component="product-item" key={p.name}>
                <div className="prod-art">{p.art}</div>
                <div className="prod-body">
                  <h3>{p.name}</h3>
                  <div className="spec-tags">
                    {p.specs.map((s) => <span className="spec-tag" key={s}>{s}</span>)}
                  </div>
                  <p className="prod-moq">MOQ: 1,000 pcs · Custom print available</p>
                  <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center' }}>Request Quote</Link>
                </div>
              </div>
            ))}
          </div>

          {cat === 'PET Cold Cups' && (
            <>
              <div className="section-head" style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: '1.3rem' }}>PET Cold Cup Size Reference</h2>
                <p>Indicative sizes — contact us for the full spec sheet and samples.</p>
              </div>
              <div className="spec-table-wrap">
                <table className="spec-table">
                  <thead>
                      <tr>
                        <th>Model</th><th>Capacity</th><th>Caliber</th><th>Height</th><th>Weight</th>
                      </tr>
                  </thead>
                  <tbody>
                    {petSpecs.map((row, i) => (
                      <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Need a size you don't see here?</h2>
          <p>We support custom molds, calibers and capacities. Tell us what you need.</p>
          <Link to="/contact" className="btn btn-primary">Ask Our Team</Link>
        </div>
      </section>
    </>
  )
}
