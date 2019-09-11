import React from 'react';
import {Card, ContentContainer, Meta, Page} from '../components';

const projects = [
  {
    id: 'splash',
    color: '#FEC006',
    title: 'Splash',
    thumbnail: '',
    category: 'Data',
    link: 'https://splash.jackfletch.com',
    excerpt: 'NBA Shooting Visualization',
    date: new Date(2017, 4, 29),
  },
  {
    id: 'jackfletch.com',
    color: '#F4B400',
    title: 'jackfletch.com Frontend',
    thumbnail: '',
    category: 'Web',
    link: 'https://github.com/jackfletch/jackfletch.com-frontend',
    excerpt: 'Frontend for jackfletch.com built on Next.js',
    date: new Date(2019, 8, 12),
  },
  {
    id: 'committime',
    color: '#0F9D58',
    title: 'committime',
    thumbnail: '',
    category: 'CLI',
    link: 'https://github.com/jackfletch/committime',
    excerpt: 'CLI tool for changing git commit times',
    date: new Date(2019, 7, 9),
  },
  {
    id: 'thesis',
    color: '#2196F3',
    title: 'Undergraduate Thesis',
    thumbnail: '',
    category: 'Research',
    link:
      'https://storage.cloud.google.com/jackfletch/static/documents/thesis.pdf',
    excerpt: 'Analysis of an Embedded Device using Machine Learning',
    date: new Date(2019, 5, 26),
  },
  {
    id: 'embedded',
    color: '#FE5621',
    title: 'Embedded Systems Lab',
    thumbnail: '',
    category: 'Class Project',
    link: 'https://github.com/Tuxprogrammer/msu_ece4723',
    excerpt: 'Labwork for ECE4723 Embedded Systems',
    date: new Date(2019, 0, 30),
  },
  {
    id: 'skipLists',
    color: '#FE5621',
    title: 'Skip Lists',
    thumbnail: '',
    category: 'Class Project',
    link: 'https://github.com/jackfletch/CSE2383-SkipList',
    excerpt:
      'Honors Project for CSE 2383 Data Stuctures and Analysis of Algorithms',
    date: new Date(2016, 11, 12),
  },
  {
    id: 'dotfiles',
    color: '#673AB7',
    title: 'Dotfiles',
    thumbnail: '',
    category: 'Config',
    link: 'https://github.com/jackfletch/dotfiles',
    excerpt: 'My dotfiles',
    date: new Date(),
  },
  {
    id: 'yahtzee',
    color: '#FE5621',
    title: 'Yahtzee GUI',
    thumbnail: '',
    category: 'Class Project',
    link: '#',
    excerpt: 'Yahtzee game implementation with a GUI',
    date: new Date(),
  },
];

const innerContentContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  maxWidth: '960px',
};
const outerContentContainerStyle = {
  padding: '0 1.5rem',
};

const ProjectsPage = () => {
  const title = 'Fletcher Labs';

  return (
    <>
      <Meta staticPage={{title}} />
      <Page>
        <ContentContainer
          innerStyle={innerContentContainerStyle}
          outerStyle={outerContentContainerStyle}
        >
          {projects.map(project => (
            <Card key={project.id} value={project} />
          ))}
        </ContentContainer>
      </Page>
    </>
  );
};

export default ProjectsPage;
