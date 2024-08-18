/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/payment',
        destination: 'https://app.sandbox.midtrans.com/snap/v1/transactions',
      },
    ]
  }
};

module.exports = nextConfig;
