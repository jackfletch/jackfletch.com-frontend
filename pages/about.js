import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Meta from '../components/meta';
import Page from '../components/Page';
import ContentContainer from '../components/ContentContainer';
import {getBaseURL} from '../lib';

const H2 = styled.h2`
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    margin-top: 52.625px;
  }
`;

class AboutPage extends React.Component {
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
