import Link from 'next/link';
import {withRouter} from 'next/router';

import {
  A,
  CollapseWrapper,
  Li,
  LogoImg,
  Nav,
  Navbar as StyledNavbar,
  NavbarContainer,
  Toggler,
  TogglerIcon,
} from './style';
import {storageBucketUrl} from '../../config/website';
import {handleCollapseElementClick} from '../../lib';

const navbarCollapsingWrapperId = 'navbarSupportedContent';

const Navbar = ({router}) => (
  <StyledNavbar>
    <NavbarContainer>
      <Link href="/">
        <a>
          <LogoImg src="/static/img/jf.svg" alt="Jack Fletcher" />
        </a>
      </Link>
      <Toggler
        data-target={`#${navbarCollapsingWrapperId}`}
        aria-controls={navbarCollapsingWrapperId}
        onClick={e => handleCollapseElementClick(e)}
      >
        <TogglerIcon />
      </Toggler>
      <CollapseWrapper className="collapse" id={navbarCollapsingWrapperId}>
        <Nav>
          <Li>
            <Link href="/blog" passHref>
              <A selected={router.route.startsWith('/blog')}>Blog</A>
            </Link>
          </Li>
          <Li>
            <A
              target="_blank"
              rel="noopener noreferrer"
              href={`${storageBucketUrl}/static/documents/JacksonFletcherResume.pdf`}
            >
              CV
            </A>
          </Li>
          <Li>
            <Link href="/projects" passHref>
              <A selected={router.route.startsWith('/projects')}>Projects</A>
            </Link>
          </Li>
        </Nav>
      </CollapseWrapper>
    </NavbarContainer>
  </StyledNavbar>
);

export default withRouter(Navbar);
