import React, { useState } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Menu, MessageCircle } from 'lucide-react'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Category from './pages/Category.jsx'
import BlogList from './pages/BlogList.jsx'
import BlogPost from './pages/BlogPost.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={close}>
          <svg className="logo-mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M8 6 L24 6 L21.5 28 Q21.3 29.5 19.8 29.5 L12.2 29.5 Q10.7 29.5 10.5 28 Z" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="2" />
            <rect x="6.5" y="4" width="19" height="3.4" rx="1.7" fill="#0EA5E9" />
          </svg>
          Claropack
        </Link>
        <nav className={`main-nav${open ? ' open' : ''}`}>
          <NavLink to="/" end onClick={close}>Home</NavLink>
          <NavLink to="/products" end onClick={close}>Products</NavLink>
          <NavLink to="/blog" onClick={close}>Blog</NavLink>
          <NavLink to="/about" onClick={close}>Factory</NavLink>
          <NavLink to="/contact" onClick={close}>Contact</NavLink>
          <Link to="/contact" className="btn btn-primary" onClick={close}>Get a Quote</Link>
        </nav>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          <Menu size={26} />
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>Claropack</h4>
            <p style={{ maxWidth: 280 }}>
              Factory-direct supplier of disposable PET cold cups, injection PP cups,
              lids, paper cups and food packaging for brands worldwide.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link to="/products/pet-cold-cups">PET Cold Cups</Link></li>
              <li><Link to="/products/injection-pp-cups">Injection PP Cups</Link></li>
              <li><Link to="/products/lids-sealing-films">Lids &amp; Sealing Films</Link></li>
              <li><Link to="/products/paper-pla-cups">Paper &amp; PLA Cups</Link></li>
            </ul>
          </div>
          <div>
            <h4>Packaging Guides</h4>
            <ul>
              <li><Link to="/blog/pet-vs-pp-cups">PET vs PP Comparison</Link></li>
              <li><Link to="/blog/cup-lid-compatibility-guide">Cup Lid Size Chart</Link></li>
              <li><Link to="/blog/bubble-tea-cup-sizes-guide">Boba Cup Sizes</Link></li>
              <li><Link to="/blog/cup-caliber-standardization-guide">Caliber Standardization</Link></li>
            </ul>
          </div>
          <div>
            <h4>Sourcing Advice</h4>
            <ul>
              <li><Link to="/blog/how-to-import-plastic-cups-from-china">How to Import Guide</Link></li>
              <li><Link to="/blog/pet-cup-weight-cost-guide">Weight &amp; Cost Guide</Link></li>
              <li><Link to="/blog/cup-sealing-film-machine-guide">Sealing Film Guide</Link></li>
              <li><Link to="/blog/paper-vs-pla-cups-guide">Paper vs PLA Guide</Link></li>
              <li><Link to="/blog/pet-cup-capacity-carton-planning-guide">PET Carton Planning</Link></li>
              <li><Link to="/blog/injection-pp-cup-model-weight-guide">PP Model &amp; Weight Guide</Link></li>
              <li><Link to="/blog/cup-lid-weight-caliber-guide">Lid Weight &amp; Caliber Guide</Link></li>
              <li><Link to="/blog/paper-cup-wall-types-guide">Paper Cup Wall Types</Link></li>
              <li><Link to="/blog/u-shape-fat-cup-guide">U-Shape Fat Cup Guide</Link></li>
              <li><Link to="/blog/strawless-sipper-lids-guide">Strawless &amp; Sipper Lids</Link></li>
              <li><Link to="/blog/us-standard-98mm-pet-cups-guide">98mm US Standard</Link></li>
              <li><Link to="/blog/pet-cups-cold-chain-performance">PET Cold-Chain Guide</Link></li>
              <li><Link to="/blog/hot-drink-cup-selection-guide">Hot Drink Cup Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: jackygary6666@gmail.com</li>
              <li>WhatsApp: +86 181 0251 1685</li>
              <li>Guangdong, China</li>
              <li style={{ marginTop: 8 }}>
                <a href="https://wa.me/8618102511685" target="_blank" rel="noreferrer">Chat on WhatsApp →</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ marginBottom: 8, display: 'flex', gap: 16, justifyContent: 'center', fontSize: '0.8rem', color: '#94A3B8' }}>
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
          </div>
          © {new Date().getFullYear()} Claropack. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      data-component="whatsapp-anchor"
      href="https://wa.me/8618102511685"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={18} /> WhatsApp
    </a>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<Category />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
