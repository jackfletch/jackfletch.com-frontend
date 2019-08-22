import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeroDiv = styled.div`
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
  @media screen and (max-width: 991px) {
    font-size: 3rem;
  }
`;

const Hero = () => (
  <>
    <HeroDiv className="container">
      <MessageDiv>
        <H1 className="welcome">
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
          <a href="https://storage.cloud.google.com/jackfletch/static/documents/JacksonFletcherResume.pdf">
            résumé
          </a>
          .
        </H1>
      </MessageDiv>
    </HeroDiv>
  </>
);

export default Hero;
