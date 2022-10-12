const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const PetProfile = require('../views/PetProfile');

router.get('/', (req, res) => {
    const { newUser, newUserID, newUserEmail } = req.session;
    renderTemplate(PetProfile, { newUser, newUserID, newUserEmail } || null, res)
});

module.exports = router;

// const router = require('express').Router();

// const { Basket, Card } = require('../../db/models');

// router.post('/', async (req, res) => {
//   const { cardName, cardPrice, cardImage, cardCondition, id } = req.body;
//   const { newUserID } = req.session;
//   try {
//     await Card.create({ name: cardName, price: cardPrice, user_id: newUserID, image: cardImage, condition: cardCondition, status: false });
//     await Basket.destroy({ where: { id } });
//     res.json({ destroy: 'OK!' });
//   } catch (error) {
//     console.log('Ошибка покупки карты !!!!', error);
//   }
// });

// module.exports = router;