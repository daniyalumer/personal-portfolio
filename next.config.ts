import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep this for consistent URLs
  trailingSlash: true,
  
  images: {
    unoptimized: false, // Change to false for Vercel
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;