import type { MetadataRoute } from 'next';

// `/go$` is end-anchored so the legacy `/google-business-profile` redirect stays crawlable.
const DISALLOW = ['/api/', '/success', '/go$', '/o'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: [
          'OAI-SearchBot',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot',
        ],
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: DISALLOW,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: 'https://www.multiprodigital.com/sitemap.xml',
    host: 'https://www.multiprodigital.com',
  };
}
