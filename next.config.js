/** @type {import('next').NextConfig} */

console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
const __PROD__ = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  assetPrefix: __PROD__ ? '/' : '',
  publicRuntimeConfig: {
    linkPrefix: __PROD__ ? '/' : '',
  },
};

module.exports = nextConfig;
