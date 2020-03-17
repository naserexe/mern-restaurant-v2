const router = require('express').Router();
const { getIngredient, addIngredient } = require('../controllers/ingredient');

router.route('/').get(getIngredient).post(addIngredient);

module.exports = router;
