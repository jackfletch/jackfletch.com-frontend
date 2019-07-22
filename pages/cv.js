import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Meta from '../components/meta';
import Page from '../components/Page';
import ContentContainer from '../components/ContentContainer';
import DownloadButton from '../components/DownloadButton';
import {getBaseURL} from '../lib';

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 1em;
  letter-spacing: 0.1em;
  word-spacing: 0.25em;
`;
const DivTop = styled.div`
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    margin-top: 52.625px;
  }
`;

const Section = styled.section`
  flex: 1;
  /* position: relative; */
  /* width: inherit; */
  background-color: #ddd;
  ul {
    list-style: none;
    li :not(:last-child) {
      margin-bottom: 2em;
    }
  }
  p {
    margin-top: 1em;
  }
  img {
    float: left;
    width: 80px;
    height: 80px;
    border-radius: 25%;
    border: 3px solid #ddd;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 20px;
  }
  strong {
    text-align: left;
    display: block;
    font-size: 16px;
  }
  em {
    font-size: 14px;
    color: #666;
  }
`;

class CvPage extends React.Component {
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
            <DivTop>
              <h2>This is the CV page</h2>
              <DownloadButton baseURL={baseURL} />
            </DivTop>
          </ContentContainer>
          <div
            className="sec padY20"
            style={{
              backgroundColor: 'rgb(10, 112, 103)',
              color: '#333',
            }}
          >
            <Section className="container">
              <H1>education</H1>
              <ul>
                <li className="school-sba">
                  <img
                    src={`${baseURL}/static/img/cv/school-sba-eagle.jpg`}
                    alt="sba eagle logo"
                  />
                  <h2>High School</h2>
                  <strong>
                    <a href="http://www.sbaeagles.org">
                      St. Benedict at Auburndale
                    </a>
                  </strong>
                  <em>
                    August 2011 – May 2015 <span>(4 years)</span>
                  </em>
                  <p>School was good. I played some sports.</p>
                </li>
                <li className="school-msu">
                  <img
                    src={`${baseURL}/static/img/cv/school-msu.jpg`}
                    alt="mississippi state univerity logo"
                  />
                  <h2>University, undergraduate</h2>
                  <strong>
                    <a href="http://msstate.edu">
                      Mississippi State University
                    </a>
                  </strong>
                  <em>
                    August 2015 – Present <span>(2 years)</span>
                  </em>
                  <p>
                    School is okay. I'm learning things and doing stuff and
                    occassionally still playing some sports.
                  </p>
                </li>
              </ul>
            </Section>
          </div>
          <div
            className="sec padY20"
            style={{
              backgroundColor: 'rgb(10, 112, 103)',
              color: '#333',
            }}
          >
            <Section className="container">
              <H1>work experience</H1>
              <ul>
                <li className="job-cavs">
                  <img
                    src={`${baseURL}/static/img/cv/job-cavs.jpg`}
                    alt="logo of MSU's Center for Advanced Vehicular Systems"
                  />
                  <h2>Student Researcher</h2>
                  <strong>
                    <a href="http://cavs.msstate.edu">
                      Center for Advanced Vehicular Systems at MSU
                    </a>
                  </strong>
                  <em>
                    September 2016 – May 2017 <span>(9 months)</span>
                  </em>
                  <p>
                    I was responsible for developing two Python GUI applications
                    that interface with power transmission system software. The
                    applications automate system safety algorithms needed by the
                    planning department of the local energy company.
                  </p>
                </li>
                <li className="job-clemson">
                  <img
                    src={`${baseURL}/static/img/cv/logo-clemson.svg`}
                    alt="logo of Clemson University"
                  />
                  <h2>REU Researcher</h2>
                  <strong>
                    <a href="https://visualization.sites.clemson.edu/visualization/">
                      Clemson Computing and Information Technology Visualization
                    </a>
                  </strong>
                  <em>
                    June 2017 – July 2017 <span>(2 months)</span>
                  </em>
                  <p>
                    I was responsible for developing two Python GUI applications
                    that interface with power transmission system software. The
                    applications automate system safety algorithms needed by the
                    planning department of the local energy company.
                  </p>
                </li>
              </ul>
            </Section>
          </div>
        </Page>
      </>
    );
  }
}

export default CvPage;