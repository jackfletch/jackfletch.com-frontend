import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {ContentContainer, Meta, Page} from '../components';
import {getBaseUrl} from '../lib';

const H2 = styled.h2`
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    margin-top: 52.625px;
  }
`;

class SoftwarePage extends React.Component {
  static propTypes = {
    baseUrl: PropTypes.string.isRequired,
  };

  static async getInitialProps({req}) {
    const baseUrl = getBaseUrl(req);
    return {baseUrl};
  }

  render() {
    const title = 'Fletcher Labs';
    const {baseUrl} = this.props;

    return (
      <>
        <Meta baseUrl={baseUrl} staticPage={{title}} />
        <Page baseUrl={baseUrl}>
          <ContentContainer>
            <H2>This is where I talk about my software projects.</H2>
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default SoftwarePage;
