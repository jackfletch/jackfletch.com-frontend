import React from 'react';
import styled from 'styled-components';
import {Card, ContentContainer, Meta, Page} from '../components';

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
    link:
      'https://storage.cloud.google.com/jackfletch/static/documents/thesis.pdf',
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
  maxWidth: '960px',
};

const ProjectsPage = () => {
  const title = 'Fletcher Labs';

  return (
    <>
      <Meta staticPage={{title}} />
      <Page>
        <ContentContainer innerStyle={innerContentContainerStyle}>
          {Object.keys(projects).map(project => (
            <Card key={project} value={projects[project]} />
          ))}
        </ContentContainer>
      </Page>
    </>
  );
};

export default ProjectsPage;
