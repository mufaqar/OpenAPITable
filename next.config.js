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
  basePath: '/api-table',
  // redirects: [{ source: '/', destination: '/api-table/', permanent: true }],
};
