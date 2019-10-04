const fs = require('fs');
const path = require('path');
const {getPages} = require('../next.config');
const {url: websiteUrl} = require('../config/website');
const posts = require('./postMetadata');

const OUT_DIR = path.join(process.cwd(), 'static');

const formatDate = date => `${date.toISOString().split('.')[0]}+0:00`;

// determine priority by path depth
const getPriority = urlSlug =>
  ((100 - (urlSlug.split('/').length - 2) * 10) / 100).toFixed(2);

const defaultDate = new Date();

const xmlUrlWrapper = nodes => {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
  const xmlFooter = '</urlset>';
  return `${xmlHeader}
${nodes}
${xmlFooter}`;
};

const xmlUrlNode = (domain, pagePath) => {
  const url = `${domain}${pagePath}`;
  const priority = getPriority(pagePath);
  let date;

  const isPost = /^\/blog\//.test(pagePath);
  if (isPost) {
    const postMetadata = posts.filter(post => pagePath.endsWith(post.slug));
    // postMetadata will be empty if this is a draft post.
    // doesn't affect production but this would cause a build to fail in dev
    if (postMetadata) {
      date = new Date(postMetadata[0].dateModified || postMetadata[0].date);
    }
  }
  return `<url>
  <loc>${url}</loc>
  <lastmod>${formatDate(date || defaultDate)}</lastmod>
  <priority>${priority}</priority>
</url>`;
};

const generateSitemap = async (domain, outPath) => {
  const filePath = path.join(outPath, 'sitemap.xml');
  const pages = await getPages();
  const sitemap = xmlUrlWrapper(
    pages.map(page => xmlUrlNode(domain, page)).join('\n')
  );

  fs.writeFileSync(filePath, sitemap);
  // eslint-disable-next-line no-console
  console.log(
    `sitemap with ${pages.length} entries was written to ${filePath}.`
  );
};

generateSitemap(websiteUrl, OUT_DIR);
