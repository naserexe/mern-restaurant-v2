const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const Ingredient = require('../models/Ingredient');
const Balance = require('../models/Balance');
const Dish = require('../models/Dish');

// @route   GET api/v2/dish
// @dsc     GET All Dish
// @access  Private
exports.getDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.find();

  if (!dish) {
    return next(new ErrorResponse('No dish available', 404));
  }

  return res.status(200).json({ success: true, data: dish });
});

// @route   POST api/v2/dish
// @dsc     Add Dish
// @access  Private
exports.addDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.create(req.body);

  if (!dish) {
    return next(new ErrorResponse('No dish available', 404));
  }

  return res.status(201).json({ success: true, data: dish });
});

// @route   POST api/v2/dish
// @dsc     Add recipe for dish
// @access  Private
exports.addRecipe = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findById(req.params.dish_id);
  const ingredient = await Ingredient.findById(req.params.ingredient_id);
  const { quantity } = req.body;

  if (!dish || !ingredient) {
    return next(new ErrorResponse('No dish or recipe available', 404));
  }

  dish.recipe.unshift({ recipeName: ingredient.name, quantity, recipe_id: ingredient._id });

  await dish.save();

  return res.status(201).json({ success: true, data: dish });
});
