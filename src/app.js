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
// const loginRouter = require('./routes/login');
// const mainTwoRouter = require('./routes/mainTwo');
// const personalAreaRouter = require('./routes/personalArea');
// const basketRouter = require('./routes/basket');
// const basketAddRouter = require('./routes/basketAdds');
// const cardAddRouter = require('./routes/cardAdds');
// const marketRouter = require('./routes/market');
// const orderSellRouter = require('./routes/orderSells');
// const marketBasketRouter = require('./routes/marketBaskets');

const { sequelize } = require('../db/models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'travel-with-pet',
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

// app.get('/logout', (req, res) => {
//   if (req.session.newUser) {
//     req.session.destroy(() => {
//       res.clearCookie('magicTheGathering');
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