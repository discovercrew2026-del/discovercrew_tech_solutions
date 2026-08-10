import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'SaaS Platform Development Services | Discover Crew Technologies',
  description: 'End-to-end SaaS product engineering, multi-tenant cloud architecture, billing integration, and user authentication by Discover Crew Technologies.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/saas-development',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'SaaS Development Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'SaaS Product Development'
};

export default function SaaSDevelopmentPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> CLOUD PRODUCTS</div>
        <h1 className="subpage-h1">SaaS Platform <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          Transform software concepts into market-ready SaaS applications. Discover Crew Technologies designs multi-tenant backend architectures, recurring subscription billing, secure organization management, and intuitive user dashboards.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            SaaS Infrastructure Capabilities
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Multi-Tenant Architecture</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Isolated data partitions, role-based access controls (RBAC), organization management, and tenant scaling for high security and performance.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Subscription & Payment Systems</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Seamless integration of automated payment gateways (Stripe, Razorpay) for recurring billing, plan upgrades, usage metering, and invoice management.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you help build MVPs for SaaS startups?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We help startups design, build, and launch high-impact SaaS Minimum Viable Products (MVPs) optimized for fast validation and scalability.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Building a SaaS Product?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Partner with Discover Crew Technologies to turn your SaaS vision into reality.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Build Your SaaS Product &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
