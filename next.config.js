/* eslint-disable @typescript-eslint/no-var-requires */
const withAntdLess = require('next-plugin-antd-less');
const sitemap = require('nextjs-sitemap-generator');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

sitemap({
  pagesDirectory: `${__dirname}/src/pages`,
  targetDirectory: `public/`,
});

module.exports = withBundleAnalyzer(
  withAntdLess({
    lessVarsFilePathAppendToEndOfContent: false,
    cssLoaderOptions: {},
    webpack(config) {
      return config;
    },
    webpack5: true,
  }),
);
