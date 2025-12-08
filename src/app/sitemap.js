// Sitemap generator for Comfort Home Care Services
export default function sitemap() {
  const baseUrl = 'https://comforthomecare.com';

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mission`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vision`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Service pages
  const services = [
    'alzheimers-dementia-support',
    'health-care-aide-services',
    'companion-care-services',
    'diabetes-care-services',
    'hospice-palliative-care',
    'nursing-care-services',
    'post-rehabilitative-support',
    'respite-care',
    'cleaning-services',
  ];

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...routes, ...serviceRoutes];
}
