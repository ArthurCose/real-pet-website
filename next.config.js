/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { remotePatterns: [{ hostname: "cdn.discordapp.com" }] },
};

module.exports = nextConfig;
