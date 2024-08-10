const sequelize = require('../config/connection');
const { User, Blogpost, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blogposts of blogData) {
    await Blogpost.create({
      ...blogposts,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

  for (const comments of commentData) {
    await Comment.create({
      ...comments,
      user_id: users[Math.floor(Math.random() * users.length)].id,
      blogpost_id: blogposts[Math.floor(Math.random() * blogposts.length)].id,
    });
  }
}
  process.exit(0);
};

seedDatabase();
