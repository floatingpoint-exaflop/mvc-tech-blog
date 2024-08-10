//Simple export to block users from certain routes if they are not logged in to the site.
const mustBeLoggedIn = (req, res, next) => {
    if (req.session.loggedIn){
        next()
    } else {
        res.send("Navigating here requires logging in as a registered user.")
    }
}

module.exports = {mustBeLoggedIn}