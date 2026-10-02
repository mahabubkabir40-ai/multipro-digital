import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MultiPro Digital | Epoxy Flooring SEO & Contractor Websites',
    short_name: 'MultiPro Digital',
    description: 'Specialized SEO, Google Map Pack rankings, and high-performance websites for epoxy and concrete coating contractors.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b1f38',
    theme_color: '#9afb16',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
