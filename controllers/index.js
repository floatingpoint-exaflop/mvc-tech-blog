const router = require('express').Router();
const routes = require('./api');
const { User, Blogpost, Comment } = require('../models');

router.use('/api', routes);

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

module.exports = router;