/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
    dest: "public",
});
const nextConfig = withPWA({
    experimental: {
        serverActions: true,
    },
});

module.exports = nextConfig;
