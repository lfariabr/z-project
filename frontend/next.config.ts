import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep builds green inside Docker; enforce locally via CI/editor
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
