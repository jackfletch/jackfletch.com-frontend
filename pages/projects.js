import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Card, ContentContainer, Meta, Page} from '../components';
import {getBaseUrl} from '../lib';

const projects = {
  splash: {
    color: '#FEC006',
    title: 'Splash',
    thumbnail: '',
    category: 'Data',
    link: 'https://splash.jackfletch.com',
    excerpt: 'NBA Shooting Visualization',
    date: new Date(2017, 4, 29),
  },
  thesis: {
    color: '#2196F3',
    title: 'Undergraduate Thesis',
    thumbnail: '',
    category: 'Research',
    link: 'https://jackfletch.com/static/thesis.pdf',
    excerpt: 'Analysis of an Embedded Device using Machine Learning',
    date: new Date(2019, 5, 26),
  },
  skipLists: {
    color: '#FE5621',
    title: 'Skip Lists',
    thumbnail: '',
    category: 'Class Project',
    link: 'https://github.com/jackfletch/CSE2383-SkipList',
    excerpt:
      'Honors Project for CSE 2383 Data Stuctures and Analysis of Algorithms',
    date: new Date(2016, 11, 12),
  },
  dotfiles: {
    color: '#673AB7',
    title: 'Dotfiles',
    thumbnail: '',
    category: 'Config',
    link: 'https://github.com/jackfletch/dotfiles',
    excerpt: 'My dotfiles',
    date: new Date(),
  },
  yahtzee: {
    color: '#FE5621',
    title: 'Yahtzee GUI',
    thumbnail: '',
    category: 'Class Project',
    link: '#',
    excerpt: 'Yahtzee game implementation with a GUI',
    date: new Date(),
  },
};

const innerContentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  width: '90%',
  maxWidth: '960px',
  margin: '0 auto',
};

const outerContentContainerStyle = {
  marginTop: '60px',
};

const H2 = styled.h2`
  margin-top: 60px;
  @media screen and (max-width: 991px) {
    margin-top: 52.625px;
  }
`;

class ProjectsPage extends React.Component {
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
          <ContentContainer
            innerStyle={innerContentContainerStyle}
            outerStyle={outerContentContainerStyle}
          >
            {Object.keys(projects).map(project => (
              <Card key={project} value={projects[project]} />
            ))}
          </ContentContainer>
        </Page>
      </>
    );
  }
}

export default ProjectsPage;
