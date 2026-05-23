'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Delay in ms (optional)
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply delay if specified, otherwise show immediately after intersection
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the component is visible
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={domRef}
      className={`md:transition-all md:duration-700 md:ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0 md:opacity-0 md:translate-y-12'
      } ${className}`}
    >
      {children}
    </div>
  );
}
