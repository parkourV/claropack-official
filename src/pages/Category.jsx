import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useSEO, useJsonLd } from '../seo.jsx'
import { categories } from '../data/categories.jsx'
import { fallbackImages, getImage, getVerifiedImage } from '../data/verifiedImages.js'

export default function Category() {
  const { slug } = useParams()
  const cat = categories[slug]
  const imgIdx = cat?.specs?.head?.indexOf('Img') ?? -1
  const categoryFallback = slug === 'injection-pp-cups' ? fallbackImages.pp : slug === 'lids-sealing-films' ? fallbackImages.lids : slug === 'paper-pla-cups' ? fallbackImages.paper : fallbackImages.pet

  useSEO({
    title: cat ? cat.title : 'Products — Claropack',
    description: cat ? cat.description : '',
    imageAlt: cat ? `${cat.name} catalog product range` : 'Claropack product catalog',
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
        cat.specs.head.includes('Model') && {
          '@type': 'ItemList',
          name: cat.name,
          itemListElement: cat.specs.rows.map((row, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Product',
              name: `${row[0]} ${cat.name} ${row[2]}`,
              image: getImage(imgIdx !== -1 ? row[imgIdx] : cat.img, categoryFallback),
              description: `${row[2]} capacity, ${row[1]} caliber.`,
              url: `https://claropack.com/products/${slug}/#${row[0].replace(/\s+/g, '-').toLowerCase()}`,
              sku: `${slug}-${row[0].replace(/\s+/g, '-').toLowerCase()}-${row[2].replace(/\s+/g, '-').toLowerCase()}`,
              brand: { '@type': 'Brand', name: 'Claropack' }
            }
          }))
        }
      ].filter(Boolean),
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
              <img src={getImage(cat.img, categoryFallback)} alt={cat.name} style={{ width: '100%', borderRadius: '12px' }} loading="lazy" />

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
                <li>• <strong>Order quantity:</strong> Confirm the minimum for your selected model and artwork.</li>
                <li>• <strong>Documents:</strong> Request material and food-contact reports for your destination market.</li>
                <li>• <strong>Fit:</strong> Confirm the cup, lid and sealing material with a physical sample.</li>
                <li>• <strong>Specifications:</strong> Use the series table below as a starting point; request final drawings.</li>
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
            <p>Listed catalog specifications — request a final drawing and sample for your selected model.</p>
          </div>
          <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {cat.specs.rows.map((row, i) => (
              <div key={i} className="product-card" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '220px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img
                    src={getImage(imgIdx !== -1 ? row[imgIdx] : cat.img, categoryFallback)}
                    alt={row[0]}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{row[0]} {cat.name}</h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                    {cat.specs.head.slice(1, 3).map((heading, j) => <span key={heading} style={{ fontSize: '0.8rem', padding: '4px 10px', background: '#f1f5f9', borderRadius: '4px', color: '#475569' }}>{heading}: {row[j + 1]}</span>)}
                    {cat.specs.head.includes('Weight') && <span style={{ fontSize: '0.8rem', padding: '4px 10px', background: '#f1f5f9', borderRadius: '4px', color: '#475569' }}>Weight: {row[cat.specs.head.indexOf('Weight')]}</span>}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px' }}>Confirm order quantity, print options and final specifications.</p>
                  <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'auto', textAlign: 'center' }}>Request Quote</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="spec-table-wrap">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Technical Specification Table</h3>
            <table className="spec-table">
              <thead>
                <tr>{cat.specs.head.filter((h) => h !== 'Img').map((h) => <th key={h}>{h}</th>)}</tr>
              </thead>
              <tbody>
                {cat.specs.rows.map((row, i) => (
                  <tr key={i}>{row.filter((_, j) => j !== imgIdx).map((cell, j) => <td key={j}>{cell}</td>)}</tr>
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
                  <img src={getImage(categories[r].img, r === 'injection-pp-cups' ? fallbackImages.pp : r === 'lids-sealing-films' ? fallbackImages.lids : r === 'paper-pla-cups' ? fallbackImages.paper : fallbackImages.pet)} alt={categories[r].name} style={{ height: 110, objectFit: 'contain' }} loading="lazy" />
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
          <h2>Find the right {cat.name} specification</h2>
              <p>Share the exact model, quantity, destination and artwork requirements to request a quotation.</p>
          <Link to="/contact" className="btn btn-primary">Start Your Inquiry</Link>
        </div>
      </section>
    </>
  )
}
