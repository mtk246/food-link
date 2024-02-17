/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPEN_DATA_API_KEY_ID: process.env.OPEN_DATA_API_KEY_ID,
    OPEN_DATA_API_KEY_SECRET: process.env.OPEN_DATA_API_KEY_SECRET,
    OPEN_DATA_TOKEN: process.env.OPEN_DATA_TOKEN,
    OPEN_DATA_SECRET_TOKEN: process.env.OPEN_DATA_SECRET_TOKEN
  }
};

export default nextConfig;
