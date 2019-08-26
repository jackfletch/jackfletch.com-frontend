import React from 'react';
import styled from 'styled-components';
import websiteConfig from '../config/website';

const Img = styled.img`
  vertical-align: middle;
  padding: 5px;
  height: 50px;
`;

const Li = styled.li`
  display: inline-block;
`;

const FooterIconLink = ({network}) => {
  const username = websiteConfig.author.contacts[network];
  const networkMap = {
    email: {
      iconUrl: '/static/img/icons/email.png',
      linkUrl: `mailto:${username}`,
    },
    github: {
      iconUrl: '/static/img/icons/github.png',
      linkUrl: `https://github.com/${username}`,
    },
    instagram: {
      iconUrl: '/static/img/icons/instagram.png',
      linkUrl: `https://instagram.com/${username}`,
    },
    linkedin: {
      iconUrl: '/static/img/icons/linkedin_square.svg',
      linkUrl: `https://linkedin.com/in/${username}`,
    },
    twitter: {
      iconUrl: '/static/img/icons/twitter.png',
      linkUrl: `https://twitter.com/${username}`,
    },
  };
  return (
    <Li>
      <a
        href={networkMap[network].linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img src={networkMap[network].iconUrl} alt={network} />
      </a>
    </Li>
  );
};

export default FooterIconLink;
