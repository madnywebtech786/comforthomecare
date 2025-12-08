import { pageMetadata } from '@/lib/metadata';

const baseUrl = 'https://comforthomecare.com';

// Map slugs to metadata keys
const slugToMetadataKey = {
  'alzheimers-dementia-support': 'alzheimers',
  'health-care-aide-services': 'healthCareAide',
  'companion-care-services': 'companion',
  'diabetes-care-services': 'diabetes',
  'hospice-palliative-care': 'hospice',
  'nursing-care-services': 'nursing',
  'post-rehabilitative-support': 'postRehab',
  'respite-care': 'respite',
  'cleaning-services': 'cleaning',
};

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const metadataKey = slugToMetadataKey[slug];

  if (!metadataKey || !pageMetadata.services[metadataKey]) {
    return {
      title: 'Home Care Services Calgary | Comfort Home Care',
      description: 'Professional home care services in Calgary and Alberta.',
    };
  }

  const serviceMetadata = pageMetadata.services[metadataKey];

  return {
    title: serviceMetadata.title,
    description: serviceMetadata.description,
    keywords: serviceMetadata.keywords,
    openGraph: {
      title: serviceMetadata.title,
      description: serviceMetadata.description,
      url: `${baseUrl}/services/${slug}`,
      type: 'website',
      locale: 'en_CA',
      siteName: 'Comfort Home Care Services',
    },
  };
}

export default function ServiceLayout({ children }) {
  return children;
}
