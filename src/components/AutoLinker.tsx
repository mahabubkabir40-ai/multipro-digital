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

  // Create a regex from the dictionary keys (sorted longest first to match full phrases)
  const keywords = Object.keys(links).sort((a, b) => b.length - a.length);
  const regex = new RegExp(`(${keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  const parts = children.split(regex);
  
  // Track links per component instance
  const linkedUrls = new Set<string>();
  let internalLinkCount = 0;
  let externalLinkCount = 0;

  const isDarkMode = isDark || Boolean(className && (className.includes('dark') || className.includes('text-white') || className.includes('text-blue-100')));

  const defaultLinkClass = isDarkMode
    ? "text-brand-lime font-bold underline decoration-brand-lime/50 decoration-1 underline-offset-4 hover:decoration-brand-lime hover:text-white transition-colors cursor-pointer"
    : "text-[#0b1f38] font-bold underline decoration-brand-lime decoration-2 underline-offset-4 hover:text-brand-lime transition-colors cursor-pointer";

  const resolvedLinkClass = linkClassName || defaultLinkClass;

  return (
    <span className={className}>
      {parts.map((part, i) => {
        const lowerPart = part.toLowerCase();
        const keywordMatch = keywords.find(k => k.toLowerCase() === lowerPart);

        if (keywordMatch) {
          const url = (links as Record<string, string>)[keywordMatch];
          const isExternal = url.startsWith('http');

          // Strict limit: Max 2 internal links, max 1 external link per block, never link the exact same URL twice
          let shouldLink = false;
          if (!linkedUrls.has(url)) {
            if (isExternal && externalLinkCount < 1) {
              shouldLink = true;
              externalLinkCount++;
              linkedUrls.add(url);
            } else if (!isExternal && internalLinkCount < 2) {
              shouldLink = true;
              internalLinkCount++;
              linkedUrls.add(url);
            }
          }

          if (shouldLink) {
            if (isExternal) {
              return (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
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
