/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm workspaces for me',
    description: 'My personal store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://jonasbvs.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
