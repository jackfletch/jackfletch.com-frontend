import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import LinkSmoothScroll from './LinkSmoothScroll';

const HeroDiv = styled.div`
  background-size: 45vmin 60vmin;
  height: calc(100vh - 60px);
  margin-top: 60px;

  @media screen and (min-width: 800px), screen and (min-height: 650) {
    background-size: 360px 480px;
  }
  @media screen and (max-height: 720px) {
    min-height: 600px;
  }
  @media screen and (max-width: 991px) {
    height: calc(100vh - 52.625px);
    margin-top: 52.625px;
  }
`;

const ScrollDiv = styled.div`
  text-align: center;
  position: absolute;
  left: calc(50% - 54px);
  top: calc(100% - 100px);
  @media screen and (max-height: 720px) {
    visibility: hidden;
  }
`;

const Button = styled.button`
  position: relative;
  border: none;
  background: none;
  /* font-size: 3em; */
`;

const Hero = ({style}) => (
  <>
    <HeroDiv className="hero" style={style}>
      <ScrollDiv>
        <LinkSmoothScroll href="/#thesis">
          <Button href="#thesis">
            <h4>Read More</h4>
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="35px"
              height="35px"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#333"
                stroke="none"
              >
                <path d="M207 4822 l-207 -207 1278 -1278 1277 -1277 1275 1275 1275 1275 -210 210 -210 210 -1065 -1065 -1065 -1065 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z" />
                <path d="M207 2652 l-207 -207 1223 -1223 1222 -1222 110 0 110 0 1218 1218 c669 669 1217 1222 1217 1227 0 6 -92 102 -205 215 l-205 205 -1068 -1068 -1067 -1067 -1065 1065 c-586 586 -1067 1065 -1070 1065 -3 0 -98 -93 -213 -208z" />
              </g>
            </svg>
          </Button>
        </LinkSmoothScroll>
      </ScrollDiv>
    </HeroDiv>
    <div id="thesis" />
  </>
);

export default Hero;
