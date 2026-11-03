import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'AI Marketing & Growth Automation Services | Discover Crew Technologies',
  description: 'Accelerate business growth with AI-driven marketing, intelligent SEO automation, predictive analytics, AI content workflows, and conversion rate optimization in India and globally.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/ai-marketing',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'AI Marketing & Growth Automation Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'AI Marketing & Growth Automation',
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
      'name': 'AI Marketing & Automation',
      'item': 'https://discovercrewtechnologies.com/services/ai-marketing'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'What is AI Marketing and how does it help businesses?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'AI Marketing leverages machine learning algorithms, automated data workflows, and generative AI models to optimize search rankings, personalize outreach, predict user conversion behavior, and eliminate manual marketing tasks.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How does AI improve technical SEO and search rankings?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'AI helps automate keyword clustering, content gap identification, schema generation, search intent analysis, and page performance audits, allowing your brand to rank faster and respond dynamically to search algorithm updates.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can AI marketing workflows integrate with our existing CRM and tools?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We build custom API connectors and automation flows connecting your website, CRM, email platforms, and ad channels with modern AI engines like OpenAI, Gemini, and proprietary models.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How does AI optimize conversion rate optimization (CRO)?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'By analyzing real-time user session behavior, heatmaps, and funnel drop-offs, AI models pinpoint exact friction points and enable intelligent A/B testing of copy, headlines, and call-to-actions.'
      }
    }
  ]
};

export default function AIMarketingPage() {
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
          <span>AI Marketing</span>
        </div>

        <div className="eyebrow"><span className="eyebrow-dot"></span> AI MARKETING & GROWTH</div>
        <h1 className="subpage-h1">AI Marketing & <span className="acc">Growth Automation</span></h1>
        <p className="subpage-lead">
          Leverage cutting-edge artificial intelligence, automated search intelligence, predictive customer modeling, and conversion rate optimization to scale your business predictably.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Our AI Marketing Capabilities
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--cyan)' }}>AI-Powered SEO & Search Visibility</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Automated search intent mapping, technical SEO audits, real-time structured data generation, Core Web Vitals optimization, and keyword clustering to dominate search engine results.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--purple)' }}>Automated Content & Campaign Engines</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Intelligent content pipelines that research, outline, and produce high-converting copy, targeted newsletters, and ad variations aligned with your brand voice.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--gold)' }}>AI Conversion Rate Optimization (CRO)</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Data-driven behavioral analysis, user drop-off prediction, and automated multivariate testing to maximize the percentage of visitors who turn into paying clients.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--blue)' }}>Predictive Analytics & Lead Intelligence</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Advanced event tracking, Google Analytics 4 integration, and predictive lead scoring algorithms that reveal your highest-value customer acquisition channels.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What is AI Marketing and how does it help businesses?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>AI Marketing leverages machine learning algorithms, automated data workflows, and generative AI models to optimize search rankings, personalize outreach, predict user conversion behavior, and eliminate manual marketing tasks.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How does AI improve technical SEO and search rankings?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>AI helps automate keyword clustering, content gap identification, schema generation, search intent analysis, and page performance audits, allowing your brand to rank faster and respond dynamically to search algorithm updates.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can AI marketing workflows integrate with our existing CRM and tools?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We build custom API connectors and automation flows connecting your website, CRM, email platforms, and ad channels with modern AI engines.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How does AI optimize conversion rate optimization (CRO)?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>By analyzing real-time user session behavior, heatmaps, and funnel drop-offs, AI models pinpoint exact friction points and enable intelligent A/B testing of copy, headlines, and call-to-actions.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Scale With AI Marketing?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Partner with Discover Crew Technologies to deploy intelligent marketing automation and AI-driven growth systems.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Get Started with AI Marketing &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
