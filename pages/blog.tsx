import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {BlogCard, Container, Meta, Page, SectionHeader} from '../components';
import config from '../config/website';

const BlogPage = ({posts}) => {
  const title = `Blog | ${config.title}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Ramblings from Jack',
    description:
      "Random posts about things I'm involved with or trying to understand",
    url: `${config.url}/blog`,
    author: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: config.author.name,
      url: config.url,
      sameAs: [
        `https://twitter.com/${config.author.contacts.twitter}`,
        `https://instagram.com/${config.author.contacts.instagram}`,
        `https://linkedin.com/in/${config.author.contacts.linkedin}`,
      ],
    },
  };

  return (
    <>
      <Meta schema={schema} title={title} />
      <Page>
        <Container padding fullWidth>
          <SectionHeader title="Blog" />
          {posts.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </Container>
      </Page>
    </>
  );
};

export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), 'pages', 'blog');
  const files = fs.readdirSync(blogDir).filter(f => /\.mdx?$/.test(f));

  const posts = files
    .map(filename => {
      const filePath = path.join(blogDir, filename);
      const source = fs.readFileSync(filePath, 'utf8');
      const {data} = matter(source);
      return data;
    })
    .filter(post => !post.draft)
    .sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));

  return {props: {posts}};
}

export default BlogPage;
