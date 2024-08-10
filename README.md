# Module 14 Challenge: Model View Controller: Handlebars.js, Sequelize, Express-Session

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
  This Homework assignment was completed for Unit Forteen of the U of M Bootcamp, to practice building a simple and complete tech blog CMS website where users can submit and view tech blog posts, or leave comments on existing posts. The site is deployed on Render and uses MVC architecture: Handlebars.js for templating, Sequelize for the ORM, express-session as the authenticator. 
  
  The user can view blog posts, create a login, and when logged in, they can add, modify, or delete product categories, product tags to further categorize them, and the products themselves.  I learned a lot about the power of sequelize to flexibly - and very quickly! - generate databases, and expanded upon work with data relationships. While it would take a fair amount of work to expand this model, the code itself is a great reference for doing so, and at any rate, it would be very easy to add more columns and rows to expand the db and hold much more information!

  ## Installation
  - To install and use this project, ensure you have [Postgres](https://www.postgresql.org/download/) installed on your machine.
    - This project also requires project-level installs of Node and Express.
    - I also personally recommend a global install of nodemon, via npm i -g nodemon, but local will work too.
    - To install this project after copying down the repo, you will first need to run npm init (-y for default settings) on the project root, which should grant you access to the necessary libraries listed in the package-lock.json file.

  ## Usage
    - To use the project on Render, [simply navigate to the deployed site](https://note-taker-n2wc.onrender.com/); see my contact info in the Questions section if there are any issues with the program!
    - To use this project locally, ensure you have the node packages installed as specified in the Installation section above. Then open a terminal on the project root and simply run nodemon server.js or node server.js - from there, just use the site and watch the magic unfold!
      1. To use this project, ensure you have [Postgres](https://www.postgresql.org/download/) and the node packages installed as specified in the Installation section above.
      2. Open a terminal on the db folder and run psql postgres.
      3. In Postgres, run \i schema.db to build the db.
      4. IF YOU NEED TEST DATA, Open a separate terminal on the project root and run node ./seeds/seedy.js to seed the db.
      5. On that same new project root terminal, run nodemon server.js - the server will boot and the webpage can be viewed on localhost. Or if you like, the API routes can be hit via Postman or Insomnia, with some additional config in those tools (not provided here).
  
    ![Image](./deployed-screenshot.png)

  ## Contributing
  If you want to contribute to this project - particularly if you want to work with me on building this out and enhancing the site with better styling, see my contact info in the Questions section below. Don’t hesitate to reach out! I am a beginner at this stuff but always hungry to learn from others in the community.

  ## Tests
  This project can and should be tested using localhost or Postman for the simplest way to both work with and visualize the data and its relationships. Pgadmin4 would also work well to see the tabluation, but it cannot call routes or run the UI - it only can use sql.
  
  ## Credits
  - asdfsafdasdf

  ## Questions
  - [Check me out on Github!](https://www.github.com/floatingpoint-exaflop)
  - [Email Me](mailto:timscallon1@gmail.com?subject=Hello!)

  ## License
  [![Image showing badge for MIT License.](https://img.shields.io/badge/License-MIT_License-blue)](https://mit-license.org/)
  
  This project is using the MIT License. Please click the badge icon for more information, or refer directly to the LICENSE in the repo.
