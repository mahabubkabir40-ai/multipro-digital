import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.multiprodigital.com'


  // Static routes
  const routes = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/movers-marketing-tips',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  const blogDir = path.join(process.cwd(), 'src/app/movers-marketing-tips')
  let blogRoutes: MetadataRoute.Sitemap = []

  try {
    const folders = fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    blogRoutes = folders.map((slug) => ({
      url: `${baseUrl}/movers-marketing-tips/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  } catch (error) {
    console.error('Error reading blog directory for sitemap:', error)
  }

  // Dynamic location routes
  const locationDir = path.join(process.cwd(), 'src/app/locations')
  let locationRoutes: MetadataRoute.Sitemap = []

  try {
    if (fs.existsSync(locationDir)) {
      const folders = fs.readdirSync(locationDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

      locationRoutes = folders.map((slug) => ({
        url: `${baseUrl}/locations/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
      }))
    }
  } catch (error) {
    console.error('Error reading location directory for sitemap:', error)
  }

  return [...routes, ...blogRoutes, ...locationRoutes]

}
