//Simple export to block users from certain routes if they are not logged in to the site.
const mustBeSignedIn = (req, res, next) => {
    if (req.session.signedIn){
        next()
    } else {
        res.send("Navigating here requires logging in as a registered user.")
    }
}

module.exports = {mustBeSignedIn}