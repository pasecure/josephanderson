/** @type {import('next').NextConfig} */

(async () => {
  const withSitemap = await import('next-sitemap')({
    // your next-sitemap.js configuration
  });
  
  module.exports = withSitemap({
    swcMinify: true,
    reactStrictMode: true,
    siteUrl: 'https://pasecurities.net',
    generateRobotsTxt: true,
    exclude: [],
  });
})();


// module.exports = {
// }
