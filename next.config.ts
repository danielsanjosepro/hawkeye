import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? "/hawkeye" : "",
  assetPrefix: process.env.NODE_ENV === 'production' ? "/hawkeye" : "",
  trailingSlash: true,
  distDir: 'out',
  // Fix for CSS in GitHub Pages
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
