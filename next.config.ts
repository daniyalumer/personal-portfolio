import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove these lines for Vercel deployment
  // assetPrefix: isProd ? '/personal-portfolio/' : '',
  // basePath: isProd ? '/personal-portfolio' : '',

  // Static export for GH Pages
  // output: 'export',
  
  // Keep this for consistent URLs
  trailingSlash: true,
  
  images: {
    unoptimized: true,
  },
};

export default nextConfig;