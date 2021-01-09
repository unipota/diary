/* eslint-disable
   @typescript-eslint/no-var-requires
*/
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = bundleAnalyzer({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    optimizeFonts: true,
  },
})
