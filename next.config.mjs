import BuilderDevTools from "@builder.io/dev-tools/next";

/** @type {import('next').NextConfig} */
const builderConfig = BuilderDevTools()({});

const customConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.builder.io",
        port: "",
        pathname: "**",
      },
    ],
  },
};
const nextConfig = {
  ...builderConfig,
  ...customConfig,
};

export default nextConfig;
