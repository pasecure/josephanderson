/** @type {import('next').NextConfig} */

const withSitemap = require('next-sitemap')({
  siteUrl: 'https://pasecurities.net',
  generateRobotsTxt: true,
  exclude: [],
});


module.exports = withSitemap({
  swcMinify: true,
  reactStrictMode: true,
});
