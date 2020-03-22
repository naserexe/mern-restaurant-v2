const router = require('express').Router();
const {
  getDish, addDish, addRecipe,
} = require('../controllers/dish');

router.route('/').get(getDish).post(addDish);
router.route('/recipe/:dish_id/:ingredient_id').post(addRecipe);

module.exports = router;
