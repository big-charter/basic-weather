/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    highDemandWindowStartHour: 5,
    highDemandWindowEndHour: 17,
    // TODO: Remember to change these...
    highDemandWindowInterval: 1,
    lowDemandWindowInterval: 1,
  },
};

module.exports = nextConfig;
