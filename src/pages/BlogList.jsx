import React from 'react'
import { Link } from 'react-router-dom'
import { useSEO, useJsonLd } from '../seo.jsx'
import { posts } from '../data/posts.jsx'

export default function BlogList() {
  useSEO({
    title: 'Packaging Insights & Guides | Claropack Blog',
    description: 'Guides and comparisons on beverage packaging, cup materials, sizes and sourcing for the food service industry.',
  })

  const postList = Object.entries(posts).map(([slug, data]) => ({
    slug,
    ...data
  }))

  useJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://claropack.com/' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://claropack.com/blog' },
        ],
      },
      {
        '@type': 'Blog',
        name: 'Claropack Packaging Insights',
        url: 'https://claropack.com/blog',
        blogPost: postList.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          image: `https://claropack.com${post.img}`,
          url: `https://claropack.com/blog/${post.slug}`,
        })),
      },
    ],
  })

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> <span>/</span> <strong>Blog</strong>
          </nav>
          <h1>Beverage Packaging Insights</h1>
          <p>Guides, comparisons, and expert tips to help you choose the right packaging for your brand.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cat-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {postList.map((post) => (
              <Link to={`/blog/${post.slug}`} className="cat-card" key={post.slug}>
                <div className="cat-art" style={{ height: 200 }}>
                  <img src={post.img} alt={post.title} style={{ height: '100%', objectFit: 'cover', borderRadius: '12px 12px 0 0' }} loading="lazy" />
                </div>
                <div className="cat-body">
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginBottom: 8 }}>{post.date} • {post.author}</div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="text-link" style={{ marginTop: 'auto', display: 'inline-block', fontWeight: 500, color: '#0EA5E9' }}>Read Guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>Need professional advice on cup materials?</h2>
          <p>Our experts help brands choose the perfect caliber and material for their menu.</p>
          <Link to="/contact" className="btn btn-primary">Talk to an Expert</Link>
        </div>
      </section>
    </>
  )
}
