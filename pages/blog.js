import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';
import {ContentContainer, Datetime, Meta, Page} from '../components';
import {getBaseUrl} from '../lib';

const H3 = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
`;

const Article = styled.article`
  background: #fff;
  margin: 0.5rem 0;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

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
    baseUrl: PropTypes.string.isRequired,
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

    return {baseUrl, posts};
  }

  render() {
    const {baseUrl, posts} = this.props;
    const title = 'Fletcher Labs';

    return (
      <>
        <Meta baseUrl={baseUrl} staticPage={{title}} />
        <Page baseUrl={baseUrl}>
          <ContentContainer innerStyle={innerContentContainerStyle}>
            {posts.map(post => (
              <Article key={post.slug}>
                <H3>{post.title}</H3>
                <P>
                  {post.summary} <Datetime date={post.date} />
                </P>
              </Article>
            ))}
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default BlogPage;
