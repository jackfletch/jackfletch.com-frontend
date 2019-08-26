import styled from 'styled-components';
import Copyright from './Copyright';
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

const Footer = () => {
  const networks = Object.keys(websiteConfig.author.contacts);
  const owner = websiteConfig.author.name;

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
      <Copyright date={new Date().getFullYear()} owner={owner} />
    </SFooter>
  );
};

export default Footer;
