/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['hubaji.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hubaji.com',
        pathname: '/image/gallery/**',
      },
    ],
  },
  output: 'export',
};

export default nextConfig;
