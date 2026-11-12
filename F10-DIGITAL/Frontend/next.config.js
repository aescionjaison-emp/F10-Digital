/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.f10.digital',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
    ],
  },
};

module.exports = nextConfig;
