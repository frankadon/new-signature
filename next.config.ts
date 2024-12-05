import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "adonworkforce.com.au",
      },
      {
        protocol: "https",
        hostname: "adongroup.com.au",
      },
    ],
  },
};

export default nextConfig;
