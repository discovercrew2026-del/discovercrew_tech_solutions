import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Event OS — Event Management Platform | Discover Crew Technologies',
  description: 'Event OS is an all-in-one event management platform currently under active development by Discover Crew Technologies in India and globally.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/products/event-os',
  },
  openGraph: {
    title: 'Event OS — Event Management Platform',
    description: 'Event creation, attendee registration, ticketing, and check-in tracking platform built by Discover Crew Technologies.',
    url: 'https://discovercrewtechnologies.com/products/event-os',
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  'name': 'Event OS',
  'applicationCategory': 'BusinessApplication',
  'operatingSystem': 'Web Browser',
  'description': 'All-in-one event management platform for event creation, registration, ticketing, and real-time attendance tracking.',
  'author': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  }
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
      'name': 'Products',
      'item': 'https://discovercrewtechnologies.com/products'
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'name': 'Event OS',
      'item': 'https://discovercrewtechnologies.com/products/event-os'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is Event OS?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Event OS is an all-in-one event management platform being developed by Discover Crew Technologies for event creation, ticketing, attendee registration, and check-in tracking.'
      }
    },
    {
      '@type': 'Question',
      'name': 'When will Event OS be available for public launch?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Event OS is currently under active development. Interested event organizers can contact Discover Crew Technologies for early access and pilot program participation.'
      }
    }
  ]
};

export default function EventOSPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
          <Link href="/products" style={{ color: 'var(--cyan)', textDecoration: 'none' }}>Products</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span>Event OS</span>
        </div>

        <div className="eyebrow"><span className="eyebrow-dot"></span> PRODUCT IN DEVELOPMENT</div>
        <h1 className="subpage-h1">🗓️ Event OS <span className="acc">Event Management Platform</span></h1>
        <p className="subpage-lead">
          <strong>Event OS is an event management platform currently under development by Discover Crew Technologies.</strong> It is being built to provide event organizers with a unified system for creating events, managing attendee registrations, handling ticketing, tracking attendance, and coordinating venue teams.
        </p>

        <div style={{ marginBottom: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span style={{ padding: '0.6rem 1.2rem', borderRadius: '6px', background: 'rgba(251,191,36,0.12)', color: 'var(--gold)', fontWeight: 600, fontSize: '0.9rem' }}>
            🚧 Status: In Active Development
          </span>
        </div>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Planned Platform Functionality
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Event Creation & Ticketing</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Flexible tools for creating digital event pages, managing ticket tiers, issuing digital passes, and handling secure payment processing.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Registration & Attendance Tracking</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Attendee registration forms, automated confirmation emails, QR code check-ins, and real-time venue attendance tracking.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Team & Staff Coordination</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Role-based access permissions for event staff, venue managers, volunteers, and ticketing officers.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Analytics & Reporting</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Post-event analytics, ticket sales performance, demographic summaries, and peak check-in timeline reports.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What is Event OS?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Event OS is an all-in-one event management platform being developed by Discover Crew Technologies for event creation, ticketing, attendee registration, and check-in tracking.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>When will Event OS be available for public launch?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Event OS is currently under active development. Interested event organizers can contact Discover Crew Technologies for early access and pilot program participation.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Interested in Early Access to Event OS?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Contact Discover Crew Technologies for development updates or pilot participation.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Contact Discover Crew &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
