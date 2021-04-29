/** @type {import('next/dist/next-server/server/config-shared').NextConfig} */
/* eslint-disable
   @typescript-eslint/no-var-requires
*/

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = bundleAnalyzer({
  trailingSlash: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  experimental: {},
})

module.exports = config
