import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../seo.jsx'

const CATS = ['PET Cold Cups', 'Injection PP Cups', 'Lids & Films', 'Paper & PLA Cups']

const imageStyle = { width: '100%', height: '100%', objectFit: 'contain' }

const productImage = (src, alt) => <img src={src} alt={alt} style={imageStyle} loading="lazy" />

const products = {
  'PET Cold Cups': [
    { name: '74mm PET Dessert Cup', specs: ['74mm caliber', '3 oz', '3.8 g'], art: productImage('https://sc04.alicdn.com/kf/H4786f00fdf03453984472a631050f235A/277911013/H4786f00fdf03453984472a631050f235A.jpg', '74mm PET dessert cup size range') },
    { name: '78mm PET Cold Cup', specs: ['78mm caliber', '5.5–8 oz', '6 g'], art: productImage('https://sc04.alicdn.com/kf/H2cbc8d8559b64626bfa78e27976414d0P/277911013/H2cbc8d8559b64626bfa78e27976414d0P.jpg', '78mm PET cold cup range') },
    { name: '93mm PET Cold Cup', specs: ['93mm caliber', '9–12 oz', '8–11 g'], art: productImage('https://s.alicdn.com/@sc04/kf/H315c7fed8f6a4272a09f308bd7593a11u.jpg', '93mm PET cold cup range') },
    { name: '95mm PET Cold Cup', specs: ['95mm caliber', '16–22 oz', '14–16 g'], art: productImage('https://sc04.alicdn.com/kf/H96bbad2eca024d8ea19a067e20fd035ek/277911013/H96bbad2eca024d8ea19a067e20fd035ek.jpg', '95mm U-shape PET cup range') },
    { name: '107mm PET Jumbo Cup', specs: ['107mm caliber', '30–32 oz', '19–20 g'], art: productImage('https://s.alicdn.com/@sc04/kf/He421727905ae43eaa260d37aa6f3774aH/-12-14-16-420-PET-89.png', '107mm large PET cold cup range') },
  ],
  'Injection PP Cups': [
    { name: 'Injection PP Cup 90mm', specs: ['90mm caliber', 'Hot & cold', 'Hard wall'], art: productImage('https://s.alicdn.com/@sc04/kf/H5849f94db91846f1948453ba7c56962bq/-PET-89-U-.jpg', '90mm injection PP cup') },
    { name: 'Injection PP Cup 95mm', specs: ['95mm caliber', 'Custom mold'], art: productImage('https://sc04.alicdn.com/kf/H96bbad2eca024d8ea19a067e20fd035ek/277911013/H96bbad2eca024d8ea19a067e20fd035ek.jpg', '95mm injection PP U-shape cups') },
    { name: 'Frosted PP Cup', specs: ['Frosted finish', 'Premium feel'], art: productImage('https://sc04.alicdn.com/kf/H3838396374c546c78d3d218ad340196dm/277911013/H3838396374c546c78d3d218ad340196dm.jpg', 'Frosted injection PP cup range') },
  ],
  'Lids & Films': [
    { name: 'Dome Lid', specs: ['89–98mm', 'PET clear'], art: productImage('https://s.alicdn.com/@sc04/kf/H36ca355dfda5454992e5cee9b5d0c6cap/JH-PP-90-.jpg', 'Clear dome lid') },
    { name: 'Flat / Sipper Lid', specs: ['89–98mm', 'Strawless option'], art: productImage('https://sc04.alicdn.com/kf/H53dfd854737a41a8878278d163666ecbk/277911013/H53dfd854737a41a8878278d163666ecbk.png', 'Flat and sipper lid options') },
    { name: 'Injection PP Lid', specs: ['With stopper', '90/95/98mm'], art: productImage('https://sc04.alicdn.com/kf/Hb6f3a2d7d82247beb2f33ef50111b5ffn/277911013/Hb6f3a2d7d82247beb2f33ef50111b5ffn.jpg', 'Injection PP lid detail') },
    { name: 'Sealing Film Roll', specs: ['PP & PET cups', 'Custom print'], art: productImage('https://sc04.alicdn.com/kf/Ha6ee2076261f4b7196edbbc1c95a2877I/277911013/Ha6ee2076261f4b7196edbbc1c95a2877I.jpg', 'Custom printed cup sealing film') },
  ],
  'Paper & PLA Cups': [
    { name: 'Single Wall Paper Cup', specs: ['2–32 oz', 'PE / PLA coating'], art: productImage('https://sc02.alicdn.com/kf/A5791632dfed949b083d7c492991f93b5k.png', 'Single wall paper cup range') },
    { name: 'Double / Ripple Wall Cup', specs: ['Hot drinks', 'Insulated'], art: productImage('https://s.alicdn.com/@sc04/kf/Hda46d3302d8f45c2820ccbea15c86c76Y/-PLA-.jpg', 'Double and ripple wall paper cups') },
    { name: 'PLA Compostable Cold Cup', specs: ['Clear PLA', 'Eco option'], art: productImage('https://s.alicdn.com/@sc04/kf/Hda46d3302d8f45c2820ccbea15c86c76Y/-PLA-.jpg', 'Clear PLA cold cup') },
    { name: 'Paper Ice Cream Cup', specs: ['With lid', 'Custom print'], art: productImage('https://sc04.alicdn.com/kf/H16d834346eca4364843bf1c5be295cccg/277911013/H16d834346eca4364843bf1c5be295cccg.jpg', 'Paper cup and accessory range') },
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
