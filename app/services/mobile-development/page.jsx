import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Mobile Application Development Services | Discover Crew Technologies',
  description: 'Custom iOS and Android mobile app development by Discover Crew Technologies in India and globally. We build fast, intuitive cross-platform mobile apps for businesses.',
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
  'description': 'End-to-end mobile application engineering for iOS and Android platforms.',
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
      'name': 'Mobile Development',
      'item': 'https://discovercrewtechnologies.com/services/mobile-development'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Do you build apps for both iOS and Android?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We develop cross-platform mobile applications that run smoothly on both Apple iOS and Google Android platforms from a single shared codebase.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What technology do you use to build mobile apps?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We primarily use React Native for cross-platform development, which allows us to build iOS and Android apps from one codebase while delivering near-native performance. For projects requiring native capabilities, we can work with native iOS (Swift) or Android (Kotlin) as well.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can the mobile app connect to our existing backend or database?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We build mobile apps with secure REST API or GraphQL integrations, connecting to your existing backend systems, cloud databases, or third-party services.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How long does it take to build a mobile app?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A straightforward mobile app with standard features typically takes 6–12 weeks. Apps with complex features such as real-time sync, offline functionality, or payment systems take longer. We provide a timeline after scoping your requirements.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Will you help publish the app to the App Store and Google Play?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We assist with the full app store submission process, including meeting Apple App Store and Google Play Store guidelines, configuring build signing certificates, and preparing store listings.'
      }
    }
  ]
};

export default function MobileDevelopmentPage() {
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
          <span>Mobile Development</span>
        </div>

        <div className="eyebrow"><span className="eyebrow-dot"></span> MOBILE ENGINEERING</div>
        <h1 className="subpage-h1">Mobile Application <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          We design and build mobile applications for iOS and Android. Our mobile solutions combine intuitive user interface design, fast performance, secure authentication, and seamless API synchronization.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            What We Build for Mobile
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Cross-Platform Apps</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Single codebase solutions delivering native-quality performance across iOS and Android devices, reducing development time and cost without sacrificing user experience.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Backend & Push Integrations</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Secure authentication, push notifications, real-time database sync, offline data caching, and seamless cloud API integrations built into the mobile architecture.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>UI/UX Design for Mobile</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Clean, intuitive interface design that follows iOS and Android design guidelines, ensuring comfortable navigation and a polished user experience on all screen sizes.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>App Store Deployment</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We handle end-to-end app publishing to the Apple App Store and Google Play Store, including build configuration, store listing setup, and compliance review.
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
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What technology do you use to build mobile apps?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We primarily use React Native for cross-platform development. For projects requiring native-only capabilities, we can work with Swift (iOS) or Kotlin (Android).</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can the mobile app connect to our existing backend or database?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We build mobile apps with secure REST API or GraphQL integrations, connecting to existing backend systems, cloud databases, or third-party services.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How long does it take to build a mobile app?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>A straightforward mobile app typically takes 6–12 weeks. Apps with complex features such as real-time sync, offline mode, or payment systems take longer. We provide a detailed timeline after scoping your requirements.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Will you help publish the app to the App Store and Google Play?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We assist with the full submission process, including meeting Apple and Google store guidelines, configuring build signing certificates, and preparing store listings.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Have a Mobile App Idea?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Turn your concept into a production-ready mobile application with Discover Crew Technologies.</p>
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
