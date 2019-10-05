import React from 'react';
import {Card, ContentContainer, Meta, Page} from '../components';
import config from '../config/website';
import {mapping, sortOrder} from '../data/projects';

const innerContentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: '960px',
};
const outerContentContainerStyle = {
  padding: '0 1.5rem',
};

function getProjectIds() {
  return sortOrder;
}

const ProjectsPage = () => {
  const title = `Blog | ${config.title}`;

  const projectIds = getProjectIds();

  return (
    <>
      <Meta staticPage={{title}} />
      <Page>
        <ContentContainer
          innerStyle={innerContentContainerStyle}
          outerStyle={outerContentContainerStyle}
        >
          {projectIds.map(projectId => (
            <Card key={projectId} value={mapping[projectId]} />
          ))}
        </ContentContainer>
      </Page>
    </>
  );
};

export default ProjectsPage;
