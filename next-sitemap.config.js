/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gtadoorsolutions.ca',
  generateRobotsTxt: true,
  exclude: ['/services/emergency-lockout'],
  transform: async (config, path) => {
    const priorities = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/services/locksmith-services/emergency': { priority: 0.9, changefreq: 'weekly' },
      '/services/locksmith-services/residential': { priority: 0.8, changefreq: 'weekly' },
      '/services/locksmith-services/commercial': { priority: 0.8, changefreq: 'weekly' },
      '/about': { priority: 0.5, changefreq: 'monthly' },
      '/contact': { priority: 0.5, changefreq: 'monthly' },
    };
    const settings = priorities[path] ?? { priority: 0.7, changefreq: 'weekly' };
    return {
      loc: path,
      changefreq: settings.changefreq,
      priority: settings.priority,
      lastmod: new Date().toISOString(),
    };
  },
}
