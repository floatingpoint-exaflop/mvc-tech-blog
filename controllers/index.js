const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepageRoutes');

//requests to /api are forwarded to the index of routers in api folder, which handles other calls at the same level.
router.get('/', async (req, res) => {
    res.render('homepage')
})

router.use('/', homepageRoutes)
router.use('/api', apiRoutes);

module.exports = router;