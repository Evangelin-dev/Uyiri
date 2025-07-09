// next.config.mjs (ESM format)

export default async () => ({
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: '/(.*)',
      has: [{ type: 'protocol', value: 'http' }],
      destination: 'https://www.uyirihealing.com/:path*',
      permanent: true,
    },
  ],
});
