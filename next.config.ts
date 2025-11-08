import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  // Add these video optimization settings:
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [],
  },
  async headers() {
    return [
      {
        source: "/heroPreview.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000", // Cache for 1 year
          },
        ],
      },
      // Also cache the optimized version if you create it
      {
        source: "/heroPreview-optimized.mp4",
        headers: [
          {
            key: "Cache-Control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
  compress: true,
};

export default nextConfig;
