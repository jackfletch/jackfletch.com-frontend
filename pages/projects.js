import React from 'react';
import {Card, ContentContainer, Meta, Page} from '../components';
import config from '../config/website';
import projects from '../data/projects.json';

const innerContentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: '960px',
};
const outerContentContainerStyle = {
  padding: '0 1.5rem',
};

const ProjectsPage = () => {
  const title = `Blog | ${config.title}`;

  // cast date string to date and sort
  projects.forEach(project => {
    project.date = new Date(project.date);
  });
  projects.sort((a, b) => b.date - a.date);

  return (
    <>
      <Meta staticPage={{title}} />
      <Page>
        <ContentContainer
          innerStyle={innerContentContainerStyle}
          outerStyle={outerContentContainerStyle}
        >
          {projects.map(project => (
            <Card key={project.id} value={project} />
          ))}
        </ContentContainer>
      </Page>
    </>
  );
};

export default ProjectsPage;
