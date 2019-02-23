import Layout from '../components/Layout';
import React from 'react';
import PropTypes from 'prop-types';
import Meta from '../components/meta';
import Page from '../components/Page';
import {getBaseURL} from '../lib';

class AboutPage extends React.Component {
  static propTypes = {
    baseURL: PropTypes.string.isRequired,
  };

  static async getInitialProps({req}) {
    const baseURL = getBaseURL(req);
    return {baseURL};
  }

  render() {
    const title = 'FletcherLabs';
    const {baseURL} = this.props;

    return (
      <>
        <Meta baseURL={baseURL} staticPage={{title}} />
        <Page baseURL={baseURL}>
          <p>This is the about page</p>
        </Page>
      </>
    );
  }
}

export default AboutPage;
