import styled from 'styled-components';

import Copyright from './Copyright';
import FooterIconLink from './FooterIconLink';
import websiteConfig from '../config/website';

export const FOOTER_HEIGHT_DESKTOP = 410;
export const FOOTER_HEIGHT_MOBILE = 290;

const StyledFooter = styled.footer`
  color: ${props => props.theme.colors.grays[0]};
  text-align: center;
`;

const Div = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 60px 0;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    padding: 120px 0;
  }
`;

const P = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.05rem;
`;

const networks = [...Object.keys(websiteConfig.author.contacts), 'rss'];
const NetworkLinks = networks.map(network => (
  <FooterIconLink key={network} network={network} />
));

const Footer = () => (
  <StyledFooter>
    <Div>
      <P>Stay Connected</P>
      <ul>{NetworkLinks}</ul>
    </Div>
    <Copyright
      date={new Date().getFullYear()}
      owner={websiteConfig.author.name}
    />
  </StyledFooter>
);

export default Footer;
