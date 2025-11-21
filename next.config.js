/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { 
    unoptimized: true 
  },
  // Removed rewrites - subdomains will be handled by Vercel configuration
  // or DNS settings, not Next.js rewrites
};

module.exports = nextConfig;
