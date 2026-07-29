import React, { useState } from 'react'
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { Menu, MessageCircle } from 'lucide-react'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Category from './pages/Category.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
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
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">Factory &amp; QC</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/contact">Request Samples</Link></li>
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
