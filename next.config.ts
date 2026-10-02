import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/local-seo',
        destination: '/',
        permanent: true,
      },
      {
        source: '/google-business-profile',
        destination: '/',
        permanent: true,
      },
      {
        source: '/free-consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/website-design',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
