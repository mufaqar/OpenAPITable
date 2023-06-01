/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'd300zch48kanqv.cloudfront.net', //images from inform.tmforum.org
      },
    ],
  },
  basePath: '/oda/open-apis/table',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/oda/open-apis/table',
        basePath: false,
        permanent: false,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'tmforum.org' }],
        destination: 'https://www.tmforum.org/:path*',
        permanent: true
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'devbeta.ipsphere.net' }],
        destination: 'https://www.devbeta.ipsphere.net/:path*',
        permanent: true
      },

    ];
  },
};
