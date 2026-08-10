import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Custom Software Development Services | Discover Crew Technologies',
  description: 'Bespoke software development, custom business tools, internal administration dashboards, and REST APIs built by Discover Crew Technologies.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/software-development',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Custom Software Development Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'Software Development'
};

export default function SoftwareDevelopmentPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> CUSTOM ENGINEERING</div>
        <h1 className="subpage-h1">Custom Software <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          Generic off-the-shelf software often fails to solve unique business problems. We engineer custom software solutions — internal tools, automated dashboards, data integration pipelines, and custom APIs — designed around your exact business workflow.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Capabilities & Deliverables
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Internal Tools & Dashboards</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Streamline operations with custom administrative interfaces, analytics reporting dashboards, and internal business control centers.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>API Development & Integration</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Robust, secure RESTful and GraphQL APIs connecting disjunct systems, legacy databases, payment gateways, and third-party software platforms.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How does a custom software development project work?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We evaluate your business requirements, define software specifications, build iteratively in agile Sprints, conduct thorough testing, and handle cloud deployment.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Need Custom Software Built?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Contact Discover Crew Technologies to map out your software architecture.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Discuss Your Software Project &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
