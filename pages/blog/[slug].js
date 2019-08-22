import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-unfetch';
import ReactMarkdown from 'react-markdown';
import {ContentContainer, Meta, Page, Datetime} from '../../components';
import {getBaseUrl} from '../../lib';

const innerContentContainerStyle = {
  maxWidth: '720px',
};

var i = 0;
function getSnippetIndex() {
  return i++;
}

function CodeBlockRenderer(props) {
  const className = props.language && `language-${props.language} hljs`;
  const code = React.createElement(
    'code',
    className ? {className: className} : null,
    props.value
  );
  const preClassName =
    props.language &&
    (props.language.indexOf('none') !== -1 ||
      props.language.indexOf('txt') !== -1)
      ? 'nohighlight'
      : 'highlight';
  return React.createElement(
    'pre',
    {
      ...getCoreProps(props),
      className: preClassName,
      id: `snippet-${getSnippetIndex()}`,
    },
    code
  );
}

function HeadingRenderer(props) {
  if (props.level === 1) {
    return null;
  }
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, '');
  var slug = text.toLowerCase().replace(/\W/g, '-');
  return React.createElement(
    `h${props.level}`,
    {
      ...getCoreProps(props),
      id: slug,
    },
    props.children
  );
}

function getCoreProps(props) {
  return props['data-sourcepos']
    ? {'data-sourcepos': props['data-sourcepos']}
    : {};
}

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

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
              <ReactMarkdown
                renderers={{code: CodeBlockRenderer, heading: HeadingRenderer}}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default PostPage;
