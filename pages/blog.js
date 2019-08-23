import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import {BlogCard, ContentContainer, Meta, Page} from '../components';
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
    const title = 'Fletcher Labs';

    return (
      <>
        <Meta staticPage={{title}} />
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
