import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {ContentContainer, Meta, Page} from '../components';

const AboutPage = () => {
  const title = 'Fletcher Labs';

  return (
    <>
      <Meta staticPage={{title}} />
      <Page noHeader>
        <ContentContainer>
          <h1>This is TODO.</h1>
        </ContentContainer>
      </Page>
    </>
  );
};

export default AboutPage;
