
import React from 'react';
import Link from 'next/link';
import links from '../config/links_dictionary.json';

interface AutoLinkerProps {
  children: string;
  className?: string;
  linkClassName?: string;
  isDark?: boolean;
}

const AutoLinker: React.FC<AutoLinkerProps> = ({ children, className, linkClassName, isDark = false }) => {
  if (typeof children !== 'string') return <>{children}</>;

  // Create a regex from the dictionary keys
  const keywords = Object.keys(links).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  const parts = children.split(regex);
  
  // Track links per instance
  let homepageLinked = false;
  let locationLinked = false;
  let externalLinked = false;

  const isDarkMode = isDark || Boolean(className && (className.includes('dark') || className.includes('text-white') || className.includes('text-blue-100')));

  const defaultLinkClass = isDarkMode
    ? "text-white font-bold underline decoration-brand-lime decoration-2 underline-offset-4 hover:text-brand-lime transition-colors cursor-pointer"
    : "text-[#0b1f38] font-bold underline decoration-brand-lime decoration-2 underline-offset-4 hover:text-brand-lime transition-colors cursor-pointer";

  const resolvedLinkClass = linkClassName || defaultLinkClass;

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const keywordMatch = keywords.find(k => k.toLowerCase() === lowerPart);

        if (keywordMatch) {
          const url = (links as any)[keywordMatch];
          const isExternal = url.startsWith('http');
          const isHomepage = url === '/';
          const isSecondary = url.includes('/locations/') || url === '/about' || url === '/contact'; // Locations, About, or Contact

          // Apply the "3-Link Rule"
          let shouldLink = false;
          if (isHomepage && !homepageLinked) {
            shouldLink = true;
            homepageLinked = true;
          } else if (isSecondary && !locationLinked) {
            shouldLink = true;
            locationLinked = true; // Still using this variable name for the secondary slot
          } else if (isExternal && !externalLinked) {
            shouldLink = true;
            externalLinked = true;
          }

          if (shouldLink) {
            if (isExternal) {
              return (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer nofollow"
                  className={resolvedLinkClass}
                >
                  {part}
                </a>
              );
            }

            return (
              <Link 
                key={i} 
                href={url}
                className={resolvedLinkClass}
              >
                {part}
              </Link>
            );
          }
        }

        return part;
      })}
    </span>
  );
};

export default AutoLinker;
