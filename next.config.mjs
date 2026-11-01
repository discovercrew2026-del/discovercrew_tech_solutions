/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [],
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/services/digital-marketing',
        destination: '/services/ai-marketing',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.discovercrewtechnologies.com',
          },
        ],
        destination: 'https://discovercrewtechnologies.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
