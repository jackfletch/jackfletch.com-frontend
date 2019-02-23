import {withRouter} from 'next/router';
import React from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Meta from '../components/meta';
import Page from '../components/Page';
import Hero from '../components/Hero';
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

class IndexPage extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    // shows: PropTypes.array.isRequired,
    baseURL: PropTypes.string.isRequired,
  };

  // constructor(props) {
  //   super(props);
  // }

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
    const title = 'FletcherLabs';
    const {baseURL} = this.props;

    return (
      <>
        <Meta baseURL={baseURL} staticPage={{title}} />
        <Page baseURL={baseURL}>
          <Hero
            className="hero"
            style={{
              backgroundImage: `url(${baseURL}/static/img/hero_blur.jpg)`,
              // backgroundImage: `url(${baseURL}/static/img/hero.jpg)`,
              backgroundPosition: '70% center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            className="container-fluid sec padY40"
            style={{
              backgroundColor: 'rgb(172, 172, 192)',
              color: '#333',
            }}
          >
            <div className="container">
              <SubTitle>MY WORK</SubTitle>
              <SubText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nec mi sem. Proin laoreet gravida nibh et sodales. Curabitur nec
                justo et eros varius elementum. Nulla enim nunc, facilisis sit
                amet aliquam lobortis, placerat sed enim. Nullam fringilla enim
                quis fringilla dapibus. Pellentesque ut urna facilisis, eleifend
                metus vel, viverra risus. Aenean cursus et velit in euismod.
                Integer in imperdiet nulla. Sed eleifend eget libero nec
                interdum. Duis vitae dictum elit, eu condimentum tellus.
              </SubText>
            </div>
          </div>
        </Page>
      </>
    );
  }
}

export default withRouter(IndexPage);
