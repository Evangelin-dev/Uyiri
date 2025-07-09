// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'uyirihealing.com',
          },
        ],
        destination: 'https://www.uyirihealing.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
