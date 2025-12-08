import { pageMetadata } from '@/lib/metadata';

export const metadata = {
  title: pageMetadata.vision.title,
  description: pageMetadata.vision.description,
  keywords: pageMetadata.vision.keywords,
  openGraph: {
    ...pageMetadata.vision.openGraph,
    type: 'website',
    locale: 'en_CA',
    siteName: 'Comfort Home Care Services',
  },
};

export default function VisionLayout({ children }) {
  return children;
}
