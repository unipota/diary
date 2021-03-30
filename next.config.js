/* eslint-disable
   @typescript-eslint/no-var-requires
*/
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = bundleAnalyzer({
  trailingSlash: false,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  future: {
    webpack5: true,
  },
  experimental: {
    optimizeFonts: true,
  },
})
