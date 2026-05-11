import Link from 'next/link';
import {useRouter} from 'next/router';

import {
  A,
  CollapseWrapper,
  Li,
  LogoImg,
  Nav,
  NavLink,
  Navbar as StyledNavbar,
  NavbarContainer,
  Toggler,
  TogglerIcon,
} from './style';
import {storageBucketUrl} from '../../config/website';
import {handleCollapseElementClick} from '../../lib';

const navbarCollapsingWrapperId = 'navbarSupportedContent';

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledNavbar>
      <NavbarContainer>
        <Link href="/">
          <LogoImg src="/img/jf.svg" alt="Jack Fletcher" />
        </Link>
        <Toggler
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-target={`#${navbarCollapsingWrapperId}`}
          aria-controls={navbarCollapsingWrapperId}
          onClick={e => handleCollapseElementClick(e)}
        >
          <TogglerIcon />
        </Toggler>
        <CollapseWrapper className="collapse" id={navbarCollapsingWrapperId}>
          <Nav>
            <Li>
              <NavLink href="/blog" $selected={router.route.startsWith('/blog')}>
                Blog
              </NavLink>
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
              <NavLink href="/projects" $selected={router.route.startsWith('/projects')}>
                Projects
              </NavLink>
            </Li>
            <Li>
              <NavLink href="/recipes" $selected={router.route.startsWith('/recipes')}>
                Recipes
              </NavLink>
            </Li>
          </Nav>
        </CollapseWrapper>
      </NavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
