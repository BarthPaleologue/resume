/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/resume",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
