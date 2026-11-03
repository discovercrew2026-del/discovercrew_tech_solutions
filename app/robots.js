export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: ['OAI-SearchBot', 'PerplexityBot'],
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://discovercrewtechnologies.com/sitemap.xml',
  };
}
