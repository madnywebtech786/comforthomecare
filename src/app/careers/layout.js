import { pageMetadata } from '@/lib/metadata';

export const metadata = {
  title: pageMetadata.careers.title,
  description: pageMetadata.careers.description,
  keywords: pageMetadata.careers.keywords,
  openGraph: {
    ...pageMetadata.careers.openGraph,
    type: 'website',
    locale: 'en_CA',
    siteName: 'Comfort Home Care Services',
  },
};

export default function CareersLayout({ children }) {
  return children;
}
