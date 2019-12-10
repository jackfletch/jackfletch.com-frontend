import ErrorPage from 'next/error';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {Button, Container, Meta, Page, Datetime} from './';
import {ArrowLeftLong} from './icons';
import config from '../config/website';

const PostContent = styled(Container)`
  img {
    display: block;
    max-width: 100%;
    margin: 1rem 0;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin: 0; // necessary to override normalize
`;

const DateDiv = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 2rem;
    margin-bottom: 4rem;
  }
`;

const BackButtonDiv = styled.div`
  margin-top: 4rem;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    margin-top: 6.25rem;
  }
`;

const Icon = styled.span`
  vertical-align: middle;
  line-height: 0;
`;

const BlogPost = ({children, frontMatter}) => {
  const {
    category,
    date,
    dateModified,
    description,
    draft,
    plainContent,
    img: postImg = '/img/ogimage.png',
    slug,
    title: postTitle,
    words: wordCount,
  } = frontMatter;

  if (draft) {
    return <ErrorPage statusCode={404} />;
  }

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
        <Container className="post" padding>
          <H1>{postTitle}</H1>
          <DateDiv>
            <Datetime date={date} />
          </DateDiv>
          <PostContent narrow allowOverflow fullWidth>
            {children}
            <BackButtonDiv>
              <Button href="/blog" invert>
                <Icon>
                  <ArrowLeftLong color="white" />
                </Icon>{' '}
                Back to Blog
              </Button>
            </BackButtonDiv>
          </PostContent>
        </Container>
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
