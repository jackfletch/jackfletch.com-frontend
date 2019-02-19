import {withRouter} from 'next/router';
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import ShowList from '../components/ShowList';
// import ShowNotes from '../components/ShowNotes';
// import Player from '../components/Player';
import Head from 'next/head';
import Meta from '../components/meta';
import Page from '../components/Page';
import {getBaseURL} from '../lib';

const Hero = styled.div`
  background-size: 45vmin 60vmin;
  margin-top: 60px;
  @media screen and (min-width: 800px) {
    background-size: 360px 480px;
  }
  @media screen and (max-height: 720px) {
    /* background-size: 360px 480px; */
    /* margin: 60px 0; */
    min-height: 600px;
  }
`;


class IndexPage extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    // shows: PropTypes.array.isRequired,
    baseURL: PropTypes.string.isRequired,
  };

  constructor(props) {
    super();
    // const currentShow =
    //   props.router.query.number || props.shows[0].displayNumber;

    // this.state = {
    //   currentShow,
    //   currentPlaying: currentShow,
    // };
  }

  static async getInitialProps({req}) {
    const baseURL = getBaseURL(req);
    // const {data: shows} = await axios.get(`${baseURL}/api/shows`);
    // return {shows, baseURL};
    return {baseURL};
  }

  componentWillReceiveProps(nextProps) {
    const {query} = nextProps.router;
    if (query.number) {
      this.setState({currentShow: query.number});
    }
  }

  setCurrentPlaying = (currentPlaying) => {
    console.log('Setting current playing');
    this.setState({currentPlaying});
  };

  render() {
    const title = 'FletcherLabs';
    const {baseURL} = this.props;
    // const {shows = [], baseURL} = this.props;
    // const {currentShow, currentPlaying} = this.state;
    // // Currently Shown shownotes
    // const show =
    //   shows.find(showItem => showItem.displayNumber === currentShow) ||
    //   shows[0];
    // // Currently Playing
    // const current =
    //   shows.find(showItem => showItem.displayNumber === currentPlaying) ||
    //   shows[0];


    return (
      <>
        <Meta baseURL={baseURL} staticPage={{title}} />
        <Page baseURL={baseURL}>
          <Hero className="hero" style={{
            backgroundImage: `url(${baseURL}/static/img/hero_blur.jpg)`,
            height: 'calc(100vh - 120px)',
            backgroundPosition: '70% center',
            backgroundRepeat: 'no-repeat',
          }} />
          <div className="container-fluid" style={{
            paddingTop: '150px',
            paddingBottom: '100px',
            // backgroundColor: 'purple',
            backgroundColor: 'rgb(172, 172, 192)',
            // color: '#eee'
            color: '#333'
          }}>
            <div className="container">
              <h1>My Work</h1>
            </div>
          </div>
        </Page>
      </>
    );
  }
}

export default withRouter(IndexPage);
