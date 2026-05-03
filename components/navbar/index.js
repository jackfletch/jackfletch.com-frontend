import Link from 'next/link';
import {useRouter} from 'next/router';

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

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledNavbar>
      <NavbarContainer>
        <Link href="/">
          <LogoImg src="/img/jf.svg" alt="Jack Fletcher" />
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
              <Link href="/blog" legacyBehavior passHref>
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
              <Link href="/projects" legacyBehavior passHref>
                <A selected={router.route.startsWith('/projects')}>Projects</A>
              </Link>
            </Li>
          </Nav>
        </CollapseWrapper>
      </NavbarContainer>
    </StyledNavbar>
  );
};

export default Navbar;
