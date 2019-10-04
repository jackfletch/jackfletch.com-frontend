const fs = require('fs');
const path = require('path');
const withCSS = require('@zeit/next-css');
const bundleAnalyzer = require('@next/bundle-analyzer');

const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');
const rehypeCodeSnippetIds = require('./lib/rehypeCodeSnippetIds');
const rehypeHighlight = require('rehype-highlight');
const rehypeSlug = require('rehype-slug');

const {createPagesMapping} = require('next/dist/build/entries');
const {collectPages} = require('next/dist/build/utils');

const PAGES_DIR = path.join(process.cwd(), 'pages');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

async function getPages() {
  const pagePaths = await collectPages(PAGES_DIR, nextConfig.pageExtensions);
  const mappedPages = createPagesMapping(pagePaths, nextConfig.pageExtensions);
  const pageKeys = Object.keys(mappedPages);
  const routablePages = pageKeys.filter(
    page => !page.match(/^\/(_app|_error|_document|api)/)
  );
  return routablePages;
}

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  getPages: getPages,
  webpack: (config, {defaultLoaders}) => {
    config.module.rules.push({
      test: /pages\/blog\/.*\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkNumberedFootnoteLabels],
            rehypePlugins: [rehypeCodeSnippetIds, rehypeHighlight, rehypeSlug],
          },
        },
        path.join(__dirname, './lib/mdx-frontmatter-loader'),
      ],
    });
    return config;
  },
};

module.exports = withBundleAnalyzer(withCSS(nextConfig));
