import React from 'react';
import styled from 'styled-components';
import websiteConfig from '../config/website';
import {Icon} from '../components';

const Li = styled.li`
  display: inline-block;
  border-radius: 50%;
  background-color: rgb(238, 238, 238);
  padding: 2px;
  margin: 0.2rem;
`;

const FooterIconLink = ({network}) => {
  const username = websiteConfig.author.contacts[network];
  const networkMap = {
    email: {
      linkUrl: `mailto:${username}`,
    },
    github: {
      linkUrl: `https://github.com/${username}`,
    },
    instagram: {
      linkUrl: `https://instagram.com/${username}`,
    },
    linkedin: {
      linkUrl: `https://linkedin.com/in/${username}`,
    },
    rss: {
      linkUrl: `${websiteConfig.url}/static/rss.xml`,
    },
    twitter: {
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
        <Icon glyph={network} />
      </a>
    </Li>
  );
};

export default FooterIconLink;
