/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Only enable static export for production builds
  ...(isProd && { output: "export" }),
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Remove unused directories from build (production only)
  ...(isProd && { distDir: "out" }),
  // Optimize for static hosting
  assetPrefix: "",
  // Skip error pages during static export
  skipTrailingSlashRedirect: true,
  // Disable experimental features that cause issues
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Disable build traces for static export (production only)
  ...(isProd && { generateBuildId: () => "build" }),
  // Optimize output for static hosting (production only)
  ...(isProd && { cleanDistDir: true }),
};

module.exports = nextConfig;
