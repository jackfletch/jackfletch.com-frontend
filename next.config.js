const path = require('path');
const withCSS = require('@zeit/next-css');

const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');
const rehypeSlug = require('rehype-slug');

module.exports = withCSS({
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
            rehypePlugins: [rehypeSlug],
          },
        },
        path.join(__dirname, './lib/mdx-frontmatter-loader'),
      ],
    });
    return config;
  },
});
