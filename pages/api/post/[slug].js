import posts from '../../../data/posts.json';
import test1 from '../../../data/test1.md';

export default function handle(req, res) {
  const post = posts.find(item => item.slug === req.query.slug);

  if (post) {
    if (post.slug === 'test1') post.content = test1;
    res.status(200).json(post);
  } else {
    res.status(404).json({error: 'Post not found.'});
  }
}
