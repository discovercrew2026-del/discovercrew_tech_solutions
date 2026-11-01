import './globals.css';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://discovercrewtechnologies.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Discover Crew Technologies | AI, Software & SaaS Development',
  description: 'Discover Crew Technologies builds custom software, web and mobile apps, AI automation, SaaS platforms and digital solutions for businesses.',
  keywords: [
    'custom software development',
    'AI automation solutions',
    'SaaS development company',
    'web application development',
    'mobile app development',
    'Ventura AI',
    'Event OS',
    'business automation',
    'Discover Crew Technologies'
  ],
  authors: [{ name: 'Discover Crew Technologies' }],
  creator: 'Discover Crew Technologies',
  publisher: 'Discover Crew Technologies',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    title: 'Discover Crew Technologies | AI, Software & SaaS Development',
    description: 'Discover Crew Technologies builds custom software, web and mobile apps, AI automation, SaaS platforms and digital solutions for businesses.',
    url: 'https://discovercrewtechnologies.com/',
    siteName: 'Discover Crew Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Discover Crew Technologies — Custom Software, AI & SaaS Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Crew Technologies | AI, Software & SaaS Development',
    description: 'Discover Crew Technologies builds custom software, web and mobile apps, AI automation, SaaS platforms and digital solutions for businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Discover Crew Technologies',
  'legalName': 'Discover Crew Technologies',
  'url': 'https://discovercrewtechnologies.com',
  'logo': 'https://discovercrewtechnologies.com/logo.jpeg',
  'description': 'Discover Crew Technologies is a technology company that builds custom software, web and mobile applications, AI-powered automation, SaaS products and digital solutions for businesses.',
  'telephone': '+919500607705',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'IN'
  },
  'founders': [
    { '@type': 'Person', 'name': 'Rohith', 'jobTitle': 'Founder & Full Stack Developer' }
  ],
  'knowsAbout': [
    'Custom Software Development',
    'Web Application Development',
    'Mobile Application Development',
    'AI Integration and Automation',
    'SaaS Product Development',
    'AI Marketing & Automation'
  ],
  'sameAs': [
    'https://linkedin.com/company/discover-crew-technologies',
    'https://twitter.com/discovercrew'
  ]
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'name': 'Discover Crew Technologies',
  'url': 'https://discovercrewtechnologies.com',
  'description': 'Discover Crew Technologies builds custom software, web and mobile applications, AI-powered automation, SaaS products and digital solutions for businesses.',
  'potentialAction': {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': 'https://discovercrewtechnologies.com/?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}


