const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comment')

//defining relationship between User and Blogpost: Blogposts belong to a User, and a User can have many of them. If a User were to be deleted, their Blogposts would be deleted too.
User.hasMany(Blogpost, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
})

Blogpost.belongsTo(User, {
    foreignKey: 'user_id'
})

//defining relationship between User and Comment: Comments belong to a User, and a User can have many of them. If a User were to be deleted, their Comments would be deleted too.
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

//defining relationship between Blogpost and Comments: Comments belong to a Blogpost too, and a Blogpost can have many of them.  If a Blogpost were to be deleted, its Comments would be deleted too.
Blogpost.hasMany(Comment, {
    foreignKey: 'blogpost_id',
    onDelete: "CASCADE"
})

Comment.belongsTo(Blogpost, {
    foreignKey: 'blogpost_id'
})

module.exports = {User, Blogpost, Comment}