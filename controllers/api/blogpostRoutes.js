const router = require('express').Router();
const { Blogpost } = require('../../models');
const mustBeSignedIn = require('../../utils/middleware');

//used to create a new blog post
router.post('/', mustBeSignedIn, async (req, res) => {
  try {
    const newBlogpost = await Blogpost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogpost);
  } catch (err) {
    res.status(400).json({ message: 'Error: New blog post could not be created.' });
    return;
  }
});

//used to delete an existing blog post
router.delete('/:id', mustBeSignedIn, async (req, res) => {
  try {
    const blogpostDeleted = await blogpostDeleted.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogpostDeleted) {
      res
        .status(404)
        .json({
          message:
            'No blog post found with this id; blog post could not be deleted.',
        });
      return;
    }
    res.status(200).json(projectData);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error: Blogposts could not be retrieved.' });
    return;
  }
})

module.exports = router