/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['media.graphassets.com']
  },
  async headers() {
    return [
      {
        source: '/home',
        headers: [
          {
            key: 'Cache-Control',
            value: 'max-age=1, stale-while-revalidate=59'
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
