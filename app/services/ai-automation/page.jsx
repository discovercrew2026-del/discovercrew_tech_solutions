import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'AI Automation & Integration Services | Discover Crew Technologies',
  description: 'Streamline business operations with custom AI integrations, LLM workflows, customer service automation, and process automation by Discover Crew Technologies in India and globally.',
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
  'serviceType': 'AI Integration & Business Automation',
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
      'name': 'AI Automation',
      'item': 'https://discovercrewtechnologies.com/services/ai-automation'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Can AI automation integrate with our existing software tools?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We build custom API connectors to bridge existing CRMs, databases, messaging platforms, and internal cloud systems with AI models seamlessly.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What types of business tasks can be automated with AI?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Common tasks we automate include lead capture and routing, email parsing and categorization, document processing, customer support responses, report generation, data extraction from PDFs and forms, and multi-step internal approval workflows.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you work with OpenAI, Gemini, or other LLM providers?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We integrate with OpenAI (GPT-4, GPT-4o), Google Gemini, Anthropic Claude, and open-source LLMs depending on the project requirements, budget, and data privacy considerations.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Is AI automation suitable for small businesses?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. AI automation is particularly valuable for small and growing businesses that want to reduce manual overhead without hiring additional staff. We scope automations to fit your actual team size and operational budget.'
      }
    },
    {
      '@type': 'Question',
      'name': 'How does the AI automation development process work?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We start by mapping your current manual workflows and identifying automation opportunities. We then design, build, and test the automation pipeline, connect it to your existing tools, and provide documentation so your team can manage it independently.'
      }
    }
  ]
};

export default function AIAutomationPage() {
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
          <span>AI Automation</span>
        </div>

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
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lead & Sales Automation</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Automatically capture leads from web forms, emails, and social channels, score them by criteria, and route them to the right team member or CRM field.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Customer Support Automation</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Deploy AI-powered support bots trained on your product documentation to handle tier-1 customer queries, with seamless escalation to human agents when needed.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Technologies We Use
          </h2>
          <div className="subpage-grid-3">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1rem', color: 'var(--cyan)' }}>LLM APIs</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>OpenAI GPT-4, Google Gemini, Anthropic Claude, and open-source models via Ollama.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1rem', color: 'var(--purple)' }}>Automation Platforms</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Custom Python pipelines, webhook integrations, and serverless cloud functions.</p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1rem', color: 'var(--gold)' }}>Integrations</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.9rem', marginTop: '0.5rem' }}>REST APIs, Firebase, Supabase, Google Sheets, Notion, Slack, and email providers.</p>
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
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What types of business tasks can be automated with AI?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Common tasks we automate include lead capture and routing, email parsing, document processing, customer support responses, report generation, data extraction, and multi-step internal approval workflows.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you work with OpenAI, Gemini, or other LLM providers?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We integrate with OpenAI (GPT-4, GPT-4o), Google Gemini, Anthropic Claude, and open-source LLMs depending on project requirements, budget, and data privacy needs.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Is AI automation suitable for small businesses?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. AI automation helps small businesses reduce manual overhead without adding headcount. We scope automations to fit your team size and operational budget.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How does the AI automation development process work?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We start by mapping your current manual workflows and identifying automation opportunities. We then design, build, and test the automation pipeline, connect it to your existing tools, and provide documentation so your team can manage it independently.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Automate Your Business?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Talk with Discover Crew Technologies about implementing practical AI automation in your operations.</p>
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
