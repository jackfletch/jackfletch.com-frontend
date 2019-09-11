import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import {BlogCard, ContentContainer, Meta, Page} from '../components';
import config from '../config/website';
import {getBaseUrl} from '../lib';

const P = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
`;

const innerContentContainerStyle = {
  maxWidth: '720px',
};

class BlogPage extends React.Component {
  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

  static async getInitialProps({req}) {
    const baseUrl = getBaseUrl(req);
    const posts = await fetch(`${baseUrl}/api/posts`).then(r => r.json());

    return {posts};
  }

  render() {
    const {posts} = this.props;
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
            {posts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default BlogPage;
