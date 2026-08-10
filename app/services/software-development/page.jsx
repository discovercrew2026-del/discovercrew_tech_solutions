import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

export const metadata = {
  title: 'Custom Software Development Services | Discover Crew Technologies',
  description: 'Bespoke software development, custom business tools, internal administration dashboards, and REST APIs built by Discover Crew Technologies.',
  alternates: {
    canonical: 'https://discovercrewtechnologies.com/services/software-development',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Custom Software Development Services',
  'provider': {
    '@type': 'Organization',
    'name': 'Discover Crew Technologies',
    'url': 'https://discovercrewtechnologies.com'
  },
  'serviceType': 'Software Development'
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'How does a custom software development project work?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We evaluate your business requirements, define software specifications, build iteratively in agile Sprints, conduct thorough testing, and handle cloud deployment.'
      }
    },
    {
      '@type': 'Question',
      'name': 'What types of custom software do you build?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'We build internal business tools, admin dashboards, workflow engines, inventory management systems, CRM extensions, data processing pipelines, REST and GraphQL APIs, and integration middleware connecting disparate systems.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Can you build software to replace our existing spreadsheet-based processes?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. A common project we take on is replacing manual spreadsheet workflows with custom software that automates data entry, calculations, reporting, and team collaboration in a purpose-built web interface.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Do you sign NDAs for custom software projects?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Yes. We are comfortable signing non-disclosure agreements for custom software projects where business logic, data structures, or proprietary processes are involved.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Who owns the source code of the custom software?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'You do. Upon project completion and final payment, full source code ownership is transferred to you. This is covered in the project agreement before development starts.'
      }
    }
  ]
};

export default function SoftwareDevelopmentPage() {
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
        <div className="eyebrow"><span className="eyebrow-dot"></span> CUSTOM ENGINEERING</div>
        <h1 className="subpage-h1">Custom Software <span className="acc">Development Services</span></h1>
        <p className="subpage-lead">
          Generic off-the-shelf software often fails to solve specific business problems. We engineer custom software solutions — internal tools, automated dashboards, data integration pipelines, and custom APIs — designed around your exact business workflow.
        </p>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Capabilities & Deliverables
          </h2>
          <div className="subpage-grid-2">
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Internal Tools & Dashboards</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Streamline operations with custom administrative interfaces, analytics reporting dashboards, and internal business control centers built to match your specific data and team structure.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>API Development & Integration</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Robust, secure RESTful and GraphQL APIs connecting disparate systems, legacy databases, payment gateways, and third-party software platforms into a unified data layer.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Workflow Automation Systems</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Replace manual spreadsheet processes and email chains with purpose-built software that automates approvals, notifications, data routing, and reporting.
              </p>
            </div>
            <div className="subpage-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Data Processing Pipelines</h3>
              <p style={{ color: 'var(--w50)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                Custom ETL (extract, transform, load) pipelines that pull data from multiple sources, clean and transform it, and deliver it to dashboards or databases automatically.
              </p>
            </div>
          </div>
        </section>

        <section className="subpage-section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            Frequently Asked Questions
          </h2>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>How does a custom software development project work?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We evaluate your business requirements, define software specifications, build iteratively in agile Sprints, conduct thorough testing, and handle cloud deployment.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>What types of custom software do you build?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>We build internal business tools, admin dashboards, workflow engines, inventory management systems, CRM extensions, data processing pipelines, REST and GraphQL APIs, and integration middleware connecting disparate systems.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Can you build software to replace our existing spreadsheet-based processes?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. A common project we take on is replacing manual spreadsheet workflows with custom software that automates data entry, calculations, reporting, and team collaboration in a purpose-built interface.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Do you sign NDAs for custom software projects?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>Yes. We are comfortable signing non-disclosure agreements for projects where business logic, data structures, or proprietary processes are involved.</p>
          </div>
          <div className="subpage-faq-item">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.4rem' }}>Who owns the source code of the custom software?</h3>
            <p style={{ color: 'var(--w50)', fontSize: '0.95rem' }}>You do. Upon project completion and final payment, full source code ownership is transferred to you. This is covered in the project agreement before development begins.</p>
          </div>
        </section>

        <div style={{ marginTop: '3rem', textAlign: 'center', padding: '3rem 2rem', background: 'rgba(10,15,30,0.6)', borderRadius: '16px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem' }}>Need Custom Software Built?</h2>
          <p style={{ color: 'var(--w50)', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>Contact Discover Crew Technologies to map out your software architecture and get a project estimate.</p>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Discuss Your Software Project &rarr;
          </Link>
        </div>
      </main>

      <footer className="subpage-footer">
        <p>© {new Date().getFullYear()} Discover Crew Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
}
