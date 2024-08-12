const router = require('express').Router();
const { Blogpost, User, Comment } = require('../../models');


router.get('/signin', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('signin');
});

router.get('/signout', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('signout');
  });

module.exports = router;