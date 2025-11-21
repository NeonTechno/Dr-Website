/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: { 
    unoptimized: true 
  },
  // Removed external rewrites - explorer and app-portal are now local routes
};

module.exports = nextConfig;
