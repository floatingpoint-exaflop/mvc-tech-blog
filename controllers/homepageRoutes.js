const router = require('express').Router();
const { Blogpost, User, Comment } = require('../models');
const mustBeSignedIn = require('../utils/middleware');

//Show all blog posts; this should be the default view when landing on /api/homepage.
router.get('/', async (req, res) => {
  try {
    const allBlogposts = await Blogpost.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
        {
          model: Comment,
          attributes: ['text', 'createdAt', 'updatedAt'],
        },
      ],
    });
    console.log(allBlogposts);
    const bpList = allBlogposts.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    res.render('homepage', { bpList, logged_in: req.session.logged_in });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error: Blogposts could not be retrieved.' });
    return;
  }
});

//Show a specific blog post; this should be called when user clicks on on the list of all blog posts.
router.get('/blogpost/:id',
  async (req, res) => {
    try {
      const oneBlogpost = await Blogpost.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            attributes: ['text', 'createdAt', 'updatedAt'],
          },
        ],
      });
      const thatBlogpost = oneBlogpost.get({ plain: true });
      res.render('blogpost', {
        ...thatBlogpost,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: 'Error: Blogposts could not be retrieved.' });
      return;
    }
  });

//login check
router.get('/dashboard', mustBeSignedIn, async (req,res) => {
  try {
    const username = await User.findByPk(req.session.user_id, {
      attributes: {exclude: ['password']},
      include: [{model: Blogpost}]
    })
    const currentUser = username.get({plain: true})
  }catch (err) {
    res
      .status(500)
      .json({ message: 'Error: cannot sign in.' });
    return;
  }
  res.render('login');
})

//login redirect
router.get('/signin', (req,res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard')
    return
  }
  res.render('signin')
})

module.exports = router;
