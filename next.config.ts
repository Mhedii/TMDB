import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["image.tmdb.org"], // Allow images from TMDB
  },
};

export default nextConfig;
