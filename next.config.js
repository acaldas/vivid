/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/i,
      loader: "raw-loader",
    });

    return config;
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
