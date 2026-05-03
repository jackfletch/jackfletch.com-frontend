import React from 'react';
import styled from 'styled-components';

import {Container, ProjectCard} from '..';
import {Project} from '../../data/projects';

export const GAP_X = 16;
export const GAP_Y = 16;

const WidthDiv = styled.div`
  margin: auto;
  max-width: 1440px;
  padding: ${GAP_Y / 2}px 0;
`;

const SitePreviewPlaceholder = styled.div`
  flex: 1;
  height: 100%;
`;

interface RowDivProps {
  rowFlexDirection: string;
}

const RowDiv = styled.div<RowDivProps>`
  display: flex;
  padding: 0px ${GAP_X / 2}px;
  width: 100%;
  flex-direction: column;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    flex-direction: ${props => props.rowFlexDirection};
    padding: 0px ${GAP_X / 2}px;
  }
`;

const NotFeaturedDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

let featuredRowFlexDirectionState = 'row';
const normalRowFlexDirectionState = 'row';
const getRowRender = (dataSource: Record<string, Project>, index: number, projectIds: string[]) => {
  const content: React.ReactNode[] = [];
  let featured: React.ReactNode = null;

  const startIndex = index * 3;
  for (let i = 0; i < 3; ++i) {
    const projectData = dataSource[projectIds[startIndex + i]];
    const projectId = projectIds[startIndex + i] ?? `placeholder-${i}`;
    const projectKey = `project-${projectId}`;
    if (!projectData) {
      content.push(<SitePreviewPlaceholder key={projectKey} />);
    } else if (!featured && projectData.featured) {
      featured = <ProjectCard featured data={projectData} key={projectKey} />;
      featuredRowFlexDirectionState =
        featuredRowFlexDirectionState === 'row' ? 'row-reverse' : 'row';
    } else {
      content.push(<ProjectCard data={projectData} key={projectKey} />);
    }
  }

  return (
    <RowDiv
      key={`row-${index}`}
      rowFlexDirection={
        featured ? featuredRowFlexDirectionState : normalRowFlexDirectionState
      }
    >
      {featured
        ? [
            featured,
            <NotFeaturedDiv key="column-normal">{content}</NotFeaturedDiv>,
          ]
        : content}
    </RowDiv>
  );
};

interface ListProps {
  mapping: Record<string, Project>;
  projectIds: string[];
}

const List = ({mapping, projectIds}: ListProps) => {
  const content: React.ReactNode[] = [];
  for (let i = 0; i < projectIds.length / 3; i++) {
    const Row = getRowRender(mapping, i, projectIds);
    content.push(Row);
  }

  return (
    <Container fullWidth gray center>
      <WidthDiv>{content}</WidthDiv>
    </Container>
  );
};

export default List;
