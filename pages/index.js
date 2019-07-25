import {withRouter} from 'next/router';
import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ContentContainer, Hero, Meta, Page} from '../components';
import {getBaseUrl} from '../lib';

const SubTitle = styled.h3`
  letter-spacing: 10px;
  padding-bottom: 60px;
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
    baseUrl: PropTypes.string.isRequired,
  };

  static async getInitialProps({req}) {
    const baseUrl = getBaseUrl(req);
    return {baseUrl};
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
    const {baseUrl} = this.props;

    return (
      <>
        <Meta baseUrl={baseUrl} staticPage={{title}} />
        <Page baseUrl={baseUrl}>
          <Hero
            className="hero"
            style={{
              // backgroundImage: `url(${baseUrl}/static/img/hero_blur.jpg)`,
              // backgroundImage: `url(${baseUrl}/static/img/hero.jpg)`,
              backgroundImage: `url(/static/img/hero_corner.png)`,
              backgroundPosition: '80% center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <ContentContainer>
            <SubTitle>MY WORK</SubTitle>
            <SubText className="extPad">
              I excelled in school but craved opportunities to apply that
              learning. I want to solve real-world problems. While serving as a
              portfolio and blog, this website also triples as an educational
              playground for new technologies that aid problem solving.
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
