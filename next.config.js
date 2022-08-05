/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.kom-store.exadot.io'],
  },
}

module.exports = nextConfig
