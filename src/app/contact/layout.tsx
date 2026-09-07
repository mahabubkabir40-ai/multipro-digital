import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Book a Strategy Call | MultiPro Digital',
  description: 'Book a 1-on-1 strategy call with MultiPro Digital to analyze your local epoxy market, lock your city territory, and scale your high-margin garage floor bookings.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
