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
    ];
  },
};
