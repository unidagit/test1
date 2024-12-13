import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["specials-images.forbesimg.com", "undefined"],
  },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "specials-images.forbesimg.com",
  //       pathname: "/imageserve/**",
  //       port: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
