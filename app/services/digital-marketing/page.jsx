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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Why is technical SEO important for web applications?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Technical SEO ensures search engines can crawl, index, and understand JavaScript-rendered single-page and server-side applications accurately. Without it, even well-written content may not appear in search results.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What does a technical SEO audit cover?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'A technical SEO audit covers crawlability, indexability, canonical URL setup, sitemap validation, robots.txt configuration, Core Web Vitals (LCP, CLS, INP), structured data (JSON-LD), mobile responsiveness, internal linking structure, and meta tag quality across all pages.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you do on-page SEO for existing websites?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We review and optimize title tags, meta descriptions, heading structure (H1–H3), content quality, keyword targeting, image alt text, internal links, and page speed for existing websites and web applications.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can you help our website rank on Google?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We implement technical and on-page SEO best practices that create the conditions for improved search visibility. Actual rankings depend on your domain history, content quality, competition, and how Google crawls and re-indexes your site after changes are made.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What digital marketing services do you provide beyond SEO?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Beyond SEO, we provide conversion rate optimization (CRO), content strategy, landing page design and optimization, analytics setup (Google Analytics 4, Search Console), and digital campaign planning.'
      }
    }
  ]
};

export default function DigitalMarketingPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> DIGITAL GROWTH</div>
        <h1 className="subpage-h1">Digital Marketing & <span className="acc">Technical SEO Services</span></h1>
        <p className="subpage-lead">
          Drive verified search visibility, attract qualified customers, and optimize user conversions. Discover Crew Technologies provides technical SEO audits, on-page optimization, content strategy, and conversion rate optimization.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Our Growth Services
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Technical & On-Page SEO</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Core Web Vitals tuning, structured schema markup, semantic keyword targeting, mobile optimization, canonical URL setup, sitemap and robots.txt configuration, and search engine indexability audits.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Conversion Rate Optimization (CRO)</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Landing page copy refinement, UX layout improvements, call-to-action optimization, and funnel bottleneck analysis to increase the percentage of visitors who take action.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Content Strategy</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Keyword research, topic mapping, content brief creation, and guidance on publishing content that targets relevant search queries and builds topical authority.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Analytics & Reporting Setup</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Google Analytics 4 configuration, Google Search Console setup, conversion tracking, and monthly performance reporting so you understand what is working and what to improve.
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
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Technical SEO ensures search engines can crawl, index, and understand JavaScript-rendered single-page and server-side applications accurately. Without it, well-written content may not appear in search results.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What does a technical SEO audit cover?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>A technical SEO audit covers crawlability, indexability, canonical URL setup, sitemap validation, robots.txt, Core Web Vitals (LCP, CLS, INP), structured data, mobile responsiveness, internal linking, and meta tag quality across all pages.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you do on-page SEO for existing websites?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We review and optimize title tags, meta descriptions, heading structure, content quality, keyword targeting, image alt text, internal links, and page speed for existing websites and web applications.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can you help our website rank on Google?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We implement technical and on-page SEO best practices that create the conditions for improved search visibility. Actual rankings depend on your domain history, content quality, competition, and Google's crawl schedule after changes are made.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What digital marketing services do you provide beyond SEO?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Beyond SEO, we provide conversion rate optimization, content strategy, landing page optimization, analytics setup (GA4, Search Console), and digital campaign planning.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Grow Your Online Presence?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Partner with Discover Crew Technologies to audit and optimize your digital marketing and search visibility.</p>
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
