/** @type {import('next').NextConfig} */

const _PROD_ = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
  publicRuntimeConfig: {
    linkPrefix: './',
    staticFolder: './public',
  },
};

module.exports = nextConfig;
