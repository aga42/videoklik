/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uploadthing.com'
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/payment',
        destination: process.env.NEXT_PUBLIC_MIDTRANS_SNAP_URL,
      },
    ]
  }
};

module.exports = nextConfig;
