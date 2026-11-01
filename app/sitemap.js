export default async function sitemap() {
  const baseUrl = 'https://discovercrewtechnologies.com';
  
  const routes = [
    '',
    '/services',
    '/services/web-development',
    '/services/mobile-development',
    '/services/software-development',
    '/services/ai-automation',
    '/services/saas-development',
    '/services/ai-marketing',
    '/products',
    '/products/ventura-ai',
    '/products/event-os',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services/') || route.startsWith('/products/') ? 0.8 : 0.7,
  }));
}

