const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  recipe_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'ingredients',
    required: true,
  },
  recipeName: {
    type: String,
    required: [true, 'Please add a recipe name'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please add quantity'],
  },
});

const DishSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add dish name'],
  },

  recipe: [RecipeSchema],

  sellingPrice: {
    type: Number,
    required: [true, 'Please add selling price'],
  },
});

module.exports = mongoose.model('dishes', DishSchema);
