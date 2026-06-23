/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server-side rendering (not static export)
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
