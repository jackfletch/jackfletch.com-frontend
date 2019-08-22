import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeroDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-evenly;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: unset;
  }
`;

const MessageDiv = styled.div`
  flex: 0;
  width: 100%;
  padding: 2.5em 15px;
  @media screen and (min-width: 992px) {
    flex: 1;
  }
`;

const H1 = styled.h1`
  margin: 0;
  @media screen and (max-width: 991px) {
    font-size: 3rem;
  }
`;

const ImgDiv = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
  }
  @media screen and (min-height: 750px) {
    display: block;
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
          <Link href="https://storage.cloud.google.com/jackfletch/static/documents/JacksonFletcherResume.pdf">
            <a>résumé</a>
          </Link>
          .
        </H1>
      </MessageDiv>
      <ImgDiv>
        <img
          src="/static/img/hero_corner.png"
          alt="Jack Fletcher"
          style={{
            objectFit: 'cover',
            width: '300px',
            height: '400px',
          }}
        />
      </ImgDiv>
    </HeroDiv>
  </>
);

export default Hero;
