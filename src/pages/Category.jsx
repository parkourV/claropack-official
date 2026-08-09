import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useSEO, useJsonLd } from '../seo.jsx'
import { categories } from '../data/categories.jsx'

export default function Category() {
  const { slug } = useParams()
  const cat = categories[slug]

  useSEO({
    title: cat ? cat.title : 'Products — Claropack',
    description: cat ? cat.description : '',
  })
  useJsonLd(
    cat && {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://claropack.com/' },
            { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://claropack.com/products' },
            { '@type': 'ListItem', position: 3, name: cat.name, item: `https://claropack.com/products/${slug}` },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: cat.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        },
        {
          '@type': 'ItemList',
          name: cat.name,
          itemListElement: cat.specs.rows.map((row, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              name: `${row[0]} ${cat.name}`,
              description: `${row[2]} capacity, ${row[1]} caliber.`,
              brand: { '@type': 'Brand', name: 'Claropack' }
            }
          }))
        }
      ],
    }
  )

  if (!cat) return <Navigate to="/products" replace />

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/products">Products</Link> <span>/</span> <strong>{cat.name}</strong>
          </nav>
          <h1>{cat.h1}</h1>
          <p>{cat.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="sol-art" style={{ background: '#fff' }}>
            <img src={cat.img} alt={cat.name} style={{ width: '100%', borderRadius: '12px' }} loading="lazy" />
          </div>
          <div>
            <h2>Key Features</h2>
            <ul className="sol-list">
              {cat.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
              <a href="https://wa.me/8618102511685" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>

            <div className="quick-facts" style={{ marginTop: 32, padding: '20px', background: '#F0F9FF', borderRadius: '12px', border: '1px solid #BAE6FD' }}>
              <h3 style={{ fontSize: '1rem', color: '#0C4A6E', marginBottom: 12 }}>Quick Facts for Sourcing</h3>
              <ul style={{ fontSize: '0.9rem', color: '#64748B', listStyle: 'none', padding: 0, display: 'grid', gap: '8px' }}>
                <li>• <strong>MOQ:</strong> 1,000 pcs for custom printing</li>
                <li>• <strong>Material:</strong> FDA food-grade certified</li>
                <li>• <strong>Specification support:</strong> Material, caliber and matching-lid guidance before production</li>
                <li>• <strong>Calibers:</strong> 74 / 78 / 90 / 92 / 93 / 95 / 98 / 107 mm</li>
                <li>• <strong>Customization:</strong> OEM/ODM mold & logo printing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {cat.why && (
        <section className="section alt">
          <div className="container" style={{ maxWidth: 860 }}>
            <div className="section-head">
              <h2>{cat.whyTitle}</h2>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>{cat.why}</p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{cat.name} Size Reference</h2>
            <p>Real production specifications from our catalog — request the full spec sheet and free samples.</p>
          </div>
          <div className="spec-table-wrap">
            <table className="spec-table">
              <thead>
                <tr>{cat.specs.head.map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {cat.specs.rows.map((row, i) => (
                  <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-head">
            <h2>Frequently Asked Questions</h2>
          </div>
          {cat.faqs.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Related Product Lines</h2>
          </div>
          <div className="cat-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: 720, margin: '0 auto' }}>
            {cat.related.map((r) => (
              <Link to={`/products/${r}`} className="cat-card" key={r}>
                <div className="cat-art">
                  <img src={categories[r].img} alt={categories[r].name} style={{ height: 110, objectFit: 'contain' }} loading="lazy" />
                </div>
                <div className="cat-body">
                  <h3>{categories[r].name}</h3>
                  <p>{categories[r].intro.slice(0, 90)}…</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Source {cat.name} at factory-direct pricing</h2>
          <p>Send your size, quantity and logo — quotation within 24 hours.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Inquiry</Link>
        </div>
      </section>
    </>
  )
}
