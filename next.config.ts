import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/proxy/:path*",
        destination: "https://jpapi-staging.jackpot.bet/:path*",
      },
    ];
  },
  images: {
    domains: ["cdn.jackpot.bet"],
  },
};

export default nextConfig;


