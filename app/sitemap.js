export default async function sitemap() {
  const baseUrl = 'https://discovercrewtechnologies.com';
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/services/web-development',
    '/services/mobile-development',
    '/services/digital-marketing',
    '/services/ai-automation',
    '/services/software-development',
    '/services/saas-platform',
    '/products/ventura-ai',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
