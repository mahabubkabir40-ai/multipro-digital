'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface TrackedLinkProps {
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  eventLabel: string;
  style?: React.CSSProperties;
  children: ReactNode;
}

export default function TrackedLink({ 
  href, 
  className, 
  target, 
  rel, 
  eventLabel, 
  style,
  children 
}: TrackedLinkProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_audit', {
        'event_category': 'CTA',
        'event_label': eventLabel
      });
    }
  };

  return (
    <Link 
      href={href} 
      className={className} 
      target={target} 
      rel={rel} 
      onClick={handleClick}
      style={style}
      prefetch={false}
    >
      {children}
    </Link>
  );
}
