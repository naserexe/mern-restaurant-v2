const asyncHandler = require('../middleware/async');
const Ingredient = require('../models/Ingredient');

// @route GET api/v2/ingredient
// @dsc   GET All Ingredient
// @access Private
exports.getIngredient = asyncHandler(async (req, res, next) => {
  console.log('Okay');
  return res.status(200).json({ success: true });
});

// @route POST api/v2/ingredient
// @dsc   Create new ingredient
// @access Private
exports.addIngredient = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.create(req.body);
  res.status(201).json({ success: true, data: ingredient });
});
