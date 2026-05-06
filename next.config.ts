import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Disable dev overlay indicator (the N button) */
  devIndicators: false,
  /* Image optimization settings */
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 86400,
  },
  /* Allow serving static assets from /sequence */
  async headers() {
    return [
      {
        source: '/sequence/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
