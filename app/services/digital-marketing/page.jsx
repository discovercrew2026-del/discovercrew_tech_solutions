import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Digital Marketing & Technical SEO Services | Discover Crew Technologies',
  description: 'Data-driven digital marketing, technical search engine optimization, conversion rate optimization, and brand positioning by Discover Crew Technologies.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/digital-marketing',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Digital Marketing & SEO Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'Digital Marketing & Search Engine Optimization'
};

export default function DigitalMarketingPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> DIGITAL GROWTH</div>
        <h1 className="subpage-h1">Digital Marketing & <span className="acc">Technical SEO Services</span></h1>
        <p className="subpage-lead">
          Drive verified search visibility, attract qualified target customers, and optimize user conversions. Discover Crew Technologies provides technical SEO audits, on-page optimization, content strategy, and digital campaign execution.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Our Growth Services
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Technical & On-Page SEO</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Core Web Vitals tuning, structured schema markup, semantic keyword targeting, mobile optimization, and search engine indexability enhancements.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Conversion Rate Optimization (CRO)</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Landing page copy refinement, UX layout adjustments, call-to-action optimization, and funnel bottleneck removal to maximize conversions.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Why is technical SEO important for web applications?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Technical SEO ensures search engines can crawl, index, and understand JavaScript-rendered single-page and server-side applications accurately.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Scale Your Online Growth?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Partner with Discover Crew Technologies to optimize your digital marketing.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Get Started with Growth &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
