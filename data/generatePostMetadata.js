const fs = require('fs');
const path = require('path');

const remark = require('remark');
const remarkNumberedFootnoteLabels = require('remark-numbered-footnote-labels');
const remarkFrontmatter = require('remark-frontmatter');
const grayMatter = require('gray-matter');
const unistFilter = require('unist-util-filter');
const readingTime = require('reading-time');

const getExcerpt = require('../lib/excerpt/excerpt');

const POSTS_DIR = path.join(process.cwd(), 'pages/blog');
const DATA_DIR = path.join(process.cwd(), 'data');

const PRUNE_LENGTH = 10000;

const removeFrontmatter = () => tree =>
  unistFilter(tree, node => node.type !== 'yaml');

const processor = remark()
  .data('settings', {footnotes: true})
  .use(remarkFrontmatter, ['yaml'])
  .use(removeFrontmatter)
  .use(remarkNumberedFootnoteLabels);

const postMetadata = [];

fs.readdirSync(POSTS_DIR).forEach(filename => {
  if (path.extname(filename) !== '.md') return;

  const file = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
  const {content, data} = grayMatter(file);

  if (data.draft) return;

  const htmlContent = getExcerpt(content, processor, {
    format: 'HTML',
    pruneLength: PRUNE_LENGTH,
  });
  const plainContent = getExcerpt(content, processor, {
    format: 'PLAIN',
    pruneLength: PRUNE_LENGTH,
  });
  const {words} = readingTime(plainContent);

  postMetadata.push({
    ...data,
    htmlContent,
    plainContent,
    words,
  });
});

postMetadata.sort((a, b) => new Date(a.date) > new Date(b.date));

fs.writeFileSync(
  path.join(DATA_DIR, 'postMetadata.json'),
  JSON.stringify(postMetadata, null, 2)
);
