// This file sets a custom webpack configuration to use your Next.js app
/** @type {import('next').NextConfig} */

const moduleExports = {
  reactStrictMode: true,

  experimental: {
    appDir: true,
  },
  sentry: {
    hideSourceMaps: false,
  }

};


module.exports = moduleExports;