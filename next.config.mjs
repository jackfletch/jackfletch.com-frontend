import createMDX from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkNumberedFootnoteLabels from 'remark-numbered-footnote-labels';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  compiler: {
    styledComponents: true,
  },
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      [remarkMdxFrontmatter, {name: 'frontMatter'}],
      remarkNumberedFootnoteLabels,
    ],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, {theme: 'github-light'}],
    ],
  },
});

export default withBundleAnalyzer(withMDX(nextConfig));
