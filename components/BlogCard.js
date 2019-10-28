import React from 'react';
import styled, {css} from 'styled-components';

import {ConditionalLink, Datetime} from '../components';
import Container from './Container';

const OuterDiv = styled(Container)`
  padding: 1.5rem 0;
  ${props =>
    props.divider &&
    css`
      margin-bottom: -1px;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    `}
  ${props =>
    props.highlight &&
    css`
      @media screen and (min-width: ${props.theme.breakpoints[1]}) {
        transition: all 0.2s ease;
        &:hover {
          box-shadow: 0 5px 40px rgba(0, 0, 0, 0.05);
        }
      }
    `}

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 2.5rem 0;
  }
`;

const InnerDiv = styled(Container)`
  padding-right: 1rem;
  padding-left: 1rem;
`;

const Article = styled.article`
  transition: 0.2s ease;

  & > :last-child {
    margin-bottom: 0;
  }
`;

const H3 = styled.h3`
  font-weight: 600;
  margin: 0;
  display: inline-block;
`;

const P = styled.p`
  margin-top: 0.5rem;
`;

const BlogCard = ({post}) => {
  const {date, description, slug, title} = post;
  return (
    <OuterDiv divider fullWidth highlight>
      <InnerDiv narrow>
        <Article>
          <ConditionalLink href="/blog/[slug]" as={`/blog/${slug}`}>
            <H3>{title}</H3>
          </ConditionalLink>
          <P>
            <Datetime date={date} />
          </P>
          <P>{description}</P>
        </Article>
      </InnerDiv>
    </OuterDiv>
  );
};

export default BlogCard;
