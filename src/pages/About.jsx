import React from 'react'
import { Link } from 'react-router-dom'
import { FactoryArt, PrintArt } from '../art.jsx'

const steps = [
  { num: 1, title: 'Raw Material QC', desc: 'Food-grade PET / PP resin with traceable batch records.' },
  { num: 2, title: 'Forming & Molding', desc: 'Automated thermoforming and injection lines for stable output.' },
  { num: 3, title: 'Printing', desc: 'Multi-color offset printing with artwork proofing before mass run.' },
  { num: 4, title: 'Inspection & Packing', desc: 'Finished-product inspection and export-standard cartons.' },
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Our Production Base</h1>
          <p>Partner factories, quality control and export management in Guangdong, China.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <h2>A Custom Manufacturer, Not a Reseller</h2>
            <p>
              We run an integrated production chain — from raw material to forming, printing and
              packing — so buyers get factory-direct pricing, consistent quality and honest lead times.
            </p>
            <p>
              Our team supports ODM and OEM projects: custom calibers, capacities, exclusive
              mold development and full-color brand printing, with small-batch trial orders welcome.
            </p>
            <p>
              With a 98.6% on-time dispatch rate and a 4.9/5 buyer rating, we focus on the two
              things B2B buyers care about most: reliability and responsiveness.
            </p>
          </div>
          <div className="sol-art"><FactoryArt /></div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>Production Process</h2>
            <p>Every order flows through four controlled stages.</p>
          </div>
          <div className="process-row">
            {steps.map((s) => (
              <div className="process-step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="sol-art"><PrintArt /></div>
          <div>
            <h2>Customization Capability</h2>
            <p>
              Send us your logo and brand colors — our design team prepares free artwork
              proofs and pre-production samples so you know exactly what ships.
            </p>
            <ul className="sol-list">
              <li>Logo printing on PET, PP and paper cups</li>
              <li>Custom molds for exclusive cup shapes</li>
              <li>Matching lids, films, straws and carriers</li>
              <li>Private-label export packaging</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 8 }}>Discuss Your Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}
