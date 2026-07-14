import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/resume" : "",
  assetPrefix: isProd ? "/resume/" : "",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.111", "192.168.1.59"],
};

export default nextConfig
