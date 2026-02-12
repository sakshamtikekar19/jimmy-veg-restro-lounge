import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/jimmy-veg-restro-lounge" : "";
const assetPrefix = isGitHubPages ? "/jimmy-veg-restro-lounge/" : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages && { output: "export" }),
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
