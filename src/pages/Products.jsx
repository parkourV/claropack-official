import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CupArt, LidArt, PaperCupArt } from '../art.jsx'

const CATS = ['PET Cold Cups', 'Injection PP Cups', 'Lids & Films', 'Paper & PLA Cups']

const products = {
  'PET Cold Cups': [
    { name: '89mm PET Cold Cup', specs: ['89mm caliber', '12–16 oz', 'Clear'], art: <img src="https://s.alicdn.com/@sc04/kf/Hbefdbe16546f4659b0b19e34dd69d24c0/16-20-PET-.jpg" alt="PET Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: '93mm PET Dessert Cup', specs: ['93mm caliber', '7–12 oz', 'Parfait'], art: <img src="https://s.alicdn.com/@sc04/kf/Hbefdbe16546f4659b0b19e34dd69d24c0/16-20-PET-.jpg" alt="Dessert Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: '95mm PET Cold Cup', specs: ['95mm caliber', '12–22 oz', 'U-shape'], art: <img src="https://s.alicdn.com/@sc04/kf/Hbefdbe16546f4659b0b19e34dd69d24c0/16-20-PET-.jpg" alt="PET Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: '98mm PET Cold Cup', specs: ['98mm caliber', '12–22 oz', 'Clear'], art: <img src="https://s.alicdn.com/@sc04/kf/Hbefdbe16546f4659b0b19e34dd69d24c0/16-20-PET-.jpg" alt="PET Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'PET Snow Cone / Ice Cup', specs: ['7–9 oz', 'Dessert'], art: <img src="https://s.alicdn.com/@sc04/kf/Hbefdbe16546f4659b0b19e34dd69d24c0/16-20-PET-.jpg" alt="Snow Cone" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'PET Cup + Lid Set', specs: ['Caliber-matched', 'Leak-safe'], art: <img src="https://s.alicdn.com/@sc04/kf/Hbefdbe16546f4659b0b19e34dd69d24c0/16-20-PET-.jpg" alt="Cup Set" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
  'Injection PP Cups': [
    { name: 'Injection PP Cup 90mm', specs: ['90mm caliber', 'Hot & cold', 'Hard wall'], art: <img src="https://s.alicdn.com/@sc04/kf/H77f91214e6bf4a3db9ed0c956b9ba389i/-95mm-500ML-750ML-PP-.jpg" alt="PP Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Injection PP Cup 95mm', specs: ['95mm caliber', 'Custom mold'], art: <img src="https://s.alicdn.com/@sc04/kf/H77f91214e6bf4a3db9ed0c956b9ba389i/-95mm-500ML-750ML-PP-.jpg" alt="PP Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Frosted PP Cup', specs: ['Frosted finish', 'Premium feel'], art: <img src="https://s.alicdn.com/@sc04/kf/H4a85dd9a125749b7822c5547e2096465o/-FDA-CE-U-PP-8oz-10oz.jpg" alt="Frosted Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
  'Lids & Films': [
    { name: 'Dome Lid', specs: ['89–98mm', 'PET clear'], art: <img src="https://s.alicdn.com/@sc04/kf/Hec2b3d1cf1074a0c81ce65f186da4f18m/-PET-PP-.jpg" alt="Dome Lid" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Flat / Sipper Lid', specs: ['89–98mm', 'Strawless option'], art: <img src="https://s.alicdn.com/@sc04/kf/Hec2b3d1cf1074a0c81ce65f186da4f18m/-PET-PP-.jpg" alt="Flat Lid" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Injection PP Lid', specs: ['With stopper', '90/95/98mm'], art: <img src="https://s.alicdn.com/@sc04/kf/Hec2b3d1cf1074a0c81ce65f186da4f18m/-PET-PP-.jpg" alt="PP Lid" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Sealing Film Roll', specs: ['PP & PET cups', 'Custom print'], art: <img src="https://s.alicdn.com/@sc04/kf/Hec2b3d1cf1074a0c81ce65f186da4f18m/-PET-PP-.jpg" alt="Sealing Film" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
  'Paper & PLA Cups': [
    { name: 'Single Wall Paper Cup', specs: ['2–32 oz', 'PE / PLA coating'], art: <img src="https://s.alicdn.com/@sc04/kf/He02eeac3fde24809a48baf1deeb1ba1cI/-8-12-16-22-.png" alt="Paper Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Double / Ripple Wall Cup', specs: ['Hot drinks', 'Insulated'], art: <img src="https://s.alicdn.com/@sc04/kf/He02eeac3fde24809a48baf1deeb1ba1cI/-8-12-16-22-.png" alt="Paper Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'PLA Compostable Cold Cup', specs: ['Clear PLA', 'Eco option'], art: <img src="https://s.alicdn.com/@sc04/kf/H1652bf8b18954d8ea83b0c786f88ccc1w/-PLA-98-.jpg" alt="PLA Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
    { name: 'Paper Ice Cream Cup', specs: ['With lid', 'Custom print'], art: <img src="https://s.alicdn.com/@sc04/kf/He02eeac3fde24809a48baf1deeb1ba1cI/-8-12-16-22-.png" alt="Ice Cream Cup" style={{ width: '100%', height: '100%', objectFit: 'contain' }} /> },
  ],
}

const petSpecs = [
  ['89mm PET', '12 oz', '360 ml', '89', '119'],
  ['89mm PET', '16 oz', '500 ml', '89', '132'],
  ['93mm PET', '9 oz', '280 ml', '93', '82'],
  ['95mm PET', '14 oz', '420 ml', '95', '110'],
  ['95mm PET', '16 oz', '500 ml', '95', '118'],
  ['98mm PET', '16 oz', '500 ml', '98', '116'],
  ['98mm PET', '20 oz', '600 ml', '98', '135'],
  ['98mm PET', '22 oz', '700 ml', '98', '150'],
]

export default function Products() {
  const [cat, setCat] = useState(CATS[0])
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
                      <th>Series</th><th>Capacity</th><th>Volume</th><th>Top Dia. (mm)</th><th>Height (mm)</th>
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
