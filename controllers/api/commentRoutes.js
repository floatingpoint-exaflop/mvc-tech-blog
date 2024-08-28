const router = require('express').Router();
const { Comment, Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
  try {

    const blogData = await Blog.findByPk(req.params.id, {
      attributes: ['title'],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blog found with that ID!' });
      return;
    }

    res.render('comment', {
      title: blogData.title,
      logged_in: req.session.logged_in,
      blog_id: req.params.id
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//make new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      blog_id: req.body.blog_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
