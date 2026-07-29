import React from 'react'
import { Link } from 'react-router-dom'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Page render error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="section" style={{ textAlign: 'center', padding: '80px 20px' }}>
          <div className="container">
            <h1 style={{ color: 'var(--primary-deep)', marginBottom: 12 }}>Something went wrong</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>
              Sorry, this section failed to load. Please try again or contact us directly.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-primary" onClick={() => window.location.reload()}>Back to Home</Link>
              <a href="https://wa.me/8618102511685" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Us</a>
            </div>
          </div>
        </section>
      )
    }
    return this.props.children
  }
}
