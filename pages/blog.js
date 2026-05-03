import {BlogCard, Container, Meta, Page, SectionHeader} from '../components';
import config from '../config/website';

// TODO: Phase 2 — restore blog post listing with getStaticProps
const posts = [];

const BlogPage = () => {
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
          {posts}
        </Container>
      </Page>
    </>
  );
};

export default BlogPage;
