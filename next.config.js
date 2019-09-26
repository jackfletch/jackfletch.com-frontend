const path = require('path');
const withCSS = require('@zeit/next-css');

const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');

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
          },
        },
        path.join(__dirname, './lib/mdx-frontmatter-loader'),
      ],
    });
    return config;
  },
});
