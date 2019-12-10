const fs = require('fs');
const path = require('path');
const RSS = require('rss');
const {author, url} = require('../../config/website');

const OUT_DIR = path.join(process.cwd(), 'public');

const generateRssFeed = postMetadata => {
  const rssFeed = new RSS({
    title: `${author.name}'s Ramblings`,
    description:
      "A junior dev's blog about web development, machine learning, visualization, and more.",
    site_url: `${url}/blog`,
    feed_url: `${url}/rss.xml`,
    managingEditor: `${author.contacts.email} (${author.name})`,
    language: 'en',
    pubDate: 'Aug 28, 2019 12:00:00 CST',
  });

  postMetadata.forEach(post => {
    rssFeed.item({
      title: post.title,
      url: `${url}/blog/${post.slug}`,
      guid: `${url}/blog/${post.slug}`,
      date: post.date,
      description: post.description,
      custom_elements: [
        {
          'content:encoded': post.htmlContent,
        },
      ],
    });
  });

  const filePath = path.join(OUT_DIR, 'rss.xml');
  fs.writeFileSync(filePath, rssFeed.xml({indent: true}));
  // eslint-disable-next-line no-console
  console.log(
    `> RSS feed with ${postMetadata.length} entries was written to "${filePath}"`
  );
};

module.exports = generateRssFeed;
