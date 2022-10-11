const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/Registration');

const { User } = require('../../db/models');

const renderRegister = (req, res) => {
  renderTemplate(Registration, null, res);
};

const regUser = async (req, res) => {
  const { login, email, password} = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    if (email) {
      const newUser = await User.create({ login, email, password: hash});
      req.session.newUser = newUser.login;
      req.session.newUserEmail = newUser.email;
      req.session.newUserID = newUser.id;
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.send('Please, enter your email');
    }
  } catch (error) {
    res.send(alert(`Registration error! ----> ${error}`));
  }
};

module.exports = { renderRegister, regUser };