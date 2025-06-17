import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
    ],
  },
};

export default nextConfig;
