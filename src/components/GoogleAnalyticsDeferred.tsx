'use client';

import { useEffect } from 'react';

export default function GoogleAnalyticsDeferred() {
  useEffect(() => {
    let initialized = false;

    const initGA = () => {
      if (initialized) return;
      initialized = true;

      // Remove listeners
      removeListeners();

      // Inject Google Tag Manager script
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZHR9P6KVHT';
      script.async = true;
      document.head.appendChild(script);

      // Configure GA
      const configScript = document.createElement('script');
      configScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-ZHR9P6KVHT');
      `;
      document.head.appendChild(configScript);
    };

    const triggerEvents = ['pointerdown', 'mousedown', 'touchstart', 'scroll'];
    
    const removeListeners = () => {
      triggerEvents.forEach(event => {
        window.removeEventListener(event, initGA);
      });
    };

    triggerEvents.forEach(event => {
      window.addEventListener(event, initGA, { passive: true });
    });

    // Timeout fallback: 3.5s on mobile viewport, 2s on desktop
    const delay = window.innerWidth < 768 ? 3500 : 2000;
    const timer = setTimeout(initGA, delay);

    return () => {
      clearTimeout(timer);
      removeListeners();
    };
  }, []);

  return null;
}
