import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow optimized images from Dribbble CDN
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
