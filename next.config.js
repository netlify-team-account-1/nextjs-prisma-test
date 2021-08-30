/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  target: 'experimental-serverless-trace',
  webpack: (config, {isServer}) => {
    if (isServer) {
      // https://github.com/prisma/prisma/issues/6899
      config.externals.push('_http_common')
    }

    return config
  },
}
