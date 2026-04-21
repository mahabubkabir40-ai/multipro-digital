import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;
