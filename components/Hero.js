import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import {Container} from '.';
import {storageBucketUrl} from '../config/website';

const HeroDiv = styled(Container)`
  align-items: center;
  display: flex;
  height: 100vh;
`;

const MessageDiv = styled.div`
  padding: 2.5em 15px;
  width: 100%;
`;

const H1 = styled.h1`
  margin: 0;
  & > a,
  & > a:hover {
    color: rgba(3, 102, 214, 1);
  }
`;

const Hero = () => (
  <>
    <HeroDiv>
      <MessageDiv>
        <H1>
          Hi, I'm Jack.
          <br />
          Check out my{' '}
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
        </H1>
      </MessageDiv>
    </HeroDiv>
  </>
);

export default Hero;
