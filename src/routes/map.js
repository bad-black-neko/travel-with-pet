const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Countries = require('../views/Countries');

router.get('/', (req, res) => {
    const { newUser, newUserID, newUserEmail } = req.session;
    console.log(newUser)
    renderTemplate(Countries, { newUser, newUserID, newUserEmail } || null, res)
});

module.exports = router;