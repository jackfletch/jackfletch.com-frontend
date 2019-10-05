const path = require('path');

const {createPagesMapping} = require('next/dist/build/entries');
const {collectPages} = require('next/dist/build/utils');

const PAGES_DIR = path.join(process.cwd(), 'pages');

async function getPages(pageExtensions) {
  const pagePaths = await collectPages(PAGES_DIR, pageExtensions);
  const mappedPages = createPagesMapping(pagePaths, pageExtensions);
  const pageKeys = Object.keys(mappedPages);
  const routablePages = pageKeys.filter(
    page => !page.match(/^\/(_app|_error|_document|api)/)
  );
  return routablePages;
}

module.exports = getPages;
