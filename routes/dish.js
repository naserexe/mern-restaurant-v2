const router = require('express').Router();
const {
  getDish, addDish, addRecipe, sellDish, deleteDish,
} = require('../controllers/dish');

router.route('/').get(getDish).post(addDish);
router.route('/:id').put(sellDish).delete(deleteDish);
router.route('/recipe/:dish_id/:ingredient_id').post(addRecipe);

module.exports = router;
