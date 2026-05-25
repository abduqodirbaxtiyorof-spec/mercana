import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
