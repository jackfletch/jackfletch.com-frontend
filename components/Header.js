import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  color: '#222',
};

const linkImageStyle = {
  ...linkStyle,
  paddingTop: 0,
  paddingBottom: 0,
  maxHeight: '3rem',
};

const Button = styled.button`
  && {
    border-color: #888888;
  }
`;

const Nav = styled.nav`
  background-color: #d0d0dd;
  font-family: 'Montserrat', 'Roboto';
  transition: height 0.5s, line-height 0.5s;
  a.navbar-brand {
    font-size: 1.25rem;
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

const Header = ({baseURL}) => (
  <Nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <Link href="/">
        <img
          src="/static/img/jf.svg"
          className="navbar-brand"
          style={linkImageStyle}
          alt="Jack Fletcher"
        />
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
            backgroundImage: `url(${baseURL}/static/img/toggle.svg)`,
          }}
          className="navbar-toggler-icon"
        />
      </Button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Li>
            <Link href="/about">
              <a className="nav-link" style={linkStyle}>
                About
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
            <Link href="/software">
              <a className="nav-link" style={linkStyle}>
                Software
              </a>
            </Link>
          </Li>
        </ul>
      </div>
    </div>
  </Nav>
);

export default Header;
