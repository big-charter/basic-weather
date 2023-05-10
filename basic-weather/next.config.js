/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    highDemandWindowStartHour: 5,
    highDemandWindowEndHour: 17,
    highDemandWindowInterval: 1,
    lowDemandWindowInterval: 3,
  },
};

module.exports = nextConfig;
