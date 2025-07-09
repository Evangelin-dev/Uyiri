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
            type: 'protocol',
            value: 'http',
          },
        ],
        destination: 'https://www.uyirihealing.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
