import {withRouter} from 'next/router';
import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Meta from '../components/meta';
import Page from '../components/Page';
import Hero from '../components/Hero';
import ContentContainer from '../components/ContentContainer';
import {getBaseURL} from '../lib';

const SubTitle = styled.h3`
  letter-spacing: 10px;
  padding-left: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 991px) {
    padding-left: 20px;
  }
`;

const SubText = styled.p`
  font-size: 1em;
  letter-spacing: 1px;
  margin: 0px;
`;

const RowDiv = styled.div`
  font-family: 'Roboto';
  & > div {
    padding-top: 20px;
    padding-bottom: 20px;
    > ul {
      padding: 0 0 0 20px;
      > li {
        font-size: 0.8em;
      }
    }
  }
`;

class IndexPage extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    baseURL: PropTypes.string.isRequired,
  };

  static async getInitialProps({req}) {
    const baseURL = getBaseURL(req);
    return {baseURL};
  }

  componentWillReceiveProps(nextProps) {
    const {query} = nextProps.router;
    if (query.number) {
      this.setState({currentShow: query.number});
    }
  }

  setCurrentPlaying = currentPlaying => {
    console.log('Setting current playing');
    this.setState({currentPlaying});
  };

  render() {
    const title = 'Fletcher Labs';
    const {baseURL} = this.props;

    return (
      <>
        <Meta baseURL={baseURL} staticPage={{title}} />
        <Page baseURL={baseURL}>
          <Hero
            className="hero"
            style={{
              // backgroundImage: `url(${baseURL}/static/img/hero_blur.jpg)`,
              // backgroundImage: `url(${baseURL}/static/img/hero.jpg)`,
              backgroundImage: `url(${baseURL}/static/img/hero_corner.png)`,
              backgroundPosition: '70% center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <ContentContainer>
            <SubTitle>MY WORK</SubTitle>
            <SubText className="extPad">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
              mi sem. Proin laoreet gravida nibh et sodales. Curabitur nec justo
              et eros varius elementum. Nulla enim nunc, facilisis sit amet
              aliquam lobortis, placerat sed enim. Nullam fringilla enim quis
              fringilla dapibus. Pellentesque ut urna facilisis, eleifend metus
              vel, viverra risus. Aenean cursus et velit in euismod. Integer in
              imperdiet nulla. Sed eleifend eget libero nec interdum. Duis vitae
              dictum elit, eu condimentum tellus.
            </SubText>
            <RowDiv className="row">
              <div className="col-lg-4">
                <h5>software development</h5>
                <ul>
                  <li>javascript</li>
                  <li>c++</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5>data & visualization</h5>
                <ul>
                  <li>R, d3.js, python</li>
                  <li>webGL</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h5 style={{textAlign: 'center'}}>
                  orchestration & optimization
                </h5>
                <ul>
                  <li>docker</li>
                  <li>kubernetes</li>
                </ul>
              </div>
            </RowDiv>
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default withRouter(IndexPage);
