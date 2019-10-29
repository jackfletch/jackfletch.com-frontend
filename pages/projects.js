import {Container, Meta, Page, SectionHeader} from '../components';
import {List} from '../components/projects';
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
          <SectionHeader title="Projects" />
          <List mapping={mapping} projectIds={projectIds} />
        </Container>
      </Page>
    </>
  );
};

export default ProjectsPage;
