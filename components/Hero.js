import React from 'react';
import styled from 'styled-components';

const HeroDiv = styled.div`
  background-size: calc(60vmin - 45px) calc(80vmin - 60px);
  height: calc(100vh - 65px);

  @media screen and (min-width: 576px) {
    background-size: 240px 320px;
  }
  @media screen and (min-width: 768px) {
    background-size: 300px 400px;
  }
  @media screen and (min-width: 992px) {
    background-size: 360px 480px;
  }
`;

const MessageDiv = styled.div`
  width: 100%;
  padding: 2.5em 15px;
  @media screen and (min-width: 768px) {
    padding: 7em 15px;
  }
  @media screen and (min-width: 992px) {
    padding: 7em 5em;
  }
  @media screen and (min-width: 1200px) {
    padding: 7em calc(5em + 85px);
  }
`;

const H3 = styled.h3`
  max-width: 12em;
`;

const Hero = ({style}) => (
  <>
    <HeroDiv className="hero" style={style}>
      <div className="container">
        <MessageDiv>
          <H3>Welcome to my corner of the internet.</H3>
        </MessageDiv>
      </div>
    </HeroDiv>
  </>
);

export default Hero;
