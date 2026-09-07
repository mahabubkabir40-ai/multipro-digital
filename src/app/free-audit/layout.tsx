import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free 60-Second Video Audit for Epoxy Contractors | MultiPro Digital',
  description: 'Get a free 60-second video audit showing your Google Map Pack ranking gaps, mobile page speed score, and how to capture exclusive high-margin floor jobs.',
};

export default function FreeAuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
