import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Multipro Digital | Epoxy Growth Systems',
    short_name: 'MultiproDigital',

    description: 'Specialized Growth Systems & Local SEO for Epoxy Coating Contractors',
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
  }
}
