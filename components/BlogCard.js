import styled from 'styled-components';
import {ConditionalLink, Datetime} from '../components';

const Article = styled.article`
  margin: 0.5rem 0;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.5);
  }
`;

const H3 = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;

const P = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
`;

const BlogCard = ({post}) => {
  const {date, summary, title} = post;
  return (
    <ConditionalLink key={post.slug} href={`/blog/${post.slug}`}>
      <Article>
        <H3>{title}</H3>
        <P>
          {summary} <Datetime date={date} />
        </P>
      </Article>
    </ConditionalLink>
  );
};

export default BlogCard;
