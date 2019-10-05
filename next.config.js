const path = require('path');
const withCSS = require('@zeit/next-css');
const bundleAnalyzer = require('@next/bundle-analyzer');

const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');
const rehypeCodeSnippetIds = require('./lib/rehypeCodeSnippetIds');
const rehypeHighlight = require('rehype-highlight');
const rehypeSlug = require('rehype-slug');

const generatePostMetadata = require('./data/generatePostMetadata');
const generateFeeds = require('./data/generateFeeds');
const generateSitemap = require('./data/generateSitemap');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const pageExtensions = ['js', 'jsx', 'md', 'mdx'];

generatePostMetadata();
generateFeeds();
generateSitemap(pageExtensions);

const nextConfig = {
  pageExtensions: pageExtensions,
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
