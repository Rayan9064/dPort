import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Ensures ESLint errors stop builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // This allows any image path under this domain
      },
    ],
  },
  /* other config options */
};

export default nextConfig;
