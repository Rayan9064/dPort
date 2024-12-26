import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Ensures ESLint errors stop builds
  },
  images: {
    domains: ['images.unsplash.com'], // Add the external domain here
  }
  /* other config options */
};

export default nextConfig;
