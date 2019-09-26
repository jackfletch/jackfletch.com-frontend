import posts from '../../data/postMetadata.json';

export default function handle(req, res) {
  if (posts) {
    // format dates
    const mappedPosts = posts.map(post => {
      post.date = new Date(post.date);
      post.htmlContent = undefined;
      post.plainContents = undefined;
      post.words = undefined;
      return post;
    });

    // sort by reverse order for displaying
    mappedPosts.sort((a, b) => (a.date < b.date ? 1 : -1));

    res.status(200).json(mappedPosts);
  } else {
    res.status(404).json({error: 'Posts not found.'});
  }
}
