import posts from '../../../data/posts.json';
import colophon from '../../../data/colophon.md';
import committime from '../../../data/committime.md';
import helloWorld from '../../../data/hello-world.md';

export default function handle(req, res) {
  const post = posts.find(item => item.slug === req.query.slug);

  if (post) {
    if (post.slug === 'colophon') post.content = colophon;
    if (post.slug === 'committime') post.content = committime;
    if (post.slug === 'hello-world') post.content = helloWorld;
    res.status(200).json(post);
  } else {
    res.status(404).json({error: 'Post not found.'});
  }
}
