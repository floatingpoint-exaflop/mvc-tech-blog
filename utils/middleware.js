//Simple export to block users from certain routes if they are not logged in to the site.
const mustBeSignedIn = (req, res, next) => {
    if (req.session.logged_in){
        next()
    } else {
        res.redirect('/signin')
    }
}

module.exports = mustBeSignedIn