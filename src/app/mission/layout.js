import { pageMetadata } from '@/lib/metadata';

export const metadata = {
  title: pageMetadata.mission.title,
  description: pageMetadata.mission.description,
  keywords: pageMetadata.mission.keywords,
  openGraph: {
    ...pageMetadata.mission.openGraph,
    type: 'website',
    locale: 'en_CA',
    siteName: 'Comfort Home Care Services',
  },
};

export default function MissionLayout({ children }) {
  return children;
}
