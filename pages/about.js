import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import {ContentContainer, Meta, Page} from '../components';
import {getBaseUrl} from '../lib';

const H2 = styled.h2`
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    margin-top: 52.625px;
  }
`;

class AboutPage extends React.Component {
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
            <H2>
              This is where I talk about me. If you'd prefer a CV or CV-like
              webpage, try&nbsp;
              <Link href="/cv">
                <a>here</a>
              </Link>
              .
            </H2>
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default AboutPage;
