import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  useSEO({
    title: 'Get a Quote | Custom PET & PP Cups MOQ 1,000 pcs — Claropack',
    description: 'Request pricing for custom printed PET cold cups, PP cups and lids. Tell us size, quantity and logo — quotation within 24 hours. WhatsApp +86 181 0251 1685.',
  })

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get a quotation within 24 hours. The more details you share, the faster we can quote.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Talk to Our Sales Team</h2>
            <p>
              Tell us your cup size, quantity, target market and whether you need
              logo printing — we'll reply with pricing, lead time and shipping options.
            </p>
            <div className="contact-lines">
              <div><strong>Email</strong><br /><span>jackygary6666@gmail.com</span></div>
              <div><strong>WhatsApp / WeChat</strong><br /><span>+86 181 0251 1685</span></div>
              <div><strong>Factory</strong><br /><span>Guangdong, China</span></div>
              <div><strong>Response time</strong><br /><span>Within 24 hours on business days</span></div>
            </div>
          </div>

          <form className="inquiry-form" data-component="b2b-form" onSubmit={handleSubmit}>
            {sent && (
              <div className="form-success">
                Thank you! Your inquiry has been recorded. We will get back to you within 24 hours.
                You can also email us directly at sales@example.com.
              </div>
            )}
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="f-name">Name *</label>
                <input id="f-name" name="name" required placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="f-email">Email *</label>
                <input id="f-email" name="email" type="email" required placeholder="you@company.com" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="f-company">Company</label>
                <input id="f-company" name="company" placeholder="Company name" />
              </div>
              <div className="form-field">
                <label htmlFor="f-country">Country / Region</label>
                <input id="f-country" name="country" placeholder="e.g. United States" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="f-type">Inquiry Type *</label>
                <select id="f-type" name="inquiryType" required defaultValue="">
                  <option value="" disabled>Select one</option>
                  <option>Sample Request</option>
                  <option>Bulk Order</option>
                  <option>Customization / OEM</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="f-qty">Order Quantity</label>
                <select id="f-qty" name="quantity" defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option>1,000 – 10,000 pcs</option>
                  <option>10,000 – 50,000 pcs</option>
                  <option>50,000 – 200,000 pcs</option>
                  <option>Full container (20ft / 40HQ)</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="f-cat">Product Category</label>
              <select id="f-cat" name="category" defaultValue="">
                <option value="" disabled>Select category</option>
                <option>PET Cold Cups</option>
                <option>Injection PP Cups</option>
                <option>Lids &amp; Sealing Films</option>
                <option>Paper &amp; PLA Cups</option>
                <option>Multiple / One-stop sourcing</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="f-msg">Message *</label>
              <textarea
                id="f-msg"
                name="message"
                rows={5}
                required
                placeholder="Cup size / caliber, capacity, quantity, logo printing needs, target market..."
              />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
