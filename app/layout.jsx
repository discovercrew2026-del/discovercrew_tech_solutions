import './globals.css';

export const metadata = {
  metadataBase: new URL('https://discovercrewtechnologies.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Discover Crew Technologies | AI Software & Web Development Agency',
  description: 'We engineer custom software, Next.js web applications, and AI integrations. Scale your business with custom automated solutions and our flagship Ventura AI.',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    title: 'Discover Crew Technologies | AI Software & Web Development Agency',
    description: 'We engineer custom software, Next.js web applications, and AI integrations. Scale your business with custom automated solutions and our flagship Ventura AI.',
    images: ['/logo.jpeg'],
    url: 'https://discovercrewtechnologies.com/',
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  'name': 'Discover Crew Technologies',
  'image': 'https://discovercrewtechnologies.com/logo.jpeg',
  'url': 'https://discovercrewtechnologies.com',
  'telephone': '+919500607705',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'IN'
  },
  'founders': [
    { '@type': 'Person', 'name': 'Rohith' },
    { '@type': 'Person', 'name': 'Aravinth' },
    { '@type': 'Person', 'name': 'Tharun' },
    { '@type': 'Person', 'name': 'Gowtham' }
  ],
  'sameAs': [
    'https://linkedin.com/company/discover-crew-technologies',
    'https://twitter.com/discovercrew'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

