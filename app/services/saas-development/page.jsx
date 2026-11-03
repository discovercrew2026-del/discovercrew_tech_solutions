import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'SaaS Platform Development Services | Discover Crew Technologies',
  description: 'End-to-end SaaS product engineering, multi-tenant cloud architecture, billing integration, and user authentication by Discover Crew Technologies in India and globally.',
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
  'serviceType': 'SaaS Product Development',
  'areaServed': [
    { '@type': 'Country', 'name': 'India' },
    { '@type': 'AdministrativeArea', 'name': 'Worldwide' }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://discovercrewtechnologies.com'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Services',
      'item': 'https://discovercrewtechnologies.com/services'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'SaaS Development',
      'item': 'https://discovercrewtechnologies.com/services/saas-development'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Do you help build MVPs for SaaS startups?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We help startups design, build, and launch SaaS Minimum Viable Products (MVPs) optimized for fast user validation and technical scalability.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What is multi-tenant architecture and why does it matter for SaaS?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Multi-tenant architecture means a single application instance serves multiple customers (tenants), with each customer\'s data securely isolated. This is the standard approach for scalable SaaS products because it reduces infrastructure costs and simplifies maintenance as your customer base grows.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can you integrate subscription billing into the SaaS platform?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We integrate Stripe and Razorpay for recurring subscription billing, plan management, usage-based billing, invoice generation, and payment failure handling — all automated within the platform.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How long does it take to build a SaaS product?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A focused SaaS MVP with core features, authentication, and basic billing typically takes 8–16 weeks. A full-featured SaaS platform with analytics, role management, and API integrations takes 3–6 months depending on scope.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you build the admin dashboard and user management system as part of the SaaS?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. A standard SaaS build from Discover Crew includes a user-facing dashboard, role-based access control (RBAC), an admin control panel, and subscription management — all built into the platform architecture.'
      }
    }
  ]
};

export default function SaaSDevelopmentPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div style={{ fontSize: '0.85rem', color: 'var(--w50)', marginBottom: '1.5rem' }}>
          <Link href="/" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <Link href="/services" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Services</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>SaaS Development</span>
        </div>

        <div className="eyebrow"><span className="eyebrow-dot"></span> CLOUD PRODUCTS</div>
        <h1 className="subpage-h1">SaaS Platform <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          Turn software concepts into market-ready SaaS applications. Discover Crew Technologies designs multi-tenant backend architectures, recurring subscription billing, secure user management, and intuitive user dashboards.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            SaaS Infrastructure Capabilities
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Multi-Tenant Architecture</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Isolated data partitions, role-based access controls (RBAC), organization management, and tenant scaling for a production-ready SaaS foundation.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Subscription & Payment Systems</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Integration of automated payment gateways (Stripe, Razorpay) for recurring billing, plan upgrades, usage metering, and invoice management.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>User Authentication & Access</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Secure sign-up, login, password management, OAuth providers (Google, GitHub), email verification, and session management built into the product foundation.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Analytics & Admin Dashboard</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Internal admin control panels with user management, subscription oversight, feature flags, usage analytics, and customer activity monitoring.
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
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We help startups design, build, and launch SaaS Minimum Viable Products (MVPs) optimized for fast user validation and technical scalability.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What is multi-tenant architecture and why does it matter?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Multi-tenant means one application serves multiple customers with each customer's data securely isolated. This is standard for SaaS because it reduces infrastructure costs and simplifies maintenance as your user base grows.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can you integrate subscription billing into the SaaS platform?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We integrate Stripe and Razorpay for recurring billing, plan management, usage-based billing, invoice generation, and automated payment failure handling.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How long does it take to build a SaaS product?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>A focused SaaS MVP with core features, authentication, and basic billing typically takes 8–16 weeks. A full-featured platform with analytics and integrations takes 3–6 months depending on scope.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you build the admin dashboard and user management as part of the SaaS?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. A standard SaaS build includes a user-facing dashboard, role-based access control, an admin control panel, and subscription management — all built into the platform architecture.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Building a SaaS Product?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Partner with Discover Crew Technologies to turn your SaaS idea into a production-ready product.</p>
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
