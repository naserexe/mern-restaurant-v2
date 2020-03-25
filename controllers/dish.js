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

// @route   POST api/v2/dish/recipe/:dish_id/:ingredient_id
// @dsc     Add recipe for dish
// @access  Private
exports.addRecipe = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findById(req.params.dish_id);
  const ingredient = await Ingredient.findById(req.params.ingredient_id);
  const { quantity } = req.body;

  if (!dish || !ingredient) {
    return next(new ErrorResponse('No dish or recipe available', 404));
  }
  // eslint-disable-next-line
  dish.recipe.unshift({ 
    recipeName: ingredient.name,
    quantity,
    // eslint-disable-next-line
    recipe_id: ingredient._id
  });

  await dish.save();

  return res.status(201).json({ success: true, data: dish });
});


// @route   PUT api/v2/dish/:id
// @dsc     Sell Dish
// @access  Private
exports.sellDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findById(req.params.id);

  if (!dish) {
    return next(new ErrorResponse('No dish available', 404));
  }

  const { sellingPrice } = dish;

  // // //Update balance according to dish price
  const currentBalance = await Balance.findOne();

  const { _id, balanceAmount } = currentBalance;

  const newBalance = balanceAmount + sellingPrice;
  const updBalance = await Balance.findByIdAndUpdate(
    _id,
    {
      $set: { balanceAmount: newBalance },
    },
    // Get latest updated data
    { new: true },
  );

  // Adjust stock amount
  const recipes = dish.recipe;

  const promises = recipes.map(async (recipe) => {
    const ingredient = await Ingredient.findByIdAndUpdate(recipe.recipe_id, {
      $inc: { currentStock: -recipe.quantity },
    },
    { new: true });
    return ingredient;
  });

  // Map  function return a promises we need to resolve them first before send response back;
  const ingredient = await Promise.all(promises);
  // const ingredient = await Ingredient.find();
  console.log('After Ingredient.find()');
  return res.status(200).json({ ingredient, updBalance });
});

// @route   DELETE api/v2/dish
// @dsc     Delete Dish
// @access  Private
exports.deleteDish = asyncHandler(async (req, res, next) => {
  const dish = await Dish.findByIdAndDelete(req.params.id);

  if (!dish) {
    return next(new ErrorResponse('No dish available', 404));
  }

  return res.status(201).json({ success: true, data: dish });
});
