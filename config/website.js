const websiteConfig = {
  author: {
    name: 'Jack Fletcher',
    contacts: {
      email: 'jdfletch97@gmail.com',
      github: 'jackfletch',
      instagram: 'fletch_jack',
      linkedin: 'jdfletch',
      twitter: 'no_fletch_zone',
    },
  },
  url: 'https://jackfletch.com',
  logoPath: '/static/img/jf.png',
  title: 'Jack Fletcher',
  description:
    "CPE '19 @ Mississippi State. I blog about web development, machine learning, visualization, and more.",
  storageBucketUrl: 'https://storage.googleapis.com/jackfletch',
  menu: [
    {
      label: 'Welcome',
      path: '/',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
    {
      label: 'Projects',
      path: '/projects',
    },
  ],
};

module.exports = websiteConfig;
