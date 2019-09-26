import React from 'react';
import styled from 'styled-components';
import {ConditionalLink, Datetime} from '../components';

const Article = styled.article`
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease;

  @media screen and (min-width: 992px) {
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

const H2 = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
`;

const P = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
`;

const BlogCard = ({post}) => {
  const {date, description, slug, title} = post;
  return (
    <ConditionalLink
      href="/blog/[slug]"
      as={`/blog/${slug}`}
      className="card-link"
    >
      <Article>
        <H2>{title}</H2>
        <P>
          {description} <Datetime date={date} />
        </P>
      </Article>
    </ConditionalLink>
  );
};

export default BlogCard;
