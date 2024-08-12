const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({
  helpers: {
    dateWorked: function (createdOn, updatedOn) {
      return updatedOn || createdOn;
    }
  }
});

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/index'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


const sess = {
  secret: 'SCALLYWAG015',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

console.log("hello")

const allowSync = (process.env.NODE_ENV === 'production') ? false : false

sequelize.sync({ force: allowSync }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});