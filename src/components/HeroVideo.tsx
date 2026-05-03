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
    <video 
      autoPlay 
      loop 
      muted 
      playsInline 
      className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transform scale-105"
    >
      <source src="/moving-truck.mp4" type="video/mp4" />
    </video>
  );
}
