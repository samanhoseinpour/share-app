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
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/plus-assets/**",
      },
    ],
  },
};

export default nextConfig;
