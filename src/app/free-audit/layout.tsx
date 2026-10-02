import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Free 60-Second Video Audit for Epoxy Contractors | MultiPro',
  description: 'Get a free 60-second video breakdown showing your Google Map Pack rankings, website speed score, and why competitors are getting called first for garage jobs.',
  alternates: {
    canonical: 'https://www.multiprodigital.com/free-audit',
  },
  openGraph: {
    title: 'Free 60-Second Video Audit for Epoxy Contractors | MultiPro',
    description: 'Get a free 60-second video breakdown showing your Google Map Pack rankings, website speed score, and why competitors are getting called first for garage jobs.',
    url: 'https://www.multiprodigital.com/free-audit',
    siteName: 'MultiPro Digital',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 425,
        alt: 'MultiPro Digital - Free Video Audit for Epoxy Contractors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 60-Second Video Audit for Epoxy Contractors | MultiPro',
    description: 'Get a free 60-second video breakdown showing your Google Map Pack rankings, website speed score, and why competitors are getting called first for garage jobs.',
    images: ['/logo.png'],
  },
};

const auditBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.multiprodigital.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Free Video Audit',
      item: 'https://www.multiprodigital.com/free-audit',
    },
  ],
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={auditBreadcrumbSchema} />
      {children}
    </>
  );
}

