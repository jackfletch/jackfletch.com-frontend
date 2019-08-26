import styled from 'styled-components';
import FooterIconLink from './FooterIconLink';
import websiteConfig from '../config/website';

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

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
`;

const P = styled.p`
  margin: 0 auto;
`;

const Footer = () => {
  const networks = Object.keys(websiteConfig.author.contacts);

  return (
    <SFooter className="bottom">
      <Div className="container">
        <p>STAY CONNECTED</p>
        <Ul>
          {networks.map(network => (
            <FooterIconLink key={network} network={network} />
          ))}
        </Ul>
      </Div>

      <DivBottomLinks>
        <P>
          <small>&copy; {new Date().getFullYear()} Jack Fletcher</small>
        </P>
      </DivBottomLinks>
    </SFooter>
  );
};

export default Footer;
