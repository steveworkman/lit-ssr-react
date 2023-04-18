const withLitSSR = require("@lit-labs/nextjs")();
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withLitSSR(nextConfig);
