import React from 'react';
import {Hero, Meta, Page} from '../components';

const IndexPage = () => {
  const title = 'Fletcher Labs';

  return (
    <>
      <Meta staticPage={{title}} />
      <Page noHeader>
        <Hero className="hero" />
      </Page>
    </>
  );
};

export default IndexPage;
