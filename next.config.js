/** @type {import('next').NextConfig} */

console.log('process.env.NODE_ENV===', process.env.NODE_ENV);
const _PROD_ = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  baseUrl: _PROD_ ? '/lexus' : '',
  // assetPrefix: _PROD_ ? './' : '',
  // publicRuntimeConfig: {
  //   linkPrefix: _PROD_ ? './' : '',
  // },
};

module.exports = nextConfig;
