import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? '/personal-portfolio/' : '',
  basePath: isProd ? '/personal-portfolio' : '',
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true, // Add this line to disable image optimization
  },
  /* other config options here */
};

export default nextConfig;