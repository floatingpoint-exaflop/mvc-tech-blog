const router = require('express').Router();
const accountRoutes = require('./accountRoutes');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require('./dashboardRoutes');

//calls made to /api/accounts are in the accountRoutes file.
router.use('/accounts', accountRoutes);
//calls made to /api/homepage are in the homeRoutes file.
router.use('/homepage', homeRoutes);
//calls made to /api/dashboard are in the dashboardRoutes file.
router.use('/dashboard', dashboardRoutes);

module.exports = router;