const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, {dev}) => {
    config.module.rules.push({
      test: /\.md$/,
      use: ['raw-loader'],
    });
    return config;
  },
});
