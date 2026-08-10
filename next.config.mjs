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
