import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import {ContentContainer, Meta, Page, Datetime} from '../../components';
import {getBaseUrl} from '../../lib';

const innerContentContainerStyle = {
  maxWidth: '720px',
};

class PostPage extends React.Component {
  static propTypes = {
    baseUrl: PropTypes.string.isRequired,
    post: PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  };

  static async getInitialProps({query, req}) {
    const baseUrl = getBaseUrl(req);
    const {slug} = query;

    const post = await fetch(
      `${baseUrl}/api/post/${encodeURIComponent(slug)}`
    ).then(r => r.json());

    return {baseUrl, post};
  }

  render() {
    const title = 'Fletcher Labs';
    const {baseUrl, post} = this.props;
    i = 0;

    return (
      <>
        <Meta baseUrl={baseUrl} staticPage={{title}} />
        <Page baseUrl={baseUrl}>
          <ContentContainer
            className="post"
            innerStyle={innerContentContainerStyle}
          >
            <h1>{post.title}</h1>
            <Datetime date={post.date} />
            <div className="body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default PostPage;
