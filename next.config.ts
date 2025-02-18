import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required since GitHub Pages does not support Next.js Image Optimization
  },
  basePath: "/hawkeye", // Change this to match your repository name
  assetPrefix: "/hawkeye", /* config options here */
};

export default nextConfig;
