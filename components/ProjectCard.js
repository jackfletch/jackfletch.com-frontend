import styled from 'styled-components';

import {ConditionalLink, Datetime} from '.';
import {GAP_X, GAP_Y} from './projects/List';

const categoryColors = {
  'Class Project': '#FE5621',
  Research: '#4285F4',
  Config: '#673AB7',
  CLI: '#0F9D58',
  Web: '#F4B400',
  Data: '#F4B400',
};

const ColumnDiv = styled.div`
  position: relative;
  flex: ${props => (props.featured ? 2 : 1)};
  height: unset;
`;

const AbsoluteDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 7px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.02);
  height: calc(100% - ${GAP_Y}px);
  margin: ${GAP_Y / 2}px ${GAP_X / 2}px;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    transition: 0.2s ease;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.12) 0 10px 20px 0;
    }
  }
`;

const CardArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 1rem;
`;

const CategoryH4 = styled.h4`
  display: inline-block;
  background-color: ${props => categoryColors[props.category]};
  padding: 4px 6px;
  margin: 0;
  margin-top: 0.75rem;
  color: ${props => props.theme.colors.white};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.075rem;
  text-transform: uppercase;
`;

const TitleH3 = styled.h3`
  color: ${props => props.theme.colors.text.header};
  margin: 0 0 0.5rem;
  font-weight: 600;
  letter-spacing: 0;
`;

const Image = styled.img`
  display: block;
  height: auto;
  margin-top: 1rem;
  max-width: 100%;
  max-height: 320px;
  border-radius: 4px;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    padding: 0.5rem;
  }
`;

const ExcerptP = styled.p`
  line-height: 1.5rem;
  margin-bottom: 0;
`;

const ExcerptDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ProjectCard = ({data}) => {
  const {category, title, excerpt, featured, date, link, image} = data;
  return (
    <ColumnDiv featured={featured}>
      <AbsoluteDiv>
        <ConditionalLink href={link}>
          <CardArticle>
            <TitleH3>{title}</TitleH3>
            <Datetime date={date} />
            <CategoryH4 category={category} key={category}>
              {category}
            </CategoryH4>
            <ExcerptDiv>
              <ExcerptP>{excerpt}</ExcerptP>
            </ExcerptDiv>
            {image && featured && <Image src={image}></Image>}
          </CardArticle>
        </ConditionalLink>
      </AbsoluteDiv>
    </ColumnDiv>
  );
};

export default ProjectCard;
