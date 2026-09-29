import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../seo.jsx'
import { fallbackImages, verifiedImages, getImage } from '../data/verifiedImages.js'
import { categories } from '../data/categories.jsx'

const categoryKeys = [
  ['PET Cold Cups', 'pet-cold-cups'],
  ['Injection PP Cups', 'injection-pp-cups'],
  ['Lids & Films', 'lids-sealing-films'],
  ['Paper & PLA Cups', 'paper-pla-cups'],
]
const CATS = categoryKeys.map(([label]) => label)

const imageStyle = { width: '100%', height: '100%', objectFit: 'contain' }

function productArt(src, fallback, alt) {
  return <img src={getImage(src, fallback)} alt={alt} style={imageStyle} loading="lazy" />
}

function fallbackFor(slug) {
  if (slug === 'injection-pp-cups') return fallbackImages.pp
  if (slug === 'lids-sealing-films') return fallbackImages.lids
  if (slug === 'paper-pla-cups') return fallbackImages.paper
  return fallbackImages.pet
}

const products = Object.fromEntries(categoryKeys.map(([label, slug]) => {
  const category = categories[slug]
  const imgIndex = category.specs.head.indexOf('Img')
  return [label, category.specs.rows.slice(0, 12).map((row) => ({
    name: `${row[0]} ${category.name}`,
    specs: [row[1], row[2], row[4]],
    art: productArt(imgIndex >= 0 ? row[imgIndex] : category.img, fallbackFor(slug), `${row[0]} ${category.name} catalog product`),
  }))]
}))

const petSpecs = categories['pet-cold-cups'].specs.rows.slice(0, 12).map((row) => [row[0], row[2], row[1], row[3], row[4]])

export default function Products() {
  const [cat, setCat] = useState(CATS[0])
  useSEO({
    title: 'PET & Injection PP Cups: Latest Catalog Size Charts | Claropack',
    description: 'Browse the latest PET and injection PP cup catalog rows by caliber, capacity, dimensions, weight and carton quantity. Confirm final fit and documents per model.',
  })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Products</h1>
          <p>Browse the latest PET and injection PP catalog rows. Printing, MOQ, documents and final fit are confirmed per model.</p>
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
                  <p className="prod-moq">MOQ, printing and documents: confirm for this model</p>
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
