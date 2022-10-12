require('dotenv').config();
require('@babel/core');

const path = require('path');
const express = require('express');
const morgan = require('morgan');

const { PORT } = process.env;

const session = require('express-session');

const FileStore = require('session-file-store')(session);

const mainRouter = require('./routes/main_page');
const regRouter = require('./routes/registr');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const countriesRouter = require('./routes/map');

const { sequelize } = require('../db/models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'travelwithpet',
  store: new FileStore(),
  secret: 'supermagic',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 10,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/', mainRouter);
app.use('/registr', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/countries', countriesRouter)

// app.get('/logout', (req, res) => {
//   if (req.session.newUser) {
//     req.session.destroy(() => {
//       res.clearCookie('travelwithpet');
//       res.sendStatus(200);
//     });
//   } else {
//     res.sendStatus(400);
//   }
// });


app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log('Соединение установленно!');
  } catch (error) {
    console.log('Error', error);
  }
});