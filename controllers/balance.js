const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const Balance = require('../models/Balance');

// @route GET api/v2/ingredient
// @dsc   GET All Ingredient
// @access Private
exports.getBalance = asyncHandler(async (req, res, next) => {
  const balance = await Balance.findOne();

  if (!balance) {
    return next(new ErrorResponse('Balance not found', 404));
  }

  return res.status(200).json({ success: true, data: balance });
});


exports.createBalance = asyncHandler(async (req, res, next) => {
  const balance = await Balance.create(req.body);

  if (!balance) {
    return next(new ErrorResponse('Cannot save balance', 500));
  }

  return res.status(200).json({ success: true, data: balance });
});
