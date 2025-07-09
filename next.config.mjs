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
  redirects,
};

async function redirects() {
  return [
    {
      source: '/(.*)',
      has: [{ type: 'protocol', value: 'http' }],
      destination: 'https://www.uyirihealing.com/:path*',
      permanent: true,
    },
  ];
}

export default nextConfig;
