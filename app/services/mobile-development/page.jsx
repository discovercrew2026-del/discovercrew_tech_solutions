import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Mobile Application Development Services | Discover Crew Technologies',
  description: 'Custom iOS and Android mobile app development by Discover Crew Technologies. We build fast, intuitive cross-platform mobile apps.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/mobile-development',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Mobile Application Development Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'Mobile App Development',
  'description': 'End-to-end mobile application engineering for iOS and Android platforms.'
};

export default function MobileDevelopmentPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> MOBILE ENGINEERING</div>
        <h1 className="subpage-h1">Mobile Application <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          We design and build powerful mobile applications for iOS and Android. Our mobile solutions combine intuitive user interface design, fast performance, secure authentication, and seamless API synchronization.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            What We Build for Mobile
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Cross-Platform Apps</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Single codebase solutions delivering native-quality performance across iOS and Android devices, speeding up time-to-market and reducing development overhead.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Backend & Push Integrations</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Secure authentication, push notifications, real-time database sync, offline data caching, and seamless cloud API integrations.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you build apps for both iOS and Android?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We develop cross-platform mobile applications that run smoothly on both Apple iOS and Google Android platforms.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Have a Mobile App Idea?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Turn your concept into a production-ready mobile application with Discover Crew.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Build Your Mobile App &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
