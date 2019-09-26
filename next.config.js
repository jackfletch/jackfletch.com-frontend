const path = require('path');
const withCSS = require('@zeit/next-css');
const bundleAnalyzer = require('@next/bundle-analyzer');

const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');
const rehypeCodeSnippetIds = require('./lib/rehypeCodeSnippetIds');
const rehypeHighlight = require('rehype-highlight');
const rehypeSlug = require('rehype-slug');

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
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
