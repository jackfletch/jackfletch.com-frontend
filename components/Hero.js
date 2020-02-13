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

const ListDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 16px;
  max-width: 800px;
  text-align: center;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;

const Li = styled.li`
  font-size: 1.25rem;
  margin-right: 16px;
  display: inline-block;

  &::before {
    content: '•';
    color: rgb(222, 226, 230);
    margin-right: 16px;
  }
  :first-child::before {
    content: '';
    margin-right: 0px;
  }
`;

const Hero = () => (
  <>
    <HeroDiv>
      <MessageDiv>
        <H1>Jack Fletcher</H1>
        <P>I'm a Software Engineer from Memphis, TN.</P>
        <P>I make usable tools and visualizations with code.</P>
      </MessageDiv>
    </HeroDiv>
    <ListDiv>
      <Ul>
        <Li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </Li>
        <Li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </Li>
        <Li>
          <a
            href={`${storageBucketUrl}/static/documents/JacksonFletcherResume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </a>
        </Li>
      </Ul>
    </ListDiv>
  </>
);

export default Hero;
