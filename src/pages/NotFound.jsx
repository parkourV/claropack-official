import React from 'react'
import { Link } from 'react-router-dom'
import { useSEO } from '../seo.jsx'

export default function NotFound() {
  useSEO({
    title: '404 - Page Not Found | Claropack',
    description: 'The page you are looking for does not exist. Return to Claropack home for PET and PP cup solutions.',
  })

  return (
    <section className="section" style={{ padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '6rem', color: '#E2E8F0', marginBottom: '20px' }}>404</h1>
        <h2 style={{ marginBottom: '20px' }}>Oops! Page Not Found</h2>
        <p style={{ color: '#64748B', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
          The link might be broken, or the page has been moved. 
          Looking for our packaging products?
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/products" className="btn btn-outline">Browse Products</Link>
        </div>
      </div>
    </section>
  )
}
