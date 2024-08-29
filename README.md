# Module 14 Challenge: Model View Controller - Tech Blog

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Credits](#credits)
  - [Questions](#questions)

  ## Description
  This Homework assignment was completed for Unit Fourteen of the U of M Bootcamp, to practice creating a simple but complete full stack web application using Node.js packages and postgreSQL with, data seeded, then viewed, added to, and modified using UI and API routes. The user can view blog posts, but must log in/create an account to write new blog posts, edit their posts, or delete them. Being logged in also allows a user to leave comments on a blog post. I learned it is incredibly important to tackle such a site in pieces: because I ended up with *so many* files, I had to get one piece of the site working before moving onto the next, to avoid analysis paralysis and going in circles. This is a pretty decent starting point for creating a site with login functionality, and with some tweaking it could probably be combined with some social features to allow friend lists or even a live chat!

  ## Installation
  To install this project after copying down the repo, you will first need to run npm install (-y for default settings) on the project root, which should grant you access to the necessary libraries listed in the package.json file. You'll need a tool to call api routes if you want to simply test the backend; otherwise I recommend users simply play around with the UI, either from localhost:3001, or from the [deployed site on Render](https://mvc-tech-blog-604q.onrender.com/).

  ## Usage
  1. To use this project, ensure you have [Postgres](https://www.postgresql.org/download/) and the node packages installed as specified in the Installation section above.
  2. Open a terminal on the db folder and run psql postgres.
  3. In Postgres, run \i schema.sql to build the db.
  4. Open a separate terminal on the project root and run node seeds/seed.js to seed the db.
  5. On that same node terminal, run nodemon server.js - the server will boot and the routes can be hit via Postman or Insomnia, or simply from your [localhost](http://localhost:3001/)!

  ## Contributing
  If you want to contribute to this project - particularly if you want to work with me on building this out and enhancing social features, or guidance on node packages that might enhance the UX, see my contact info in the Questions section below. Don’t hesitate to reach out! I am a beginner at this stuff but always hungry to learn from others in the community.

  ## Tests
  This project can and should be tested using Localhost, or Postman for the simplest way to both work with and visualize the data and its relationships. Pgadmin4 would also work well to see the tabluation, but it cannot call routes - only can use sql.
  
  ## Credits
  - Shoutout to Gary Almes for helping me with some of these routes. Again - Always simpler than it seems!
  - Code examples referenced from the unit 14 mini project in the U of M Bootcamp.

  ## Questions
  - [Check me out on Github!](https://www.github.com/floatingpoint-exaflop)
  - [Email Me](mailto:timscallon1@gmail.com?subject=Hello!)

  ## License
  [![Image showing badge for MIT License.](https://img.shields.io/badge/License-MIT_License-blue)](https://mit-license.org/)
  
  This project is using the MIT License. Please click the badge icon for more information, or refer directly to the LICENSE in the repo.
