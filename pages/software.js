import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Meta from '../components/meta';
import Page from '../components/Page';
import {getBaseURL} from '../lib';

const H2 = styled.h2`
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    margin-top: 52.625px;
  }
`;

class SoftwarePage extends React.Component {
  static propTypes = {
    baseURL: PropTypes.string.isRequired,
  };

  static async getInitialProps({req}) {
    const baseURL = getBaseURL(req);
    return {baseURL};
  }

  render() {
    const title = 'Fletcher Labs';
    const {baseURL} = this.props;

    return (
      <>
        <Meta baseURL={baseURL} staticPage={{title}} />
        <Page baseURL={baseURL}>
          <div
            className="container-fluid sec padY40"
            style={{
              backgroundColor: 'rgb(172, 172, 192)',
              color: '#333',
            }}
          >
            <div className="container">
              <H2>This is where I talk about my software projects.</H2>
            </div>
          </div>
        </Page>
      </>
    );
  }
}

export default SoftwarePage;
