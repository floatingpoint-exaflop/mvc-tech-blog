const router = require('express').Router();
const { Comment } = require('../../models');
const mustBeSignedIn = require('../../utils/middleware');

//used to create a new comment on a blog post
router.post('/', mustBeSignedIn, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      blogpost_id: req.session.blogpost_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json({ message: 'Error: New comment could not be created.' });
    return;
  }
});

module.exports = router