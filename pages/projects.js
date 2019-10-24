import {Card, Container, Meta, Page} from '../components';
import config from '../config/website';
import {mapping, sortOrder} from '../data/projects';

function getProjectIds() {
  return sortOrder;
}

const ProjectsPage = () => {
  const title = `Blog | ${config.title}`;

  const projectIds = getProjectIds();

  return (
    <>
      <Meta staticPage={title} />
      <Page>
        <Container fullWidth padding>
          <Container fullWidth gray center>
            {projectIds.map(projectId => (
              <Card key={projectId} value={mapping[projectId]} />
            ))}
          </Container>
        </Container>
      </Page>
    </>
  );
};

export default ProjectsPage;
