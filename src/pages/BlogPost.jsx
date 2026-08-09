import React from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { useSEO, useJsonLd } from '../seo.jsx'
import { posts } from '../data/posts.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  useSEO({
    title: post ? post.title : 'Blog — Claropack',
    description: post ? post.description : '',
    type: 'article',
    image: post?.img,
  })

  useJsonLd(
    post && {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Article',
          headline: post.title,
          description: post.description,
          image: `https://claropack.com${post.img}`,
          datePublished: post.date,
          dateModified: post.dateModified || post.date,
          mainEntityOfPage: `https://claropack.com/blog/${slug}`,
          author: {
            '@type': 'Organization',
            name: 'Claropack'
          },
          publisher: {
            '@type': 'Organization',
            name: 'Claropack'
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://claropack.com/' },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://claropack.com/blog' },
            { '@type': 'ListItem', position: 3, name: post.title, item: `https://claropack.com/blog/${slug}` },
          ],
        },
        post.faqs && {
          '@type': 'FAQPage',
          mainEntity: post.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      ].filter(Boolean),
    }
  )

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <Link to="/blog">Blog</Link> <span>/</span> <strong>Article</strong>
          </nav>
          <div style={{ fontSize: '0.9rem', color: '#64748B', marginBottom: 12 }}>{post.date} • By {post.author}</div>
          <h1 style={{ maxWidth: 800 }}>{post.title}</h1>
        </div>
      </section>

      <article className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <img src={post.img} alt={post.title} style={{ width: '100%', borderRadius: '12px', marginBottom: 40 }} />
          
          {post.quickFacts && (
            <div className="quick-facts" style={{ marginBottom: 40, padding: '24px', background: '#F0F9FF', borderRadius: '12px', border: '1px solid #BAE6FD' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#0C4A6E', marginBottom: 16 }}>Article Quick Facts</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {post.quickFacts.map((f, i) => (
                  <div key={i}>
                    <div style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</div>
                    <div style={{ fontSize: '1rem', color: '#0F172A', fontWeight: 600 }}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="blog-content prose">
            {post.content.map((block, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                {block.h2 && <h2 style={{ fontSize: '1.75rem', marginBottom: 20 }}>{block.h2}</h2>}
                {block.body && <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#334155', marginBottom: 20 }}>{block.body}</p>}
                
                {block.table && (
                  <div className="spec-table-wrap" style={{ marginTop: 30, marginBottom: 30 }}>
                    <table className="spec-table">
                      <thead>
                        <tr>{block.table.head.map(h => <th key={h}>{h}</th>)}</tr>
                      </thead>
                      <tbody>
                        {block.table.rows.map((row, j) => (
                          <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 60, padding: 40, background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <h3 style={{ marginBottom: 20 }}>Article FAQs</h3>
            {post.faqs.map((f, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <strong style={{ display: 'block', marginBottom: 8, color: '#0F172A' }}>{f.q}</strong>
                <p style={{ color: '#475569' }}>{f.a}</p>
              </div>
            ))}
          </div>

          <aside style={{ marginTop: 40, padding: '28px', background: '#F8FAFC', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <h3 style={{ marginBottom: 14 }}>Related product specifications</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <Link to="/products/pet-cold-cups" className="btn btn-outline">PET Cold Cups</Link>
              <Link to="/products/injection-pp-cups" className="btn btn-outline">Injection PP Cups</Link>
              <Link to="/products/lids-sealing-films" className="btn btn-outline">Lids &amp; Films</Link>
              <Link to="/products/paper-pla-cups" className="btn btn-outline">Paper &amp; PLA Cups</Link>
            </div>
          </aside>

          <aside style={{ marginTop: 24, padding: '28px', borderTop: '1px solid #E2E8F0' }}>
            <h3 style={{ marginBottom: 14 }}>Continue reading</h3>
            <ul style={{ display: 'grid', gap: '8px', paddingLeft: '20px', color: '#0C4A6E' }}>
              {Object.entries(posts).filter(([relatedSlug]) => relatedSlug !== slug).map(([relatedSlug, relatedPost]) => (
                <li key={relatedSlug}><Link to={`/blog/${relatedSlug}`}>{relatedPost.title}</Link></li>
              ))}
            </ul>
          </aside>

          <div className="author-bio" style={{ marginTop: 32, padding: '30px', borderTop: '1px solid #E2E8F0', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#0EA5E9', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', flexShrink: 0 }}>C</div>
            <div>
              <div style={{ fontWeight: 600, color: '#0F172A' }}>Prepared by {post.author}</div>
              <p style={{ fontSize: '0.9rem', color: '#64748B', marginTop: '4px' }}>This guide is published by Claropack and is intended to help buyers compare packaging specifications before requesting a quotation.</p>
            </div>
          </div>

          <div style={{ marginTop: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #E2E8F0', paddingTop: 30 }}>
            <Link to="/blog" className="text-link">← Back to all guides</Link>
            <div style={{ display: 'flex', gap: 12 }}>
               <Link to="/contact" className="btn btn-primary">Get Sample Set</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="cta-band">
        <div className="container">
          <h2>Standardize your drink menu with Claropack</h2>
          <p>We provide the full caliber system to help you scale your beverage business.</p>
          <Link to="/contact" className="btn btn-primary">Request a Custom Quote</Link>
        </div>
      </section>
    </>
  )
}
