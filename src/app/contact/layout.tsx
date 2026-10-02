import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contact MultiPro Digital | Epoxy Contractor Growth Partner',
  description: 'Get in touch with MultiPro Digital. Lock out your local city territory, review your Google Map Pack rankings, and stop wasting money on shared contractor leads.',
  alternates: {
    canonical: 'https://www.multiprodigital.com/contact',
  },
  openGraph: {
    title: 'Contact MultiPro Digital | Epoxy Contractor Growth Partner',
    description: 'Get in touch with MultiPro Digital. Lock out your local city territory, review your Google Map Pack rankings, and stop wasting money on shared contractor leads.',
    url: 'https://www.multiprodigital.com/contact',
    siteName: 'MultiPro Digital',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 425,
        alt: 'MultiPro Digital - Contact Epoxy Contractor Marketing Partner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MultiPro Digital | Epoxy Contractor Growth Partner',
    description: 'Get in touch with MultiPro Digital. Lock out your local city territory, review your Google Map Pack rankings, and stop wasting money on shared contractor leads.',
    images: ['/logo.png'],
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.multiprodigital.com/contact#breadcrumb',
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
          name: 'Contact',
          item: 'https://www.multiprodigital.com/contact',
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://www.multiprodigital.com/contact#webpage',
      url: 'https://www.multiprodigital.com/contact',
      name: 'Contact MultiPro Digital | Epoxy Contractor Growth Partner',
      description: 'Get in touch with MultiPro Digital to analyze your local epoxy market, lock your city territory, and scale your high-margin garage floor bookings.',
      isPartOf: {
        '@id': 'https://www.multiprodigital.com/#website',
      },
      breadcrumb: {
        '@id': 'https://www.multiprodigital.com/contact#breadcrumb',
      },
    },
  ],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={contactSchema} />
      {children}
    </>
  );
}

