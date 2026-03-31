import { Metadata } from 'next';
import { siteSettings } from '@/content/site';

export const createMetadata = (title: string, description: string, path = '/'): Metadata => ({
  title,
  description,
  metadataBase: new URL(siteSettings.siteUrl),
  openGraph: {
    title,
    description,
    url: `${siteSettings.siteUrl}${path}`,
    siteName: siteSettings.siteName,
    images: [{ url: siteSettings.ogImage, width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [siteSettings.ogImage]
  }
});

export const jsonLdPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alex Mercer',
  jobTitle: 'Fullstack Developer and AI Content Manager',
  url: siteSettings.siteUrl,
  sameAs: ['https://linkedin.com/in/your-profile']
};
