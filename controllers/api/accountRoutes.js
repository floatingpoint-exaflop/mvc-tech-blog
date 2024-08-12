const router = require ('express').Router();
const { User } = require('../../models');

//Create new account call using /api/accounts (the root of the accounts route)
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
            req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.signedIn = true;
            res.status(200).json(newUser);
            })
    } catch (err) {
        res.status(400).json({message: 'Error: New Account could not be created.'}); return
    } 
})

//Sign in existing user call using /api/accounts/signin (one past the accounts route, making it a different POST than the one above here)
router.post('/signin', async (req,res) => {
    try {
        const currentUser = await User.findOne({where: {username: req.body.username}});
        if (!currentUser) {
            res.status(400).json({message: 'This username does not yet have an account.'}); return
        } 
    
        const password = await currentUser.passwordCheck(req.body.password);
        if (!password) {
            res.status(400).json({message: 'The password supplied is incorrect for the account.'}); return
        }
        req.session.save(() => {
            req.session.user_id = currentUser.id;
            req.session.signedIn = true;
            res.json({user: currentUser, message: 'Welcome back!'})
        })
    } catch (err) {
        res.status(400).json({message: 'Error: Could not sign in.'}); return
    }
})

//Sign out existing user call using /api/accounts/signout
router.post('/signout', (req,res) => {
    if (req.session.signedIn) {
        req.session.destroy(() => {
            res.status(204).end()
        })
    } else {
        res.status(404).end()
    }
})

module.exports = router