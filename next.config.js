const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, {defaultLoaders}) => {
    config.module.rules.push({
      test: /pages\/blog\/.*\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
        },
      ],
    });
    return config;
  },
});
