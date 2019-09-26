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
  const {
    category,
    date,
    dateModified,
    description,
    draft,
    plainContent,
    img: postImg = '/static/img/ogimage.png',
    slug,
    title: postTitle,
    words: wordCount,
  } = frontMatter;

  const pageTitle = `${postTitle} | ${config.title}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    image: `${config.url}${postImg}`,
    url: `${config.url}/blog/${slug}`,
    headline: postTitle,
    description: description,
    wordcount: wordCount,
    dateCreated: date,
    datePublished: date,
    dateModified: dateModified || date,
    inLanguage: 'en-US',
    mainEntityOfPage: 'True',
    articleBody: plainContent,
    articleSection: category,
    author: {
      '@type': 'Person',
      name: config.author.name,
      url: config.url,
      sameAs: [
        `https://twitter.com/${config.author.contacts.twitter}`,
        `https://instagram.com/${config.author.contacts.instagram}`,
        `https://linkedin.com/in/${config.author.contacts.linkedin}`,
      ],
    },
    publisher: {
      '@type': 'Organization',
      name: config.author.name,
      url: config.url,
      logo: {
        '@type': 'ImageObject',
        url: `${config.url}${config.logoPath}`,
        width: '500',
        height: '500',
      },
    },
  };

  return (
    <>
      <Meta image={postImg} schema={schema} title={pageTitle} />
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
    category: PropTypes.string,
    date: PropTypes.string.isRequired,
    dateModified: PropTypes.string,
    description: PropTypes.string.isRequired,
    draft: PropTypes.bool,
    plainContent: PropTypes.string,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    words: PropTypes.number,
  }),
};

export default BlogPost;
