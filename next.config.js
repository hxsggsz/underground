/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.gta5-mods.com']
  }
}

module.exports = nextConfig
