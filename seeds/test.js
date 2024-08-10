const sequelize = require('../config/connection');
const { User, Blogpost, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    console.log('Sequelize sync successful');

    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    console.log('Users created');

    for (const blogpost of blogData) {
      const createdBlogpost = await Blogpost.create({
        ...blogpost,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });

      console.log(`Blogpost created: ${createdBlogpost.id}`);

      for (const comment of commentData) {
        const createdComment = await Comment.create({
          ...comment,
          user_id: users[Math.floor(Math.random() * users.length)].id,
          blogpost_id: createdBlogpost.id,
        });

        console.log(`Comment created: ${createdComment.id}`);
      }
    }

    process.exit(0);
  } catch (error) {
    console.error('Error occurred:', error);
    process.exit(1);
  }
};

seedDatabase();
