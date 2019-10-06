import React from 'react';
import PropTypes from 'prop-types';
import {BlogCard, ContentContainer, Meta, Page} from '../components';
import config from '../config/website';

function importAll(r) {
  return r.keys().map(r);
}

function dateSortDesc(a, b) {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateA < dateB ? 1 : -1;
}

const posts = importAll(require.context('./blog', false, /\.mdx?$/))
  .map(post => post.frontMatter)
  .sort(dateSortDesc)
  .map(post => <BlogCard key={post.slug} post={post} />);

const innerContentContainerStyle = {
  maxWidth: '720px',
};

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
        <ContentContainer innerStyle={innerContentContainerStyle}>
          {posts}
        </ContentContainer>
      </Page>
    </>
  );
};

export default BlogPage;
