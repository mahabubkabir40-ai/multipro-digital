import type { MetadataRoute } from 'next';
import { ALL_LOCATION_SLUGS } from '@/config/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.multiprodigital.com';
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/free-audit`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const locationRoutes: MetadataRoute.Sitemap = ALL_LOCATION_SLUGS.map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
    images: [`${baseUrl}/logo.png`],
  }));

  return [...staticRoutes, ...locationRoutes];
}
