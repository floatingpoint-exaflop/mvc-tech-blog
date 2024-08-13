const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const blogpostRoutes = require('./blogpostRoutes');
const commentRoutes = require('./commentRoutes');

//calls made to /api/accounts are in the accountRoutes file.
router.use('/accounts', accountRoutes);
//calls made to /api/blogposts are in the homeRoutes file.
router.use('/blogposts', blogpostRoutes);
//calls made to /api/comments are in the dashboardRoutes file.
router.use('/comments', commentRoutes);

module.exports = router;