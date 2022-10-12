const router = require('express').Router();

router.get('/logout', (req, res) => {
    if (req.session.newUser) {
        req.session.destroy(() => {
            res.clearCookie('travel-with-pet');
            res.sendStatus(200);
        });
        req.session.save(() => {
            res.redirect('/');
          });
    } else {
        res.sendStatus(400);
    }
});

module.exports = router;