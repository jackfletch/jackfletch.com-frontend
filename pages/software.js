import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ContentContainer, Meta, Page} from '../components';
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
          <ContentContainer>
            <H2>This is where I talk about my software projects.</H2>
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default SoftwarePage;
