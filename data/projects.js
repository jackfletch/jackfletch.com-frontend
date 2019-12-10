import {storageBucketUrl} from '../config/website';

const mapping = {
  splash: {
    title: 'Splash',
    category: 'Data',
    featured: true,
    link: 'https://splash.jackfletch.com',
    excerpt: 'NBA data visualization SPA for shotcharts and other statistics',
    image: '/media/splash-intro/interface.png',
    date: new Date('2017-05-29T05:00:00.000Z'),
  },
  'jackfletch.com': {
    title: 'jackfletch.com Frontend',
    category: 'Web',
    link: 'https://github.com/jackfletch/jackfletch.com-frontend',
    excerpt: 'Frontend for jackfletch.com built on Next.js',
    date: new Date('2019-09-12T05:00:00.000Z'),
  },
  committime: {
    title: 'committime',
    category: 'CLI',
    link: 'https://github.com/jackfletch/committime',
    excerpt: 'CLI tool for changing git commit times',
    date: new Date('2019-08-09T05:00:00.000Z'),
  },
  thesis: {
    title: 'Undergraduate Thesis',
    category: 'Research',
    featured: true,
    link: `${storageBucketUrl}/static/documents/thesis.pdf`,
    excerpt:
      'Analysis of a real-time data-collecting embedded device using machine learning',
    image: '/media/thesis/topology.svg',
    date: new Date('2019-06-26T05:00:00.000Z'),
  },
  embedded: {
    title: 'Embedded Systems Lab',
    category: 'Class Project',
    link: 'https://github.com/Tuxprogrammer/msu_ece4723',
    excerpt: 'Labwork for ECE4723 Embedded Systems',
    date: new Date('2019-01-30T06:00:00.000Z'),
  },
  carRender: {
    title: 'Phong Lighting + Mini Cooper',
    category: 'Class Project',
    link: 'https://jackfletch.com/projects/cse4413-car-render/',
    excerpt:
      'Rendering a car with WebGL using the Phong lighting model to learn vertex and fragment shaders',
    date: new Date('2018-11-26T06:00:00.000Z'),
  },
  skipLists: {
    title: 'Skip Lists',
    category: 'Class Project',
    link: 'https://github.com/jackfletch/CSE2383-SkipList',
    excerpt: 'Skip List data structure implementation and profiling',
    date: new Date('2016-12-12T06:00:00.000Z'),
  },
  dotfiles: {
    title: 'Dotfiles',
    category: 'Config',
    link: 'https://github.com/jackfletch/dotfiles',
    excerpt: 'My world-famous dotfiles',
    date: new Date('2019-05-17T05:00:00.000Z'),
  },
  yahtzee: {
    title: 'Yahtzee GUI',
    category: 'Class Project',
    link: '#',
    excerpt: 'Yahtzee game implementation with a GUI',
    date: new Date('2016-11-22T06:00:00.000Z'),
  },
};

const sortOrder = Object.keys(mapping).sort((a, b) =>
  mapping[a].date < mapping[b].date ? 1 : -1
);

export {mapping, sortOrder};
