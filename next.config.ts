import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Ensures ESLint errors stop builds
  },
  /* other config options */
};

export default nextConfig;
