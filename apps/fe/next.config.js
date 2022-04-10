/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    BFF_HOST: process.env.BFF_HOST,
  },
}

module.exports = nextConfig
