interface AuthorContacts {
  email: string;
  github: string;
  instagram: string;
  linkedin: string;
  twitter: string;
}

interface Author {
  name: string;
  contacts: AuthorContacts;
}

interface MenuItem {
  label: string;
  path: string;
}

export interface WebsiteConfig {
  author: Author;
  url: string;
  logoPath: string;
  title: string;
  description: string;
  storageBucketUrl: string;
  menu: MenuItem[];
}

const websiteConfig: WebsiteConfig = {
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
  logoPath: '/img/jf.png',
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

export const {storageBucketUrl} = websiteConfig;
export default websiteConfig;
