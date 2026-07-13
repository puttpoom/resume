import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/spa-portfilo' : '',
  assetPrefix: isProd ? '/spa-portfilo/' : '',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
