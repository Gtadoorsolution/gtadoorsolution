export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(`
      User-agent: *
      Allow: /
  
      # Host
      Host: https://gtadoorsolutions.ca
  
      # Sitemaps
      Sitemap: https://gtadoorsolutions.ca/sitemap.xml
    `);
  }
  