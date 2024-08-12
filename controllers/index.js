const router = require('express').Router();
const routes = require('./api');

//requests to /api are forwarded to the index of routers in api folder, which handles other calls at the same level.
router.get('/', async (req, res) => {
    res.render('homepage')
})
router.use('/api', routes);


module.exports = router;