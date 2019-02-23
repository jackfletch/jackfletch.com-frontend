import Link from 'next/link';
import styled from 'styled-components';

// TODO: use LINK!!!

const Img = styled.img`
  vertical-align: middle;
  padding: 5px;
  height: 50px;
`;

const Div = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;

  @media screen and (max-width: 991px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

const DivBottomLinks = styled.div`
  padding: 30px;
  background-color: #222222;
`;

const SFooter = styled.footer`
  background-color: #665500;
  color: #eee;
  text-align: center;
`;

const Footer = () => (
  <SFooter className="bottom">
    <Div className="container">
      <p>STAY CONNECTED</p>
      <ul className="centerLinks">
        <li className="d-inline-block">
          <a
            href="https://twitter.com/no_fletch_zone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src="/static/img/icons/twitter.png" alt="twitter" />
          </a>
        </li>
        <li className="d-inline-block">
          <a
            href="https://www.instagram.com/fletch_jack/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              src="/static/img/icons/instagram.png"
              fill="blue"
              alt="instagram"
            />
          </a>
        </li>
        <li className="d-inline-block">
          <a
            href="https://github.com/jackfletch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src="/static/img/icons/github.png" alt="github" />
          </a>
        </li>
        <li className="d-inline-block">
          <a
            href="https://linkedin.com/in/jdfletch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img src="/static/img/icons/linkedin_square.svg" alt="linkedin" />
          </a>
        </li>
        <li className="d-inline-block">
          <a href="mailto:jdfletch97@gmail.com">
            <Img src="/static/img/icons/email.png" alt="email" />
          </a>
        </li>
      </ul>
    </Div>

    <DivBottomLinks>
      <p>&copy; Jack Fletcher {new Date().getFullYear()}</p>
      <p>
        Website made with React, Next.js, and styled-components. Hosted on TBD.
        The source is private rn.
        {/* on{' '}
        <a
          href="https://github.com/jackfletch/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . */}
      </p>
    </DivBottomLinks>
  </SFooter>
);

export default Footer;
