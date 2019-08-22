import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  color: '#212121',
};

const linkImageStyle = {
  ...linkStyle,
  paddingTop: 0,
  paddingBottom: 0,
  height: '3rem',
};

const Button = styled.button`
  && {
    border-color: #888888;
  }
`;

const Nav = styled.nav`
  background-color: #ffffff;
  border-bottom: solid 1px #dadce0;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  font-family: 'Montserrat', 'Roboto';
  transition: height 0.5s, line-height 0.5s;
  a.navbar-brand {
    font-size: 1.25rem;
  }
`;

const NavLinksDiv = styled.div`
  && {
    transition: all 0.2s ease 0s;
  }
`;

const Li = styled.li`
  padding-right: 10px;
  padding-left: 10px;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: rgba(220, 220, 220, 0.15);
    background-color: rgba(0, 0, 0, 0.15);
  }

  & > a:hover {
    text-decoration: none;
  }
`;

const Header = ({baseUrl}) => (
  <Nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link href="/">
        <a>
          <img
            src="/static/img/jf.svg"
            className="navbar-brand"
            style={linkImageStyle}
            alt="Jack Fletcher"
          />
        </a>
      </Link>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span
          style={{
            backgroundImage: `url(${baseUrl}/static/img/toggle.svg)`,
          }}
          className="navbar-toggler-icon"
        />
      </Button>
      <NavLinksDiv
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <Li>
            <Link href="/about">
              <a className="nav-link" style={linkStyle}>
                About
              </a>
            </Link>
          </Li>
          <Li>
            <Link href="/blog">
              <a className="nav-link" style={linkStyle}>
                Blog
              </a>
            </Link>
          </Li>
          <Li>
            <Link href="/cv">
              <a className="nav-link" style={linkStyle}>
                CV
              </a>
            </Link>
          </Li>
          <Li>
            <Link href="/projects">
              <a className="nav-link" style={linkStyle}>
                Projects
              </a>
            </Link>
          </Li>
        </ul>
      </NavLinksDiv>
    </div>
  </Nav>
);

export default Header;
