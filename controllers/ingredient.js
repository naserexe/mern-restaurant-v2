const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const Ingredient = require('../models/Ingredient');
const Balance = require('../models/Balance');

// @route   GET api/v2/ingredient
// @dsc     GET All Ingredient
// @access  Private
exports.getIngredient = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.find();

  if (!ingredient) {
    return next(new ErrorResponse('No ingredient available', 404));
  }

  return res.status(200).json({ success: true, data: ingredient });
});

// @route   POST api/v2/ingredient
// @dsc     Add new ingredient
// @access  Private
exports.addIngredient = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.create(req.body);

  if (!ingredient) {
    return next(new ErrorResponse('Failed to add ingredient', 500));
  }
  return res.status(201).json({ success: true, data: ingredient });
});


// @route   PUT api/v2/ingredient/:id
// @dsc     Buy ingredient that update current stock
// @access  Private
exports.buyIngredient = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.findById(req.params.id);

  if (!ingredient) {
    return next(new ErrorResponse('Ingredient not found', 404));
  }

  const { cost } = ingredient;

  // Update balance according to ingredient costs
  const currentBalance = await Balance.findOne();
  const { _id, balanceAmount } = currentBalance;
  const newBalance = balanceAmount - cost;
  await Balance.findByIdAndUpdate(
    _id,
    {
      $set: { balanceAmount: newBalance },
    },
    // Get latest updated data
    { new: true },
  );

  // Increase current stock by 1
  await ingredient.updateOne({ $set: { currentStock: (ingredient.currentStock += 1) } },
    { new: true });
  return res.status(200).json({ success: true, data: ingredient });
});

// @route   DELETE api/v2/ingredient/:id
// @dsc     Delete ingredient
// @access  Private
exports.deleteIngredient = asyncHandler(async (req, res, next) => {
  const ingredient = await Ingredient.findByIdAndDelete(req.params.id);

  if (!ingredient) {
    return next(new ErrorResponse('Failed to delete ingredient', 500));
  }
  return res.status(200).json({ success: true, data: 'Ingredient deleted' });
});
