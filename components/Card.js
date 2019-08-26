import React from 'react';
import styled from 'styled-components';
import {ConditionalLink, Datetime} from '../components';

const ColumnDiv = styled.div`
  flex-basis: calc((100% / 3) - 1rem);
  width: calc((100% / 3) - 1rem);
  margin: 0 0.5rem;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-basis: calc(50% - 1rem);
    width: calc(50% - 1rem);
  }
  @media (max-width: 600px) {
    flex-basis: calc(100% - 1rem);
    width: calc(100% - 1rem);
  }
`;

const CardArticle = styled.article`
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: 0.2s ease;

  @media screen and (min-width: 992px) {
    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3), 0 5px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

const CategoryH3 = styled.h3`
  display: inline-block;
  // background: #212121;
  padding: 4px 6px;
  margin: 0 0 10px;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.075rem;
  text-transform: uppercase;
`;

const TitleH2 = styled.h2`
  margin: 0 0 10px;
  color: #444;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.75rem;
`;

const ExcerptP = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Card = ({value}) => {
  const {category, title, excerpt, date, link, color} = value;
  return (
    <ColumnDiv>
      <ConditionalLink href={link} className="card-link">
        <CardArticle>
          <TitleH2 className="article__title">{title}</TitleH2>
          <CategoryH3
            className="article__category"
            style={{backgroundColor: color}}
          >
            {category}
          </CategoryH3>
          <ExcerptP className="article__excerpt">{excerpt}</ExcerptP>
          <Datetime date={date} />
        </CardArticle>
      </ConditionalLink>
    </ColumnDiv>
  );
};

export default Card;
