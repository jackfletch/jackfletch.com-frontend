import React from 'react';
import PropTypes from 'prop-types';
import {ContentContainer, Meta, Page, Datetime} from './';
import config from '../config/website';

const innerContentContainerStyle = {
  maxWidth: '720px',
};

const outerContentContainerStyle = {
  padding: '0 1rem',
};

const BlogPost = ({children, frontMatter}) => {
  const {date, description, draft, slug, title: postTitle} = frontMatter;

  const pageTitle = `${postTitle} | ${config.title}`;

  return (
    <>
      <Meta title={pageTitle} />
      <Page>
        <ContentContainer
          className="post"
          innerStyle={innerContentContainerStyle}
          outerStyle={outerContentContainerStyle}
        >
          <h1>{postTitle}</h1>
          <Datetime date={date} />
          <div className="body">{children}</div>
        </ContentContainer>
      </Page>
    </>
  );
};

BlogPost.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
  frontMatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    draft: PropTypes.bool,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default BlogPost;
