import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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
      {
        source: '/movers-marketing-tips',
        destination: '/',
        permanent: true,
      },
      {
        source: '/movers-marketing-tips/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service-areas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/service-areas/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
