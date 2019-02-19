import Link from 'next/link';
import styled from 'styled-components';

const linkStyle = {
  color: '#222'
};

const Button = styled.button`
  && {
    border-color: #888888;
  }
`;

const Nav = styled.nav`
  background-color: #d0d0dd;
  font-family: "Decima Mono Pro", "Roboto";
`;

const Li = styled.li`
  transition: all .7s ease-out;

  &:hover {
    background-color: rgba(220,220,220,0.15);
    background-color: rgba(0,0,0,0.15);
  }

  & > a:hover {
    text-decoration: none;
  }
`;

const Header = ({baseURL}) => (
  <Nav className="navbar navbar-expand-lg fixed-top">
    <div className="container">
      <Link href="/">
        <a className="navbar-brand" style={linkStyle}>Jack Fletcher</a>
      </Link>
      <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span style={{
            backgroundImage: `url(${baseURL}/static/img/toggle.svg)`
          }}
          className="navbar-toggler-icon"
        />
      </Button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Li className="nav-link">
            <Link href="/about">
              <a style={linkStyle}>About</a>
            </Link>
          </Li>
          <Li className="nav-link">
            <Link href="/software">
              <a style={linkStyle}>Software</a>
            </Link>
          </Li>
        </ul>
      </div>
    </div>
  </Nav>
);

export default Header;
