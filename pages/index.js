import React from 'react';
import {Hero, Meta, Page} from '../components';
import config from '../config/website';

const IndexPage = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: config.author.name,
    url: config.url,
    sameAs: [
      `https://twitter.com/${config.author.contacts.twitter}`,
      `https://instagram.com/${config.author.contacts.instagram}`,
      `https://linkedin.com/in/${config.author.contacts.linkedin}`,
    ],
  };

  return (
    <>
      <Meta schema={schema} />
      <Page noHeader>
        <Hero className="hero" />
      </Page>
    </>
  );
};

export default IndexPage;
