import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'AI Automation & Integration Services | Discover Crew Technologies',
  description: 'Streamline business operations with custom AI integrations, LLM workflows, customer service automation, and process automation by Discover Crew Technologies.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/ai-automation',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'AI Automation Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'AI Integration & Business Automation'
};

export default function AIAutomationPage() {
  return (
    <div className="subpage-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navigation />

      <main className="subpage-hero">
        <div className="eyebrow"><span className="eyebrow-dot"></span> AI & WORKFLOW AUTOMATION</div>
        <h1 className="subpage-h1">AI Automation Solutions <span className="acc">for Business</span></h1>
        <p className="subpage-lead">
          Integrate practical artificial intelligence directly into your everyday business workflows. We design custom AI automations that reduce repetitive tasks, automate lead capture, analyze document data, and boost workforce efficiency.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            What We Automate
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Workflow & Task Automation</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Automate data extraction, email parsing, lead routing, document processing, and multi-step operational tasks to save hundreds of manual hours.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Agent & LLM Integration</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Connect modern LLM models to internal business data, creating secure AI assistants, content generation tools, and intelligent customer support bots.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can AI automation integrate with our existing software tools?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We build custom API connectors to bridge existing CRMs, databases, messaging platforms, and internal cloud systems with AI models seamlessly.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Automate Your Business?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Talk with Discover Crew Technologies about implementing practical AI automation.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Explore AI Automation &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
