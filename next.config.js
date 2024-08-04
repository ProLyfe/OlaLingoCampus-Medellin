/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['lms-corpsoft-staging.s3.us-west-1.amazonaws.com', "api.lms.corpsoft.io", "api.lms.corpsoft.iostorage"],
  },
};

module.exports = nextConfig;