import createMDX from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkNumberedFootnoteLabels from 'remark-numbered-footnote-labels';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: 'standalone',
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

export default withMDX(nextConfig);
