const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


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
