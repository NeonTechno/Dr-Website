/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Output standalone for Vercel deployment
  output: 'standalone',
  
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.decentralizedrights.com',
      },
      {
        protocol: 'https',
        hostname: '*.nvidia.com',
      },
    ],
    // Optimize images for DRP
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for app subdomain
  async redirects() {
    return [
      // Redirect root to homepage
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
      // Ensure app subdomain routes work
      {
        source: '/app',
        destination: '/app-portal',
        permanent: true,
      },
    ];
  },
  
  // Environment variables exposed to client
  env: {
    NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
    NEXT_PUBLIC_APP_VERSION: process.env.NEXT_PUBLIC_APP_VERSION,
    NEXT_PUBLIC_NETWORK: process.env.NEXT_PUBLIC_NETWORK,
    NEXT_PUBLIC_ENABLE_AI_VERIFICATION: process.env.NEXT_PUBLIC_ENABLE_AI_VERIFICATION,
    NEXT_PUBLIC_ENABLE_NVIDIA_INTEGRATION: process.env.NEXT_PUBLIC_ENABLE_NVIDIA_INTEGRATION,
  },
  
  // Experimental features
  experimental: {
    // Enable server actions
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // Enable parallel routes
    ppr: false,
    // Enable React compiler
    reactCompiler: true,
  },
};

module.exports = nextConfig;