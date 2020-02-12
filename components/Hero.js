import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import {Container} from '.';
import {storageBucketUrl} from '../config/website';

const HeroDiv = styled(Container)`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 80vh;
`;

const MessageDiv = styled.div`
  padding: 2.5em 15px;
  width: 350px;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  & > a,
  & > a:hover {
    color: rgba(3, 102, 214, 1);
  }
`;

const P = styled.p`
  font-size: 1.25rem;
  line-height: 1.75;
`;

const Hero = () => (
  <>
    <HeroDiv>
      <MessageDiv>
        <H1>Jack Fletcher</H1>
        <P>I'm a Software Engineer from Memphis, TN.</P>
        <P>I make usable tools and visualizations with code.</P>
        <P>
          <Link href="/blog">
            <a>blog</a>
          </Link>
          ,{' '}
          <Link href="/projects">
            <a>projects</a>
          </Link>
          , and{' '}
          <a
            href={`${storageBucketUrl}/static/documents/JacksonFletcherResume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            résumé
          </a>
          .
        </P>
      </MessageDiv>
    </HeroDiv>
  </>
);

export default Hero;
