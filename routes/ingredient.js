const router = require('express').Router();
const {
  getIngredient, addIngredient, buyIngredient,
  deleteIngredient,
} = require('../controllers/ingredient');

router.route('/').get(getIngredient).post(addIngredient);
router.route('/:id').put(buyIngredient).delete(deleteIngredient);

module.exports = router;
