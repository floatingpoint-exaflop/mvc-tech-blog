const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 5432;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.use(session({
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  saveUninitialized: false,
  store: new SequelizeStore({
      db: sequelize,
      checkExpirationInterval: 15 * 60 * 1000, // Check every 15 minutes
      expiration: 24 * 60 * 60 * 1000 // 24 hours session expiration
  })
}));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


console.log("hello")

const allowSync = (process.env.NODE_ENV === 'production') ? false : false

sequelize.sync({ force: allowSync }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});