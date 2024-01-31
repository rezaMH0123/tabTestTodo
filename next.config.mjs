/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  onDemandEntries: {
    pages: "manual",
  },
  reactStrictMode: true,
  swcMinify: true,
};
export default nextConfig;
