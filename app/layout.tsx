import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteSettings } from '@/content/site';
import { jsonLdPerson } from '@/lib/utils';

export const metadata: Metadata = {
  title: siteSettings.defaultTitle,
  description: siteSettings.defaultDescription
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }} />
      </body>
    </html>
  );
}
