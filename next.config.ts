import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://i.scdn.co/**")],
  },
};

export default nextConfig;
