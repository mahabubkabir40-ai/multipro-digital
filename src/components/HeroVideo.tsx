'use client';

import { useState, useEffect } from 'react';

export default function HeroVideo() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Only render video on desktop to save bandwidth
    if (window.innerWidth >= 1024) {
      setShouldRender(true);
    }
    
    const handleResize = () => {
      setShouldRender(window.innerWidth >= 1024);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <img 
        src="/hero-bg-desktop-epoxy.webp" 
        alt="Luxury high-gloss polyaspartic flake epoxy garage floor showroom" 
        fetchPriority="high"
        className="w-full h-full object-cover opacity-60 mix-blend-luminosity transform scale-105"
      />
    </div>
  );
}
