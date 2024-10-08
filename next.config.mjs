/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  basePath: "/oda/open-apis",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/oda/open-apis",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
