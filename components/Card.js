import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ColumnDiv = styled.div`
  flex-basis: calc(100% / 3);
  width: calc(100% / 3);
  padding: 0 10px;
  box-sizing: border-box;
  @media (max-width: 900px) {
    flex-basis: 50%;
    width: 50%;
  }
  @media (max-width: 600px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const CardArticle = styled.article`
  background: #fff;
  margin: 0 0 20px;
  padding: 20px;
  // border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.5);
  }

  &:active {
    box-shadow: none;
    transform-origin: center;
    transform: scale(0.98);
  }
`;

const CategoryH3 = styled.h3`
  display: inline-block;
  // background: #212121;
  padding: 8px 10px;
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

const DateH5 = styled.h5`
  color: #444;
  font-size: 0.875rem;
  line-height: 1rem;
`;

const Card = ({value}) => {
  const {category, title, excerpt, date, link, color} = value;
  return (
    <ColumnDiv>
      <Link href={link}>
        <a style={{textDecoration: 'none'}}>
          <CardArticle>
            <CategoryH3
              className="article__category"
              style={{backgroundColor: color}}
            >
              {category}
            </CategoryH3>
            <TitleH2 className="article__title">{title}</TitleH2>
            <ExcerptP className="article__excerpt">{excerpt}</ExcerptP>
            <DateH5>{date.toDateString().slice(4)}</DateH5>
          </CardArticle>
        </a>
      </Link>
    </ColumnDiv>
  );
};

export default Card;
