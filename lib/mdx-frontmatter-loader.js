const path = require('path');
const matter = require('gray-matter');
const stringifyObject = require('stringify-object');

const COMPONENTS_DIR = path.join(process.cwd(), 'components/');
const BLOG_DIR = path.join(process.cwd(), 'pages/blog/');

module.exports = async function(src) {
  const componentPath = path.relative(BLOG_DIR, COMPONENTS_DIR);
  const callback = this.async();
  const {content, data} = matter(src);

  const code = `import BlogPost from "${componentPath}/BlogPost";
export const frontMatter = ${stringifyObject(data)}
export default ({children}) => <BlogPost frontMatter={frontMatter}>{children}</BlogPost>;
${content}
`;
  return callback(null, code);
};
