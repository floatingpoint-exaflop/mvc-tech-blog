const router = require('express').Router();
const { Blogpost, User, Comment } = require('../../models');

//Show all blog posts; this should be the default view when landing on /api/homepage.
router.get('/', async (req, res) => {
    const allBlogPosts = await Blogpost.findAll({
      include: [
        { 
          model: User,
          attributes: ['username']
        }, 
        { 
          model: Comment,
          attributes: ['text', 'createdAt', 'updatedAt']
        }
      ],
    })
    console.log(allBlogPosts)
    res.render('homepage', {data: allBlogPosts})
  })

  router.get('/signin', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signin');
  });

//Leave a comment; this should be the default view when landing on homepage.
// router.post('/', mustBeSignedIn = (req, res, next) => {

// })

module.exports = router;