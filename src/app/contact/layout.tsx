import type { Metadata } from 'next';

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
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
