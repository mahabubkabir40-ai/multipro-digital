import type { Metadata } from 'next';

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
  },
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
