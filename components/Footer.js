import Copyright from './Copyright';
import FooterIconLink from './FooterIconLink';
import websiteConfig from '../config/website';

export const FOOTER_HEIGHT_DESKTOP = 410;
export const FOOTER_HEIGHT_MOBILE = 290;

const Footer = () => {
  const networks = Object.keys(websiteConfig.author.contacts);
  networks.push('rss');
  const owner = websiteConfig.author.name;

  return (
    <footer>
      <div className="footer__links">
        <p>Stay Connected</p>
        <ul>
          {networks.map(network => (
            <FooterIconLink key={network} network={network} />
          ))}
        </ul>
      </div>
      <Copyright date={new Date().getFullYear()} owner={owner} />
    </footer>
  );
};

export default Footer;
